import Thankyou from '@/src/views/Thankyou';

export const metadata = {
  title: 'Thank You | ArcisAI Blog',
  description: 'Thank you — your message has been received.',
  robots: { index: false, follow: false },
};

export default function BlogThankYouPage() {
  return <Thankyou />;
}
