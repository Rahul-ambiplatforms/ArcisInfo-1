import ComplianceGuide2026 from '@/src/views/Guides/ComplianceGuide2026';
import { buildHreflang } from '@/src/data/hreflang';
import Breadcrumbs from '@/src/Components/Breadcrumbs';

const SITE_URL = 'https://www.arcisai.io';
const TITLE = 'India CCTV Compliance 2026: BIS-ER & STQC Certification Explained | ArcisAI';
const DESCRIPTION =
  'Plain-language guide to India\'s 2026 CCTV certification rules — what BIS-ER and STQC mean, who needs them, and how to verify a brand\'s certificate.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'CCTV compliance India 2026', 'BIS-ER certification explained', 'STQC certification CCTV',
    'is my CCTV legal India', 'ER01 2024 CCTV', 'BIS CCTV registration', 'certified CCTV India guide',
    'how to verify CCTV certificate',
  ],
  alternates: { canonical: `${SITE_URL}/cctv-compliance-2026`, languages: buildHreflang(`${SITE_URL}/cctv-compliance-2026`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/cctv-compliance-2026`,
    type: 'article', siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'India CCTV Compliance 2026 Guide' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/home_hero_1.webp'], site: '@arcisai' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'India CCTV Compliance 2026: BIS-ER & STQC Certification Explained',
  description: DESCRIPTION,
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}/cctv-compliance-2026`,
  about: ['BIS-ER certification', 'STQC certification', 'CCTV compliance India 2026'],
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is non-certified CCTV legal to sell in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'The market is moving to certified-only CCTV, and government/GeM procurement already requires BIS-ER and STQC certification. Buying certified now avoids forced replacement later. Check crsbis.in and stqc.gov.in for the current effective date.' } },
    { '@type': 'Question', name: 'Does a CCTV camera need both BIS-ER and STQC?',
      acceptedAnswer: { '@type': 'Answer', text: 'For full compliance — especially government, PSU and GeM procurement — both are required: BIS-ER for the camera hardware and STQC for the video management software.' } },
    { '@type': 'Question', name: 'How do I check if a CCTV brand is really certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Search the BIS registration R-number on crsbis.in and the STQC certificate on stqc.gov.in. ArcisAI also offers a free certificate verifier tool.' } },
    { '@type': 'Question', name: 'Is ArcisAI certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — ArcisAI holds BIS-ER (R-72003735, ER01:2024) for hardware and STQC certification for its VMS, plus ISO 27001:2022, NDAA compliant, Made in India.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'CCTV Compliance 2026 Guide', item: `${SITE_URL}/cctv-compliance-2026` },
  ],
};

export default function ComplianceGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* SEO audit fix (2026-09-07, checklist item #59): visible trail
          matching the BreadcrumbList schema above — was JSON-LD-only before. */}
      <Breadcrumbs
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'CCTV Compliance 2026 Guide' },
        ]}
      />
      <ComplianceGuide2026 />
    </>
  );
}
