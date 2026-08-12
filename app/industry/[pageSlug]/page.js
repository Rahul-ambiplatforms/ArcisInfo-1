import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import {notFound} from 'next/navigation';
import { resolveSeoPageData, resolveSeoKey } from '@/src/data/resolveSeoPageData';

export async function generateMetadata(props) {
  const params = await props.params;
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

export default async function IndustryPage(props) {
  const params = await props.params;
  const override = { category: 'industry', pageSlug: params.pageSlug };
  return <SEOLandingPage pageData={resolveSeoPageData(override)} slugKey={resolveSeoKey(override) || params.pageSlug} />;
}
