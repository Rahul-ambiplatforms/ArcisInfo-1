import Glossary from '@/src/views/Glossary/Glossary';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'AI Surveillance Glossary | CCTV & Security Terms',
  description:
    'Complete glossary of AI surveillance, CCTV, video analytics, and security technology terms. Understand NDAA, STQC, ANPR, edge AI, VMS, and more.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/glossary', languages: buildHreflang('https://arcisai.io/glossary') },
  openGraph: {
    title: 'AI Surveillance Glossary | ArcisAI',
    description: 'Complete glossary of AI surveillance and CCTV technology terms.',
    url: 'https://arcisai.io/glossary',
    images: [{ url: '/og/glossary.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Surveillance Glossary | ArcisAI',
    description: 'Complete glossary of AI surveillance and CCTV technology terms.',
    images: ['/og/glossary.jpg'],
  },
};

export default function GlossaryPage() {
  return <Glossary />;
}
