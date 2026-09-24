import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { notFound } from 'next/navigation';
import { resolveSeoPageData, resolveSeoKey, getIndustryLinks, getWifiLinks } from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Prerender the industry landing pages so crawlers get static HTML instead of
// an on-demand render on first hit.
export const revalidate = 86400;

export function generateStaticParams() {
  return getIndustryLinks().map(({ slug }) => ({ pageSlug: slug }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { pageSlug } = params;
  const pageData = resolveSeoPageData({ category: 'industry', pageSlug });

  if (pageData?.category !== 'industry') {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const name = humanizeSlug(pageSlug);
  return buildSeoPageMetadata({
    pageData,
    path: `/industry/${pageSlug}`,
    fallbackTitle: `${name} AI Surveillance | Industry Solutions`,
    fallbackDescription: `ArcisAI industry surveillance for ${name} — edge AI cameras, smart analytics, and cloud VMS tailored to ${name} security requirements.`,
    ogImage: '/og/industry.jpg',
  });
}

export default async function IndustryPage(props) {
  const params = await props.params;
  const override = { category: 'industry', pageSlug: params.pageSlug };
  const pageData = resolveSeoPageData(override);

  // Real 404 instead of a 200 "Page Not Found" body (soft 404), and the
  // category check stops /industry/<compare-or-state-key> rendering another
  // section's page at an /industry/ URL.
  if (pageData?.category !== 'industry') notFound();

  const schemas = buildSeoPageSchemas({ pageData, path: `/industry/${params.pageSlug}` });

  // SEO audit fix (2026-09-08, checklist item #51): unlike the /[slug]
  // catch-all (which already passes relatedLinks for city/feature pages),
  // /industry pages had no cross-links to sibling industry pages at all —
  // each one was an island with nothing pointing to related content. Reuses
  // the same crawlable relatedLinks block SEOLandingPage.jsx already renders,
  // just wired up here for the first time. Excludes the current page.
  // manufacturing-surveillance and warehouse-logistics-cctv now recommend
  // WiFi cameras for site offices/cabins in their copy (Day 2, WiFi sprint) —
  // give that mention an actual crawlable link rather than plain text.
  const WIFI_CROSS_LINK_KEYS = new Set(['manufacturing-surveillance', 'warehouse-logistics-cctv']);
  const relatedLinks = [
    ...getIndustryLinks()
      .filter((l) => l.slug !== params.pageSlug)
      .map((l) => ({ ...l, slug: `industry/${l.slug}` })),
    ...(WIFI_CROSS_LINK_KEYS.has(params.pageSlug) ? getWifiLinks() : []),
  ];

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage pageData={pageData} slugKey={resolveSeoKey(override) || params.pageSlug} relatedLinks={relatedLinks} />
    </>
  );
}
