const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://arcisai.io';
const API_BASE_URL = process.env.API_BASE_URL || 'https://vmukti.com/backend/api';
const TENANT = process.env.TENANT || 'arcis';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'User-Agent': 'sitemap-generator/1.0' } }, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        reject(new Error(`Request failed: ${res.statusCode} ${res.statusMessage}`));
        res.resume();
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
  });
}

async function fetchAllPublishedBlogs() {
  const limit = 100;
  let page = 1;
  let totalPages = 1;
  const all = [];

  while (page <= totalPages) {
    const url = `${API_BASE_URL}/blogs?page=${page}&limit=${limit}&status=published&sort=latest&tenant=${encodeURIComponent(TENANT)}`;
    const resp = await fetchJson(url);
    const list = Array.isArray(resp.data) ? resp.data : [];
    all.push(...list);
    const pag = resp.pagination || {};
    totalPages = Number(pag.total) || 1;
    page += 1;
    if (list.length === 0) break; // safety
  }
  return all;
}

function toXmlSafe(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlLoc(pathname) {
  const base = SITE_BASE_URL.replace(/\/$/, '');
  const pathPart = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${pathPart}`;
}

function formatDateISO(dateInput) {
  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString();
  } catch {
    return undefined;
  }
}

async function generate() {
  // Static routes
  const staticRoutes = [
    { loc: buildUrlLoc('/'), changefreq: 'daily', priority: '1.0' },
    { loc: buildUrlLoc('/contact-us'), changefreq: 'weekly', priority: '0.8' },
    { loc: buildUrlLoc('/blog'), changefreq: 'monthly', priority: '0.6' },
  ];

  // Dynamic blog routes
  let dynamicRoutes = [];
  try {
    const blogs = await fetchAllPublishedBlogs();
    dynamicRoutes = blogs
      .filter((b) => b && b.metadata && b.metadata.urlWords)
      .map((b) => ({
        loc: buildUrlLoc(`/blog/${b.metadata.urlWords}`),
        lastmod: formatDateISO(b.updatedAt || b.createdAt),
        changefreq: 'monthly',
        priority: '0.6',
      }));
  } catch (e) {
    console.error('Failed to fetch blogs for sitemap:', e.message || e);
  }

  const urls = [...staticRoutes, ...dynamicRoutes];

  const xmlParts = [];
  xmlParts.push('<?xml version="1.0" encoding="UTF-8"?>');
  xmlParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const u of urls) {
    xmlParts.push('  <url>');
    xmlParts.push(`    <loc>${toXmlSafe(u.loc)}</loc>`);
    if (u.lastmod) xmlParts.push(`    <lastmod>${toXmlSafe(u.lastmod)}</lastmod>`);
    if (u.changefreq) xmlParts.push(`    <changefreq>${u.changefreq}</changefreq>`);
    if (u.priority) xmlParts.push(`    <priority>${u.priority}</priority>`);
    xmlParts.push('  </url>');
  }
  xmlParts.push('</urlset>');

  const xml = xmlParts.join('\n');
  const outPath = path.join(__dirname, 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Sitemap generated: ${outPath} (${urls.length} URLs)`);
}

generate().catch((e) => {
  console.error('Sitemap generation failed:', e);
  process.exit(1);
});


