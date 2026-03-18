import HomeDashboard from '@/src/pages/HomePage/HomeDashboard';

export const metadata = {
  title: 'ArcisAI - Enterprise AI CCTV Cameras | NDAA Compliant Smart Surveillance',
  description:
    'ArcisAI by Adiance is a leading enterprise AI CCTV manufacturer. NDAA-compliant, STQC-certified edge AI cameras with face recognition, ANPR, crowd analytics. Cloud VMS with GenAI video search (ArcisGPT). Bridge Device for legacy upgrades. Serving enterprise, government, and smart cities across US, UAE, UK, Singapore, and India.',
  keywords: [
    'AI CCTV cameras', 'NDAA compliant cameras', 'enterprise surveillance camera',
    'STQC certified CCTV', 'edge AI camera', 'cloud VMS', 'smart security system',
    'ArcisAI', 'face recognition camera', 'ANPR camera', 'GenAI video analytics',
    'Hikvision alternative',
  ],
  alternates: { canonical: 'https://arcisai.io' },
  openGraph: {
    title: 'ArcisAI - Enterprise AI CCTV Cameras | NDAA Compliant Smart Surveillance',
    description:
      'ArcisAI by Adiance delivers NDAA-compliant, STQC-certified edge AI cameras with cloud VMS and ArcisGPT.',
    url: 'https://arcisai.io',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <HomeDashboard />;
}
