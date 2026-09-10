import MediaKit from '@/src/views/Press/MediaKit';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'Press & Media Kit | ArcisAI — Facts, Certifications, Boilerplate';
const DESCRIPTION =
  'ArcisAI press & media kit: company boilerplate, verifiable BIS-ER (R-72003735) & STQC certifications, product range, spokesperson quote and press contact.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ArcisAI press kit', 'ArcisAI media kit', 'ArcisAI boilerplate', 'ArcisAI facts',
    'ArcisAI press contact', 'ArcisAI certifications', 'ArcisAI news',
  ],
  alternates: { canonical: `${SITE_URL}/press`, languages: buildHreflang(`${SITE_URL}/press`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/press`,
    type: 'website', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI Press & Media Kit' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Press & Media Kit', item: `${SITE_URL}/press` },
  ],
};

const aboutSchema = {
  '@context': 'https://schema.org', '@type': 'AboutPage',
  url: `${SITE_URL}/press`, name: TITLE, description: DESCRIPTION,
  about: { '@id': `${SITE_URL}/#organization` }, publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <MediaKit />
    </>
  );
}
