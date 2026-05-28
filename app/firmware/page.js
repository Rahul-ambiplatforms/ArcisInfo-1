import Firmware from '@/src/views/Firmware/Firmware';

const SITE_URL = 'https://www.arcisai.io';
const TITLE = 'Firmware Downloads | Camera Firmware Updates | ArcisAI';
const DESCRIPTION =
  'Download the latest firmware updates and release notes for ArcisAI security cameras. Keep your surveillance hardware secure and up to date.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ArcisAI firmware', 'CCTV firmware update', 'AI camera firmware',
    'IP camera firmware download', 'surveillance camera updates', 'ArcisAI release notes',
  ],
  alternates: { canonical: `${SITE_URL}/firmware` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/firmware`,
    type: 'website',
    siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI Firmware' }],
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
  '@id': `${SITE_URL}/firmware#webpage`,
  url: `${SITE_URL}/firmware`,
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
    { '@type': 'ListItem', position: 2, name: 'Firmware', item: `${SITE_URL}/firmware` },
  ],
};

export default function FirmwarePage() {
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
      <Firmware />
    </>
  );
}