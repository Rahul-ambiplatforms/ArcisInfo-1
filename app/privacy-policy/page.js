import PrivacyPolicy from '@/src/views/PrivacyPolicy';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'Privacy Policy',
  description: 'ArcisAI privacy policy — how we collect, use, and protect your data.',
  alternates: { canonical: 'https://arcisai.io/privacy-policy', languages: buildHreflang('https://arcisai.io/privacy-policy') },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
