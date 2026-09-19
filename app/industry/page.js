import SectionHub from '@/src/views/SectionHub/SectionHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { getIndustryLinks } from '@/src/data/resolveSeoPageData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO audit fix (2026-09-19, technical SEO pass): /industry had no page at
// its own root — only /industry/[pageSlug] existed — so the bare URL 404'd
// (confirmed live) and GSC's Page Indexing report listed it among "Not found
// (404)". getIndustryLinks() already existed (built 2026-09-08 for the
// per-page related-links block) but nothing rendered it as a real, visible,
// crawlable hub — it's the same data source, used for the first time as an
// actual page. See src/views/SectionHub/SectionHub.jsx for why this also
// matters for the 19 "Discovered - currently not indexed" pages: a hub page
// that links every entry in a section is a much stronger discovery signal
// than the sitemap alone.
const CANONICAL = `${SITE}/industry`;

export const revalidate = 86400;

export const metadata = {
  title: 'AI CCTV Solutions by Industry | ArcisAI',
  description:
    'AI-powered CCTV surveillance solutions for every industry — retail, healthcare, education, banking, logistics, manufacturing, transportation, and more.',
  keywords: ['AI CCTV by industry', 'industry surveillance solutions', 'AI CCTV use cases'],
  alternates: { canonical: CANONICAL, languages: buildHreflang(CANONICAL) },
  openGraph: {
    title: 'AI CCTV Solutions by Industry | ArcisAI',
    description: 'Browse ArcisAI AI CCTV solutions built for your industry.',
    url: CANONICAL,
    images: [{ url: '/og/location.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CCTV Solutions by Industry | ArcisAI',
    description: 'Browse ArcisAI AI CCTV solutions built for your industry.',
    images: ['/og/location.jpg'],
  },
};

export default function IndustryHubPage() {
  const links = getIndustryLinks();

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${CANONICAL}#collection`,
    url: CANONICAL,
    name: 'AI CCTV Solutions by Industry',
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
      url: `${SITE}/industry/${l.slug}`,
      name: l.title,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: CANONICAL },
      ],
  },
  ];

return (
  <>
  <SeoPageSchemaScripts schemas={schemas} />
  <SectionHub
  eyebrow="Solutions"
  title="AI CCTV Solutions by Industry"
  description="AI-powered surveillance built for the way your industry actually works — pick your sector to see the cameras, analytics, and compliance features that matter for it."
  links={links}
  basePath="industry"
  />
    </>
  );
}
