import React from 'react';
import { useLocation } from 'react-router-dom';
import FAQSchema from './FAQSchema';
import LocalBusinessSchema from './LocalBusinessSchema';
import EcosystemSchema from './EcosystemSchema';

/**
 * SEOIntegration - Unified wrapper for ALL ArcisAI SEO components
 * Activates the complete SEO ecosystem:
 * - FAQ rich snippets (FAQSchema) - 8 home + product/vms/analytics/dashcam FAQs
 * - Organization, Product & City JSON-LD (LocalBusinessSchema)
 * - App, VMS, Dashboard, NVR, Dashcam, Analytics, Events (EcosystemSchema)
 */
const SEOIntegration = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine page type for FAQ schema
  const getPageType = () => {
    if (path.includes('/vms') || path.includes('/video-management')) return 'vms';
    if (path.includes('/analytics') || path.includes('/ai-analytics')) return 'analytics';
    if (path.includes('/dashcam') || path.includes('/fleet')) return 'dashcam';
    if (path.includes('/s-series') || path.includes('/eco-series') || path.includes('/product') || path.includes('/nvr')) return 'product';
    return 'home';
  };

  // Determine which cities to show
  const getCities = () => {
    if (path.includes('/mumbai')) return ['mumbai'];
    if (path.includes('/delhi')) return ['delhi'];
    if (path.includes('/bangalore')) return ['bangalore'];
    if (path.includes('/hyderabad')) return ['hyderabad'];
    if (path.includes('/chennai')) return ['chennai'];
    if (path.includes('/ahmedabad')) return ['ahmedabad'];
    return [];
  };

  return (
    <>
      {/* FAQ Schema - generates FAQPage JSON-LD for rich snippets */}
      <FAQSchema pageType={getPageType()} />

      {/* Organization + Product + City JSON-LD */}
      <LocalBusinessSchema includeProducts={true} cities={getCities()} />

      {/* Full Ecosystem: App, VMS, Dashboard, NVR, Dashcam, Analytics, Events */}
      <EcosystemSchema
        includeApp={true}
        includeVMS={true}
        includeDashboard={true}
        includeNVR={path === '/' || path.includes('/nvr')}
        includeDashcam={path === '/' || path.includes('/dashcam') || path.includes('/fleet')}
        includeAnalytics={true}
        includeEvents={path === '/' || path.includes('/about')}
      />
    </>
  );
};

export default SEOIntegration;
