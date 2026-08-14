import FAQHub from '@/src/views/FAQHub/FAQHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { allFaqs } from '@/src/data/faqHubData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';

const CANONICAL = `${SITE}/faq`;

export const metadata = {
  title: 'ArcisAI FAQ | AI CCTV Questions Answered',
  description:
    'Frequently asked questions about ArcisAI products, features, pricing, installation, and support. Everything you need to know about our AI surveillance cameras and VMS.',
  keywords: [
    'ArcisAI FAQ', 'AI CCTV questions', 'surveillance FAQ',
    'CCTV installation help', 'VMS support questions',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'ArcisAI FAQ | AI CCTV Questions Answered',
    description: 'Frequently asked questions about ArcisAI AI surveillance products and services.',
    url: CANONICAL,
    images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
  },
};

// Built here, in a SERVER component, so the FAQPage markup is present in the
// HTML the crawler receives. Previously this schema was emitted from the
// client-only <Helmet> inside FAQHub and never reached the server HTML.
// Sourced from the same faqHubData module the visible accordion renders, so
// the markup can't drift from the on-page content.
const faqSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${CANONICAL}#faq`,
    url: CANONICAL,
    name: 'ArcisAI FAQ',
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: CANONICAL },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <SeoPageSchemaScripts schemas={faqSchemas} />
      <FAQHub />
    </>
  );
}
