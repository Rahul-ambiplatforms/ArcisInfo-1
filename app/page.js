import Link from 'next/link';
import HomeDashboard from '@/src/views/HomePage/HomeDashboard';
import { homeSEO } from '@/src/views/HomePage/Data/SEOContent';
import { getResourceLinks, getCompareLinks } from '@/src/data/resolveSeoPageData';
import { buildHreflang } from '@/src/data/hreflang';

// SEO copy is sourced from `homeSEO` (the same content that previously ran
// client-side via react-helmet-async) so Google and JS-disabled crawlers see
// the keyword-optimized title/description in the initial HTML.
export const metadata = {
  title: homeSEO.metatitle,
  description: homeSEO.metadescription,
  keywords: [
    'STQC certified CCTV camera',
    'BIS-ER certified CCTV camera',
    'made in India CCTV camera',
    'STQC certified surveillance system',
    'best CCTV camera brand in India',
    'NDAA compliant cameras',
  ],
  alternates: { canonical: homeSEO.canonical, languages: buildHreflang(homeSEO.canonical) },
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
      {/*
        Crawl entry point for the /resources/* landing pages, which are
        otherwise an orphaned cluster (no visible link points into them).
        Visually hidden (off-screen, 1px, clipped) so there is ZERO impact on
        the visible UI/design/layout — it exists only in the server-rendered
        HTML for search engines and assistive tech. Server component, so the
        SEO dataset is not bundled to the client.
      */}
      <nav
        aria-label="Resource guides"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {getResourceLinks().map((l) => (
          <Link key={`res-${l.slug}`} href={`/resources/${l.slug}`}>
            {l.title || l.slug}
          </Link>
        ))}
      </nav>
      {/*
        Crawl entry point for the /compare/* landing pages — an orphaned
        cluster whose only inbound reference is a redirect stub. Visually
        hidden (off-screen, 1px, clipped) so there is ZERO impact on the
        visible UI/design/layout; exists only in the server-rendered HTML for
        search engines and assistive tech. Server component → SEO dataset is
        not bundled to the client.
      */}
      <nav
        aria-label="CCTV comparisons"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {getCompareLinks().map((l) => (
          <Link key={`cmp-${l.slug}`} href={`/compare/${l.slug}`}>
            {l.title || l.slug}
          </Link>
        ))}
      </nav>
    </>
  );
}
