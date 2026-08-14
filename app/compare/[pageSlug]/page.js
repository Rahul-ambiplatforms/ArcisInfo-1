import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { notFound } from 'next/navigation';
import { resolveSeoPageData, resolveSeoKey, getCompareLinks } from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Statically prerender the comparison landing pages so crawlers get fast
// static HTML. Other slugs still render on demand (dynamicParams defaults to
// true), so no other route or behavior changes.
export const revalidate = 86400;

export function generateStaticParams() {
  return getCompareLinks().map(({ slug }) => ({ pageSlug: slug }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { pageSlug } = params;
  const pageData = resolveSeoPageData({ category: 'compare', pageSlug });

  if (pageData?.category !== 'compare') {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  return buildSeoPageMetadata({
    pageData,
    path: `/compare/${pageSlug}`,
    fallbackTitle: `${humanizeSlug(pageSlug)} | AI CCTV Comparison`,
    fallbackDescription:
      'AI CCTV comparison for India: features, price, and performance for enterprise AI CCTV cameras by ArcisAI.',
    ogImage: '/og/compare.jpg',
  });
}

export default async function ComparisonPage(props) {
  const params = await props.params;
  const override = { category: 'compare', pageSlug: params.pageSlug };
  const pageData = resolveSeoPageData(override);

  // Previously an unknown slug rendered a "Page Not Found" body with HTTP 200
  // — a soft 404, which is one of the patterns that lands URLs in Search
  // Console's "crawled – currently not indexed" bucket.
  //
  // The category check also closes a cross-section duplicate: the resolver
  // falls back to a bare-key lookup, so /compare/<any-industry-key> used to
  // render the industry page under a /compare/ URL.
  if (pageData?.category !== 'compare') notFound();

  const schemas = buildSeoPageSchemas({ pageData, path: `/compare/${params.pageSlug}` });

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage pageData={pageData} slugKey={resolveSeoKey(override) || params.pageSlug} />
    </>
  );
}
