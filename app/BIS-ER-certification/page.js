import BISCertification from '@/src/views/BISCertification/BISCertification';

export const metadata = {
  title: 'BIS-ER Certified AI CCTV Cameras',
  description:
    'ArcisAI cameras are now BIS-ER certified (R-72003735 ER01:2024). Compliant, secure, and deployment-ready AI surveillance systems for India.',
  keywords: [
    'BIS certified CCTV', 'BIS-ER certification', 'ArcisAI BIS',
    'R-72003735', 'Indian surveillance compliance', 'BIS certified cameras',
  ],
  alternates: { canonical: 'https://arcisai.io/BIS-ER-certification' },
  openGraph: {
    title: 'BIS-ER Certified AI CCTV Cameras | ArcisAI',
    description: 'ArcisAI cameras are now BIS-ER certified. Compliant, secure, and deployment-ready AI surveillance for India.',
    url: 'https://arcisai.io/BIS-ER-certification',
    images: [{ url: '/images/BIS_bg.png', width: 1512, height: 919 }],
  },
};

export default function BISCertificationPage() {
  return <BISCertification />;
}
