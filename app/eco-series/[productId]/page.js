import Products from '@/src/pages/Product/Products';

export async function generateMetadata({ params }) {
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

export default function EcoSeriesProductPage({ params }) {
  return <Products productId={params.productId} seriesPrefix="eco-series" />;
}
