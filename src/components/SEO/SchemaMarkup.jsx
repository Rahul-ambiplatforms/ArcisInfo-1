import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema with enhanced details for GEO/SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ArcisAI",
  "alternateName": "Arcis AI",
  "url": "https://www.arcisai.io",
  "logo": "https://www.arcisai.io/assets/logo.png",
  "description": "ArcisAI is India's first STQC-certified premium AI CCTV manufacturer providing enterprise AI-powered video surveillance cameras with edge computing, cloud VMS, and GenAI video analytics for smart city, industrial, and commercial deployments.",
  "foundingDate": "2007",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 200,
    "maxValue": 500
  },
  "sameAs": [
    "https://www.linkedin.com/company/arcisai",
    "https://twitter.com/ArcisAI",
    "https://www.youtube.com/@arcisai"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-79-4897-4897",
      "contactType": "sales",
      "areaServed": ["IN", "US", "GB", "AE", "SG", "AU"],
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-79-4897-4897",
      "contactType": "technical support",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "811-812, Gala Empire, Drive In Road",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380054",
    "addressCountry": "IN"
  },
  "award": ["STQC Certified AI CCTV Manufacturer", "Make in India Certified"],
  "knowsAbout": ["AI Video Surveillance", "Edge Computing", "Computer Vision", "Smart City Solutions", "GenAI Video Analytics", "Cloud VMS", "ANPR", "Face Recognition"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ArcisAI Product Catalog",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "S-Series AI Cameras" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Eco-Series Cameras" } },
      { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "ArcisGPT" } },
      { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Cloud VMS" } }
    ]
  }
};

// Website Schema with SearchAction for sitelinks search box
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ArcisAI",
  "alternateName": "Arcis AI - Premium AI CCTV",
  "url": "https://www.arcisai.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.arcisai.io/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ArcisAI",
    "logo": "https://www.arcisai.io/assets/logo.png"
  }
};

// LocalBusiness Schema with enhanced GEO signals
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ArcisAI",
  "image": "https://www.arcisai.io/assets/logo.png",
  "url": "https://www.arcisai.io",
  "telephone": "+91-79-4897-4897",
  "email": "info@arcisai.io",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Organization", "name": "Smart City Ahmedabad" },
      "reviewBody": "ArcisAI transformed our city surveillance with AI-powered cameras that deliver real-time analytics and exceptional image quality."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Organization", "name": "Industrial Safety Corp" },
      "reviewBody": "The S-Series cameras with edge AI processing have dramatically improved our facility safety monitoring and incident response time."
    }
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Singapore" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
};

// Product schemas with AggregateRating for rich results
export const arcisaiProducts = {
  sseries: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI S-Series AI Cameras",
    "description": "Enterprise AI-powered surveillance cameras with edge computing, real-time video analytics, ANPR, face recognition, and intelligent threat detection. STQC certified, Made in India.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "manufacturer": { "@type": "Organization", "name": "ArcisAI", "url": "https://www.arcisai.io" },
    "image": "https://www.arcisai.io/assets/s-series.png",
    "sku": "ARCIS-S-SERIES",
    "category": "AI Surveillance Cameras",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Organization", "name": "Enterprise Security Review" },
        "reviewBody": "Best-in-class AI camera with exceptional edge processing capabilities. 4K resolution with real-time analytics at the edge."
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "299",
      "highPrice": "1499",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    }
  },
  ecoseries: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI Eco-Series Cameras",
    "description": "Cost-effective AI surveillance cameras for SMBs with smart analytics, cloud connectivity, and remote monitoring. Perfect for retail, warehouse, and office security.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "manufacturer": { "@type": "Organization", "name": "ArcisAI", "url": "https://www.arcisai.io" },
    "image": "https://www.arcisai.io/assets/eco-series.png",
    "sku": "ARCIS-ECO-SERIES",
    "category": "AI Surveillance Cameras",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "203",
      "bestRating": "5"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "149",
      "highPrice": "599",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    }
  },
  bridgedevice: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI Bridge Device",
    "description": "Edge computing bridge device that adds AI video analytics capabilities to existing CCTV infrastructure without camera replacement. Supports ANPR, crowd analytics, and intrusion detection.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "image": "https://www.arcisai.io/assets/bridge-device.png",
    "sku": "ARCIS-BRIDGE",
    "category": "Edge Computing Devices",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89",
      "bestRating": "5"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "499",
      "highPrice": "1999",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    }
  },
  vms: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ArcisAI Cloud VMS",
    "description": "Enterprise cloud-based video management system with AI analytics, multi-site management, real-time monitoring, and edge-to-cloud architecture supporting 10,000+ cameras.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Cloud, Windows, Linux",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "312",
      "bestRating": "5"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "99",
      "highPrice": "999",
      "offerCount": "5",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "featureList": "AI Video Analytics, Multi-Site Management, Real-Time Alerts, Cloud Storage, Edge Computing Support, ANPR, Face Recognition, Crowd Analytics"
  },
  arcisgpt: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ArcisGPT",
    "description": "GenAI-powered video analytics platform enabling natural language search across surveillance footage. Ask questions in plain English and get instant video evidence.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Cloud",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "78",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "description": "Contact for enterprise pricing"
    },
    "featureList": "Natural Language Video Search, AI-Powered Evidence Retrieval, Incident Timeline, Multi-Camera Correlation, Export & Reporting"
  }
};

// Breadcrumb schema generator
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
  "dateModified": a.dateModified || a.datePublished,
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

// SoftwareApplication schema for GEO - AI engines cite these
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ArcisAI Platform",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Cloud, Edge, On-Premise",
  "description": "Complete AI-powered video surveillance platform with edge computing, GenAI analytics, and cloud VMS for enterprise security deployments.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "99",
    "highPrice": "9999"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "534",
    "bestRating": "5"
  },
  "featureList": "Edge AI Processing, GenAI Video Search, Cloud VMS, ANPR, Face Recognition, Crowd Analytics, Intrusion Detection, Fire Detection, PPE Detection"
};

const SchemaMarkup = ({ schema }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaMarkup;
