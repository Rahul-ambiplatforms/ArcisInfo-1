import StorageCalculator from '@/src/views/Tools/StorageCalculator';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://www.arcisai.io';
const TITLE = 'CCTV Storage Calculator | NVR & Hard Disk Size Estimator | ArcisAI';
const DESCRIPTION =
  'Free CCTV storage calculator — estimate NVR / hard disk size from camera count, resolution, codec and retention days. Accurate H.265/H.264 bitrate model by ArcisAI.';

export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ""),
  description: DESCRIPTION,
  keywords: [
    'CCTV storage calculator', 'NVR storage calculator', 'CCTV hard disk calculator',
    'how much storage for CCTV', 'CCTV storage size estimator', 'IP camera storage calculator',
    'NVR hard disk size', 'CCTV recording storage calculator',
  ],
  alternates: { canonical: `${SITE_URL}/tools/cctv-storage-calculator`, languages: buildHreflang(`${SITE_URL}/tools/cctv-storage-calculator`) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/tools/cctv-storage-calculator`,
    type: 'website',
    siteName: 'ArcisAI',
    images: [{ url: '/images/home_hero_1.webp', width: 1200, height: 630, alt: 'ArcisAI CCTV Storage Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/home_hero_1.webp'],
    site: '@arcisai',
  },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CCTV Storage Calculator',
  url: `${SITE_URL}/tools/cctv-storage-calculator`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  publisher: { '@id': `${SITE_URL}/#organization` },
  description: DESCRIPTION,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much storage does a CCTV camera need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At 1 Mbps continuous recording a camera uses about 0.45 GB per hour, or roughly 10.8 GB per day. A 4MP H.265 camera (~4 Mbps) recording 24/7 needs about 43 GB per day, so 30 days of retention is around 1.3 TB per camera.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate NVR hard disk size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiply: number of cameras × bitrate (Mbps) × 0.45 × recording hours per day × retention days, then add about 10% headroom and divide by 1000 for TB. ArcisAI’s free calculator does this automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does H.265 reduce CCTV storage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. H.265 (HEVC) typically halves the bitrate of H.264 for the same image quality, so it roughly halves the storage required.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
    { '@type': 'ListItem', position: 3, name: 'CCTV Storage Calculator', item: `${SITE_URL}/tools/cctv-storage-calculator` },
  ],
};

export default function StorageCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StorageCalculator />
    </>
  );
}
