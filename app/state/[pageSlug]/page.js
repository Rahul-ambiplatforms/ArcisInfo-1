import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { notFound } from 'next/navigation';
import {
  resolveSeoPageData,
  resolveSeoKey,
  getStateLinks,
  canonicalPathForKey,
} from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Prerender the state landing pages so crawlers get static HTML instead of an
// on-demand render on first hit.
export const revalidate = 86400;

export function generateStaticParams() {
  return getStateLinks().map(({ slug }) => ({ pageSlug: slug }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { pageSlug } = params;
  const pageData = resolveSeoPageData({ category: 'state', pageSlug });

  if (pageData?.category !== 'state') {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const name = humanizeSlug(pageSlug);
  // For the 12 states that also have a /cctv-cameras-<state> page,
  // canonicalPathForKey() points here at that URL instead of this one, so the
  // two duplicates consolidate onto a single indexed URL. The page still
  // renders normally — only the declared canonical changes.
  return buildSeoPageMetadata({
    pageData,
    path: canonicalPathForKey(pageSlug) || `/state/${pageSlug}`,
    fallbackTitle: `AI CCTV Cameras in ${name}`,
    fallbackDescription: `ArcisAI enterprise AI CCTV cameras in ${name}. NDAA-compliant, STQC-certified surveillance solutions for businesses and government in ${name}.`,
    ogImage: '/og/state.jpg',
  });
}

export default async function StatePage(props) {
  const params = await props.params;
  const override = { category: 'state', pageSlug: params.pageSlug };
  const pageData = resolveSeoPageData(override);

  // Real 404 instead of a 200 "Page Not Found" body (soft 404), and the
  // category check stops another section's entry rendering at a /state/ URL
  // via the resolver's bare-key fallback.
  if (pageData?.category !== 'state') notFound();

  // Same path the canonical uses, so the JSON-LD @id/url agree with the
  // canonical instead of contradicting it.
  const schemas = buildSeoPageSchemas({
    pageData,
    path: canonicalPathForKey(params.pageSlug) || `/state/${params.pageSlug}`,
    areaServed: humanizeSlug(params.pageSlug),
  });

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage pageData={pageData} slugKey={resolveSeoKey(override) || params.pageSlug} />
    </>
  );
}
