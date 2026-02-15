import React from 'react';
import { useLocation } from 'react-router-dom';
import FAQSchema from './FAQSchema';
import LocalBusinessSchema from './LocalBusinessSchema';

/**
 * SEOIntegration - Unified wrapper for all SEO components (ArcisAI)
 * Drop this single component into App.js to activate:
 *   - FAQ rich snippets (FAQSchema)
 *   - Organization, Product & City JSON-LD (LocalBusinessSchema)
 *
 * Usage in App.js:
 *   import SEOIntegration from './components/SEO/SEOIntegration';
 *   // Inside Router:
 *   <SEOIntegration />
 */

const SEOIntegration = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine page type for FAQ schema
  const getPageType = () => {
    if (path.includes('/s-series') || path.includes('/eco-series') || path.includes('/product')) return 'product';
    return 'home';
  };

  // Determine which cities to include
  const getCities = () => {
    if (path.includes('/mumbai')) return ['mumbai'];
    if (path.includes('/delhi')) return ['delhi'];
    if (path.includes('/bangalore')) return ['bangalore'];
    if (path.includes('/hyderabad')) return ['hyderabad'];
    if (path.includes('/chennai')) return ['chennai'];
    if (path.includes('/ahmedabad')) return ['ahmedabad'];
    return []; // All cities by default
  };

  return (
    <>
      {/* FAQ Schema - generates FAQPage JSON-LD for rich snippets */}
      <FAQSchema pageType={getPageType()} />

      {/* Organization + Product + City JSON-LD */}
      <LocalBusinessSchema includeProducts={true} cities={getCities()} />
    </>
  );
};

export default SEOIntegration;
