// SERVER-ONLY SEO data resolver.
// Imported only by server components (route page.js files) so the ~125-page
// SEO dataset is NOT shipped to the browser. The client landing component
// receives just the single resolved entry as a prop.
import seoPageData from './seoPageData';
import seoPageDataExpansion from './seoPageDataExpansion';
import seoPageDataGeo from './seoPageDataGeo';
import seoPageDataCompare from './seoPageDataCompare';
import seoPageDataCompliance from './seoPageDataCompliance';
import seoPageDataExpansion2 from './seoPageDataExpansion2';
import seoPageDataGeoIntl from './seoPageDataGeoIntl';
import seoPageDataExpansion3 from './seoPageDataExpansion3';
import seoPageDataExpansion4 from './seoPageDataExpansion4';
import seoPageDataExpansion5 from './seoPageDataExpansion5';
import seoPageDataGujaratCities from './seoPageDataGujaratCities';
import seoPageDataMaharashtraCities from './seoPageDataMaharashtraCities';
import seoPageDataTier2Cities from './seoPageDataTier2Cities';

const allSeoData = {
  ...seoPageData, ...seoPageDataExpansion, ...seoPageDataGeo, ...seoPageDataCompare,
  ...seoPageDataCompliance, ...seoPageDataExpansion2, ...seoPageDataGeoIntl,
  ...seoPageDataExpansion3, ...seoPageDataExpansion4, ...seoPageDataExpansion5,
  ...seoPageDataGujaratCities, ...seoPageDataMaharashtraCities, ...seoPageDataTier2Cities,
};

// Same multi-strategy lookup the client used before — now run on the server.
export function resolveSeoKey({ category, pageSlug, city, slug, seriesId } = {}) {
  if (city && allSeoData[`cctv-cameras-${city}`]) return `cctv-cameras-${city}`;
  if (category && pageSlug && allSeoData[`${category}-${pageSlug}`]) return `${category}-${pageSlug}`;
  if (pageSlug && allSeoData[pageSlug]) return pageSlug;
  if (category && allSeoData[category]) return category;
  if (slug && allSeoData[`ai-cctv-${slug}`]) return `ai-cctv-${slug}`;
  if (slug && allSeoData[slug]) return slug;
  if (seriesId && allSeoData[seriesId]) return seriesId;
  return null;
}

export function resolveSeoPageData(params = {}) {
  const key = resolveSeoKey(params);
  if (!key) return null;
  // Attach the resolved key so the view can build canonical URLs without it.
  return { ...allSeoData[key], slug: allSeoData[key].slug || key };
}

// ── Section routing / duplicate-URL control ─────────────────────────────────
// Entries in these categories have a dedicated section route. Because every
// bare data KEY also round-trips through the /[slug] catch-all, each of those
// pages used to be served at TWO self-canonicalising URLs
// (/banking-finance-cctv and /industry/banking-finance-cctv), splitting the
// ranking signal. SECTION_BY_CATEGORY lets /[slug] 301 to the sectioned URL
// and lets each section route reject entries that belong to another section.
export const SECTION_BY_CATEGORY = {
  compare: 'compare',
  industry: 'industry',
  resources: 'resources',
  state: 'state',
};

/**
 * Keys whose canonical URL is the TOP LEVEL, whatever their `category` says.
 *
 * 20 entries are named like a top-level location/industry URL
 * (`cctv-cameras-assam`, `cctv-cameras-for-retail-industry`) but carry a
 * sectioned category field. Routing those by category alone would send
 * /cctv-cameras-assam to /state/cctv-cameras-assam and
 * /cctv-cameras-for-retail-industry to
 * /industry/cctv-cameras-for-retail-industry — nonsense URLs that duplicate
 * the real, already-indexed top-level ones. The key's own shape wins.
 */
function isTopLevelLocationKey(key) {
  return key.startsWith('cctv-cameras-') || key.startsWith('ai-cctv-cameras-');
}

/**
 * The section a key should live under, or null if it belongs at the top level.
 * Single source of truth for the /[slug] 301, the sitemap, and every
 * generateStaticParams — they cannot disagree.
 */
export function sectionForKey(key) {
  const entry = allSeoData[key];
  if (!entry || key.startsWith('/')) return null;
  if (isTopLevelLocationKey(key)) return null;
  return SECTION_BY_CATEGORY[entry.category] || null;
}

/**
 * Canonical route path for an entry, given its data key.
 *
 * Handles one more duplicate class: 12 states exist as BOTH a bare
 * `state`-category entry (/state/gujarat) and a `cctv-cameras-gujarat`
 * location entry (/cctv-cameras-gujarat), on the same search intent. The
 * location URL wins, because:
 *   - the other 13 states already use /cctv-cameras-<state> as their only URL,
 *     so it is the consistent pattern;
 *   - /cctv-cameras-* pages are internally linked from the related-links block
 *     on every landing page, while /state/* pages have no hub and receive zero
 *     internal links.
 * This only changes the canonical each page declares and which URL the sitemap
 * lists. Both pages keep rendering exactly as before — no redirect, no 404.
 */
export function canonicalPathForKey(key) {
  const entry = allSeoData[key];
  if (!entry) return null;
  if (entry.category === 'state' && allSeoData[`cctv-cameras-${key}`]) {
    return `/cctv-cameras-${key}`;
  }
  const section = sectionForKey(key);
  return section ? `/${section}/${key}` : `/${key}`;
}

/** All link entries for a category, skipping leading-slash keys. */
function linksForCategory(category) {
  return Object.entries(allSeoData)
    .filter(
      ([k, v]) =>
        v &&
        v.category === category &&
        !k.startsWith('/') &&
        // Excluded so the section routes never prerender a URL like
        // /state/cctv-cameras-assam, which duplicates /cctv-cameras-assam.
        !isTopLevelLocationKey(k),
    )
    .map(([k, v]) => ({ slug: k, title: (v.heroTitle || v.title) || k }));
}

// Server-only: every CCTV city / industry landing-page link, for building a
// crawlable internal-link index (fixes the orphan-page crawlability issue).
// Uses the data KEY as the slug — keys have no leading slash, whereas some
// `slug` fields do — and each key round-trips through the /[slug] catch-all.
export function getCctvLocationLinks() {
  return Object.entries(allSeoData)
    .filter(
      ([k]) => k.startsWith('cctv-cameras-') || k.startsWith('ai-cctv-cameras-'),
    )
    .map(([k, v]) => ({ slug: k, title: (v && (v.heroTitle || v.title)) || k }));
}

// Server-only: every /resources/<slug> landing-page link, for building a
// crawlable internal-link index. The /resources/* pages are a fully orphaned
// cluster (no site link points into them), so these links create the crawl
// entry point. Uses the bare data KEY as the slug (skips any leading-slash
// keys, which don't round-trip through the /resources/[pageSlug] route).
export function getResourceLinks() {
  return linksForCategory('resources');
}

// Server-only: every /compare/<slug> landing-page link, for building a
// crawlable internal-link index. The /compare/* pages are a fully orphaned
// cluster (only a redirect stub points at one of them), so these links create
// the crawl entry point. Uses the bare data KEY as the slug (skips any
// leading-slash keys, which don't round-trip through the compare route).
export function getCompareLinks() {
  return linksForCategory('compare');
}

// Server-only: every /industry/<slug> and /state/<slug> landing-page link.
// Both routes previously had no generateStaticParams, so every one of these
// pages was rendered on demand and none of them appeared in any link index.
export function getIndustryLinks() {
  return linksForCategory('industry');
}

export function getStateLinks() {
  return linksForCategory('state');
}

// Slugs that must never be handed to the /[slug] catch-all's
// generateStaticParams: Next.js gives these static routes priority, so
// prerendering the same path from the catch-all is a build-time conflict.
const RESERVED_TOP_LEVEL_SLUGS = new Set([
  'about-us', 'admin', 'api', 'arcis-bridge-device', 'arcis-nvr', 'arcisgpt',
  'arcisai-vs-godrej', 'become-a-distributor', 'blog', 'blog-thank-you',
  'BIS-ER-certification', 'cctv-compliance-2026', 'certifications', 'cloud-vms',
  'compare', 'contact-us', 'documents', 'eco-series', 'event', 'events', 'faq',
  'firmware', 'global-oem-partnership', 'glossary',
  'india-cctv-market-report-2026', 'industry', 'news', 'partners', 'press',
  'privacy-policy', 'resources', 's-series', 'solution', 'state', 'support',
  'terms-of-service', 'thank-you', 'tools', 'why-choose-arcisai',
]);

/**
 * Server-only: every slug the /[slug] catch-all should PRERENDER.
 *
 * Previously only `cctv-cameras-*` keys were prerendered, so ~150 landing
 * pages — including /ai-cctv-banking-atm-security — were rendered on demand
 * inside a serverless function on first request. That on-demand path is the
 * one that can 500 in production while dev/build/start all return 200 locally:
 * the catch-all imports all 13 SEO data modules, so every cold on-demand
 * render loads the whole ~270-page dataset in the function. Prerendering them
 * removes that request-time path entirely and gives crawlers static HTML.
 *
 * Each key is round-trip verified through resolveSeoKey() with the same
 * lookup rules the route uses, so a key that would not resolve is skipped
 * rather than baked into a build-breaking param.
 */
export function getTopLevelSeoSlugs() {
  return Object.entries(allSeoData)
    .filter(([k, v]) => {
      if (!v || k.startsWith('/')) return false;
      // Sectioned entries 301 from the bare slug — never prerender a redirect.
      if (sectionForKey(k)) return false;
      if (RESERVED_TOP_LEVEL_SLUGS.has(k)) return false;
      // Round-trip check against the route's own slug → params mapping.
      let params;
      if (k.startsWith('cctv-cameras-')) params = { city: k.replace('cctv-cameras-', '') };
      else if (k.startsWith('ai-cctv-')) params = { slug: k.replace('ai-cctv-', '') };
      else params = { seriesId: k };
      return resolveSeoKey(params) === k;
    })
    .map(([k]) => k);
}

// Server-only: every SEO landing page, paired with its single canonical route
// path. Used to generate the sitemap so no landing page is missing from it and
// no duplicate (non-canonical) URL is submitted.
export function getAllSeoPageEntries() {
  return Object.entries(allSeoData)
    .filter(([k]) => !k.startsWith('/'))
    .map(([k, v]) => ({
      key: k,
      path: canonicalPathForKey(k),
      category: (v && v.category) || null,
    }));
}
