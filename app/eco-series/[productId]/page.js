import { notFound } from 'next/navigation';
import Products from '@/src/views/Product/Products';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
// Keys mirror src/views/Product/Data/Content.js, which the view resolves by
// stripping dashes from the URL segment.
export const revalidate = 86400;

// SEO audit fix (2026-09-28) — same soft-404 as the S-Series route; see the
// note in app/s-series/[productId]/page.js. This set is exactly the three
// ECO-Series keys getProductSEO() maps (bulletcctvcamera / ptzcctvcamera /
// domecctvcamera) and exactly the three URLs in app/sitemap.js, so
// /eco-series/ai-bullet-cctv-camera no longer serves the S-Series page under
// an eco-series canonical.
//
// NOTE: /eco-series/ai-baby-bullet-camera appears in Footer.js but only inside
// a commented-out JSX block, so nothing on the site links to it. It has no
// entry in Data/Content.js and never has — it soft-404'd before this change
// and is a genuine 404 after it, which is the honest answer for a product page
// that does not exist.
const ECO_SERIES_PRODUCT_IDS = new Set([
  'bullet-cctv-camera',
  'ptz-cctv-camera',
  'dome-cctv-camera',
]);

export function generateStaticParams() {
  return Array.from(ECO_SERIES_PRODUCT_IDS).map((productId) => ({ productId }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { productId } = params;

  if (!ECO_SERIES_PRODUCT_IDS.has(productId)) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  // humanizeSlug keeps CCTV/PTZ etc. upper-cased instead of naive title-case
  // turning them into "Cctv" / "Ptz".
  const name = humanizeSlug(productId);

  return {
    title: `${name} | ECO-Series AI Camera`,
    description: `Explore the ArcisAI ${name} — a budget-friendly ECO-Series AI CCTV camera with edge analytics, STQC certification, and reliable surveillance performance.`,
    alternates: { canonical: `https://arcisai.io/eco-series/${productId}`, languages: buildHreflang(`https://arcisai.io/eco-series/${productId}`) },
    openGraph: {
      title: `${name} | ECO-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — value ECO-Series AI surveillance camera.`,
      url: `https://arcisai.io/eco-series/${productId}`,
      images: [{ url: '/og/eco-series.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} | ECO-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — value ECO-Series AI surveillance camera.`,
      images: ['/og/eco-series.jpg'],
    },
  };
}

export default async function EcoSeriesProductPage(props) {
  const params = await props.params;
  // Real 404 instead of a 200 wrapped around Products.js's <NotFound /> —
  // see the soft-404 note above.
  if (!ECO_SERIES_PRODUCT_IDS.has(params.productId)) {
    notFound();
  }
  return <Products productId={params.productId} seriesPrefix="eco-series" />;
}
