import Script from 'next/script';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import './globals.css';

const GTM_ID = 'GTM-T5CXTDPH';
const FB_PIXEL_ID = ''; // ← paste your Facebook Pixel ID here

// Server-side JSON-LD schemas — rendered in HTML so Google crawlers see them
// without executing JavaScript.
// Canonical host standardised to the apex https://arcisai.io (matches metadataBase
// + page canonicals). Single Organization entity with shared @id; correct address
// (Arista Eight, Bodakdev); parent Adiance founded 2003; real certifications
// including BIS-ER R-72003735 ER01:2024 and STQC-certified VMS.
const SITE = 'https://arcisai.io';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'ArcisAI',
  alternateName: ['Arcis AI', 'ArcisAI by Adiance Technologies'],
  legalName: 'Adiance Technologies Private Limited',
  url: SITE,
  logo: `${SITE}/assets/logo.webp`,
  foundingDate: '2021', // ArcisAI brand launch; parent Adiance founded 2003 (below)
  slogan: 'Engineered in India. Certified in India. Built for India.',
  description:
    "ArcisAI is India's premium AI-powered CCTV and intelligent surveillance ecosystem — BIS-ER certified hardware and STQC-certified VMS, with Edge AI cameras, Cloud AI analytics, and ArcisGPT generative AI. Made in India by Adiance Technologies; NDAA compliant.",
  email: 'marketing@arcisai.io',
  telephone: '+91-968-777-9999',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Adiance Technologies Private Limited',
    url: 'https://www.adiance.com',
    foundingDate: '2003',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista Eight, Corporate House, Rajpath Rangoli Road, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-968-777-9999',
    email: 'marketing@arcisai.io',
    contactType: 'sales',
    areaServed: ['IN', 'US', 'AE', 'GB', 'SG', 'AU'],
    availableLanguage: ['English', 'Hindi'],
  },
  areaServed: ['IN', 'US', 'AE', 'GB', 'SG', 'AU'],
  knowsAbout: [
    'AI CCTV Cameras', 'Edge AI Surveillance', 'Video Management System',
    'Generative AI for Video Surveillance', 'Cloud Video Analytics',
    'Smart City Surveillance', 'Made in India CCTV', 'NDAA Compliant CCTV',
    'BIS-ER Certified CCTV', 'STQC Certified VMS',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'BIS-ER Certified (R-72003735 ER01:2024)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'STQC Certified Video Management Software (VMS)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO/IEC 27001:2022' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CE' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'FCC' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'RoHS' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ONVIF Compliant' },
  ],
  brand: { '@type': 'Brand', name: 'ArcisAI', slogan: "India's Premium AI CCTV" },
  sameAs: [
    'https://www.linkedin.com/company/thearcisai/',
    'https://www.instagram.com/_arcisai_/',
    'https://www.youtube.com/@arcisai',
    'https://x.com/arcisai',
    'https://www.facebook.com/thearcisai/',
    'https://apps.apple.com/in/app/arcisai/id6743403804',
    'https://play.google.com/store/apps/details?id=com.arcisadiance.app',
    'https://www.wikidata.org/wiki/Q140191109',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  name: 'ArcisAI',
  url: SITE,
  publisher: { '@id': `${SITE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE}/search?q={search_term_string}`,
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

// Mirrors the logic in next.config.js so the <meta> CSP stays in sync with
// the HTTP-header CSP. The browser intersects multiple CSP sources, so if
// they drift the stricter one wins and silently blocks requests.
function buildCsp() {
  const isDev = process.env.NODE_ENV !== 'production';
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  let apiOrigin = '';
  try {
    if (apiBase) apiOrigin = new URL(apiBase).origin;
  } catch {
    apiOrigin = '';
  }
  const extras = [];
  if (apiOrigin) extras.push(apiOrigin);
  if (isDev) extras.push('ws://localhost:*', 'wss://localhost:*', 'http://localhost:*');
  const extraConnect = extras.length ? ' ' + extras.join(' ') : '';

  const scriptSrc = [
    "script-src 'self' 'unsafe-inline'",
    isDev ? "'unsafe-eval'" : '',
    'https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net',
  ].filter(Boolean).join(' ');

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "frame-src https://www.googletagmanager.com https://www.facebook.com https://www.youtube.com https://www.youtube-nocookie.com",
    `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.facebook.com https://connect.facebook.net https://www.arcisai.io https://arcisai.io https://vmukti.com https://hook.eu1.make.com https://etaems.arcisai.io:5000${extraConnect}`,
    "media-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://www.arcisai.io https://www.facebook.com",
  ].join('; ');
}

export default function RootLayout({ children }) {
  const csp = buildCsp();
  return (
    <html lang="en">
      <head>
        {/* Preload custom font */}
        <link
          rel="preload"
          href="/fonts/WixMadeforDisplay-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* CSP meta tag — supplements the HTTP header set in next.config.js.
            Both are derived from buildCsp() above so they can't drift. */}
        <meta httpEquiv="Content-Security-Policy" content={csp} />
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

