import SEOLandingPage from '@/src/views/SEOLandingPages/SEOLandingPage';

/**
 * Catch-all for top-level dynamic slugs that are not matched by more
 * specific static/dynamic routes, including:
 *
 *   /cctv-cameras-<city>   →  city-level SEO landing pages
 *   /ai-cctv-<slug>        →  AI CCTV product/feature landing pages
 *   /<any-seo-slug>        →  Any remaining SEO landing page slugs
 *
 * Note: Next.js gives static routes (e.g. /about-us, /blog) and named
 * dynamic routes (e.g. /s-series, /eco-series) higher priority than this
 * catch-all, so they are unaffected.
 */

export async function generateMetadata({ params }) {
  const { slug } = params;

  // City pages: /cctv-cameras-<city>
  if (slug.startsWith('cctv-cameras-')) {
    const city = slug
      .replace('cctv-cameras-', '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      title: `CCTV Cameras in ${city} | AI Surveillance | ArcisAI`,
      description: `Buy ArcisAI AI CCTV cameras in ${city}. NDAA-compliant, STQC-certified AI surveillance cameras with edge analytics, cloud VMS, and 24/7 support.`,
      alternates: { canonical: `https://arcisai.io/${slug}` },
      openGraph: {
        title: `CCTV Cameras in ${city} | ArcisAI`,
        description: `NDAA-compliant AI CCTV cameras in ${city}.`,
        url: `https://arcisai.io/${slug}`,
        images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
      },
    };
  }

  // AI CCTV feature/product slugs: /ai-cctv-<slug>
  if (slug.startsWith('ai-cctv-')) {
    const feature = slug
      .replace('ai-cctv-', '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      title: `AI CCTV ${feature} | Smart Surveillance | ArcisAI`,
      description: `ArcisAI AI CCTV ${feature} — advanced edge AI surveillance with real-time analytics, NDAA compliance, and enterprise reliability.`,
      alternates: { canonical: `https://arcisai.io/${slug}` },
      openGraph: {
        title: `AI CCTV ${feature} | ArcisAI`,
        description: `AI CCTV ${feature} — enterprise surveillance from ArcisAI.`,
        url: `https://arcisai.io/${slug}`,
        images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
      },
    };
  }

  // Generic slug
  const name = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | ArcisAI`,
    description: `${name} — AI surveillance solutions from ArcisAI. NDAA-compliant cameras, cloud VMS, and edge AI analytics.`,
    alternates: { canonical: `https://arcisai.io/${slug}` },
    openGraph: {
      title: `${name} | ArcisAI`,
      description: `${name} — enterprise AI surveillance from ArcisAI.`,
      url: `https://arcisai.io/${slug}`,
      images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function SlugPage({ params }) {
  const { slug } = params;

  // Determine which params to pass to SEOLandingPage based on slug pattern
  let paramsOverride;
  if (slug.startsWith('cctv-cameras-')) {
    paramsOverride = { city: slug.replace('cctv-cameras-', '') };
  } else if (slug.startsWith('ai-cctv-')) {
    paramsOverride = { slug: slug.replace('ai-cctv-', '') };
  } else {
    paramsOverride = { seriesId: slug };
  }

  return <SEOLandingPage paramsOverride={paramsOverride} />;
}
