import SEOLandingPage from '@/src/pages/SEOLandingPages/SEOLandingPage';

export async function generateMetadata({ params }) {
  const { pageSlug } = params;
  const name = pageSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} AI Surveillance | Industry Solutions | ArcisAI`,
    description: `ArcisAI industry surveillance for ${name} — edge AI cameras, smart analytics, and cloud VMS tailored to ${name} security requirements.`,
    alternates: { canonical: `https://arcisai.io/industry/${pageSlug}` },
    openGraph: {
      title: `${name} AI Surveillance | ArcisAI`,
      description: `Industry-specific AI surveillance for ${name}.`,
      url: `https://arcisai.io/industry/${pageSlug}`,
      images: [{ url: '/og/industry.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function IndustryPage({ params }) {
  return <SEOLandingPage paramsOverride={{ category: 'industry', pageSlug: params.pageSlug }} />;
}
