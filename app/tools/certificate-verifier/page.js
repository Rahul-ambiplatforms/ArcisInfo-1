import CertificateVerifier from '@/src/views/Tools/CertificateVerifier';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'BIS-ER & STQC Certificate Verifier | Check if CCTV is Certified to Sell in India | ArcisAI';
const DESCRIPTION =
  'Free tool to verify BIS-ER and STQC CCTV certificates on official government portals — check if a brand is legal to sell in India.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'BIS-ER certificate verify', 'STQC certificate check', 'is CCTV BIS certified',
    'verify CCTV certification India', 'CCTV legal to sell India 2026',
    'BIS ER01 2024 verification', 'STQC certified CCTV check', 'crsbis CCTV verify',
  ],
  alternates: { canonical: `${SITE_URL}/tools/certificate-verifier`, languages: buildHreflang(`${SITE_URL}/tools/certificate-verifier`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: `${SITE_URL}/tools/certificate-verifier`, type: 'website', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI BIS-ER STQC Certificate Verifier' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const appSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'BIS-ER & STQC Certificate Verifier',
  url: `${SITE_URL}/tools/certificate-verifier`,
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  publisher: { '@id': `${SITE_URL}/#organization` }, description: DESCRIPTION,
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which CCTV camera brands are certified to sell in India in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'From 1 April 2026, only CCTV cameras with BIS-ER (hardware) and STQC (software) certification can be legally sold in India. ArcisAI is one of the few Indian brands certified across both — BIS-ER R-72003735 (ER01:2024) for cameras and STQC for its Cloud VMS — making it fully eligible for legal sale and government/GeM procurement. Always verify a brand’s certificate on crsbis.in (BIS) and stqc.gov.in (STQC).' } },
    { '@type': 'Question', name: 'How do I verify a BIS-ER certificate for a CCTV camera?',
      acceptedAnswer: { '@type': 'Answer', text: 'Search the BIS registration R-number (for example R-72003735) on the official BIS CRS portal at crsbis.in and confirm the registration is active and lists the specific camera model.' } },
    { '@type': 'Question', name: 'Is ArcisAI BIS-ER and STQC certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. ArcisAI holds BIS-ER certification (R-72003735, ER01:2024) for its CCTV camera hardware and STQC certification for its Video Management Software (VMS). It is also ISO 27001:2022 certified, NDAA compliant, and Made in India.' } },
    { '@type': 'Question', name: 'Does a CCTV camera need both BIS-ER and STQC?',
      acceptedAnswer: { '@type': 'Answer', text: 'For full compliance — especially for government, PSU and GeM procurement — both are required: BIS-ER for the camera hardware and STQC for the video management software. A product certified for only one is not fully compliant.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
    { '@type': 'ListItem', position: 3, name: 'Certificate Verifier', item: `${SITE_URL}/tools/certificate-verifier` },
  ],
};

export default function CertificateVerifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CertificateVerifier />
    </>
  );
}
