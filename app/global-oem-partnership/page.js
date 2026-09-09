import OEMExport from '@/src/views/Partners/OEMExport';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'International CCTV Distribution & OEM Partnership | NDAA-Compliant Made-in-India CCTV';
const DESCRIPTION =
  'Distribute ArcisAI or white-label NDAA-compliant, Made-in-India AI CCTV for US, UK, EU, GCC & ANZ markets.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'CCTV OEM India', 'CCTV ODM manufacturer India', 'white label CCTV', 'NDAA compliant CCTV OEM',
    'AI CCTV OEM partner', 'Made in India CCTV export', 'CCTV distributor international',
    'private label CCTV cameras', 'surveillance OEM India', 'export CCTV manufacturer India',
  ],
  alternates: { canonical: `${SITE_URL}/global-oem-partnership`, languages: buildHreflang(`${SITE_URL}/global-oem-partnership`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/global-oem-partnership`,
    type: 'website', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI International OEM / Export Partnership' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does ArcisAI offer OEM / white-label CCTV manufacturing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Through Adiance Technologies (Ahmedabad), you can white-label NDAA-compliant, Made-in-India AI cameras with your branding on the housing, firmware, packaging, mobile apps and a Cloud VMS on your own domain. MOQ starts at 100 units per SKU.' } },
    { '@type': 'Question', name: 'Which international markets does ArcisAI support?',
      acceptedAnswer: { '@type': 'Answer', text: 'ArcisAI works with distributors, integrators and brands across the US, UK, EU, GCC and ANZ, where NDAA-aligned, non-China supply-chain compliance increasingly decides tenders.' } },
    { '@type': 'Question', name: 'What is the minimum order quantity for OEM CCTV?',
      acceptedAnswer: { '@type': 'Answer', text: 'OEM / white-label orders start from 100 units per SKU, so partners can validate a market before scaling.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Global OEM & Distribution Partnership', item: `${SITE_URL}/global-oem-partnership` },
  ],
};

export default function GlobalOEMPartnershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OEMExport />
    </>
  );
}
