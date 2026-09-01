import Certifications from '@/src/views/Certifications/Certifications';

export const metadata = {
  title: 'ArcisAI Certifications | BIS-ER & STQC Certified CCTV',
  description:
    "ArcisAI's BIS-ER certified hardware (R-72003735 ER01:2024) and STQC-certified VMS, with ISO 27001:2022, CE, FCC, RoHS and ONVIF.",
  keywords: [
    'ArcisAI certifications', 'BIS-ER certified CCTV', 'STQC certified VMS',
    'NDAA compliant CCTV India', 'ISO 27001 CCTV', 'made in India CCTV certification',
  ],
  alternates: { canonical: 'https://arcisai.io/certifications' },
  openGraph: {
    title: 'ArcisAI Certifications | BIS-ER & STQC Certified CCTV',
    description: 'BIS-ER certified hardware + STQC-certified VMS. Made in India, NDAA compliant. Verify on official portals.',
    url: 'https://arcisai.io/certifications',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
};

export default function CertificationsPage() {
  return <Certifications />;
}
