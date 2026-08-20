import Thankyou from '@/src/views/Thankyou';

export const metadata = {
  title: 'Thank You',
  description: 'Thank you — your message has been received.',
  robots: { index: false, follow: false },
};

export default function BlogThankYouPage() {
  return <Thankyou />;
}
