import Event from '@/src/views/EventPage/Event';

export const metadata = {
  title: 'Events | ArcisAI Surveillance Trade Shows & Conferences',
  description:
    'Meet ArcisAI at global surveillance and security trade shows. Demo AI cameras, VMS, and ArcisGPT live. Connect with our team at IFSEC, Convergence India, and more.',
  keywords: [
    'ArcisAI events', 'surveillance trade show', 'CCTV exhibition',
    'security conference', 'IFSEC', 'Convergence India',
  ],
  alternates: { canonical: 'https://arcisai.io/event' },
  openGraph: {
    title: 'Events | ArcisAI Surveillance Trade Shows & Conferences',
    description: 'Meet ArcisAI at global surveillance and security trade shows.',
    url: 'https://arcisai.io/event',
    images: [{ url: '/og/events.jpg', width: 1200, height: 630 }],
  },
};

export default function EventPage() {
  return <Event />;
}
