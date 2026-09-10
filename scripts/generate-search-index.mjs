#!/usr/bin/env node
// Builds public/search-index.json — the static, client-fetched index that
// powers on-site search (checklist items #60/#80).
//
// Run manually with `node scripts/generate-search-index.mjs` whenever a page
// title/description changes or a new indexable route is added. Not wired
// into `npm run build` on purpose: the SEO dataset files it reads are plain
// data, so regenerating on every build would just add build time for no
// benefit — re-run it by hand after editing page metadata or the SEO
// datasets.
//
// Sources of truth (never invented copy):
//   - Hand-authored routes: title/description are copied verbatim from each
//     route's own `export const metadata` / `generateMetadata()` in app/.
//   - Product detail pages (s-series/eco-series/[productId]): generated with
//     the exact same humanizeSlug() + template strings their generateMetadata
//     uses, so the index text matches what the page actually serves.
//   - Solution detail pages: pulled from src/views/Solution/Data/SEOContent.js
//     (getSolutionSEO), the same data generateMetadata() reads.
//   - Support categories: pulled from src/views/Support/supportData.js.
//   - The ~250-page SEO dataset (city/state/industry/compare/resources/geo
//     landing pages): pulled from the src/data/seoPageData*.js files, the
//     same dataset app/sitemap.js and every landing-page route read from.
//
// This intentionally does NOT hit the blog CMS API — blog posts are fetched
// live from an external backend (see app/sitemap.js's getBlogEntries), not
// stored as local data, so there is nothing to read at generation time. The
// blog hub page (/blog) is indexed instead.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const require = createRequire(import.meta.url);

// ── tiny ESM(data-file) -> CJS loader ───────────────────────────────────────
// The src/data/seoPageData*.js files are plain `export default {...}` object
// literals with no imports, so a source-level rewrite + normal require() is
// enough — no bundler needed just to read static data out of them.
function loadDefaultExport(relPath) {
  const abs = path.join(ROOT, relPath);
  const src = fs.readFileSync(abs, 'utf8');
  const transformed = src.replace(
    /export default (\w+);\s*$/m,
    'module.exports = $1;',
  );
  const tmp = path.join(
    ROOT,
    '.tmp-search-index-loader',
    relPath.replace(/[\\/]/g, '__') + '.cjs',
  );
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, transformed);
  delete require.cache[require.resolve(tmp)];
  const mod = require(tmp);
  return mod;
}

function loadNamedExports(relPath, names) {
  const abs = path.join(ROOT, relPath);
  const src = fs.readFileSync(abs, 'utf8');
  let transformed = src
    .replace(/^import[^\n]*\n/gm, '') // drop imports; not needed for the fields we read
    .replace(/export const /g, 'const ')
    .replace(/export function /g, 'function ');
  transformed += `\nmodule.exports = { ${names.join(', ')} };\n`;
  const tmp = path.join(
    ROOT,
    '.tmp-search-index-loader',
    relPath.replace(/[\\/]/g, '__') + '.cjs',
  );
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, transformed);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

// ── humanizeSlug: copied logic from src/data/buildSeoPageSchemas.js ────────
const ACRONYMS = new Set(['ai', 'cctv', 'nvr', 'vms', 'anpr', 'ptz', 'abd', 'sla', 'roi']);
function humanizeSlug(slug = '') {
  return String(slug)
    .replace(/^\/+/, '')
    .split('-')
    .filter(Boolean)
    .map((w) => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

const entries = [];
function add(title, path_, description, category) {
  if (!title || !path_) return;
  entries.push({ title, path: path_, description: description || '', category });
}

// ── 1. Hand-maintained routes ───────────────────────────────────────────────
// Title/description copied verbatim from each route's `export const metadata`
// in app/<route>/page.js.
add('Home', '/', "India's Most Advanced AI CCTV Brand — 8 AI detections on camera, smarter insights on cloud, instant answers from GPT.", 'company');
add('About ArcisAI | Adiance Technologies - Enterprise AI Surveillance', '/about-us', 'ArcisAI is the flagship brand of Adiance Technologies — NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing and global deployments.', 'company');
add('Why Choose ArcisAI | Benefits of AI CCTV Surveillance', '/why-choose-arcisai', 'Discover why enterprises worldwide choose ArcisAI. NDAA compliance, STQC certification, in-house manufacturing, edge AI, and 24/7 cloud VMS — built for scale.', 'company');
add('Contact ArcisAI | Get Surveillance Solutions', '/contact-us', 'Contact ArcisAI for demos, pricing, and technical consultation. Request a quote for AI CCTV, VMS, Bridge Device, or custom surveillance solutions.', 'company');
add('Become an ArcisAI Channel Partner | Dealer Program', '/partners', "Join ArcisAI's dealer and channel partner program — India's BIS-ER & STQC-certified, Made-in-India AI CCTV brand for system integrators and resellers.", 'company');
add('Become an ArcisAI CCTV Dealer / Distributor in India | Channel Partner Program', '/become-a-distributor', "Become a dealer or distributor for ArcisAI — India's STQC & BIS-ER certified, AI-native, Made-in-India CCTV brand. Tender-ready, with healthy margins.", 'company');
add('International CCTV Distribution & OEM Partnership | NDAA-Compliant Made-in-India CCTV', '/global-oem-partnership', 'Distribute ArcisAI or white-label NDAA-compliant, Made-in-India AI CCTV for US, UK, EU, GCC & ANZ markets.', 'company');

add('CCTV Camera Products India | AI CCTV, NVR, VMS & More', '/products', 'Explore the full ArcisAI product range — S-Series and Eco-Series AI CCTV cameras, the Arcis Bridge Device, Arcis NVR, Cloud VMS, and ArcisGPT. BIS-ER & STQC certified, Made in India.', 'product');
add('S-Series Premium AI CCTV Cameras', '/s-series', 'Premium S-Series PTZ, Dome, Bullet AI cameras. 4G SIM, WiFi, PoE variants with edge AI, STQC certified. Enterprise-grade surveillance for demanding environments.', 'product');
add('ECO-Series Value AI Cameras | Affordable Smart CCTV', '/eco-series', 'ECO-Series PTZ, Dome, Bullet cameras for budget-conscious deployments. Same powerful AI capabilities at value pricing. 30+ models available with edge AI analytics.', 'product');
add('ArcisAI Bridge Device (ABD) | Legacy Camera Converter to AI', '/arcis-bridge-device', 'Convert any ONVIF camera to a smart AI surveillance device with the ArcisAI Bridge Device (ABD).', 'product');
add('ArcisAI NVR | AI-Powered Network Video Recorder', '/arcis-nvr', 'ArcisAI NVR delivers intelligent video recording with edge AI capabilities, multi-camera support, and cloud backup for enterprise and SMB surveillance deployments.', 'product');
add('ArcisAI Cloud VMS | STQC Certified Video Management System', '/cloud-vms', 'Cloud & on-premise VMS with STQC certification — multi-location monitoring, AI alerts, smart playback, and ArcisGPT search.', 'product');
add('ArcisGPT | Conversational AI for CCTV — Talk to Your Footage', '/arcisgpt', "ArcisGPT is India's conversational AI for surveillance — search your CCTV footage in plain language.", 'product');

add('ArcisAI Certifications | BIS-ER & STQC Certified CCTV', '/certifications', "ArcisAI's BIS-ER certified hardware (R-72003735 ER01:2024) and STQC-certified VMS, with ISO 27001:2022, CE, FCC, RoHS and ONVIF.", 'company');
add('BIS-ER Certified AI CCTV Cameras', '/BIS-ER-certification', 'ArcisAI cameras are now BIS-ER certified (R-72003735 ER01:2024). Compliant, secure, and deployment-ready AI surveillance systems for India.', 'company');
add('India CCTV Compliance 2026: BIS-ER & STQC Certification Explained', '/cctv-compliance-2026', "Plain-language guide to India's 2026 CCTV certification rules — what BIS-ER and STQC mean, who needs them, and how to verify a brand's certificate.", 'resource');
add('India CCTV Market & Certification Report 2026', '/india-cctv-market-report-2026', "Data report on India's shift to certified surveillance in 2026 — the BIS-ER & STQC mandate, market impact, and what it means for CCTV buyers. By ArcisAI.", 'resource');

add('Jalandhar Warriors: Official Campaign Hub', '/jalandhar-warriors', "The official Jalandhar Warriors campaign hub, powered by ArcisAI, India's Made-in-India, STQC & BIS-ER certified AI CCTV brand.", 'company');
add('ArcisAI at FSIE Mumbai 2026: Booth C13', '/fsie-2026', 'Meet ArcisAI at FSIE Mumbai 2026 (3–5 Sep), Fire & Security India Expo, Booth C13, Jio World Convention Centre.', 'event');

add('ArcisAI Blog | AI Surveillance & Security Insights', '/blog', 'Latest in AI surveillance, smart cities, edge analytics, and video intelligence. Industry trends, product updates, and security best practices from ArcisAI.', 'blog');
add('News & Press Releases', '/news', 'Latest news, announcements and press releases from ArcisAI. Stay up to date with our newest AI surveillance products, events and milestones.', 'company');
add('Press & Media Kit | ArcisAI — Facts, Certifications, Boilerplate', '/press', 'ArcisAI press & media kit: company boilerplate, verifiable BIS-ER (R-72003735) & STQC certifications, product range, spokesperson quote and press contact.', 'company');
add('ArcisAI FAQ | AI CCTV Questions Answered', '/faq', 'Frequently asked questions about ArcisAI products, features, pricing, installation, and support.', 'support');
add('AI Surveillance Glossary | CCTV & Security Terms', '/glossary', 'Complete glossary of AI surveillance, CCTV, video analytics, and security technology terms. Understand NDAA, STQC, ANPR, edge AI, VMS, and more.', 'resource');
add('ArcisAI Support Center | Camera FAQs & Troubleshooting', '/support', 'Browse all ArcisAI camera FAQs — troubleshoot offline cameras, video quality, recordings, cloud storage, network access, alerts, firmware updates, and more.', 'support');
add('Documents & User Manuals', '/documents', 'Download official ArcisAI user manuals, datasheets, and product guides — installation and operation docs for Eco-Series, S-Series, NVRs, and Bridge Devices.', 'support');
add('Firmware Downloads | Camera Firmware Updates', '/firmware', 'Download the latest firmware updates and release notes for ArcisAI security cameras. Keep your surveillance hardware secure and up to date.', 'support');
add('Tools & Software Downloads', '/tools', 'Download the latest ArcisAI tools, configuration utilities, and software updates for ArcisAI cameras and the Cloud VMS, along with their release notes.', 'tool');
add('CCTV Storage Calculator | NVR & Hard Disk Size Estimator', '/tools/cctv-storage-calculator', 'Free CCTV storage calculator — estimate NVR / hard disk size from camera count, resolution, codec and retention days. Accurate H.265/H.264 bitrate model by ArcisAI.', 'tool');
add('BIS-ER & STQC Certificate Verifier', '/tools/certificate-verifier', 'Free tool to verify BIS-ER and STQC CCTV certificates on official government portals — check if a brand is legal to sell in India.', 'tool');

add('Events | ArcisAI Surveillance Trade Shows & Conferences', '/event', 'Meet ArcisAI at global surveillance and security trade shows. Demo AI cameras, VMS, and ArcisGPT live. Connect with our team at IFSEC, Convergence India, and more.', 'event');
add('ArcisAI at Convergence India 2026 | AI Surveillance Exhibition', '/events/convergence-india-2026', 'Visit ArcisAI at Convergence India 2026. Experience live demos of AI CCTV cameras, ArcisGPT video search, and Cloud VMS.', 'event');

add('Privacy Policy', '/privacy-policy', 'ArcisAI privacy policy — how we collect, use, and protect your data.', 'legal');
add('Terms of Service', '/terms-of-service', 'ArcisAI terms of service — the agreement governing use of our products and platform.', 'legal');

// ── 2. Product detail pages (mirrors generateStaticParams + generateMetadata
//      in app/s-series/[productId]/page.js and app/eco-series/[productId]/page.js) ──
const S_SERIES_IDS = ['ai-bullet-cctv-camera', 'ai-ptz-cctv-camera', 'ai-dome-cctv-camera'];
for (const id of S_SERIES_IDS) {
  const name = humanizeSlug(id);
  add(
    `${name} | S-Series AI Camera`,
    `/s-series/${id}`,
    `Explore the ArcisAI ${name} — a premium S-Series AI CCTV camera with edge AI analytics, STQC certification, and enterprise-grade reliability.`,
    'product',
  );
}
const ECO_SERIES_IDS = ['bullet-cctv-camera', 'ptz-cctv-camera', 'dome-cctv-camera'];
for (const id of ECO_SERIES_IDS) {
  const name = humanizeSlug(id);
  add(
    `${name} | ECO-Series AI Camera`,
    `/eco-series/${id}`,
    `Explore the ArcisAI ${name} — a budget-friendly ECO-Series AI CCTV camera with edge analytics, STQC certification, and reliable surveillance performance.`,
    'product',
  );
}

// ── 3. Solutions (mirrors REAL_SOLUTION_IDS in app/solution/[solutionId]/page.js) ──
const { edgeAISEO, cloudAISEO, genAISEO } = loadNamedExports(
  'src/views/Solution/Data/SEOContent.js',
  ['edgeAISEO', 'cloudAISEO', 'genAISEO'],
);
for (const [id, seo] of [
  ['edge-ai', edgeAISEO],
  ['cloud-ai', cloudAISEO],
  ['generative-ai', genAISEO],
]) {
  add(seo.metatitle, `/solution/${id}`, seo.metadescription, 'solution');
}

// ── 4. Support categories (mirrors app/support/[category]/page.js) ─────────
const { supportCategories } = loadNamedExports('src/views/Support/supportData.js', ['supportCategories']);
for (const cat of supportCategories) {
  add(
    `${cat.title} — ArcisAI Support`,
    `/support/${cat.slug}`,
    `${cat.description}. Browse troubleshooting articles and step-by-step guides for ${cat.title.toLowerCase()} in ArcisAI cameras and cloud VMS.`,
    'support',
  );
}

// ── 5. SEO landing-page dataset (city/state/industry/compare/resources/geo) ─
// Same 13 files + merge order as src/data/resolveSeoPageData.js, same
// section routing rules (a page's canonical URL may live under
// /industry, /compare, /resources, /state, or at the top level).
const SEO_DATA_FILES = [
  'src/data/seoPageData.js',
  'src/data/seoPageDataExpansion.js',
  'src/data/seoPageDataGeo.js',
  'src/data/seoPageDataCompare.js',
  'src/data/seoPageDataCompliance.js',
  'src/data/seoPageDataExpansion2.js',
  'src/data/seoPageDataGeoIntl.js',
  'src/data/seoPageDataExpansion3.js',
  'src/data/seoPageDataExpansion4.js',
  'src/data/seoPageDataExpansion5.js',
  'src/data/seoPageDataGujaratCities.js',
  'src/data/seoPageDataMaharashtraCities.js',
  'src/data/seoPageDataTier2Cities.js',
];
const allSeoData = {};
for (const f of SEO_DATA_FILES) {
  Object.assign(allSeoData, loadDefaultExport(f));
}

const SECTION_BY_CATEGORY = { compare: 'compare', industry: 'industry', resources: 'resources', state: 'state' };
function isTopLevelLocationKey(key) {
  return key.startsWith('cctv-cameras-') || key.startsWith('ai-cctv-cameras-');
}
function sectionForKey(key) {
  const entry = allSeoData[key];
  if (!entry || key.startsWith('/')) return null;
  if (isTopLevelLocationKey(key)) return null;
  return SECTION_BY_CATEGORY[entry.category] || null;
}
function canonicalPathForKey(key) {
  const entry = allSeoData[key];
  if (!entry) return null;
  if (entry.category === 'state' && allSeoData[`cctv-cameras-${key}`]) {
    return `/cctv-cameras-${key}`;
  }
  const section = sectionForKey(key);
  return section ? `/${section}/${key}` : `/${key}`;
}

let seoCount = 0;
for (const [key, v] of Object.entries(allSeoData)) {
  if (!v || key.startsWith('/')) continue; // leading-slash keys don't round-trip to a real route
  const routePath = canonicalPathForKey(key);
  if (!routePath) continue;
  const title = v.heroTitle || v.title || humanizeSlug(key);
  const description = v.metaDescription || v.heroDescription || '';
  add(title, routePath, description, v.category || 'landing');
  seoCount += 1;
}

// ── de-duplicate by path (a couple of entries share a canonical URL, e.g.
//    /state/* vs /cctv-cameras-<state>) ─────────────────────────────────────
const seen = new Set();
const deduped = entries.filter((e) => {
  if (seen.has(e.path)) return false;
  seen.add(e.path);
  return true;
});

// Stable order: hand-authored/product/solution/support pages first, then the
// long tail of landing pages, alphabetically within the tail for readability.
deduped.sort((a, b) => {
  const rank = (e) => (['company', 'product', 'solution', 'support', 'tool', 'event', 'blog', 'legal'].includes(e.category) ? 0 : 1);
  const ra = rank(a);
  const rb = rank(b);
  if (ra !== rb) return ra - rb;
  if (ra === 0) return 0; // keep hand-authored order as written above
  return a.title.localeCompare(b.title);
});

const outPath = path.join(ROOT, 'public', 'search-index.json');
fs.writeFileSync(outPath, JSON.stringify(deduped, null, 0));
fs.rmSync(path.join(ROOT, '.tmp-search-index-loader'), { recursive: true, force: true });

console.log(`Wrote ${deduped.length} entries (${seoCount} from the SEO dataset) to ${path.relative(ROOT, outPath)}`);
