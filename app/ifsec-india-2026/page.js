import GA4Direct from '@/src/Components/GA4Direct';
import IFSECIndia2026 from '@/src/views/Events/IFSECIndia2026';
import { buildHreflang } from '@/src/data/hreflang';

// Direct GA4 connection for this page's generate_lead / cta_click events,
// scoped to this route only. See app/fsie-2026/page.js for the full rationale:
// GTM-T5CXTDPH is the only thing wired to GA4 and we don't have access to it,
// so this page loads gtag.js itself and sends events straight to GA4
// (G-FGCHHSNZ7D), bypassing GTM. send_page_view:false avoids a duplicate.

// Bare title — the root layout applies the "%s | ArcisAI" template, so the brand
// is appended exactly once. Canonical is absolute + self-referencing, no trailing
// slash to match the site's existing route convention (e.g. /fsie-2026).
export const metadata = {
  title: 'IFSEC India 2026: Meet ArcisAI at Booth E-10',
  description:
    'Meet ArcisAI at IFSEC India 2026, Booth E-10, Hall 5GF, Bharat Mandapam, New Delhi (3–5 Dec). Explore AI CCTV cameras, Edge AI, Cloud AI and intelligent video surveillance.',
  alternates: { canonical: 'https://arcisai.io/ifsec-india-2026', languages: buildHreflang('https://arcisai.io/ifsec-india-2026') },
  openGraph: {
    title: 'Meet ArcisAI at IFSEC India 2026 | Booth E-10, Hall 5GF',
    description:
      'Discover AI-powered CCTV cameras, Edge AI, Cloud AI, Generative AI and intelligent video surveillance. Meet ArcisAI at IFSEC India 2026, New Delhi.',
    url: 'https://arcisai.io/ifsec-india-2026',
    type: 'website',
    images: [{ url: '/og/events.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcisai',
    title: 'Meet ArcisAI at IFSEC India 2026 | Booth E-10, Hall 5GF',
    description: 'AI CCTV, Edge AI, Cloud AI, ArcisGPT and STQC-certified VMS at IFSEC India 2026. Book a meeting at Booth E-10.',
    images: ['/og/events.jpg'],
  },
};

// Prerender to static HTML so crawlers (and AI crawlers) get the content and
// JSON-LD without executing JavaScript.
export const revalidate = 86400;

export default function IFSECIndia2026Page() {
  return (
    <>
      <GA4Direct />
      <IFSECIndia2026 />
    </>
  );
}
