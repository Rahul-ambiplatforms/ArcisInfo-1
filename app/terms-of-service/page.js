import TermsOfService from '@/src/pages/TermsOfService';

export const metadata = {
  title: 'Terms of Service | ArcisAI',
  description: 'ArcisAI terms of service — the agreement governing use of our products and platform.',
  alternates: { canonical: 'https://arcisai.io/terms-of-service' },
  robots: { index: true, follow: false },
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
