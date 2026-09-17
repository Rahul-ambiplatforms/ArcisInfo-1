import GA4Direct from '@/src/Components/GA4Direct';
import JalandharWarriors from '@/src/views/Campaigns/JalandharWarriors';
import { buildHreflang } from '@/src/data/hreflang';

// Direct GA4 connection for this page's cta_click event, scoped to this route
// only. The site-wide GTM container (GTM-T5CXTDPH) is the only thing wired to
// GA4 (measurement ID G-FGCHHSNZ7D) — there is no separate gtag.js loaded
// globally, so dataLayer.push() events never reach GA4 unless a GTM tag is
// configured to relay them. We don't have access to that GTM container, so
// this page loads gtag.js itself and sends the event directly, bypassing GTM
// for this one event. send_page_view:false stops it from double-counting the
// page_view GTM already sends.

// Permanent entity hub. Bare title → root layout appends "| ArcisAI" once.
// Absolute self-referencing canonical.
export const metadata = {
  title: 'Jalandhar Warriors: Official Campaign Hub',
  description:
    'The official Jalandhar Warriors campaign hub, powered by ArcisAI, India’s Made-in-India, STQC & BIS-ER certified AI CCTV brand.',
  keywords: [
    'Jalandhar Warriors', 'ArcisAI', 'AI CCTV India', 'Made in India surveillance',
  ],
  alternates: { canonical: 'https://arcisai.io/jalandhar-warriors', languages: buildHreflang('https://arcisai.io/jalandhar-warriors') },
  openGraph: {
    title: 'Jalandhar Warriors: Powered by ArcisAI',
    description:
      'The official Jalandhar Warriors campaign hub, powered by ArcisAI’s Made-in-India AI surveillance.',
    url: 'https://arcisai.io/jalandhar-warriors',
    type: 'website',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcisai',
    title: 'Jalandhar Warriors: Powered by ArcisAI',
    description: 'The official Jalandhar Warriors campaign hub, powered by ArcisAI.',
    images: ['/og/home.jpg'],
  },
};

export const revalidate = 86400;

export default function JalandharWarriorsPage() {
  return (
    <>
      <GA4Direct />
      <JalandharWarriors />
    </>
  );
}
