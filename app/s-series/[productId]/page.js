import Products from '@/src/views/Product/Products';

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
  const name = productId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | S-Series AI Camera`,
    description: `Explore the ArcisAI ${name} — a premium S-Series AI CCTV camera with edge AI analytics, STQC certification, and enterprise-grade reliability.`,
    alternates: { canonical: `https://arcisai.io/s-series/${productId}` },
    openGraph: {
      title: `${name} | S-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — premium S-Series AI surveillance camera.`,
      url: `https://arcisai.io/s-series/${productId}`,
      images: [{ url: '/og/s-series.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function SSeriesProductPage(props) {
  const params = await props.params;
  return <Products productId={params.productId} seriesPrefix="s-series" />;
}
