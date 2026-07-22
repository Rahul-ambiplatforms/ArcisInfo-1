// SERVER-ONLY SEO data resolver.
// Imported only by server components (route page.js files) so the ~125-page
// SEO dataset is NOT shipped to the browser. The client landing component
// receives just the single resolved entry as a prop.
import seoPageData from './seoPageData';
import seoPageDataExpansion from './seoPageDataExpansion';
import seoPageDataGeo from './seoPageDataGeo';
import seoPageDataCompare from './seoPageDataCompare';
import seoPageDataCompliance from './seoPageDataCompliance';
import seoPageDataExpansion2 from './seoPageDataExpansion2';
import seoPageDataGeoIntl from './seoPageDataGeoIntl';
import seoPageDataExpansion3 from './seoPageDataExpansion3';
import seoPageDataExpansion4 from './seoPageDataExpansion4';
import seoPageDataExpansion5 from './seoPageDataExpansion5';
import seoPageDataGujaratCities from './seoPageDataGujaratCities';
import seoPageDataMaharashtraCities from './seoPageDataMaharashtraCities';
import seoPageDataTier2Cities from './seoPageDataTier2Cities';

const allSeoData = {
  ...seoPageData, ...seoPageDataExpansion, ...seoPageDataGeo, ...seoPageDataCompare,
  ...seoPageDataCompliance, ...seoPageDataExpansion2, ...seoPageDataGeoIntl,
  ...seoPageDataExpansion3, ...seoPageDataExpansion4, ...seoPageDataExpansion5,
  ...seoPageDataGujaratCities, ...seoPageDataMaharashtraCities, ...seoPageDataTier2Cities,
};

// Same multi-strategy lookup the client used before — now run on the server.
export function resolveSeoKey({ category, pageSlug, city, slug, seriesId } = {}) {
  if (city && allSeoData[`cctv-cameras-${city}`]) return `cctv-cameras-${city}`;
  if (category && pageSlug && allSeoData[`${category}-${pageSlug}`]) return `${category}-${pageSlug}`;
  if (pageSlug && allSeoData[pageSlug]) return pageSlug;
  if (category && allSeoData[category]) return category;
  if (slug && allSeoData[`ai-cctv-${slug}`]) return `ai-cctv-${slug}`;
  if (slug && allSeoData[slug]) return slug;
  if (seriesId && allSeoData[seriesId]) return seriesId;
  return null;
}

export function resolveSeoPageData(params = {}) {
  const key = resolveSeoKey(params);
  if (!key) return null;
  // Attach the resolved key so the view can build canonical URLs without it.
  return { ...allSeoData[key], slug: allSeoData[key].slug || key };
}

// Server-only: every CCTV city / industry landing-page link, for building a
// crawlable internal-link index (fixes the orphan-page crawlability issue).
// Uses the data KEY as the slug — keys have no leading slash, whereas some
// `slug` fields do — and each key round-trips through the /[slug] catch-all.
export function getCctvLocationLinks() {
  return Object.entries(allSeoData)
    .filter(
      ([k]) => k.startsWith('cctv-cameras-') || k.startsWith('ai-cctv-cameras-'),
    )
    .map(([k, v]) => ({ slug: k, title: (v && (v.heroTitle || v.title)) || k }));
}
