import Tools from '@/src/views/Tools/Tools';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://www.arcisai.io';
const TITLE = 'Tools & Software Downloads | ArcisAI';
const DESCRIPTION =
  'Download the latest ArcisAI tools, configuration utilities, and software updates for ArcisAI cameras and the Cloud VMS, along with their release notes.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'ArcisAI tools', 'ArcisAI software', 'ArcisAI configurator',
    'camera configuration tool', 'CCTV software download',
    'AI camera utilities', 'ArcisAI updates',
  ],
  alternates: { canonical: `${SITE_URL}/tools`, languages: buildHreflang(`${SITE_URL}/tools`) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/tools`,
    type: 'website',
    siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/home_hero_1.webp'],
    site: '@arcisai',
    creator: '@arcisai',
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/tools#webpage`,
  url: `${SITE_URL}/tools`,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Tools />
    </>
  );
}
