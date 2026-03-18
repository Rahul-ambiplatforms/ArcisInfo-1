import Thankyou from '@/src/views/Thankyou';

export const metadata = {
  title: 'Thank You | ArcisAI',
  description: 'Thank you for contacting ArcisAI. Our team will reach out shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <Thankyou />;
}
