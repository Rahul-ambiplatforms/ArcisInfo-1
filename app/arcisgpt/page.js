import MainProduct from '@/src/views/Series/MainProduct';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'ArcisGPT | Search CCTV Footage in Plain Language',
  description:
    'ArcisGPT is the natural-language search layer for ArcisAI surveillance video: describe what you are looking for and review matching footage. Request a demo.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/arcisgpt', languages: buildHreflang('https://arcisai.io/arcisgpt') },
  openGraph: {
    title: 'ArcisGPT | Search CCTV Footage in Plain Language',
    description: 'Describe what you are looking for and review matching surveillance footage.',
    url: 'https://arcisai.io/arcisgpt',
    images: [{ url: '/og/arcisgpt.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisGPT | Search CCTV Footage in Plain Language',
    description: 'Describe what you are looking for and review matching surveillance footage.',
    images: ['/og/arcisgpt.jpg'],
  },
};

export default function ArcisGPTPage() {
  return <MainProduct seriesId="arcisgpt" />;
}
