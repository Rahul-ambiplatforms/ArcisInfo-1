import MarketReport2026 from '@/src/views/Guides/MarketReport2026';

const SITE_URL = 'https://www.arcisai.io';
const TITLE = 'India CCTV Market & Certification Report 2026 | BIS-ER, STQC & Market Shift | ArcisAI';
const DESCRIPTION =
  'Data report on India\'s shift to certified surveillance in 2026 — the BIS-ER & STQC mandate, market impact, certification requirements, and what it means for CCTV buyers. By ArcisAI.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'India CCTV market 2026', 'CCTV certification report India', 'BIS-ER STQC market impact',
    'India CCTV compliance data', 'CCTV industry India 2026', 'Made in India CCTV market',
  ],
  alternates: { canonical: `${SITE_URL}/india-cctv-market-report-2026` },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/india-cctv-market-report-2026`,
    type: 'article', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'India CCTV Market & Certification Report 2026' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Report',
  headline: 'India CCTV Market & Certification Report 2026',
  description: DESCRIPTION,
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}/india-cctv-market-report-2026`,
  about: ['India CCTV market', 'BIS-ER certification', 'STQC certification', 'CCTV compliance 2026'],
  datePublished: '2026-06-18',
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is changing in the India CCTV market in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'India is moving to a certified-only CCTV market under BIS-ER (ER01:2024) and STQC certification. Cameras (hardware) and video software must be certified to be sold, with government/GeM procurement already enforcing it — shifting demand toward certified, Made-in-India brands.' } },
    { '@type': 'Question', name: 'Do CCTV cameras need both BIS-ER and STQC certification in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — for full compliance, especially government/PSU/GeM, both are required: BIS-ER for camera hardware and STQC for the video management software.' } },
    { '@type': 'Question', name: 'How can buyers verify a CCTV brand is certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Search the BIS registration R-number on crsbis.in and the STQC certificate on stqc.gov.in. ArcisAI also provides a free certificate verifier tool.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'India CCTV Market & Certification Report 2026', item: `${SITE_URL}/india-cctv-market-report-2026` },
  ],
};

export default function MarketReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketReport2026 />
    </>
  );
}
