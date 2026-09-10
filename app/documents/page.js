import Documents from '@/src/views/Documents/Documents';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'Documents & User Manuals | ArcisAI';
const DESCRIPTION =
  'Download official ArcisAI user manuals, datasheets, and product guides — installation and operation docs for Eco-Series, S-Series, NVRs, and Bridge Devices.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'ArcisAI documents', 'ArcisAI user manual', 'Eco-Series user manual',
    'CCTV camera manual', 'AI camera installation guide', 'ArcisAI datasheet',
    'surveillance camera documentation',
  ],
  alternates: { canonical: `${SITE_URL}/documents`, languages: buildHreflang(`${SITE_URL}/documents`) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/documents`,
    type: 'website',
    siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI Documents' }],
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
  '@id': `${SITE_URL}/documents#webpage`,
  url: `${SITE_URL}/documents`,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'DigitalDocument',
        position: 1,
        name: 'ArcisAI Eco-Series User Manual',
        description:
          'Official user manual for the ArcisAI Eco-Series AI CCTV cameras. Installation, configuration, and operation guide.',
        url: `${SITE_URL}/pdfs/User_manual_Eco-Series.pdf`,
        encodingFormat: 'application/pdf',
        inLanguage: 'en',
        isAccessibleForFree: true,
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Documents', item: `${SITE_URL}/documents` },
  ],
};

export default function DocumentsPage() {
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
      <Documents />
    </>
  );
}