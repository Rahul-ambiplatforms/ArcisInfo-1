/**
 * Sitewide hreflang set.
 *
 * ArcisAI's site is English-only (no translated/forked content per market),
 * but the Organization schema's `areaServed` (IN, US, AE, GB, SG, AU) shows
 * this is meant to be discoverable across several English-speaking/English-
 * fluent regions, not just India. Since there's no separate content per
 * region, every locale below points at the SAME canonical URL — this is
 * Google's supported pattern for "one page, multiple regional audiences"
 * (as opposed to hreflang for genuinely translated alternate pages).
 *
 * A full SEO audit (2026-09-07) found zero hreflang tags anywhere on the
 * live site (verified via direct DOM inspection on 3+ page types) — every
 * page defines its own `alternates.canonical`, and Next.js metadata
 * resolution replaces the whole `alternates` object rather than merging it
 * with a parent layout's, so a single root-level hreflang declaration would
 * be silently wiped by every child page. This helper is meant to be spread
 * into every page's own `alternates` block instead.
 */
const LOCALES = ['x-default', 'en', 'en-IN', 'en-US', 'en-GB', 'en-AE', 'en-SG', 'en-AU'];

export function buildHreflang(canonicalUrl) {
  const languages = {};
  for (const locale of LOCALES) {
    languages[locale] = canonicalUrl;
  }
  return languages;
}
