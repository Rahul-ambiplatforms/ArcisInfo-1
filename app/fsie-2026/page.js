import GA4Direct from '@/src/Components/GA4Direct';
import FSIE2026 from '@/src/views/Events/FSIE2026';
import { buildHreflang } from '@/src/data/hreflang';

// Direct GA4 connection for this page's generate_lead / cta_click events,
// scoped to this route only. See app/jalandhar-warriors/page.js for the full
// explanation: GTM-T5CXTDPH is the only thing wired to GA4 and we don't have
// access to it, so this page loads gtag.js itself and sends events straight
// to GA4 (G-FGCHHSNZ7D), bypassing GTM. send_page_view:false avoids a
// duplicate page_view (GTM already sends one).

// Bare title — the root layout applies the "%s | ArcisAI" template, so brand is
// appended exactly once. Canonical is absolute + self-referencing.
export const metadata = {
  title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
  description:
    'Meet ArcisAI at FSIE Mumbai 2026 (3–5 Sep), Fire & Security India Expo, Booth C13, Jio World Convention Centre.',
  keywords: [
    'FSIE', 'FSIE 2026', 'FSIE Mumbai', 'FSIE in Mumbai', 'FSIE Mumbai 2026', 'FSIE2026',
    'Fire & Security India Expo', 'Fire Security India Expo', 'ArcisAI FSIE 2026',
    'ArcisAI FSIE Mumbai', 'AI CCTV FSIE 2026', 'FSIE 2026 Booth C13',
    'who is exhibiting AI CCTV at FSIE 2026', 'AI CCTV demo Mumbai',
    'STQC certified CCTV', 'Jio World Convention Centre expo',
  ],
  alternates: { canonical: 'https://arcisai.io/fsie-2026', languages: buildHreflang('https://arcisai.io/fsie-2026') },
  openGraph: {
    title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
    description:
      'Live demos of AI CCTV, Cloud VMS and ArcisGPT at FSIE Mumbai 2026, 3–5 Sep. Book your meeting at Booth C13.',
    url: 'https://arcisai.io/fsie-2026',
    type: 'website',
    images: [{ url: '/og/events.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcisai',
    title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
    description: 'Live AI surveillance demos at FSIE Mumbai 2026. Book a meeting at Booth C13.',
    images: ['/og/events.jpg'],
  },
};

// Prerender to static HTML so crawlers (and AI crawlers) get the content and
// JSON-LD without executing JavaScript.
export const revalidate = 86400;

export default function FSIE2026Page() {
  return (
    <>
      <GA4Direct />
      <FSIE2026 />
    </>
  );
}
