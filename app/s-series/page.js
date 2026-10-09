import Series from '@/src/views/Series/Series';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'S-Series AI CCTV Cameras | Bullet, Dome & PTZ',
  description:
    'Compare ArcisAI S-Series bullet, dome and PTZ cameras and their 4G, Wi-Fi and PoE options. Check supported analytics by model and request a recommendation.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/s-series', languages: buildHreflang('https://arcisai.io/s-series') },
  openGraph: {
    title: 'S-Series AI CCTV Cameras | Bullet, Dome & PTZ | ArcisAI',
    description: 'Compare S-Series bullet, dome and PTZ cameras with 4G, Wi-Fi and PoE options.',
    url: 'https://arcisai.io/s-series',
    images: [{ url: '/og/s-series.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S-Series AI CCTV Cameras | Bullet, Dome & PTZ | ArcisAI',
    description: 'Compare S-Series bullet, dome and PTZ cameras with 4G, Wi-Fi and PoE options.',
    images: ['/og/s-series.jpg'],
  },
};

export default function SSeriesPage() {
  return <Series seriesId="s-series" />;
}
