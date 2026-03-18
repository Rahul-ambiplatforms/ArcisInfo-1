import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import './globals.css';

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
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
