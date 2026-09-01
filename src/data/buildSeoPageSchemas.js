// SERVER-ONLY JSON-LD builder for the ~250 SEO landing pages.
//
// Why this file exists
// ───────────────────
// SEOLandingPage.jsx is a `'use client'` component and emitted its JSON-LD
// through <Helmet>. HelmetProvider lives inside app/providers.js, which is
// also `'use client'` — so nothing Helmet renders ever reaches the
// server-rendered HTML. Every crawler that does not execute JavaScript (and
// Google's structured-data parser, which reads the raw HTML) saw zero schema
// on all of these pages.
//
// These builders are pure data — no React, no `window`, no Helmet — so route
// `page.js` server components can call them and render the <script> tags
// directly, exactly like app/blog/[slug]/page.js already does.
//
// Deliberate changes vs. the old client-side schema
// ────────────────────────────────────────────────
// 1. `aggregateRating` (4.8 / 150 reviews) is GONE. It was hard-coded on every
//    page with no reviews anywhere on the site — a direct violation of Google's
//    structured-data policy for review snippets and a manual-action risk.
// 2. The inline Organization object is replaced by a reference to the single
//    canonical `@id` defined in app/layout.js, so the whole site resolves to
//    one Organization entity instead of two conflicting ones.
// 3. The page URL is built from the ROUTE path, not from `pageData.slug`.
//    59 data entries carry a leading-slash slug ("/compare/arcisai-vs-dahua"),
//    which produced `https://arcisai.io//compare/...` in the old schema.
// 4. Per-city `LocalBusiness` markup is gone. The company has one real address
//    (Ahmedabad); claiming a local business at 72 cities is fabricated markup.
//    Geographic pages now use `Service` + `areaServed`, which is accurate.

export const SITE = 'https://arcisai.io';
export const ORGANIZATION_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

/** Normalise any slug/path into a single-leading-slash absolute path. */
export function toPath(value = '') {
  const trimmed = String(value).trim().replace(/^\/+/, '').replace(/\/+$/, '');
  return `/${trimmed}`;
}

/** Absolute canonical URL for a route path. */
export function toAbsoluteUrl(path) {
  const p = toPath(path);
  return p === '/' ? `${SITE}/` : `${SITE}${p}`;
}

/**
 * The root layout applies the `'%s | ArcisAI'` title template, so any page
 * title that already ends in "| ArcisAI" renders as "... | ArcisAI | ArcisAI".
 * Strip the suffix once here and let the template re-add it.
 */
export function stripBrandSuffix(title = '') {
  return String(title).replace(/\s*[|\-–]\s*ArcisAI\s*$/i, '').trim();
}

// Words that must stay fully upper-cased instead of naive title-casing
// ("Cctv", "Nvr", "Vms" reads as a typo, not an acronym). Anywhere a slug
// segment case-insensitively matches one of these, render it upper-cased.
const ACRONYMS = new Set(['ai', 'cctv', 'nvr', 'vms', 'anpr', 'ptz', 'abd', 'sla', 'roi']);

/** Title-case a slug segment, preserving known acronyms: "ai-ptz-cctv-camera" → "AI PTZ CCTV Camera". */
export function humanizeSlug(slug = '') {
  return String(slug)
    .replace(/^\/+/, '')
    .split('-')
    .filter(Boolean)
    .map((w) => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

/** FAQ entries appear as {q,a} in most files and {question,answer} in others. */
function normalizeFaqs(pageData) {
  const items = pageData.faqs || pageData.faq || [];
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => ({
      question: (item.q || item.question || '').trim(),
      answer: (item.a || item.answer || '').trim(),
    }))
    .filter((item) => item.question && item.answer);
}

const GEO_CATEGORIES = new Set(['city', 'state', 'geo']);

/**
 * Build every JSON-LD object for one SEO landing page.
 *
 * @param {object}  args
 * @param {object}  args.pageData  resolved entry from resolveSeoPageData()
 * @param {string}  args.path      the real route path, e.g. "/compare/arcisai-vs-dahua"
 * @param {string} [args.areaServed] place name for geographic pages
 * @returns {object[]} schema objects, ready to JSON.stringify into <script> tags
 */
export function buildSeoPageSchemas({ pageData, path, areaServed } = {}) {
  if (!pageData || !path) return [];

  const url = toAbsoluteUrl(path);
  const name = stripBrandSuffix(pageData.title || pageData.heroTitle || humanizeSlug(path));
  const description = pageData.metaDescription || pageData.heroDescription || '';
  const category = pageData.category;
  const crumbName = pageData.heroTitle || name;

  const schemas = [];

  // ── WebPage ───────────────────────────────────────────────────────────────
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  });

  // ── BreadcrumbList ────────────────────────────────────────────────────────
  // Only "Home" carries an `item` URL — there are no /compare, /industry,
  // /resources or /state hub pages, so an intermediate crumb would point at a
  // 404. The trailing crumb is the current page, which Google allows without
  // a URL.
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: crumbName, item: url },
    ],
  });

  // ── Primary entity ────────────────────────────────────────────────────────
  // Comparison pages genuinely describe the camera product, so they keep
  // Product markup. Every other page describes a deployment of the service in
  // a place or an industry, so Product would not be the main content of the
  // page — those get a Service entity instead.
  if (category === 'compare') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${url}#product`,
      name: 'ArcisAI AI CCTV Camera',
      description,
      url,
      category: 'AI CCTV Cameras',
      brand: { '@type': 'Brand', name: 'ArcisAI' },
      manufacturer: { '@id': ORGANIZATION_ID },
      // Range matches the pricing published on /faq. No `offerCount` and no
      // `aggregateRating` — neither is verifiable on-page.
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '149',
        highPrice: '1499',
        availability: 'https://schema.org/InStock',
        seller: { '@id': ORGANIZATION_ID },
      },
    });
  } else {
    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: pageData.heroTitle || name,
      description,
      url,
      serviceType: 'AI Video Surveillance',
      provider: { '@id': ORGANIZATION_ID },
      brand: { '@type': 'Brand', name: 'ArcisAI' },
    };
    if (GEO_CATEGORIES.has(category)) {
      service.areaServed = {
        '@type': 'Place',
        name: areaServed || crumbName,
      };
    }
    schemas.push(service);
  }

  // ── FAQPage ───────────────────────────────────────────────────────────────
  const faqs = normalizeFaqs(pageData);
  if (faqs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return schemas;
}

/**
 * Metadata (title / description / canonical / OG) for an SEO landing route,
 * built from the CURATED copy in the data files.
 *
 * The landing routes previously generated their titles from the slug
 * ("AI CCTV Banking Atm Security | Smart Surveillance | ArcisAI"), throwing
 * away the hand-written `title` and `metaDescription` on every entry.
 */
export function buildSeoPageMetadata({ pageData, path, fallbackTitle, fallbackDescription, ogImage } = {}) {
  const canonical = toAbsoluteUrl(path);
  const title = stripBrandSuffix(pageData?.title || fallbackTitle || humanizeSlug(path));
  const description = pageData?.metaDescription || fallbackDescription || '';

  return {
    title,
    description,
    ...(pageData?.keywords?.length ? { keywords: pageData.keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: ogImage || '/og/home.jpg', width: 1200, height: 630 }],
    },
    // Without an explicit `twitter` block here, Next.js metadata resolution
    // falls back to the root layout's generic default
    // ("NDAA-compliant, STQC-certified edge AI cameras...") on every one of
    // these ~250 SEO landing pages instead of the page's own title/description.
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || '/og/home.jpg'],
    },
  };
}
