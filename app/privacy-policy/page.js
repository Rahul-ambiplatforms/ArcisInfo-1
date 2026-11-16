import PrivacyPolicy from '@/src/views/PrivacyPolicy';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the ArcisAI privacy policy: what data we collect, how we use it, how we protect it and your choices.',
  alternates: { canonical: 'https://arcisai.io/privacy-policy', languages: buildHreflang('https://arcisai.io/privacy-policy') },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
