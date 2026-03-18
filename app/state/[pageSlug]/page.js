import SEOLandingPage from '@/src/pages/SEOLandingPages/SEOLandingPage';

export async function generateMetadata({ params }) {
  const { pageSlug } = params;
  const name = pageSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `AI CCTV Cameras in ${name} | ArcisAI`,
    description: `ArcisAI enterprise AI CCTV cameras in ${name}. NDAA-compliant, STQC-certified surveillance solutions for businesses and government in ${name}.`,
    alternates: { canonical: `https://arcisai.io/state/${pageSlug}` },
    openGraph: {
      title: `AI CCTV Cameras in ${name} | ArcisAI`,
      description: `Enterprise AI surveillance solutions in ${name} from ArcisAI.`,
      url: `https://arcisai.io/state/${pageSlug}`,
      images: [{ url: '/og/state.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function StatePage({ params }) {
  return <SEOLandingPage paramsOverride={{ category: 'state', pageSlug: params.pageSlug }} />;
}
