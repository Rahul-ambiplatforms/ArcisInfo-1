import Products from '@/src/views/Products/Products';
import { buildHreflang } from '@/src/data/hreflang';

const SITE_URL = 'https://arcisai.io';
const TITLE = 'CCTV Camera Products India | AI CCTV, NVR, VMS & More | ArcisAI';
const DESCRIPTION =
  'Explore the full ArcisAI product range — S-Series and Eco-Series AI CCTV cameras, the Arcis Bridge Device, Arcis NVR, Cloud VMS, and ArcisGPT. BIS-ER & STQC certified, Made in India.';

// SEO audit fix (2026-09-08, checklist items #7, #9, #52, #98): "/products"
// used to just 301-redirect to "/s-series" (see next.config.js — that
// redirect is now removed). Every "View Products" CTA site-wide (the
// SEOLandingPage template used by ~250 landing pages, plus the homepage
// ProductList) links to "/products", so that redirect meant Eco-Series (the
// certified flagship value line), Arcis NVR, the Bridge Device, Cloud VMS and
// ArcisGPT got ZERO internal-link equity from the single most common CTA on
// the site — everything funneled to S-Series only. This is now a real hub
// page listing every product line, which also gives the site a page that
// can rank for the generic head term ("CCTV camera India" / "AI CCTV
// products") that no single product page targets on its own (item #11).
export const metadata = {
  title: TITLE.replace(/\s*\|\s*ArcisAI$/, ''),
  description: DESCRIPTION,
  keywords: [
    'CCTV camera India', 'AI CCTV products', 'ArcisAI products', 'AI CCTV camera range',
    'BIS-ER certified CCTV', 'STQC certified VMS', 'Made in India CCTV',
  ],
  alternates: { canonical: `${SITE_URL}/products`, languages: buildHreflang(`${SITE_URL}/products`) },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/products`,
    type: 'website', siteName: 'ArcisAI',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: 'ArcisAI Product Range' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og/home.jpg'], site: '@arcisai' },
};

const PRODUCTS = [
  {
    name: 'S-Series Premium AI CCTV Cameras',
    description: 'Premium PTZ, Dome, and Bullet AI cameras with 4G, WiFi, and PoE options. STQC certified.',
    href: '/s-series',
    image: '/og/s-series.jpg',
  },
  {
    name: 'Eco-Series Value AI Cameras',
    description: 'Affordable AI CCTV cameras with full edge analytics — value pricing, enterprise quality.',
    href: '/eco-series',
    image: '/og/eco-series.jpg',
  },
  {
    name: 'ArcisAI Bridge Device (ABD)',
    description: 'Convert any existing ONVIF camera to smart AI with the ArcisAI Bridge Device — no camera replacement needed.',
    href: '/arcis-bridge-device',
    image: '/og/bridge-device.jpg',
  },
  {
    name: 'ArcisAI NVR',
    description: 'Intelligent Network Video Recorder with edge AI, multi-camera support, and cloud backup.',
    href: '/arcis-nvr',
    image: '/og/nvr.jpg',
  },
  {
    name: 'ArcisAI Cloud VMS',
    description: 'STQC-certified Cloud VMS with multi-location monitoring, AI alerts, and ArcisGPT search.',
    href: '/cloud-vms',
    image: '/og/vms.jpg',
  },
  {
    name: 'ArcisGPT',
    description: 'Conversational, generative-AI video search — ask natural-language questions across your surveillance footage.',
    href: '/arcisgpt',
    image: '/og/arcisgpt.jpg',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ArcisAI Product Range',
  url: `${SITE_URL}/products`,
  itemListElement: PRODUCTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: `${SITE_URL}${p.href}`,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/products#webpage`,
  url: `${SITE_URL}/products`,
  name: TITLE.replace(/\s*\|\s*ArcisAI$/, ''),
  description: DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  breadcrumb: { '@id': `${SITE_URL}/products#breadcrumb` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/products#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Products products={PRODUCTS} />
    </>
  );
}
