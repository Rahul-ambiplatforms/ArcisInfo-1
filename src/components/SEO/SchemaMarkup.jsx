import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema - used by SEORouter
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ArcisAI",
  "url": "https://www.arcisai.io",
  "logo": "https://www.arcisai.io/assets/logo.png",
  "description": "ArcisAI provides enterprise AI-powered video surveillance cameras and intelligent security solutions with edge computing, cloud VMS, and GenAI video analytics.",
  "sameAs": [
    "https://www.linkedin.com/company/arcisai",
    "https://twitter.com/ArcisAI"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-79-4897-4897",
    "contactType": "sales",
    "availableLanguage": ["English", "Hindi"]
  },
  "founder": {
    "@type": "Person",
    "name": "Kushal Shah"
  }
};

// Website Schema with SearchAction - used by SEORouter
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ArcisAI",
  "url": "https://www.arcisai.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.arcisai.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// LocalBusiness Schema - used on home page
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ArcisAI",
  "image": "https://www.arcisai.io/assets/logo.png",
  "url": "https://www.arcisai.io",
  "telephone": "+91-79-4897-4897",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "811-812, Gala Empire, Drive In Road",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380054",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0395,
    "longitude": 72.5297
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

// Product schemas for ArcisAI product pages
export const arcisaiProducts = {
  sseries: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI S-Series AI Cameras",
    "description": "Enterprise AI-powered surveillance cameras with edge computing, real-time analytics, and intelligent threat detection.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "image": "https://www.arcisai.io/assets/s-series.png",
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  },
  ecoseries: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI Eco-Series Cameras",
    "description": "Cost-effective AI surveillance cameras for small and medium businesses with smart analytics and cloud connectivity.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "image": "https://www.arcisai.io/assets/eco-series.png",
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  },
  bridgedevice: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI Bridge Device",
    "description": "Edge computing bridge device that adds AI capabilities to existing CCTV camera infrastructure.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "image": "https://www.arcisai.io/assets/bridge-device.png",
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  },
  vms: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ArcisAI Cloud VMS",
    "description": "Cloud-based video management system with AI analytics, multi-site management, and real-time monitoring.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Cloud",
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  },
  arcisgpt: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ArcisGPT",
    "description": "GenAI-powered video analytics platform enabling natural language search across surveillance footage.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Cloud",
    "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  }
};

// Breadcrumb schema generator - used by SEORouter
export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Alias for backward compatibility
export const getBreadcrumbSchema = createBreadcrumbSchema;

export const getVideoSchema = (v) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": v.name,
  "description": v.description,
  "thumbnailUrl": v.thumbnail,
  "uploadDate": v.uploadDate || "2025-01-01",
  "contentUrl": v.url,
  "publisher": { "@type": "Organization", "name": "ArcisAI" }
});

export const getArticleSchema = (a) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": a.title,
  "description": a.description,
  "image": a.image,
  "datePublished": a.datePublished,
  "author": { "@type": "Organization", "name": "ArcisAI", "url": "https://www.arcisai.io" },
  "publisher": {
    "@type": "Organization",
    "name": "ArcisAI",
    "logo": { "@type": "ImageObject", "url": "https://www.arcisai.io/assets/logo.png" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": a.url }
});

export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-content", "[data-speakable]"]
  }
};

export const getHowToSchema = (h) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": h.name,
  "description": h.description,
  "step": h.steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.name,
    "text": s.text
  }))
});

const SchemaMarkup = ({ schema }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaMarkup;
