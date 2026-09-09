import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import {notFound, permanentRedirect} from 'next/navigation';
import {
  resolveSeoPageData,
  resolveSeoKey,
  getCctvLocationLinks,
  getTopLevelSeoSlugs,
  sectionForKey,
} from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Statically prerender EVERY data-backed top-level landing page, not just the
// `cctv-cameras-*` city keys. Previously ~150 of these — including
// /ai-cctv-banking-atm-security — had no prerendered output and were rendered
// on demand in a serverless function on first request, which is the only code
// path on this route that behaves differently in production than it does under
// local dev/build/start. Crawlers now get static HTML for all of them.
export const revalidate = 86400;

export function generateStaticParams() {
  return getTopLevelSeoSlugs().map((slug) => ({ slug }));
}

/**
 * Catch-all for top-level dynamic slugs that are not matched by more
 * specific static/dynamic routes, including:
 *
 *   /cctv-cameras-<city>   →  city-level SEO landing pages
 *   /ai-cctv-<slug>        →  AI CCTV product/feature landing pages
 *   /<any-seo-slug>        →  Any remaining SEO landing page slugs
 *
 * Note: Next.js gives static routes (e.g. /about-us, /blog) and named
 * dynamic routes (e.g. /s-series, /eco-series) higher priority than this
 * catch-all, so they are unaffected.
 */

// The slug → resolver-params mapping is shared by generateMetadata and the
// page component so the two can never disagree about which entry is rendered.
function lookupParams(slug) {
  if (slug.startsWith('cctv-cameras-')) return { city: slug.replace('cctv-cameras-', '') };
  if (slug.startsWith('ai-cctv-')) return { slug: slug.replace('ai-cctv-', '') };
  return { seriesId: slug };
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const pageData = resolveSeoPageData(lookupParams(slug));

  // A slug with no data entry renders notFound() below; tell crawlers not to
  // index the 404 body.
  if (!pageData) return { title: 'Page Not Found', robots: { index: false, follow: false } };

  // Fall back to the old generated copy only when an entry has no curated
  // title/description of its own.
  const city = slug.startsWith('cctv-cameras-') ? humanizeSlug(slug.replace('cctv-cameras-', '')) : null;
  const feature = slug.startsWith('ai-cctv-') ? humanizeSlug(slug.replace('ai-cctv-', '')) : null;
  const name = humanizeSlug(slug);

  return buildSeoPageMetadata({
    pageData,
    path: `/${slug}`,
    fallbackTitle: city
      ? `CCTV Cameras in ${city} | AI Surveillance`
      : feature
        ? `AI CCTV ${feature} | Smart Surveillance`
        : name,
    fallbackDescription: city
      ? `Buy ArcisAI AI CCTV cameras in ${city}. NDAA-compliant, STQC-certified AI surveillance cameras with edge analytics, cloud VMS, and 24/7 support.`
      : feature
        ? `ArcisAI AI CCTV ${feature} — advanced edge AI surveillance with real-time analytics, NDAA compliance, and enterprise reliability.`
        : `${name} — AI surveillance solutions from ArcisAI. NDAA-compliant cameras, cloud VMS, and edge AI analytics.`,
    // SEO audit fix (2026-09-08, checklist item #13): every page through this
    // catch-all (100+ city pages, ai-cctv-<feature> pages, and any other
    // bare-slug landing page) fell back to the generic homepage OG image —
    // /industry, /compare, /state and /resources already have their own
    // distinct OG image per category (see their own page.js files), only
    // this catch-all still used /og/home.jpg. New /og/location.jpg is a
    // purpose-made "AI CCTV coverage across India" card, distinct from the
    // homepage image.
    ogImage: '/og/location.jpg',
  });
}

export default async function SlugPage(props) {
  const params = await props.params;
  const { slug } = params;

  const paramsOverride = lookupParams(slug);
  const pageData = resolveSeoPageData(paramsOverride);
  if (!pageData) {
    notFound();
  }

  // Keyword cannibalisation fix: every bare data key also round-trips through
  // this catch-all, so entries that belong to a section route were being
  // served at two self-canonicalising URLs — /banking-finance-cctv AND
  // /industry/banking-finance-cctv, /arcisai-vs-hikvision AND
  // /compare/arcisai-vs-hikvision, and so on for ~60 pages. 301 the bare URL
  // to the sectioned one so all ranking signal lands on a single URL.
  // Redirect to the RESOLVED KEY, not the raw slug — the section routes look
  // entries up by key, so a slug that resolved through a prefix rule would
  // otherwise 301 into a 404.
  // sectionForKey() — not the raw category — decides this. 20 entries are
  // named like a top-level location URL but carry a sectioned category, and
  // routing them by category would 301 already-indexed URLs such as
  // /cctv-cameras-assam to /state/cctv-cameras-assam.
  const resolvedKey = resolveSeoKey(paramsOverride);
  const section = resolvedKey ? sectionForKey(resolvedKey) : null;
  if (section) {
    permanentRedirect(`/${section}/${resolvedKey}`);
  }

  // Built on the server so the JSON-LD ships in the initial HTML. The path —
  // not pageData.slug — is the source of truth for the URL, because 59 data
  // entries carry a leading-slash slug that would produce `arcisai.io//...`.
  const schemas = buildSeoPageSchemas({
    pageData,
    path: `/${slug}`,
    areaServed: paramsOverride.city ? humanizeSlug(paramsOverride.city) : undefined,
  });

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage
        pageData={pageData}
        slugKey={resolveSeoKey(paramsOverride) || slug}
        relatedLinks={getCctvLocationLinks()}
      />
    </>
  );
}
