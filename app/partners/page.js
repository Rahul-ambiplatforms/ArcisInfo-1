import Partners from '@/src/views/Partners/Partners';

export const metadata = {
  title: 'Become an ArcisAI Channel Partner | Dealer Program',
  description:
    "Join ArcisAI's dealer and channel partner program — India's BIS-ER & STQC-certified, Made-in-India AI CCTV brand. Priority intake for system integrators and resellers in Gujarat and Maharashtra.",
  keywords: [
    'ArcisAI channel partner',
    'ArcisAI dealer program',
    'AI CCTV dealer India',
    'CCTV distributor Gujarat',
    'CCTV distributor Maharashtra',
    'security camera reseller India',
    'system integrator CCTV',
    'Made in India CCTV partner',
  ],
  alternates: { canonical: 'https://arcisai.io/partners' },
  openGraph: {
    title: 'Become an ArcisAI Channel Partner | Dealer Program',
    description:
      "Partner with India's AI-first, BIS-ER & STQC-certified CCTV brand. High margins, compliance-ready products, and full partner support across Gujarat and Maharashtra.",
    url: 'https://arcisai.io/partners',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
};

export default function PartnersPage() {
  return <Partners />;
}
