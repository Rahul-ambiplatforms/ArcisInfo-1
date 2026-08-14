import Products from '@/src/views/Product/Products';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
// Keys mirror src/views/Product/Data/Content.js, which the view resolves by
// stripping dashes from the URL segment.
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    { productId: 'bullet-cctv-camera' },
    { productId: 'ptz-cctv-camera' },
    { productId: 'dome-cctv-camera' },
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
    title: `${name} | ECO-Series AI Camera | ArcisAI`,
    description: `Explore the ArcisAI ${name} — a budget-friendly ECO-Series AI CCTV camera with edge analytics, STQC certification, and reliable surveillance performance.`,
    alternates: { canonical: `https://arcisai.io/eco-series/${productId}` },
    openGraph: {
      title: `${name} | ECO-Series AI Camera | ArcisAI`,
      description: `ArcisAI ${name} — value ECO-Series AI surveillance camera.`,
      url: `https://arcisai.io/eco-series/${productId}`,
      images: [{ url: '/og/eco-series.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function EcoSeriesProductPage(props) {
  const params = await props.params;
  return <Products productId={params.productId} seriesPrefix="eco-series" />;
}
