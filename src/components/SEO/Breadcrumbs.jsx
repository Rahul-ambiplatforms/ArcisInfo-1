import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Breadcrumbs Component for ArcisAI
 * - Generates visible breadcrumb navigation
 * - Outputs BreadcrumbList JSON-LD schema for Google rich results
 * - Improves internal linking & crawlability
 */

const ROUTE_LABELS = {
  '': 'Home',
  'about-us': 'About Us',
  'why-choose-arcisai': 'Why Choose ArcisAI',
  'contact-us': 'Contact Us',
  'blog': 'Blog',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'event': 'Events',
  's-series': 'S-Series',
  's-101': 'ArcisAI S-101',
  's-102': 'ArcisAI S-102',
  's-103': 'ArcisAI S-103',
  's-104': 'ArcisAI S-104',
  's-105': 'ArcisAI S-105',
  'eco-series': 'Eco-Series',
  'eco-101': 'ArcisAI Eco-101',
  'eco-102': 'ArcisAI Eco-102',
  'eco-103': 'ArcisAI Eco-103',
  'solution': 'Solutions',
  'retail': 'Retail',
  'banking': 'Banking & Finance',
  'healthcare': 'Healthcare',
  'smart-city': 'Smart City',
  'manufacturing': 'Manufacturing',
  'education': 'Education',
};

function formatSegment(segment) {
  return ROUTE_LABELS[segment] || segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const Breadcrumbs = ({ customLabels = {}, className = '' }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  const mergedLabels = { ...ROUTE_LABELS, ...customLabels };

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => ({
      name: mergedLabels[segment] || formatSegment(segment),
      path: '/' + pathSegments.slice(0, index + 1).join('/'),
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: 'https://www.arcisai.io' + item.path,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className={'seo-breadcrumbs ' + className}
        style={{
          padding: '12px 0',
          fontSize: '14px',
          color: '#6b7280',
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '4px',
            alignItems: 'center',
          }}
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li
                key={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {index > 0 && (
                  <span style={{ color: '#9ca3af', margin: '0 2px' }}>/</span>
                )}
                {isLast ? (
                  <span
                    style={{ color: '#111827', fontWeight: 500 }}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
