import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * LocalBusiness & Organization Schema for ArcisAI
 * - India's first premium AI CCTV brand with STQC certification
 * - Generates Organization + Product JSON-LD for Google Knowledge Panel
 * - Adds city-level LocalBusiness schemas for major Indian cities
 * - Enables Google Maps and local pack visibility across India
 */

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ArcisAI',
  alternateName: 'Arcis AI CCTV',
  url: 'https://www.arcisai.io',
  logo: 'https://www.arcisai.io/logo.png',
  description:
    "ArcisAI is India's first premium AI CCTV camera brand with STQC certification. Offering intelligent surveillance cameras with built-in AI analytics for face recognition, intrusion detection, and smart monitoring.",
  foundingDate: '2024',
  parentOrganization: {
    '@type': 'Organization',
    name: 'VMukti Solutions',
    url: 'https://www.vmukti.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/arcisai',
    'https://www.instagram.com/arcisai',
    'https://www.youtube.com/@arcisai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-79-40370104',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'B-604, Sakar-IX, Near Old Wadaj Bus Stand',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380013',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'STQC Certification',
    recognizedBy: {
      '@type': 'GovernmentOrganization',
      name: 'Ministry of Electronics and Information Technology (MeitY)',
      url: 'https://www.meity.gov.in',
    },
  },
  knowsAbout: [
    'AI CCTV Cameras',
    'STQC Certified Surveillance',
    'Face Recognition',
    'ANPR',
    'Intrusion Detection',
    'Smart Monitoring',
    'Made in India Security',
  ],
};

// Product schemas for S-Series and Eco-Series
const PRODUCT_SCHEMAS = {
  sSeries: {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    name: 'ArcisAI S-Series',
    description: 'Premium AI CCTV cameras with advanced analytics, STQC certified, designed for enterprise and government deployments in India.',
    brand: { '@type': 'Brand', name: 'ArcisAI' },
    url: 'https://www.arcisai.io/s-series',
    hasVariant: [
      {
        '@type': 'Product',
        name: 'ArcisAI S-101',
        description: 'Premium AI bullet camera with face recognition and ANPR',
        url: 'https://www.arcisai.io/s-series/s-101',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          areaServed: { '@type': 'Country', name: 'India' },
        },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI S-102',
        description: 'Premium AI dome camera with 360-degree monitoring',
        url: 'https://www.arcisai.io/s-series/s-102',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI S-103',
        description: 'Premium AI PTZ camera with auto-tracking',
        url: 'https://www.arcisai.io/s-series/s-103',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI S-104',
        description: 'Premium AI multi-sensor panoramic camera',
        url: 'https://www.arcisai.io/s-series/s-104',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI S-105',
        description: 'Premium AI thermal camera for perimeter security',
        url: 'https://www.arcisai.io/s-series/s-105',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
    ],
  },
  ecoSeries: {
    '@context': 'https://schema.org',
    '@type': 'ProductGroup',
    name: 'ArcisAI Eco-Series',
    description: 'Affordable AI CCTV cameras with essential analytics for small-to-medium businesses in India.',
    brand: { '@type': 'Brand', name: 'ArcisAI' },
    url: 'https://www.arcisai.io/eco-series',
    hasVariant: [
      {
        '@type': 'Product',
        name: 'ArcisAI Eco-101',
        description: 'Affordable AI bullet camera with smart alerts',
        url: 'https://www.arcisai.io/eco-series/eco-101',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI Eco-102',
        description: 'Affordable AI dome camera with night vision',
        url: 'https://www.arcisai.io/eco-series/eco-102',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
      {
        '@type': 'Product',
        name: 'ArcisAI Eco-103',
        description: 'Affordable AI wireless camera for flexible installation',
        url: 'https://www.arcisai.io/eco-series/eco-103',
        brand: { '@type': 'Brand', name: 'ArcisAI' },
      },
    ],
  },
};

// Major Indian cities for local targeting
const CITY_SCHEMAS = {
  mumbai: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Mumbai',
    description: 'STQC certified AI CCTV cameras for businesses in Mumbai. Face recognition, ANPR, and smart surveillance solutions.',
    areaServed: { '@type': 'City', name: 'Mumbai', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
    geo: { '@type': 'GeoCoordinates', latitude: 19.076, longitude: 72.8777 },
  },
  delhi: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Delhi NCR',
    description: 'STQC certified AI CCTV cameras for businesses in Delhi NCR. Government-approved surveillance for offices, retail, and public spaces.',
    areaServed: { '@type': 'City', name: 'Delhi', containedInPlace: { '@type': 'State', name: 'Delhi' } },
    geo: { '@type': 'GeoCoordinates', latitude: 28.7041, longitude: 77.1025 },
  },
  bangalore: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Bangalore',
    description: 'STQC certified AI CCTV cameras for tech parks and businesses in Bangalore. Smart surveillance for IT corridor and enterprise campuses.',
    areaServed: { '@type': 'City', name: 'Bangalore', containedInPlace: { '@type': 'State', name: 'Karnataka' } },
    geo: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 },
  },
  hyderabad: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Hyderabad',
    description: 'STQC certified AI CCTV cameras for businesses in Hyderabad. AI-powered surveillance for HITEC City and enterprise hubs.',
    areaServed: { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'State', name: 'Telangana' } },
    geo: { '@type': 'GeoCoordinates', latitude: 17.385, longitude: 78.4867 },
  },
  chennai: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Chennai',
    description: 'STQC certified AI CCTV cameras for businesses in Chennai. Smart surveillance for manufacturing, ports, and IT campuses.',
    areaServed: { '@type': 'City', name: 'Chennai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
    geo: { '@type': 'GeoCoordinates', latitude: 13.0827, longitude: 80.2707 },
  },
  ahmedabad: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ArcisAI - Ahmedabad (Headquarters)',
    description: "ArcisAI headquarters in Ahmedabad. India's first STQC certified AI CCTV cameras designed and manufactured with pride.",
    areaServed: { '@type': 'City', name: 'Ahmedabad', containedInPlace: { '@type': 'State', name: 'Gujarat' } },
    geo: { '@type': 'GeoCoordinates', latitude: 23.0225, longitude: 72.5714 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-604, Sakar-IX, Near Old Wadaj Bus Stand',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380013',
      addressCountry: 'IN',
    },
  },
};

const LocalBusinessSchema = ({ includeProducts = true, cities = [] }) => {
  const schemas = [ORGANIZATION_SCHEMA];

  if (includeProducts) {
    schemas.push(PRODUCT_SCHEMAS.sSeries, PRODUCT_SCHEMAS.ecoSeries);
  }

  // Add city schemas (default: all major cities)
  const targetCities = cities.length > 0 ? cities : Object.keys(CITY_SCHEMAS);
  targetCities.forEach((city) => {
    if (CITY_SCHEMAS[city]) {
      schemas.push(CITY_SCHEMAS[city]);
    }
  });

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export { ORGANIZATION_SCHEMA, PRODUCT_SCHEMAS, CITY_SCHEMAS };
export default LocalBusinessSchema;
