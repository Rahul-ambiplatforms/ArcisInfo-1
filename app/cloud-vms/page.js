import MainProduct from '@/src/views/Series/MainProduct';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'ArcisAI Cloud VMS | Video Management for Multi-Site CCTV',
  description:
    'ArcisAI Cloud VMS brings live view, playback and alerts from cameras at multiple locations into one platform. Request a demo to see it with your setup.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/cloud-vms', languages: buildHreflang('https://arcisai.io/cloud-vms') },
  openGraph: {
    title: 'ArcisAI Cloud VMS | Video Management for Multi-Site CCTV',
    description: 'Live view, playback and alerts from multiple locations in one platform.',
    url: 'https://arcisai.io/cloud-vms',
    images: [{ url: '/og/vms.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Cloud VMS | Video Management for Multi-Site CCTV',
    description: 'Live view, playback and alerts from multiple locations in one platform.',
    images: ['/og/vms.jpg'],
  },
};

export default function CloudVMSPage() {
  return <MainProduct seriesId="cloud-vms" />;
}
