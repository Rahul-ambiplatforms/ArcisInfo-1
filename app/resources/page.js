import SectionHub from '@/src/views/SectionHub/SectionHub';
import SeoPageSchemaScripts from '@/src/Components/SEO/SeoPageSchemaScripts';
import { getResourceLinks } from '@/src/data/resolveSeoPageData';
import { SITE, ORGANIZATION_ID, WEBSITE_ID } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO audit fix (2026-09-19, technical SEO pass): same issue and same fix as
// app/industry/page.js — /resources 404'd at its own root (confirmed live),
// and the code comment on getResourceLinks() already called this "a fully
// orphaned cluster (no site link points into them)". This page is the first
// thing that actually links into it.
const CANONICAL = `${SITE}/resources`;

export const revalidate = 86400;

export const metadata = {
title: 'CCTV & Surveillance Resources | ArcisAI',
description:
'Guides, comparisons, and reference material on AI CCTV, compliance, and surveillance technology from ArcisAI.',
keywords: ['CCTV resources', 'AI CCTV guides', 'surveillance reference'],
alternates: { canonical: CANONICAL, languages: buildHreflang(CANONICAL) },
openGraph: {
title: 'CCTV & Surveillance Resources | ArcisAI',
description: 'Guides, comparisons, and reference material on AI CCTV and surveillance technology.',
url: CANONICAL,
images: [{ url: '/og/location.jpg', width: 1200, height: 630 }],
},
twitter: {
card: 'summary_large_image',
title: 'CCTV & Surveillance Resources | ArcisAI',
description: 'Guides, comparisons, and reference material on AI CCTV and surveillance technology.',
images: ['/og/location.jpg'],
},
};

export default function ResourcesHubPage() {
const links = getResourceLinks();

const schemas = [
{
'@context': 'https://schema.org',
'@type': 'CollectionPage',
'@id': `${CANONICAL}#collection`,
url: CANONICAL,
name: 'CCTV & Surveillance Resources',
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
url: `${SITE}/resources/${l.slug}`,
name: l.title,
})),
},
{
'@context': 'https://schema.org',
'@type': 'BreadcrumbList',
'@id': `${CANONICAL}#breadcrumb`,
itemListElement: [
{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
{ '@type': 'ListItem', position: 2, name: 'Resources', item: CANONICAL },
],
},
];

return (
<>
<SeoPageSchemaScripts schemas={schemas} />
<SectionHub
eyebrow="Resources"
title="CCTV & Surveillance Resources"
description="Guides, comparisons, and reference material to help you evaluate and deploy AI CCTV with confidence."
links={links}
basePath="resources"
/>
</>
);
}
