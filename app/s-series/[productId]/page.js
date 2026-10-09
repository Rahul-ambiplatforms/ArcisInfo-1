import { notFound } from 'next/navigation';
import Products from '@/src/views/Product/Products';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
// Keys mirror src/views/Product/Data/Content.js, which the view resolves by
// stripping dashes from the URL segment.
export const revalidate = 86400;

// SEO audit fix (2026-09-28): any other segment used to render a 200 with a
// humanized <title> built from the slug ("This Camera Does Not Exist |
// S-Series AI Camera") over Products.js's client-side <NotFound /> placeholder
// — a soft 404, the same failure already fixed on /solution/[solutionId].
// This set is the single source of truth for "does this id have real content":
// it is exactly the three S-Series keys in Data/Content.js that
// getProductSEO() maps (aibulletcctvcamera / aiptzcctvcamera /
// aidomecctvcamera), and exactly the three URLs in app/sitemap.js.
//
// Deliberately series-specific rather than "any key in Product": the three
// ECO-Series keys resolve through the same `Product` object, so
// /s-series/bullet-cctv-camera used to render the full ECO-Series page under
// an s-series canonical — duplicate content at the wrong URL. Those now 404
// as well.
const S_SERIES_PRODUCT_IDS = new Set([
  'ai-bullet-cctv-camera',
  'ai-ptz-cctv-camera',
  'ai-dome-cctv-camera',
]);

export function generateStaticParams() {
  return Array.from(S_SERIES_PRODUCT_IDS).map((productId) => ({ productId }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { productId } = params;

  if (!S_SERIES_PRODUCT_IDS.has(productId)) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  // humanizeSlug keeps AI/CCTV/PTZ etc. upper-cased instead of naive
  // title-case turning them into "Ai" / "Cctv" / "Ptz".
  const name = humanizeSlug(productId);

  return {
    title: `${name} | S-Series AI Camera`,
    description: `Explore the ArcisAI ${name} from the S-Series range. See available models, connectivity options and supported analytics, then request a recommendation.`,
    alternates: { canonical: `https://arcisai.io/s-series/${productId}`, languages: buildHreflang(`https://arcisai.io/s-series/${productId}`) },
    openGraph: {
      title: `${name} | S-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} from the S-Series range.`,
      url: `https://arcisai.io/s-series/${productId}`,
      images: [{ url: '/og/s-series.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} | S-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} from the S-Series range.`,
      images: ['/og/s-series.jpg'],
    },
  };
}

export default async function SSeriesProductPage(props) {
  const params = await props.params;
  // Real 404 instead of a 200 wrapped around Products.js's <NotFound /> —
  // see the soft-404 note above. The view does the equivalent lookup itself
  // and would render that placeholder anyway; this just makes the HTTP status
  // honest before it gets that far.
  if (!S_SERIES_PRODUCT_IDS.has(params.productId)) {
    notFound();
  }
  return <Products productId={params.productId} seriesPrefix="s-series" />;
}
