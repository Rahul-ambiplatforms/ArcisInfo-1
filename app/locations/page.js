import SectionHub from '@/src/views/SectionHub/SectionHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { getCctvLocationLinks } from '@/src/data/resolveSeoPageData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO fix (2026-09-30, SEO-007/SEO-012): a /locations hub was missing --
// city pages canonicalize to bare /cctv-cameras-<city> URLs (not
// /locations/<city>), so they had no on-site index page linking them all
// together, only the sitemap and the (now-curated, see
// getCuratedLocationLinks in resolveSeoPageData.js) per-page relatedLinks
// block. Built the same way as the existing /state, /industry, /compare,
// /resources hubs (see SectionHub) so this section gets the same real,
// crawlable discovery page they already have -- listing every real,
// published city/location page from the SEO dataset, not curated or
// hand-picked copy, so nothing here is invented.
const CANONICAL = `${SITE}/locations`;

export const revalidate = 86400;

export const metadata = {
  title: 'AI CCTV Camera Locations | ArcisAI',
  description:
    'ArcisAI AI CCTV camera dealers, installation, and support across every city ArcisAI serves.',
  alternates: { canonical: CANONICAL, languages: buildHreflang(CANONICAL) },
  openGraph: {
    title: 'AI CCTV Camera Locations | ArcisAI',
    description: 'ArcisAI AI CCTV camera dealers, installation, and support across every city ArcisAI serves.',
    url: CANONICAL,
    siteName: 'ArcisAI',
    images: [{ url: '/og/location.jpg', width: 1200, height: 630, alt: 'ArcisAI AI CCTV Camera Locations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CCTV Camera Locations | ArcisAI',
    description: 'ArcisAI AI CCTV camera dealers, installation, and support across every city ArcisAI serves.',
    images: ['/og/location.jpg'],
  },
};

export default function LocationsHubPage() {
  // City pages canonicalize to a bare /<slug> URL (not /locations/<slug>),
  // so basePath is intentionally empty -- see the fix in SectionHub.jsx that
  // makes an empty basePath render "/slug" instead of a broken "//slug".
  const links = getCctvLocationLinks();

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${CANONICAL}#collection`,
      url: CANONICAL,
      name: 'AI CCTV Camera Locations',
      description: metadata.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORGANIZATION_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${CANONICAL}#itemlist`,
      itemListElement: links.map((l, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE}/${l.slug}`,
        name: l.title,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: CANONICAL },
      ],
    },
  ];

  return (
    <>
      <SeoPageSchemaScripts schemas={schemas} />
      <SectionHub
        eyebrow="Coverage"
        title="AI CCTV Camera Locations"
        description="Find ArcisAI AI CCTV camera dealers, installation, and support in your city."
        links={links}
        basePath=""
      />
    </>
  );
}
