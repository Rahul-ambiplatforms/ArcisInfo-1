import MainProduct from '@/src/pages/Series/MainProduct';

export const metadata = {
  title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
  description:
    'Cloud & on-premise VMS with STQC certification. Multi-location monitoring, AI alerts, smart playback, ArcisGPT search, and centralized device management for enterprise deployments.',
  keywords: [
    'cloud VMS', 'video management system', 'STQC certified VMS',
    'surveillance software', 'centralized monitoring', 'cloud CCTV',
  ],
  alternates: { canonical: 'https://arcisai.io/cloud-vms' },
  openGraph: {
    title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
    description: 'STQC-certified Cloud VMS with multi-location monitoring, AI alerts, and ArcisGPT search.',
    url: 'https://arcisai.io/cloud-vms',
    images: [{ url: '/og/vms.jpg', width: 1200, height: 630 }],
  },
};

export default function CloudVMSPage() {
  return <MainProduct seriesId="cloud-vms" />;
}
