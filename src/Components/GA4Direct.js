import Script from 'next/script';

// Loads gtag.js and points it at GA4 directly, bypassing GTM.
//
// Why this exists: GTM-T5CXTDPH is loaded sitewide in app/layout.js and is the
// only thing wired to GA4 (G-FGCHHSNZ7D), but no tag in that container relays
// dataLayer pushes, and nobody on this project has access to configure one.
// Without this component, events pushed by src/utils/track.js reach the
// dataLayer and stop there.
//
// send_page_view is false because GTM already sends the page_view — including
// it here would double-count every pageview on routes that mount this.
//
// This was previously copy-pasted into app/fsie-2026/page.js and
// app/jalandhar-warriors/page.js; both now use this component instead.

const GA4_ID = 'G-FGCHHSNZ7D';

export default function GA4Direct() {
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
    </>
  );
}
