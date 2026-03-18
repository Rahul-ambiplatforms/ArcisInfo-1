import PrivacyPolicy from '@/src/pages/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy | ArcisAI',
  description: 'ArcisAI privacy policy — how we collect, use, and protect your data.',
  alternates: { canonical: 'https://arcisai.io/privacy-policy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
