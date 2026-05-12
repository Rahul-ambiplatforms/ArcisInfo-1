import HomeDashboard from '@/src/views/HomePage/HomeDashboard';
import { homeSEO } from '@/src/views/HomePage/Data/SEOContent';

// SEO copy is sourced from `homeSEO` (the same content that previously ran
// client-side via react-helmet-async) so Google and JS-disabled crawlers see
// the keyword-optimized title/description in the initial HTML.
export const metadata = {
  title: homeSEO.metatitle,
  description: homeSEO.metadescription,
  keywords: [
    'AI CCTV cameras', 'NDAA compliant cameras', 'enterprise surveillance camera',
    'STQC certified CCTV', 'edge AI camera', 'cloud VMS', 'smart security system',
    'ArcisAI', 'face recognition camera', 'ANPR camera', 'GenAI video analytics',
    'Hikvision alternative',
  ],
  alternates: { canonical: homeSEO.canonical },
  openGraph: {
    title: homeSEO.metatitle,
    description: homeSEO.metadescription,
    url: homeSEO.canonical,
    images: [{ url: homeSEO.ogimage }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcisai',
    title: homeSEO.metatitle,
    description: homeSEO.metadescription,
    images: [homeSEO.ogimage],
  },
};

export default function HomePage() {
  return <HomeDashboard />;
}
