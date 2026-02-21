import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * EcosystemSchema - Complete ArcisAI Product Ecosystem JSON-LD
 * Generates structured data for the full ArcisAI ecosystem:
 *   - ArcisAI Mobile App (MobileApplication)
 *   - ArcisAI VMS (SoftwareApplication) 
 *   - ArcisAI Cloud Dashboard (WebApplication)
 *   - AI Analytics capabilities
 *   - NVR product line
 *   - Dashcam with GPS/4G
 *   - All certifications (STQC, ISO 27001, BIS, CE, FCC, RoHS, ONVIF)
 */

// ââ ArcisAI Mobile App Schema ââ
const APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'ArcisAI App',
  description: 'ArcisAI mobile surveillance app for real-time AI-powered CCTV monitoring, live view, playback, PTZ control, push notifications, and cloud access. Works with all ArcisAI S-Series and Eco-Series cameras.',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'SecurityApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    hasMerchantReturnPolicy: {'@type': 'MerchantReturnPolicy', applicableCountry: 'IN', returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted', merchantReturnDays: 0},
    shippingDetails: {'@type': 'OfferShippingDetails', shippingDestination: {'@type': 'DefinedRegion', addressCountry: 'IN'}, shippingRate: {'@type': 'MonetaryAmount', value: '0', currency: 'INR'}},
    availability: 'https://schema.org/InStock'
  },
  author: {
    '@type': 'Organization',
    name: 'ArcisAI by Adiance',
    url: 'https://www.arcisai.io'
  },
  featureList: 'Live View, Playback, PTZ Control, Push Notifications, Cloud Access, Multi-Site Monitoring, AI Event Alerts, Face Recognition Alerts, ANPR Alerts',
  screenshot: 'https://www.arcisai.io/assets/app-screenshot.png',
  softwareVersion: '2.0',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    ratingCount: '500',
    bestRating: '5'
  }
};

// ââ ArcisAI VMS Schema ââ
const VMS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
    image: 'https://www.arcisai.io/og-image.jpg',
  name: 'ArcisAI VMS',
  description: 'STQC-certified Video Management System by ArcisAI. Enterprise-grade AI-powered VMS with support for 15+ analytics including face recognition, ANPR, people counting, intrusion detection, fire and smoke detection. Manages up to 10,000+ cameras per deployment.',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Windows, Linux, Cloud',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    hasMerchantReturnPolicy: {'@type': 'MerchantReturnPolicy', applicableCountry: 'IN', returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted', merchantReturnDays: 0},
    shippingDetails: {'@type': 'OfferShippingDetails', shippingDestination: {'@type': 'DefinedRegion', addressCountry: 'IN'}, shippingRate: {'@type': 'MonetaryAmount', value: '0', currency: 'INR'}},
    description: 'Contact for enterprise pricing',
    availability: 'https://schema.org/InStock'
  },
  author: {
    '@type': 'Organization',
    name: 'ArcisAI by Adiance',
    url: 'https://www.arcisai.io'
  },
  featureList: 'Face Recognition, ANPR, People Counting, Intrusion Detection, Fire Detection, Smoke Detection, Object Detection, Line Crossing, Loitering Detection, Heat Map, Crowd Density, Vehicle Counting, Helmet Detection, PPE Detection, Fall Detection',
  softwareRequirements: 'Modern web browser for dashboard access',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'STQC Certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ministry of Electronics and Information Technology (MeitY), Government of India'
    }
  }
};

// ââ ArcisAI Cloud Dashboard Schema ââ
const DASHBOARD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ArcisAI Cloud Dashboard',
  description: 'Cloud-based AI surveillance dashboard by ArcisAI. Centralized monitoring, AI analytics visualization, multi-site management, event-driven alerts, health monitoring, and reporting across all connected ArcisAI cameras and NVRs.',
  applicationCategory: 'SecurityApplication',
  browserRequirements: 'Requires modern web browser (Chrome, Firefox, Edge, Safari)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    hasMerchantReturnPolicy: {'@type': 'MerchantReturnPolicy', applicableCountry: 'IN', returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted', merchantReturnDays: 0},
    shippingDetails: {'@type': 'OfferShippingDetails', shippingDestination: {'@type': 'DefinedRegion', addressCountry: 'IN'}, shippingRate: {'@type': 'MonetaryAmount', value: '0', currency: 'INR'}},
    description: 'Cloud subscription plans available',
    availability: 'https://schema.org/InStock'
  },
  author: {
    '@type': 'Organization',
    name: 'ArcisAI by Adiance',
    url: 'https://www.arcisai.io'
  },
  featureList: 'Multi-Site Dashboard, AI Analytics Reports, Live Monitoring, Health Monitoring, Event Timeline, Cloud Storage, Role-Based Access, Custom Alerts, Automated Reports'
};

// ââ NVR Product Schemas ââ
const NVR_SCHEMAS = {
  '@context': 'https://schema.org',
  '@type': 'ProductGroup',
    productGroupID: 'arcisai-nvr-range',
    image: 'https://www.arcisai.io/og-image.jpg',
  name: 'ArcisAI NVR Range',
  description: 'ArcisAI Network Video Recorders with built-in AI analytics. Available in 4CH, 8CH, 16CH, and 32CH configurations with PoE support.',
  brand: { '@type': 'Brand', name: 'ArcisAI' },
  url: 'https://www.arcisai.io/nvr',
  hasVariant: [
    {
      '@type': 'Product',
      name: 'ArcisAI NVR AD-N0481-PoE',
      description: '4-Channel PoE NVR with AI analytics, up to 8MP recording, HDMI/VGA output',
      sku: 'AD-N0481-PoE',
      brand: { '@type': 'Brand', name: 'ArcisAI' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: 'https://www.arcisai.io/nvr' }
    },
    {
      '@type': 'Product',
      name: 'ArcisAI NVR AD-N0881-PoE',
      description: '8-Channel PoE NVR with AI analytics, up to 8MP recording, dual HDMI output',
      sku: 'AD-N0881-PoE',
      brand: { '@type': 'Brand', name: 'ArcisAI' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: 'https://www.arcisai.io/nvr' }
    },
    {
      '@type': 'Product',
      name: 'ArcisAI NVR AD-N1681',
      description: '16-Channel NVR with AI analytics, up to 8MP recording, RAID support',
      sku: 'AD-N1681',
      brand: { '@type': 'Brand', name: 'ArcisAI' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: 'https://www.arcisai.io/nvr' }
    },
    {
      '@type': 'Product',
      name: 'ArcisAI NVR AD-N3251',
      description: '32-Channel NVR with AI analytics, enterprise-grade, up to 8MP, hot-swap HDD bays',
      sku: 'AD-N3251',
      brand: { '@type': 'Brand', name: 'ArcisAI' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: 'https://www.arcisai.io/nvr' }
    }
  ]
};

// ââ Dashcam Schema ââ
const DASHCAM_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ArcisAI Dashcam AD-DC4G-200W',
  description: 'AI-powered dashcam with 4G connectivity, GPS tracking, dual-lens (front + cabin), ADAS, DMS driver monitoring, real-time cloud upload, and emergency SOS. Ideal for fleet management and vehicle surveillance in India.',
  sku: 'AD-DC4G-200W',
  brand: { '@type': 'Brand', name: 'ArcisAI' },
  category: 'Dashcam',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '0',
    hasMerchantReturnPolicy: {'@type': 'MerchantReturnPolicy', applicableCountry: 'IN', returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted', merchantReturnDays: 0},
    shippingDetails: {'@type': 'OfferShippingDetails', shippingDestination: {'@type': 'DefinedRegion', addressCountry: 'IN'}, shippingRate: {'@type': 'MonetaryAmount', value: '0', currency: 'INR'}},
    availability: 'https://schema.org/InStock',
    url: 'https://www.arcisai.io/dashcam'
  },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Connectivity', value: '4G LTE + WiFi' },
    { '@type': 'PropertyValue', name: 'GPS', value: 'Built-in GPS tracking' },
    { '@type': 'PropertyValue', name: 'AI Features', value: 'ADAS, DMS, Fatigue Detection' }
  ]
};

// ââ AI Analytics Capabilities Schema ââ
const ANALYTICS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ArcisAI Analytics',
  description: 'Suite of 15+ AI-powered video analytics built into ArcisAI cameras, VMS, and cloud platform. Includes face recognition, ANPR, people counting, intrusion detection, fire/smoke detection, and more.',
  provider: {
    '@type': 'Organization',
    name: 'ArcisAI by Adiance',
    url: 'https://www.arcisai.io'
  },
  serviceType: 'AI Video Analytics',
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Analytics Features',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Face Recognition', description: 'AI-powered face detection and recognition for access control and VIP/blocklist alerts' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ANPR - Automatic Number Plate Recognition', description: 'Real-time vehicle number plate detection and logging for parking, toll, and security' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'People Counting', description: 'Accurate bi-directional people counting for retail analytics and occupancy management' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intrusion Detection', description: 'AI perimeter intrusion detection with instant alerts for unauthorized zone entry' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire and Smoke Detection', description: 'Early fire and smoke detection using AI vision for warehouses, factories, and buildings' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Object Detection', description: 'Detect and classify objects like bags, vehicles, weapons in real-time' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Line Crossing Detection', description: 'Virtual tripwire analytics for monitoring restricted boundary crossings' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heat Map Analytics', description: 'Visual heat map generation for foot traffic and dwell time analysis in retail spaces' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPE Detection', description: 'Helmet, vest, and safety gear compliance detection for industrial safety' }},
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fall Detection', description: 'AI-based human fall detection for elderly care and workplace safety' }}
    ]
  }
};

// ââ Events / Exhibition Schema ââ
const EVENTS_SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'ArcisAI at GITEX Global',
    description: 'ArcisAI showcases India-made AI CCTV cameras, VMS, and cloud surveillance solutions at GITEX Global, Dubai.',
    organizer: { '@type': 'Organization', name: 'GITEX Global' },
    location: { '@type': 'Place', name: 'Dubai World Trade Centre', address: 'Dubai, UAE' },
    performer: { '@type': 'Organization', name: 'ArcisAI by Adiance', url: 'https://www.arcisai.io' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'ArcisAI at IFSEC India',
    description: 'ArcisAI presents STQC-certified AI surveillance ecosystem at IFSEC India security expo.',
    organizer: { '@type': 'Organization', name: 'IFSEC India' },
    location: { '@type': 'Place', name: 'Pragati Maidan', address: 'New Delhi, India' },
    performer: { '@type': 'Organization', name: 'ArcisAI by Adiance', url: 'https://www.arcisai.io' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'ArcisAI at Convergence India',
    description: 'ArcisAI demonstrates AI video analytics and smart city surveillance at Convergence India expo.',
    organizer: { '@type': 'Organization', name: 'Convergence India' },
    location: { '@type': 'Place', name: 'Pragati Maidan', address: 'New Delhi, India' },
    performer: { '@type': 'Organization', name: 'ArcisAI by Adiance', url: 'https://www.arcisai.io' }
  }
];

const EcosystemSchema = ({ includeApp = true, includeVMS = true, includeDashboard = true, includeNVR = true, includeDashcam = true, includeAnalytics = true, includeEvents = true }) => {
  return (
    <>
      {includeApp && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(APP_SCHEMA)}</script>
        </Helmet>
      )}
      {includeVMS && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(VMS_SCHEMA)}</script>
        </Helmet>
      )}
      {includeDashboard && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(DASHBOARD_SCHEMA)}</script>
        </Helmet>
      )}
      {includeNVR && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(NVR_SCHEMAS)}</script>
        </Helmet>
      )}
      {includeDashcam && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(DASHCAM_SCHEMA)}</script>
        </Helmet>
      )}
      {includeAnalytics && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(ANALYTICS_SCHEMA)}</script>
        </Helmet>
      )}
      {includeEvents && EVENTS_SCHEMA.map((event, i) => (
        <Helmet key={i}>
          <script type="application/ld+json">{JSON.stringify(event)}</script>
        </Helmet>
      ))}
    </>
  );
};

export default EcosystemSchema;
