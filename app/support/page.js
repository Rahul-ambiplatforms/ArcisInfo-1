import SupportHub from '@/src/views/Support/SupportHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { supportCategories } from '@/src/views/Support/supportData';
import { buildHreflang } from '@/src/data/hreflang';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';

// SEO audit fix (2026-09-19, technical SEO pass): this hub only shows
// category cards, not full Q&A text, so a FAQPage schema here would claim
// content the page doesn't display — that's what the 8 individual
// /support/[category] pages carry (see that page.js). This page gets
// CollectionPage + ItemList (one entry per category, matching the 8 cards
// actually rendered) + BreadcrumbList instead.
const CANONICAL = `${SITE}/support`;

export const metadata = {
  title: 'ArcisAI Support Center | Camera FAQs & Troubleshooting',
  description:
    'Browse all ArcisAI camera FAQs — troubleshoot offline cameras, video quality, recordings, cloud storage, network access, alerts, firmware updates, and more.',
  keywords: [
    'ArcisAI support',
    'ArcisAI FAQs',
    'AI CCTV FAQs',
    'camera troubleshooting',
    'camera offline help',
    'camera setup support',
    'cloud VMS help',
    'firmware update issues',
    'ArcisAI help center',
    ],
  alternates: { canonical: 'https://arcisai.io/support', languages: buildHreflang('https://arcisai.io/support') },
  openGraph: {
    title: 'ArcisAI Support Center | Camera FAQs & Troubleshooting',
    description:
      'Search and browse FAQs for ArcisAI cameras and cloud VMS — pick a topic to open the related questions and answers.',
    url: 'https://arcisai.io/support',
    images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Support Center | Camera FAQs & Troubleshooting',
    description: 'Search and browse FAQs for ArcisAI cameras and cloud VMS — pick a topic to open the related questions and answers.',
    images: ['/og/faq.jpg'],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${CANONICAL}#collection`,
    url: CANONICAL,
    name: 'ArcisAI Support Center',
    description: metadata.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${CANONICAL}#itemlist`,
    itemListElement: supportCategories.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${CANONICAL}/${cat.slug}`,
      name: cat.title,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${CANONICAL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Support', item: CANONICAL },
      ],
  },
  ];

export default function SupportPage() {
  return (
    <>
    <SeoPageSchemaScripts schemas={schemas} />
    <SupportHub />
    </>
  );
}
