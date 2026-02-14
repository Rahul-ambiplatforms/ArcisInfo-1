import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for ArcisAI
 * Handles all SEO meta tags, Open Graph, Twitter Card, and structured data
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://arcisai.io/og-image.jpg',
  ogType = 'website',
  noindex = false,
  jsonLd = null,
  article = null,
}) => {
  const siteName = 'ArcisAI';
  const siteUrl = 'https://arcisai.io';
  const fullTitle = title && title.includes(siteName) ? title : `${title} | ${siteName}`;
  const finalDescription = description || 'ArcisAI delivers STQC-ready cloud VMS, AI CCTV cameras, and intelligent surveillance solutions for enterprises and governments across India.';
  const finalKeywords = Array.isArray(keywords) ? keywords.join(', ') : (keywords || 'AI surveillance, CCTV cameras, cloud VMS, smart surveillance, STQC certified');
  const finalOgImage = ogImage && ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const finalCanonicalUrl = canonicalUrl || siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="English" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="ArcisAI" />
      <meta name="theme-color" content="#0066cc" />
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ArcisAI" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Mobile */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Alternate */}
      <link rel="alternate" hrefLang="en-IN" href={finalCanonicalUrl} />
      <link rel="alternate" hrefLang="en" href={finalCanonicalUrl} />

      {/* Article tags */}
      {article && (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, idx) => (
            <meta key={idx} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
