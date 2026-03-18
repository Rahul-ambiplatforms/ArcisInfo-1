import Glossary from '@/src/views/Glossary/Glossary';

export const metadata = {
  title: 'AI Surveillance Glossary | CCTV & Security Terms | ArcisAI',
  description:
    'Complete glossary of AI surveillance, CCTV, video analytics, and security technology terms. Understand NDAA, STQC, ANPR, edge AI, VMS, and more.',
  keywords: [
    'surveillance glossary', 'CCTV terms', 'AI security terminology',
    'video analytics glossary', 'NDAA definition', 'VMS glossary',
  ],
  alternates: { canonical: 'https://arcisai.io/glossary' },
  openGraph: {
    title: 'AI Surveillance Glossary | ArcisAI',
    description: 'Complete glossary of AI surveillance and CCTV technology terms.',
    url: 'https://arcisai.io/glossary',
    images: [{ url: '/og/glossary.jpg', width: 1200, height: 630 }],
  },
};

export default function GlossaryPage() {
  return <Glossary />;
}
