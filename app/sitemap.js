import { getAllSeoPageEntries } from '@/src/data/resolveSeoPageData';
import { supportCategories } from '@/src/views/Support/supportData';

// Generated sitemap, replacing the hand-maintained public/sitemap.xml.
//
// The static file had drifted badly from the app: it listed 238 URLs while the
// SEO dataset alone holds ~270 landing pages, it still advertised pages that no
// longer exist, it contained duplicate <loc> entries, and every landing page
// added since it was last regenerated was missing — which is a large part of
// why so many URLs sit in Search Console as "discovered / crawled – currently
// not indexed".
//
// Every URL here is the CANONICAL one. canonicalPathForKey() routes each SEO
// entry to its section URL (/industry/…, /compare/…, /resources/…, /state/…),
// so the duplicate bare-slug variants that now 301 are never submitted.

const SITE = 'https://arcisai.io';
const API_BASE = process.env.API_BASE_URL || 'https://vmukti.com/backend/api';

// Keep in sync with app/blog/page.js — the shared backend has no per-site
// flag, so VMukti posts must be filtered out of ArcisAI's sitemap.
const VMUKTI_BLOG_SLUGS = new Set([
  'ai-video-analytics-buyers-guide',
  'edge-ai-vs-cloud-video-surveillance',
  'banks-ai-video-analytics-fraud',
  'cloud-vms-vs-on-premise-comparison',
  'healthcare-video-analytics',
  'logistics-video-analytics',
]);

// Hand-maintained routes only — anything driven by the SEO dataset, the
// support data or the blog CMS is generated below.
// Deliberately excluded: /admin/*, /thank-you, /blog-thank-you (no index
// value), and /arcisai-vs-godrej (a redirect stub — a sitemap must never list
// a URL that 301s).
const STATIC_ROUTES = [
  ['/', 1.0, 'daily'],
  ['/about-us', 0.8, 'monthly'],
  ['/why-choose-arcisai', 0.8, 'monthly'],
  ['/contact-us', 0.8, 'monthly'],
  ['/partners', 0.7, 'monthly'],
  ['/become-a-distributor', 0.7, 'monthly'],
  ['/global-oem-partnership', 0.7, 'monthly'],

  // Products
  ['/s-series', 0.9, 'weekly'],
  ['/s-series/ai-bullet-cctv-camera', 0.8, 'weekly'],
  ['/s-series/ai-ptz-cctv-camera', 0.8, 'weekly'],
  ['/s-series/ai-dome-cctv-camera', 0.8, 'weekly'],
  ['/eco-series', 0.9, 'weekly'],
  ['/eco-series/bullet-cctv-camera', 0.8, 'weekly'],
  ['/eco-series/ptz-cctv-camera', 0.8, 'weekly'],
  ['/arcis-bridge-device', 0.8, 'weekly'],
  ['/arcis-nvr', 0.8, 'weekly'],
  ['/cloud-vms', 0.9, 'weekly'],
  ['/arcisgpt', 0.9, 'weekly'],

  // Solutions
  ['/solution/edge-ai', 0.8, 'weekly'],
  ['/solution/corporate', 0.8, 'weekly'],
  ['/solution/retail', 0.8, 'weekly'],
  ['/solution/banking', 0.8, 'weekly'],
  ['/solution/smart-city', 0.8, 'weekly'],
  ['/solution/healthcare', 0.8, 'weekly'],
  ['/solution/manufacturing', 0.8, 'weekly'],
  ['/solution/logistics', 0.8, 'weekly'],

  // Trust / compliance — all were missing from the old static sitemap
  ['/certifications', 0.8, 'monthly'],
  ['/BIS-ER-certification', 0.8, 'monthly'],
  ['/cctv-compliance-2026', 0.8, 'monthly'],
  ['/india-cctv-market-report-2026', 0.8, 'monthly'],

  // Campaign / event landing pages
  ['/jalandhar-warriors', 0.7, 'weekly'],
  ['/fsie-2026', 0.7, 'weekly'],

  // Content hubs
  ['/blog', 0.9, 'daily'],
  ['/news', 0.7, 'weekly'],
  ['/press', 0.6, 'monthly'],
  ['/faq', 0.8, 'monthly'],
  ['/glossary', 0.7, 'monthly'],
  ['/support', 0.7, 'monthly'],
  ['/documents', 0.6, 'monthly'],
  ['/firmware', 0.6, 'monthly'],

  // Tools
  ['/tools', 0.7, 'monthly'],
  ['/tools/cctv-storage-calculator', 0.7, 'monthly'],
  ['/tools/certificate-verifier', 0.7, 'monthly'],

  // Events
  ['/event', 0.6, 'monthly'],
  ['/event/ifsec-india-2025', 0.5, 'yearly'],
  ['/events/convergence-india-2026', 0.6, 'monthly'],

  // Legal
  ['/privacy-policy', 0.3, 'yearly'],
  ['/terms-of-service', 0.3, 'yearly'],
];

// Landing-page priority by category — city/state pages are long-tail, product
// comparisons and industry pages carry more commercial intent.
const PRIORITY_BY_CATEGORY = {
  compare: 0.8,
  industry: 0.8,
  resources: 0.7,
  state: 0.6,
  city: 0.6,
  geo: 0.6,
};

async function getBlogEntries(now) {
  try {
    const res = await fetch(
      `${API_BASE}/blogs?page=1&limit=500&sort=latest&status=published`,
      {
        headers: {
          Origin: SITE,
          'x-tenant': 'arcis',
          'User-Agent': 'next-server',
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const json = await res.json();
    if (json?.status !== 'success' || !Array.isArray(json.data)) return [];

    return json.data
      .filter(
        (b) =>
          b.status === 'published' &&
          b.metadata?.urlWords &&
          !VMUKTI_BLOG_SLUGS.has(b.metadata.urlWords) &&
          !b.content?.title?.toLowerCase().includes('vmukti'),
      )
      .map((b) => ({
        url: `${SITE}/blog/${b.metadata.urlWords}`,
        lastModified: b.updatedAt ? new Date(b.updatedAt) : now,
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
  } catch (e) {
    // Never fail the build on a CMS blip — the rest of the sitemap still ships.
    console.error('Sitemap blog fetch failed:', e?.message || e);
    return [];
  }
}

export const revalidate = 3600;

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map(([path, priority, changeFrequency]) => ({
    url: path === '/' ? `${SITE}/` : `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const supportEntries = supportCategories.map((c) => ({
    url: `${SITE}/support/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const seoEntries = getAllSeoPageEntries()
    .filter((e) => e.path)
    .map((e) => ({
      url: `${SITE}${e.path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: PRIORITY_BY_CATEGORY[e.category] ?? 0.7,
    }));

  const blogEntries = await getBlogEntries(now);

  // De-duplicate: a static route and a data-driven entry can collide, and the
  // old static file shipped three duplicate <loc> values.
  const seen = new Set();
  return [...staticEntries, ...supportEntries, ...seoEntries, ...blogEntries].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
