import Script from 'next/script';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import './globals.css';

const GTM_ID = 'GTM-T5CXTDPH';
const FB_PIXEL_ID = ''; // ← paste your Facebook Pixel ID here

// Server-side JSON-LD schemas — rendered in HTML so Google crawlers see them
// without executing JavaScript.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ArcisAI',
  legalName: 'Adiance Technologies Private Limited',
  url: 'https://www.arcisai.io',
  logo: 'https://www.arcisai.io/assets/logo.webp',
  telephone: '+91-968-777-9999',
  email: 'info@arcisai.io',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-968-777-9999',
    email: 'marketing@arcisai.io',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '811-812, Gala Empire, Drive In Road',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/arcisai',
    'https://twitter.com/ArcisAI',
    'https://www.youtube.com/@arcisai',
    'https://www.facebook.com/ArcisAI',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ArcisAI',
  url: 'https://www.arcisai.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.arcisai.io/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const metadata = {
  metadataBase: new URL('https://arcisai.io'),
  title: {
    default: 'ArcisAI - Enterprise AI CCTV Cameras | NDAA Compliant Smart Surveillance',
    template: '%s | ArcisAI',
  },
  description:
    'ArcisAI by Adiance Technologies delivers enterprise AI CCTV cameras with NDAA compliance and STQC certification. Edge AI, Cloud VMS, ArcisGPT, and Bridge Device for global markets.',
  keywords: [
    'AI CCTV cameras', 'NDAA compliant cameras', 'enterprise surveillance',
    'STQC certified', 'edge AI analytics', 'cloud VMS', 'ArcisAI',
  ],
  authors: [{ name: 'ArcisAI', url: 'https://arcisai.io' }],
  creator: 'ArcisAI by Adiance Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arcisai.io',
    siteName: 'ArcisAI',
    title: 'ArcisAI - Enterprise AI CCTV Cameras | NDAA Compliant Smart Surveillance',
    description:
      'ArcisAI by Adiance Technologies delivers enterprise AI CCTV cameras with NDAA compliance and STQC certification.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: 'ArcisAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI - Enterprise AI CCTV Cameras',
    description: 'NDAA-compliant, STQC-certified edge AI cameras with cloud VMS and ArcisGPT.',
    images: ['/og/home.jpg'],
    creator: '@ArcisAI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload custom font */}
        <link
          rel="preload"
          href="/fonts/WixMadeforDisplay-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* CSP meta tag — supplements the HTTP header set in next.config.js */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; frame-src https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.facebook.com https://connect.facebook.net https://www.arcisai.io https://arcisai.io https://vmukti.com; media-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self' https://www.arcisai.io"
        />
        {/* Server-rendered JSON-LD — visible to crawlers before JS executes */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager — loads after page is interactive, non-blocking */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Facebook Pixel — loads after interactive so it doesn't block paint */}
        {FB_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
