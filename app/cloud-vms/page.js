import MainProduct from '@/src/views/Series/MainProduct';

export const metadata = {
  title: 'ArcisAI Cloud VMS | STQC Certified Video Management System',
  description:
    'Cloud & on-premise VMS with STQC certification — multi-location monitoring, AI alerts, smart playback, and ArcisGPT search.',
  keywords: [
    'STQC certified VMS India', 'STQC certified video management software',
    'made in India cloud VMS', 'Indian cloud CCTV software', 'cloud VMS',
    'video management system', 'AI video management software India',
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
