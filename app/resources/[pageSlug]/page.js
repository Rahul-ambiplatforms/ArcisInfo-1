import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { notFound } from 'next/navigation';
import { resolveSeoPageData, resolveSeoKey, getResourceLinks } from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Statically prerender the resource landing pages so crawlers get fast static
// HTML. Other slugs still render on demand (dynamicParams defaults to true),
// so no other route or behavior changes.
export const revalidate = 86400;

export function generateStaticParams() {
  return getResourceLinks().map(({ slug }) => ({ pageSlug: slug }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { pageSlug } = params;
  const pageData = resolveSeoPageData({ category: 'resources', pageSlug });

  if (pageData?.category !== 'resources') {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const name = humanizeSlug(pageSlug);
  return buildSeoPageMetadata({
    pageData,
    path: `/resources/${pageSlug}`,
    fallbackTitle: `${name} | AI Surveillance Resources`,
    fallbackDescription: `ArcisAI resource: ${name}. In-depth guides, whitepapers, and technical documentation on AI CCTV and surveillance.`,
    ogImage: '/og/resources.jpg',
  });
}

export default async function ResourcePage(props) {
  const params = await props.params;
  const override = { category: 'resources', pageSlug: params.pageSlug };
  const pageData = resolveSeoPageData(override);

  // Real 404 instead of a 200 "Page Not Found" body (soft 404), and the
  // category check stops another section's entry rendering at a /resources/
  // URL via the resolver's bare-key fallback.
  if (pageData?.category !== 'resources') notFound();

  const schemas = buildSeoPageSchemas({ pageData, path: `/resources/${params.pageSlug}` });

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage pageData={pageData} slugKey={resolveSeoKey(override) || params.pageSlug} />
    </>
  );
}
