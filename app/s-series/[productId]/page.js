import Products from '@/src/views/Product/Products';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
// Keys mirror src/views/Product/Data/Content.js, which the view resolves by
// stripping dashes from the URL segment.
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    { productId: 'ai-bullet-cctv-camera' },
    { productId: 'ai-ptz-cctv-camera' },
    { productId: 'ai-dome-cctv-camera' },
  ];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { productId } = params;
  // humanizeSlug keeps AI/CCTV/PTZ etc. upper-cased instead of naive
  // title-case turning them into "Ai" / "Cctv" / "Ptz".
  const name = humanizeSlug(productId);

  return {
    title: `${name} | S-Series AI Camera`,
    description: `Explore the ArcisAI ${name} — a premium S-Series AI CCTV camera with edge AI analytics, STQC certification, and enterprise-grade reliability.`,
    alternates: { canonical: `https://arcisai.io/s-series/${productId}`, languages: buildHreflang(`https://arcisai.io/s-series/${productId}`) },
    openGraph: {
      title: `${name} | S-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — premium S-Series AI surveillance camera.`,
      url: `https://arcisai.io/s-series/${productId}`,
      images: [{ url: '/og/s-series.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} | S-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — premium S-Series AI surveillance camera.`,
      images: ['/og/s-series.jpg'],
    },
  };
}

export default async function SSeriesProductPage(props) {
  const params = await props.params;
  return <Products productId={params.productId} seriesPrefix="s-series" />;
}
