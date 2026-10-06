// Generates src/data/seoSectionRedirects.json: bare data slug -> sectioned URL
// (e.g. /ai-cctv-hospitals -> /industry/ai-cctv-hospitals).
//
// Why this exists (2026-10-06): app/[slug]/page.js did this with
// permanentRedirect() inside a prerendered/ISR page. On production that was
// observed emitting a DOUBLED destination ("/industry/x,/industry/x") that 404s,
// which is what Search Console reports as "Not found (404)". Config-level
// redirects are resolved before any page renders, so they cannot be affected.
//
// Run:  npx esbuild src/data/resolveSeoPageData.js --bundle --platform=node \
//         --format=cjs --outfile=/tmp/gen/resolver.cjs && node scripts/generate-seo-section-redirects.mjs
// (re-run whenever seoPageData*.js keys or categories change)
import { createRequire } from 'node:module';
import { readdirSync, writeFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const r = require(process.env.RESOLVER || '/tmp/gen/resolver.cjs');
const appDirs = new Set(readdirSync(new URL('../app/', import.meta.url)));
const keys = r.getAllSeoPageEntries().map((e) => e.key);
const out = {};
const lookup = (slug) =>
  slug.startsWith('cctv-cameras-') ? { city: slug.replace('cctv-cameras-', '') }
  : slug.startsWith('ai-cctv-') ? { slug: slug.replace('ai-cctv-', '') }
  : { seriesId: slug };
for (const slug of new Set(keys)) {
  if (!slug || slug.startsWith('/') || appDirs.has(slug)) continue;
  const rk = r.resolveSeoKey(lookup(slug));
  const section = rk ? r.sectionForKey(rk) : null;
  if (section) out[slug] = `/${section}/${rk}`;
}
writeFileSync(new URL('../src/data/seoSectionRedirects.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log('redirects:', Object.keys(out).length);
