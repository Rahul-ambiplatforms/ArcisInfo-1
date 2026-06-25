import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';
import { resolveSeoPageData, resolveSeoKey } from '@/src/data/resolveSeoPageData';

export async function generateMetadata({ params }) {
  const { pageSlug } = params;
  const data = resolveSeoPageData({ category: 'compare', pageSlug });
  const fallbackName = pageSlug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const rawTitle = data?.title || `${fallbackName} | AI CCTV Comparison | ArcisAI`;
  // Parent layout applies the "%s | ArcisAI" template, so strip a trailing
  // "| ArcisAI" from the page title to avoid a duplicated brand suffix.
  const title = rawTitle.replace(/\s*\|\s*ArcisAI\s*$/i, '');
  const description =
    data?.metaDescription ||
    `AI CCTV comparison for India: features, price, and performance for enterprise AI CCTV cameras by ArcisAI.`;
  const canonical = `https://arcisai.io/compare/${pageSlug}`;

  return {
    title,
    description,
    ...(data?.keywords ? { keywords: data.keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: '/og/compare.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function ComparisonPage({ params }) {
  const override = { category: 'compare', pageSlug: params.pageSlug };
  return <SEOLandingPage pageData={resolveSeoPageData(override)} slugKey={resolveSeoKey(override) || params.pageSlug} />;
}
