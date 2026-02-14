/**
 * Schema Markup Generator for ArcisAI
 * JSON-LD structured data for rich snippets in search results
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ArcisAI',
  legalName: 'Adiance Technologies',
  url: 'https://arcisai.io',
  logo: 'https://arcisai.io/logo.png',
  description: "India's first premium AI CCTV with STQC certification. End-to-end intelligent surveillance ecosystem.",
  foundingDate: '2015',
  foundingLocation: 'Ahmedabad, Gujarat, India',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'info@arcisai.io',
    url: 'https://arcisai.io/contact',
  },
  sameAs: [
    'https://www.linkedin.com/company/arcisai',
    'https://twitter.com/arcisai',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  knowsAbout: ['AI Surveillance', 'CCTV Cameras', 'Video Management System', 'Edge AI', 'Cloud Computing', 'Gen AI'],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ArcisAI',
  url: 'https://arcisai.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://arcisai.io/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const createProductSchema = (productData) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productData.name,
  description: productData.description,
  image: productData.image,
  brand: { '@type': 'Brand', name: 'ArcisAI' },
  manufacturer: { '@type': 'Organization', name: 'Adiance Technologies' },
  offers: {
    '@type': 'Offer',
    price: productData.price || 'Contact for pricing',
    priceCurrency: productData.priceCurrency || 'INR',
    availability: productData.availability || 'https://schema.org/InStock',
    url: productData.url || 'https://arcisai.io/products',
  },
  aggregateRating: productData.rating ? {
    '@type': 'AggregateRating',
    ratingValue: productData.rating,
    reviewCount: productData.reviewCount || 0,
  } : undefined,
});

export const createBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createArticleSchema = (articleData) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: articleData.title,
  description: articleData.description,
  image: articleData.image,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified || articleData.datePublished,
  author: { '@type': 'Person', name: articleData.author || 'ArcisAI' },
  publisher: {
    '@type': 'Organization',
    name: 'ArcisAI',
    logo: { '@type': 'ImageObject', url: 'https://arcisai.io/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': articleData.url },
  url: articleData.url,
});

export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ArcisAI',
  brand: 'Adiance Technologies',
  url: 'https://arcisai.io',
  email: 'info@arcisai.io',
  telephone: '+91-79-6160-0000',
  description: "India's first premium AI CCTV with STQC certification",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380054',
    addressCountry: 'IN',
  },
  areaServed: ['IN'],
  priceRange: 'Medium to High',
};

export const arcisaiProducts = {
  sSeries: createProductSchema({
    name: 'ArcisAI S-Series AI Cameras',
    description: 'Premium S-Series PTZ, Dome, and Bullet AI cameras with 4G SIM, WiFi, and PoE variants. STQC certified with edge AI.',
    image: 'https://arcisai.io/products/s-series-camera.jpg',
    url: 'https://arcisai.io/products/s-series',
  }),
  ecoSeries: createProductSchema({
    name: 'ArcisAI ECO-Series Cameras',
    description: 'Value-priced ECO-Series PTZ, Dome, and Bullet cameras. 30+ models with intelligent AI analytics.',
    image: 'https://arcisai.io/products/eco-series-camera.jpg',
    url: 'https://arcisai.io/products/eco-series',
  }),
  bridgeDevice: createProductSchema({
    name: 'ArcisAI Bridge Device (ABD)',
    description: 'ONVIF-compatible device that converts any legacy camera into a smart AI-powered surveillance camera.',
    image: 'https://arcisai.io/products/bridge-device.jpg',
    url: 'https://arcisai.io/products/bridge-device',
  }),
  vms: createProductSchema({
    name: 'ArcisAI Cloud VMS',
    description: 'STQC-certified cloud and on-premise video management system with AI alerts and smart playback.',
    image: 'https://arcisai.io/products/vms-dashboard.jpg',
    url: 'https://arcisai.io/products/vms',
  }),
  arcisgpt: createProductSchema({
    name: 'ArcisGPT',
    description: 'Gen AI-powered visual intelligence platform with natural language video search and activity recognition.',
    image: 'https://arcisai.io/products/arcisgpt-interface.jpg',
    url: 'https://arcisai.io/products/arcisgpt',
  }),
};

export default {
  organizationSchema,
  websiteSchema,
  createProductSchema,
  createBreadcrumbSchema,
  createArticleSchema,
  createFAQSchema,
  localBusinessSchema,
  arcisaiProducts,
};
