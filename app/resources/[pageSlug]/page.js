import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import { resolveSeoPageData, resolveSeoKey } from '@/src/data/resolveSeoPageData';

export async function generateMetadata({ params }) {
  const { pageSlug } = params;
  const name = pageSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | AI Surveillance Resources | ArcisAI`,
    description: `ArcisAI resource: ${name}. In-depth guides, whitepapers, and technical documentation on AI CCTV and surveillance.`,
    alternates: { canonical: `https://arcisai.io/resources/${pageSlug}` },
    openGraph: {
      title: `${name} | AI Surveillance Resources | ArcisAI`,
      description: `ArcisAI resource: ${name}.`,
      url: `https://arcisai.io/resources/${pageSlug}`,
      images: [{ url: '/og/resources.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function ResourcePage({ params }) {
  const override = { category: 'resources', pageSlug: params.pageSlug };
  return <SEOLandingPage pageData={resolveSeoPageData(override)} slugKey={resolveSeoKey(override) || params.pageSlug} />;
}
