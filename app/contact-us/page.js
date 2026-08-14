import ContactUs from '@/src/views/ContactUs/ContactUs';

export const metadata = {
  title: 'Contact ArcisAI | Get Surveillance Solutions',
  description:
    'Contact ArcisAI for demos, pricing, and technical consultation. Request a quote for AI CCTV, VMS, Bridge Device, or custom surveillance solutions.',
  keywords: [
    'contact ArcisAI', 'demo request', 'pricing inquiry',
    'technical support', 'surveillance quote',
  ],
  // The en-IN / en / x-default hreflang set used to be declared inside
  // ContactUs.js via <Helmet>, where it never reached the server HTML. Moved
  // here so the alternates are actually emitted.
  alternates: {
    canonical: 'https://arcisai.io/contact-us',
    languages: {
      'en-IN': 'https://arcisai.io/contact-us',
      en: 'https://arcisai.io/contact-us',
      'x-default': 'https://arcisai.io/contact-us',
    },
  },
  openGraph: {
    title: 'Contact ArcisAI | Get Surveillance Solutions',
    description: 'Request a demo, pricing, or technical consultation for AI surveillance.',
    url: 'https://arcisai.io/contact-us',
    images: [{ url: '/og/contact.jpg', width: 1200, height: 630 }],
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
