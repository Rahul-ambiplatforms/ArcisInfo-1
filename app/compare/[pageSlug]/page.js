import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';

export async function generateMetadata({ params }) {
  const { pageSlug } = params;
  const name = pageSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | AI CCTV Comparison | ArcisAI`,
    description: `Compare ArcisAI with ${name}. Detailed feature, price, and performance comparison for enterprise AI CCTV cameras.`,
    alternates: { canonical: `https://arcisai.io/compare/${pageSlug}` },
    openGraph: {
      title: `${name} | AI CCTV Comparison | ArcisAI`,
      description: `AI CCTV comparison: ArcisAI vs ${name}.`,
      url: `https://arcisai.io/compare/${pageSlug}`,
      images: [{ url: '/og/compare.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function ComparisonPage({ params }) {
  return <SEOLandingPage paramsOverride={{ category: 'compare', pageSlug: params.pageSlug }} />;
}
