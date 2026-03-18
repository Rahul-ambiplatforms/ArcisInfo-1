import Series from '@/src/pages/Series/Series';

export const metadata = {
  title: 'S-Series Premium AI CCTV Cameras | ArcisAI',
  description:
    'Premium S-Series PTZ, Dome, Bullet AI cameras. 4G SIM, WiFi, PoE variants with edge AI, STQC certified. Enterprise-grade surveillance for demanding environments.',
  keywords: [
    'S-Series camera', 'PTZ camera', 'dome camera', 'bullet camera',
    '4G SIM camera', 'WiFi CCTV', 'PoE camera', 'edge AI STQC',
  ],
  alternates: { canonical: 'https://arcisai.io/s-series' },
  openGraph: {
    title: 'S-Series Premium AI CCTV Cameras | ArcisAI',
    description: 'Premium PTZ, Dome, Bullet AI cameras with 4G, WiFi, PoE. STQC certified.',
    url: 'https://arcisai.io/s-series',
    images: [{ url: '/og/s-series.jpg', width: 1200, height: 630 }],
  },
};

export default function SSeriesPage() {
  return <Series seriesId="s-series" />;
}
