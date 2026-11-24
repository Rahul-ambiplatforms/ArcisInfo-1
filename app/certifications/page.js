import Certifications from '@/src/views/Certifications/Certifications';
import { buildHreflang } from '@/src/data/hreflang';
import { CERT_META } from '@/src/data/certification';

export const metadata = {
  title: 'ArcisAI Certifications | BIS-ER & STQC Certified CCTV',
  description: CERT_META.certifications.description,
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/certifications', languages: buildHreflang('https://arcisai.io/certifications') },
  openGraph: {
    title: 'ArcisAI Certifications | BIS-ER & STQC Certified CCTV',
    description: CERT_META.certifications.description,
    url: 'https://arcisai.io/certifications',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Certifications | BIS-ER & STQC Certified CCTV',
    description: CERT_META.certifications.description,
    images: ['/og/home.jpg'],
  },
};

export default function CertificationsPage() {
  return <Certifications />;
}
