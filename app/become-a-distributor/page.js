import DistributorProgram from '@/src/views/Partners/DistributorProgram';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'Become an ArcisAI CCTV Dealer / Distributor in India | Channel Partner Program';
const DESCRIPTION =
  'Become a dealer or distributor for ArcisAI — India\'s STQC & BIS-ER certified, AI-native, Made-in-India CCTV brand. Tender-ready, with healthy margins.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ArcisAI dealer', 'ArcisAI distributor', 'CCTV dealership India', 'CCTV distributor India',
    'become a CCTV dealer', 'AI CCTV distributor India', 'Made in India CCTV dealer',
    'CCTV channel partner India', 'STQC certified CCTV distributor', 'GeM CCTV supplier partner',
  ],
  alternates: { canonical: `${SITE_URL}/become-a-distributor`, languages: buildHreflang(`${SITE_URL}/become-a-distributor`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/become-a-distributor`,
    type: 'website', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI Dealer & Distributor Program' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I become an ArcisAI CCTV dealer or distributor in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Apply via WhatsApp (+91 96877 79999), email marketing@arcisai.io, or the enquiry form. Share your region, business type and CCTV experience. The channel team runs a discovery call covering pricing tiers, margins, territory, MOQ and support, then onboards you with brand assets, training and demo units.' } },
    { '@type': 'Question', name: 'Why sell ArcisAI CCTV cameras?',
      acceptedAnswer: { '@type': 'Answer', text: 'ArcisAI is STQC and BIS-ER (ER01:2024) certified and Made in India by Adiance Technologies. It is tender-ready for GeM, PSU and government projects that now require certified, Made-in-India CCTV, is AI-native (edge AI + ArcisGPT Gen-AI search), and offers competitive dealer economics with full sales and marketing support.' } },
    { '@type': 'Question', name: 'Who can become an ArcisAI channel partner?',
      acceptedAnswer: { '@type': 'Answer', text: 'System integrators, regional CCTV distributors and wholesalers, IT/networking and ELV contractors, GeM/government-tender partners, retail and commercial installers, and telecom/ISP field-service partners across India.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Become a Distributor', item: `${SITE_URL}/become-a-distributor` },
  ],
};

export default function BecomeADistributorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DistributorProgram />
    </>
  );
}
