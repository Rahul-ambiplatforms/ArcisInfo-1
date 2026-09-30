import MainProduct from '@/src/views/Series/MainProduct';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
  description:
    'Cloud & on-premise VMS with STQC certification — multi-location monitoring, AI alerts, smart playback, and ArcisGPT search.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/cloud-vms', languages: buildHreflang('https://arcisai.io/cloud-vms') },
  openGraph: {
    title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
    description: 'STQC-certified Cloud VMS with multi-location monitoring, AI alerts, and ArcisGPT search.',
    url: 'https://arcisai.io/cloud-vms',
    images: [{ url: '/og/vms.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
    description: 'STQC-certified Cloud VMS with multi-location monitoring, AI alerts, and ArcisGPT search.',
    images: ['/og/vms.jpg'],
  },
};

export default function CloudVMSPage() {
  return <MainProduct seriesId="cloud-vms" />;
}
