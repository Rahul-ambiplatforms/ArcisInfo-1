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
  return (
    <>
      {/*
        Preload the BIS hero LCP image. The carousel's first slide is the
        Largest Contentful Paint element on this page, so we hint the
        browser to start fetching the AVIF variant before hydration.
        `imagesrcset` mirrors the <picture> markup inside HeroSectionCarousel,
        and `media` ensures only the mobile-or-desktop variant is fetched.
      */}
      <link
        rel="preload"
        as="image"
        type="image/avif"
        imageSrcSet="/images/bis-mobile-bg-480.avif 480w, /images/bis-mobile-bg-750.avif 750w"
        imageSizes="100vw"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        type="image/avif"
        imageSrcSet="/images/BIS_bg-1080.avif 1080w, /images/BIS_bg-1440.avif 1440w, /images/BIS_bg-1920.avif 1920w"
        imageSizes="100vw"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <HomeDashboard />
    </>
  );
}
