import ContactUs from '@/src/views/ContactUs/ContactUs';
import { buildHreflang } from '@/src/data/hreflang';

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
  // here so the alternates are actually emitted. Widened to the sitewide
  // locale set (src/data/hreflang.js) for consistency with every other page
  // fixed in the 2026-09-07 hreflang sweep.
  alternates: {
    canonical: 'https://arcisai.io/contact-us',
    languages: buildHreflang('https://arcisai.io/contact-us'),
  },
  openGraph: {
    title: 'Contact ArcisAI | Get Surveillance Solutions',
    description: 'Request a demo, pricing, or technical consultation for AI surveillance.',
    url: 'https://arcisai.io/contact-us',
    images: [{ url: '/og/contact.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ArcisAI | Get Surveillance Solutions',
    description: 'Request a demo, pricing, or technical consultation for AI surveillance.',
    images: ['/og/contact.jpg'],
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
