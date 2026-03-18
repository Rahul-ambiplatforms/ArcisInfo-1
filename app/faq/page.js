import FAQHub from '@/src/pages/FAQHub/FAQHub';

export const metadata = {
  title: 'ArcisAI FAQ | AI CCTV Questions Answered',
  description:
    'Frequently asked questions about ArcisAI products, features, pricing, installation, and support. Everything you need to know about our AI surveillance cameras and VMS.',
  keywords: [
    'ArcisAI FAQ', 'AI CCTV questions', 'surveillance FAQ',
    'CCTV installation help', 'VMS support questions',
  ],
  alternates: { canonical: 'https://arcisai.io/faq' },
  openGraph: {
    title: 'ArcisAI FAQ | AI CCTV Questions Answered',
    description: 'Frequently asked questions about ArcisAI AI surveillance products and services.',
    url: 'https://arcisai.io/faq',
    images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
  },
};

export default function FAQPage() {
  return <FAQHub />;
}
