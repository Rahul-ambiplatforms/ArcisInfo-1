import React from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../SEO';
import { getSEOConfig } from '../../config/seo-config';
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  arcisaiProducts,
  createBreadcrumbSchema,
} from '../SEO/SchemaMarkup';

/**
 * SEORouter - Automatically applies correct SEO meta tags based on current route
 * Drop this component inside your Router and it handles everything.
 */
const SEORouter = () => {
  const location = useLocation();
  const path = location.pathname;

  // Map routes to SEO config keys
  const getPageKey = (pathname) => {
    const clean = pathname.replace(/^\/|\/$/g, '').toLowerCase();

    if (clean === '') return 'home';
    if (clean === 'about-us') return 'about';
    if (clean === 'contact-us') return 'contact';
    if (clean === 'why-choose-arcisai') return 'about';
    if (clean === 'blog') return 'blog';
    if (clean.startsWith('blog/')) return 'blog';
    if (clean.startsWith('s-series')) return 'products/s-series';
    if (clean.startsWith('eco-series')) return 'products/eco-series';
    if (clean.startsWith('solution')) return 'solutions';
    if (clean === 'event') return 'home';
    if (clean === 'privacy-policy') return 'home';
    if (clean === 'terms-of-service') return 'home';

    // Check for product series pages
    const seriesPages = ['s-series', 'eco-series', 'bridge-device', 'vms', 'arcisgpt'];
    for (const series of seriesPages) {
      if (clean === series || clean.startsWith(series + '/')) {
        return 'products/' + series;
      }
    }

    // SEO landing pages have their own Helmet - return null to avoid overriding
    // Routes: /cctv-cameras-:city, /ai-cctv-:slug, /compare/:pageSlug,
    //         /resources/:pageSlug, /industry/:pageSlug, /state/:pageSlug,
    //         /:category/:pageSlug
    if (clean.startsWith('cctv-cameras-')) return null;
    if (clean.startsWith('ai-cctv-')) return null;
    if (clean.startsWith('compare/')) return null;
    if (clean.startsWith('resources/')) return null;
    if (clean.startsWith('industry/') && clean.includes('-')) return null;
    if (clean.startsWith('state/')) return null;

    // Generic /:category/:pageSlug pattern
    const parts = clean.split('/');
    if (parts.length === 2 && parts[0].length > 0 && parts[1].length > 0) {
      return null;
    }

    return 'home';
  };

  const pageKey = getPageKey(path);

  // If pageKey is null, this is a SEO landing page - don't render default meta
  if (!pageKey) return null;

  const seoConfig = getSEOConfig(pageKey);

  // Build JSON-LD based on page
  const getJsonLd = () => {
    const schemas = [organizationSchema, websiteSchema];

    if (pageKey === 'home') {
      schemas.push(localBusinessSchema);
    }

    // Add product schemas for product pages
    if (pageKey.startsWith('products/')) {
      const productKey = pageKey.replace('products/', '').replace('-', '');
      if (arcisaiProducts[productKey]) {
        schemas.push(arcisaiProducts[productKey]);
      }
    }

    return schemas;
  };

  return (
    <SEO
      title={seoConfig.title}
      description={seoConfig.description}
      keywords={seoConfig.keywords}
      canonicalUrl={seoConfig.canonicalUrl}
      ogImage={seoConfig.ogImage}
      ogType={seoConfig.ogType}
      noindex={seoConfig.noindex}
      jsonLd={getJsonLd()}
    />
  );
};

export default SEORouter;
