import AboutUs from '@/src/views/AboutUs/AboutUs';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'About ArcisAI | Adiance Technologies - Enterprise AI Surveillance',
  description:
    'ArcisAI is the flagship brand of Adiance Technologies — NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing and global deployments.',
  keywords: [
    'about ArcisAI', 'Adiance Technologies', 'NDAA compliant manufacturer',
    'STQC certified', 'AI camera company', 'enterprise surveillance manufacturer',
  ],
  alternates: { canonical: 'https://arcisai.io/about-us', languages: buildHreflang('https://arcisai.io/about-us') },
  openGraph: {
    title: 'About ArcisAI | Adiance Technologies',
    description: 'NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing and global deployments.',
    url: 'https://arcisai.io/about-us',
    images: [{ url: '/og/about.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ArcisAI | Adiance Technologies',
    description: 'NDAA-compliant, STQC-certified AI CCTV with in-house manufacturing and global deployments.',
    images: ['/og/about.jpg'],
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
