import AboutUs from '@/src/views/AboutUs/AboutUs';

export const metadata = {
  title: 'About ArcisAI | Adiance Technologies - Enterprise AI Surveillance',
  description:
    'ArcisAI is the flagship brand of Adiance Technologies. NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing, edge AI R&D, and global enterprise deployments across US, UAE, UK, and India.',
  keywords: [
    'about ArcisAI', 'Adiance Technologies', 'NDAA compliant manufacturer',
    'STQC certified', 'AI camera company', 'enterprise surveillance manufacturer',
  ],
  alternates: { canonical: 'https://arcisai.io/about-us' },
  openGraph: {
    title: 'About ArcisAI | Adiance Technologies',
    description: 'NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing and global deployments.',
    url: 'https://arcisai.io/about-us',
    images: [{ url: '/og/about.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
