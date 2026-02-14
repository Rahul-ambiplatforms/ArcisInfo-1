import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * CanonicalUrl Component for ArcisAI
 *
 * - Sets canonical URL to prevent duplicate content issues
 * - Adds India-specific geo meta tags (India-only market)
 * - Prevents query params from creating duplicate pages
 * - STQC certified, India's first premium AI CCTV
 */

const BASE_URL = 'https://www.arcisai.io';

const CanonicalUrl = ({ path: overridePath, noIndex = false }) => {
  const location = useLocation();

  // Use override path or current path, strip trailing slash and query params
  const cleanPath = (overridePath || location.pathname)
    .replace(/\/+$/, '') || '/';

  const canonicalUrl = BASE_URL + cleanPath;

  return (
    <Helmet>
      {/* Canonical URL - prevents duplicate content */}
      <link rel="canonical" href={canonicalUrl} />

      {/* noindex for pages that should not appear in search */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Hreflang - India only market */}
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Default language */}
      <meta httpEquiv="content-language" content="en-IN" />

      {/* India-specific geo targeting */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
    </Helmet>
  );
};

export default CanonicalUrl;
