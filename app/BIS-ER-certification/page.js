import BISCertification from '@/src/views/BISCertification/BISCertification';
import { buildHreflang } from '@/src/data/hreflang';
import { CERT_META } from '@/src/data/certification';

export const metadata = {
  title: 'BIS-ER Certified AI CCTV Cameras',
  description: CERT_META.bisEr.description,
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
  alternates: { canonical: 'https://arcisai.io/BIS-ER-certification', languages: buildHreflang('https://arcisai.io/BIS-ER-certification') },
  openGraph: {
    title: 'BIS-ER Certified AI CCTV Cameras | ArcisAI',
    description: CERT_META.bisEr.description,
    url: 'https://arcisai.io/BIS-ER-certification',
    images: [{ url: '/images/BIS_bg.png', width: 1512, height: 919 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIS-ER Certified AI CCTV Cameras | ArcisAI',
    description: CERT_META.bisEr.description,
    images: ['/images/BIS_bg.png'],
  },
};

export default function BISCertificationPage() {
  return <BISCertification />;
}
