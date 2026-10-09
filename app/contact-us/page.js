import ContactUs from '@/src/views/ContactUs/ContactUs';
import { buildHreflang } from '@/src/data/hreflang';
import GA4Direct from '@/src/Components/GA4Direct';

export const metadata = {
  title: 'Contact ArcisAI | CCTV Quote, Demo & Consultation',
  description:
    'Request a CCTV quote, product demo or technical consultation from ArcisAI. Tell us about your site and requirement and the team will get back to you.',
  // SEO fix (2026-09-30, SEO-018): removed obsolete meta-keywords tag.
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
    title: 'Contact ArcisAI | CCTV Quote, Demo & Consultation',
    description: 'Request a CCTV quote, demo or technical consultation from ArcisAI.',
    url: 'https://arcisai.io/contact-us',
    images: [{ url: '/og/contact.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ArcisAI | CCTV Quote, Demo & Consultation',
    description: 'Request a CCTV quote, demo or technical consultation from ArcisAI.',
    images: ['/og/contact.jpg'],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <GA4Direct />
      <ContactUs />
    </>
  );
}
