#!/usr/bin/env node
/**
 * Acceptance tests for the SEO remediation sprint (T-01, T-02, T-03, T-05, T-11, T-14).
 *
 * Turns the task sheet's acceptance criteria into one repeatable command, so the
 * same checks run locally against `npm run start` BEFORE a deploy and against
 * the live site AFTER one. Only the base URL changes.
 *
 *   npm run build
 *   npm run start                      # in another terminal
 *   npm run verify:seo                 # against http://localhost:3000
 *   npm run verify:seo -- https://arcisai.io
 *
 * Exit code 0 = every check passed, 1 = at least one failed (CI-friendly).
 * No dependencies; uses Node 18+ global fetch.
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BASE = (process.argv[2] || process.env.VERIFY_BASE_URL || 'http://localhost:3000')
  .replace(/\/+$/, '');

const results = [];
let failed = 0;

function record(id, name, ok, detail) {
  results.push({ id, name, ok, detail });
  if (!ok) failed++;
}

async function get(path, { method = 'GET', redirect = 'manual' } = {}) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, {
      method,
      redirect,
      headers: { 'User-Agent': 'arcisai-seo-verifier' },
    });
    const body = method === 'HEAD' ? '' : await res.text();
    return { status: res.status, location: res.headers.get('location'), body, url };
  } catch (e) {
    return { status: 0, location: null, body: '', url, error: e.message };
  }
}

/* ── T-03a — schema is in the BUILD OUTPUT, no JS execution ──────────────── */
// The sheet's wording: ".next/server/app/*.html contains the schema".
function checkBuildOutput() {
  const root = '.next/server/app';
  if (!existsSync(root)) {
    record('T-03a', 'Prerendered HTML contains JSON-LD', false,
      '.next/server/app not found — run `npm run build` first');
    return;
  }
  const html = [];
  (function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const p = join(dir, entry);
      if (statSync(p).isDirectory()) walk(p);
      else if (entry.endsWith('.html')) html.push(p);
    }
  })(root);

  const withSchema = html.filter((f) =>
    readFileSync(f, 'utf8').includes('application/ld+json'));
  const without = html.filter((f) => !withSchema.includes(f));

  record('T-03a', 'Prerendered HTML contains JSON-LD',
    html.length > 0 && withSchema.length > 0,
    `${withSchema.length}/${html.length} prerendered pages carry JSON-LD` +
    (without.length ? ` · ${without.length} without (expected for utility pages)` : ''));
}

/* ── T-03b / T-14 — schema present in SERVED HTML ───────────────────────── */
const SCHEMA_PAGES = [
  ['/faq', 'FAQPage'],
  ['/cctv-cameras-mumbai', 'WebPage'],
  ['/compare/arcisai-vs-hikvision', 'Product'],
  ['/blog', 'Blog'],
];

async function checkServedSchema() {
  for (const [path, expectType] of SCHEMA_PAGES) {
    const r = await get(path, { redirect: 'follow' });
    const hasScript = r.body.includes('application/ld+json');
    const hasType = r.body.includes(`"@type":"${expectType}"`) ||
                    r.body.includes(`"@type": "${expectType}"`);
    record('T-14', `Served HTML has ${expectType} schema · ${path}`,
      r.status === 200 && hasScript && hasType,
      `HTTP ${r.status}` +
      (hasScript ? '' : ' · no ld+json in raw HTML') +
      (hasScript && !hasType ? ` · ld+json present but no ${expectType}` : ''));
  }
}

/* ── T-02 — one banking URL, the rest 301 to it ─────────────────────────── */
const BANKING_CANONICAL = '/ai-cctv-banking-atm-security';
const BANKING_OLD = [
  '/banking-finance-cctv',
  '/industry/banking-finance-cctv',
  '/cctv-cameras-for-banking-finance',
  '/industry/cctv-cameras-for-banking-finance',
  '/ai-cctv-banks',
  '/ai-cctv-for-banks-india',
];

async function checkBanking() {
  const canon = await get(BANKING_CANONICAL, { redirect: 'follow' });
  record('T-02', `Canonical banking page returns 200 · ${BANKING_CANONICAL}`,
    canon.status === 200, `HTTP ${canon.status}`);

  for (const path of BANKING_OLD) {
    const r = await get(path);
    const is301 = r.status === 301 || r.status === 308;
    const target = (r.location || '').replace(BASE, '');
    record('T-02', `301 → canonical · ${path}`,
      is301 && target.startsWith(BANKING_CANONICAL),
      `HTTP ${r.status}${r.location ? ` → ${target}` : ''}`);
  }
}

/* ── T-01 — the page that 500s in production ────────────────────────────── */
async function checkT01() {
  const r = await get(BANKING_CANONICAL, { redirect: 'follow' });
  record('T-01', `No 500 · ${BANKING_CANONICAL}`, r.status === 200,
    `HTTP ${r.status}${r.error ? ` · ${r.error}` : ''}`);
}

/* ── T-05 — AI crawlers explicitly allowed ──────────────────────────────── */
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User',
  'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Amazonbot',
];

async function checkRobots() {
  const r = await get('/robots.txt', { redirect: 'follow' });
  if (r.status !== 200) {
    record('T-05', 'robots.txt served', false, `HTTP ${r.status}`);
    return;
  }
  record('T-05', 'robots.txt served', true, `HTTP 200 · ${r.body.length} bytes`);

  // Split into groups so we can assert per-agent, the way a parser reads it.
  const text = r.body;
  const missing = AI_CRAWLERS.filter((ua) => {
    const re = new RegExp(`User-agent:\\s*${ua}\\s*$`, 'im');
    return !re.test(text);
  });
  record('T-05', 'Every AI crawler has an explicit group', missing.length === 0,
    missing.length ? `missing: ${missing.join(', ')}` : `${AI_CRAWLERS.length} crawlers declared`);

  const blocked = AI_CRAWLERS.filter((ua) => {
    const block = text.split(new RegExp(`User-agent:\\s*${ua}\\s*$`, 'im'))[1] || '';
    const group = block.split(/User-agent:/i)[0] || '';
    return /Disallow:\s*\/\s*$/im.test(group);
  });
  record('T-05', 'No AI crawler is blocked sitewide', blocked.length === 0,
    blocked.length ? `blanket Disallow for: ${blocked.join(', ')}` : 'none blocked');

  record('T-05', 'Sitemap referenced from robots.txt',
    /Sitemap:\s*https?:\/\/\S+sitemap\.xml/i.test(text),
    (text.match(/Sitemap:.*/i) || ['absent'])[0].trim());
}

/* ── T-11 — sitemap is valid and points only at live, canonical URLs ────── */
async function checkSitemap() {
  const r = await get('/sitemap.xml', { redirect: 'follow' });
  if (r.status !== 200) {
    record('T-11', 'sitemap.xml served', false, `HTTP ${r.status}`);
    return;
  }
  const locs = [...r.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  record('T-11', 'sitemap.xml served', true, `HTTP 200 · ${locs.length} URLs`);

  const dupes = locs.filter((u, i) => locs.indexOf(u) !== i);
  record('T-11', 'No duplicate <loc> entries', dupes.length === 0,
    dupes.length ? `${dupes.length} duplicates, e.g. ${dupes[0]}` : 'all unique');

  // A sitemap must never list a URL that redirects or 404s. Sample so this
  // stays fast; raise SITEMAP_SAMPLE to check more.
  const sample = Number(process.env.SITEMAP_SAMPLE || 25);
  const step = Math.max(1, Math.floor(locs.length / sample));
  const picked = locs.filter((_, i) => i % step === 0).slice(0, sample);

  const bad = [];
  for (const loc of picked) {
    const path = loc.replace(/^https?:\/\/[^/]+/, '') || '/';
    const res = await get(path);
    if (res.status !== 200) bad.push(`${path} → ${res.status}`);
  }
  record('T-11', `Sampled sitemap URLs all return 200 (${picked.length} of ${locs.length})`,
    bad.length === 0, bad.length ? bad.slice(0, 5).join(' · ') : 'no redirects or errors');
}

/* ── Report ─────────────────────────────────────────────────────────────── */
async function main() {
  console.log(`\n  SEO acceptance tests — ${BASE}\n  ${'─'.repeat(58)}`);

  checkBuildOutput();
  await checkT01();
  await checkBanking();
  await checkServedSchema();
  await checkRobots();
  await checkSitemap();

  let lastId = '';
  for (const r of results) {
    if (r.id !== lastId) { console.log(`\n  ${r.id}`); lastId = r.id; }
    console.log(`    ${r.ok ? 'PASS' : 'FAIL'}  ${r.name}`);
    if (r.detail) console.log(`          ${r.detail}`);
  }

  const passed = results.length - failed;
  console.log(`\n  ${'─'.repeat(58)}`);
  console.log(`  ${passed}/${results.length} checks passed\n`);

  if (failed) {
    console.log('  Note: checks that require a running server fail against a base');
    console.log('  URL that is not serving. Start one with `npm run start`.\n');
  }
  process.exit(failed ? 1 : 0);
}

main();
