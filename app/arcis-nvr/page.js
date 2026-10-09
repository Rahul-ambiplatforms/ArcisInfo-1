import MainProduct from '@/src/views/Series/MainProduct';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'CCTV Network Video Recorders (NVRs) | 4 to 32 Channel',
  description:
    'Explore ArcisAI NVR options for local recording in 4, 8, 16 and 32 channel configurations. See how camera count, retention and storage affect sizing, and request a recommendation.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/arcis-nvr', languages: buildHreflang('https://arcisai.io/arcis-nvr') },
  openGraph: {
    title: 'CCTV Network Video Recorders (NVRs) | ArcisAI',
    description: 'Explore ArcisAI NVR options in 4, 8, 16 and 32 channel configurations.',
    url: 'https://arcisai.io/arcis-nvr',
    images: [{ url: '/og/nvr.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV Network Video Recorders (NVRs) | ArcisAI',
    description: 'Explore ArcisAI NVR options in 4, 8, 16 and 32 channel configurations.',
    images: ['/og/nvr.jpg'],
  },
};

export default function NVRPage() {
  return <MainProduct seriesId="arcis-nvr" />;
}
