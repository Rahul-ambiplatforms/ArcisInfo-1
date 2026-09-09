import WhyArcisAI from '@/src/views/WhyArcisAI/WhyArcisAI';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'Why Choose ArcisAI | Benefits of AI CCTV Surveillance',
  description:
    'Discover why enterprises worldwide choose ArcisAI. NDAA compliance, STQC certification, in-house manufacturing, edge AI, and 24/7 cloud VMS — built for scale.',
  keywords: [
    'why ArcisAI', 'benefits AI CCTV', 'NDAA compliant advantages',
    'STQC certified benefits', 'enterprise surveillance advantages',
  ],
  alternates: { canonical: 'https://arcisai.io/why-choose-arcisai', languages: buildHreflang('https://arcisai.io/why-choose-arcisai') },
  openGraph: {
    title: 'Why Choose ArcisAI | Benefits of AI CCTV Surveillance',
    description: 'Discover why enterprises worldwide choose ArcisAI for AI-powered surveillance.',
    url: 'https://arcisai.io/why-choose-arcisai',
    images: [{ url: '/og/why-arcisai.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose ArcisAI | Benefits of AI CCTV Surveillance',
    description: 'Discover why enterprises worldwide choose ArcisAI for AI-powered surveillance.',
    images: ['/og/why-arcisai.jpg'],
  },
};

export default function WhyChoosePage() {
  return <WhyArcisAI />;
}
