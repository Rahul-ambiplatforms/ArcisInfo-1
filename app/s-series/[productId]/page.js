import Products from '@/src/views/Product/Products';

export async function generateMetadata({ params }) {
  const { productId } = params;
  const name = productId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | S-Series AI Camera | ArcisAI`,
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

export default function SSeriesProductPage({ params }) {
  return <Products productId={params.productId} seriesPrefix="s-series" />;
}
