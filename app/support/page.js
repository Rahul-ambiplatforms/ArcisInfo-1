import SupportHub from '@/src/views/Support/SupportHub';

export const metadata = {
  title: 'ArcisAI Support Center | Camera FAQs & Troubleshooting',
  description:
    'Browse all ArcisAI camera FAQs — troubleshoot offline cameras, video quality, recordings, cloud storage, network access, alerts, firmware updates, and more.',
  keywords: [
    'ArcisAI support',
    'ArcisAI FAQs',
    'AI CCTV FAQs',
    'camera troubleshooting',
    'camera offline help',
    'camera setup support',
    'cloud VMS help',
    'firmware update issues',
    'ArcisAI help center',
  ],
  alternates: { canonical: 'https://arcisai.io/support' },
  openGraph: {
    title: 'ArcisAI Support Center | Camera FAQs & Troubleshooting',
    description:
      'Search and browse FAQs for ArcisAI cameras and cloud VMS — pick a topic to open the related questions and answers.',
    url: 'https://arcisai.io/support',
    images: [{ url: '/og/faq.jpg', width: 1200, height: 630 }],
  },
};

export default function SupportPage() {
  return <SupportHub />;
}
