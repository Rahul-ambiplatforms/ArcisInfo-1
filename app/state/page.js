import SectionHub from '@/src/views/SectionHub/SectionHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { getStateLinks } from '@/src/data/resolveSeoPageData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO audit fix (2026-09-19, technical SEO pass): same issue and same fix as
// app/industry/page.js — /state 404'd at its own root (confirmed live).
// Most Indian states are actually canonicalized to /cctv-cameras-<state>
// (see canonicalPathForKey()) and already have their own internal-link hub
// via getCctvLocationLinks(); this page covers the remainder that keep
// /state/<slug> as their canonical URL, so that URL space isn't a dead end.
const CANONICAL = `${SITE}/state`;

export const revalidate = 86400;

export const metadata = {
  title: 'AI CCTV Cameras by State | ArcisAI',
  description:
    'ArcisAI AI CCTV camera dealers, installation, and support by Indian state.',
  keywords: ['CCTV by state India', 'AI CCTV dealers by state'],
  alternates: { canonical: CANONICAL, languages: buildHreflang(CANONICAL) },
  openGraph: {
    title: 'AI CCTV Cameras by State | ArcisAI',
    description: 'ArcisAI AI CCTV camera dealers, installation, and support by Indian state.',
    url: CANONICAL,
    images: [{ url: '/og/location.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CCTV Cameras by State | ArcisAI',
    description: 'ArcisAI AI CCTV camera dealers, installation, and support by Indian state.',
    images: ['/og/location.jpg'],
  },
};

export default function StateHubPage() {
  const links = getStateLinks();

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${CANONICAL}#collection`,
    url: CANONICAL,
    name: 'AI CCTV Cameras by State',
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
      url: `${SITE}/state/${l.slug}`,
      name: l.title,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'States', item: CANONICAL },
      ],
  },
  ];

return (
  <>
  <SeoPageSchemaScripts schemas={schemas} />
  <SectionHub
  eyebrow="Coverage"
  title="AI CCTV Cameras by State"
  description="Find ArcisAI AI CCTV camera dealers, installation, and support in your state."
  links={links}
  basePath="state"
  />
    </>
  );
}
