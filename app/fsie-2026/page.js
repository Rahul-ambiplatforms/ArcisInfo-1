import Script from 'next/script';
import FSIE2026 from '@/src/views/Events/FSIE2026';

// Direct GA4 connection for this page's generate_lead / cta_click events,
// scoped to this route only. See app/jalandhar-warriors/page.js for the full
// explanation: GTM-T5CXTDPH is the only thing wired to GA4 and we don't have
// access to it, so this page loads gtag.js itself and sends events straight
// to GA4 (G-FGCHHSNZ7D), bypassing GTM. send_page_view:false avoids a
// duplicate page_view (GTM already sends one).
const GA4_ID = 'G-FGCHHSNZ7D';

// Bare title — the root layout applies the "%s | ArcisAI" template, so brand is
// appended exactly once. Canonical is absolute + self-referencing.
export const metadata = {
  title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
  description:
    'Meet ArcisAI at FSIE Mumbai 2026 (3–5 Sep), Booth C13. Live demos of STQC & BIS-ER certified AI CCTV, Cloud VMS and ArcisGPT. Book your meeting slot.',
  keywords: [
    'FSIE 2026', 'FSIE Mumbai', 'ArcisAI FSIE', 'AI CCTV demo Mumbai',
    'STQC certified CCTV', 'fire and safety expo India',
  ],
  alternates: { canonical: 'https://arcisai.io/fsie-2026' },
  openGraph: {
    title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
    description:
      'Live demos of AI CCTV, Cloud VMS and ArcisGPT at FSIE Mumbai 2026, 3–5 Sep. Book your meeting at Booth C13.',
    url: 'https://arcisai.io/fsie-2026',
    type: 'website',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arcisai',
    title: 'ArcisAI at FSIE Mumbai 2026: Booth C13',
    description: 'Live AI surveillance demos at FSIE Mumbai 2026. Book a meeting at Booth C13.',
    images: ['/og/home.jpg'],
  },
};

// Prerender to static HTML so crawlers (and AI crawlers) get the content and
// JSON-LD without executing JavaScript.
export const revalidate = 86400;

export default function FSIE2026Page() {
  return (
    <>
      <Script
        id="ga4-direct-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="ga4-direct-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}', { send_page_view: false });
        window.gtag = gtag;`}
      </Script>
      <FSIE2026 />
    </>
  );
}
