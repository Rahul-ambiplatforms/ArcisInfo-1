import SectionHub from '@/src/views/SectionHub/SectionHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { getCompareLinks } from '@/src/data/resolveSeoPageData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO audit fix (2026-09-19, technical SEO pass): same issue and same fix as
// app/industry/page.js — /compare 404'd at its own root (confirmed live),
// and getCompareLinks()'s own code comment already called this "a fully
// orphaned cluster (only a redirect stub points at one of them)". This page
// is the first real hub linking every /compare/* page together.
const CANONICAL = `${SITE}/compare`;

export const revalidate = 86400;

export const metadata = {
title: 'ArcisAI vs Other CCTV Brands — Comparisons | ArcisAI',
description:
'Side-by-side comparisons of ArcisAI AI CCTV cameras against other CCTV and surveillance brands, on certification, compliance, and features.',
keywords: ['ArcisAI comparison', 'CCTV brand comparison', 'AI CCTV vs'],
alternates: { canonical: CANONICAL, languages: buildHreflang(CANONICAL) },
openGraph: {
title: 'ArcisAI vs Other CCTV Brands — Comparisons | ArcisAI',
description: 'Side-by-side comparisons of ArcisAI AI CCTV cameras against other brands.',
url: CANONICAL,
images: [{ url: '/og/location.jpg', width: 1200, height: 630 }],
},
twitter: {
card: 'summary_large_image',
title: 'ArcisAI vs Other CCTV Brands — Comparisons | ArcisAI',
description: 'Side-by-side comparisons of ArcisAI AI CCTV cameras against other brands.',
images: ['/og/location.jpg'],
},
};

export default function CompareHubPage() {
const links = getCompareLinks();

const schemas = [
{
'@context': 'https://schema.org',
'@type': 'CollectionPage',
'@id': `${CANONICAL}#collection`,
url: CANONICAL,
name: 'ArcisAI vs Other CCTV Brands',
description: metadata.description,
inLanguage: 'en-IN',
isPartOf: { '@id': WEBSITE_ID },
publisher: { '@id': ORGANIZATION_ID },
},
{
'@context': 'https://schema.org',
'@type': 'ItemList',
'@id': `${CANONICAL}#itemlist`,
itemListElement: links.map((l, i) => ({
'@type': 'ListItem',
position: i + 1,
url: `${SITE}/compare/${l.slug}`,
name: l.title,
})),
},
{
'@context': 'https://schema.org',
'@type': 'BreadcrumbList',
'@id': `${CANONICAL}#breadcrumb`,
itemListElement: [
{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
{ '@type': 'ListItem', position: 2, name: 'Compare', item: CANONICAL },
],
},
];

return (
<>
<SeoPageSchemaScripts schemas={schemas} />
<SectionHub
eyebrow="Compare"
title="ArcisAI vs Other CCTV Brands"
description="Certification, compliance, and feature comparisons to help you evaluate ArcisAI against other CCTV brands."
links={links}
basePath="compare"
/>
</>
);
}
