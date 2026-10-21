import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { notFound } from 'next/navigation';
import { resolveSeoPageData, resolveSeoKey, getProductModelLinks, getWifiLinks } from '@/src/data/resolveSeoPageData';
import { buildSeoPageSchemas, buildSeoPageMetadata, humanizeSlug } from '@/src/data/buildSeoPageSchemas';

// Model-level product pages: /products/<model>. Data lives in the SEO dataset
// (category "products"); this route only renders entries of that category, so
// no other section's entry can appear under /products/. Unknown slugs return a
// real 404. Old redirect stubs (/products/s-series, /products/vms, ...) are
// config-level redirects and are resolved before this route.
export const revalidate = 86400;

export function generateStaticParams() {
  return getProductModelLinks().map(({ slug }) => ({ productSlug: slug }));
}

export async function generateMetadata(props) {
  const { productSlug } = await props.params;
  const pageData = resolveSeoPageData({ category: 'products', pageSlug: productSlug });

  if (pageData?.category !== 'products') {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  return buildSeoPageMetadata({
    pageData,
    path: `/products/${productSlug}`,
    fallbackTitle: `${humanizeSlug(productSlug)} | ArcisAI`,
    fallbackDescription: `${humanizeSlug(productSlug)} from ArcisAI. Specifications, datasheet and enquiry options.`,
    ogImage: '/og/home.jpg',
  });
}

export default async function ProductModelPage(props) {
  const { productSlug } = await props.params;
  const override = { category: 'products', pageSlug: productSlug };
  const pageData = resolveSeoPageData(override);

  if (pageData?.category !== 'products') notFound();

  const schemas = buildSeoPageSchemas({ pageData, path: `/products/${productSlug}` });

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SEOLandingPage
        pageData={pageData}
        slugKey={resolveSeoKey(override) || productSlug}
        relatedLinks={getWifiLinks().filter((l) => l.slug !== `products/${productSlug}`)}
      />
    </>
  );
}
