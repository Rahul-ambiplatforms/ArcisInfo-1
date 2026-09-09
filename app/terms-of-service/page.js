import TermsOfService from '@/src/views/TermsOfService';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'Terms of Service',
  description: 'ArcisAI terms of service — the agreement governing use of our products and platform.',
  alternates: { canonical: 'https://arcisai.io/terms-of-service', languages: buildHreflang('https://arcisai.io/terms-of-service') },
  robots: { index: true, follow: false },
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
