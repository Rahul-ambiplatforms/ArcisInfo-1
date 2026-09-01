import { notFound } from 'next/navigation';
import Solutions from '@/src/views/Solution/Solutions';
import { getSolutionSEO } from '@/src/views/Solution/Data/SEOContent';

// NOTE: deliberately NOT importing `Solution` from Data/Content.js here.
// That file's data objects pull in raw .svg icon imports, and Content.js is
// otherwise only ever reached through Solutions.js — a 'use client'
// component, where Next's SVGR webpack rule handles them fine. Importing it
// directly into this file (a Server Component) routes those same .svg files
// through the server compiler instead, which failed to parse them ("no
// loaders configured") in testing. getSolutionSEO() below has the exact same
// key set ('edge-ai' | 'cloud-ai' | 'generative-ai') without importing any
// SVGs, so it's used as the "does this id have real content" check instead.
const REAL_SOLUTION_IDS = new Set(['edge-ai', 'cloud-ai', 'generative-ai']);

// SEO audit fix (2026-09-01): generateStaticParams previously listed 8 ids
// ('edge-ai' + 7 others — corporate/retail/banking/smart-city/healthcare/
// manufacturing/logistics) that had curated metadata (title/description/OG)
// but NO entry in `Solution` (src/views/Solution/Data/Content.js). Solutions.js
// resolves `Solution[solutionId]`, finds nothing, and renders a bare
// "Solution not found" placeholder — while this route kept returning HTTP 200
// with real-looking meta tags. That is a textbook soft-404: crawlers see rich
// metadata promising real content and an empty body, which is exactly the
// "Soft 404" bucket GSC's Page Indexing report flags as a website-caused
// indexing failure.
//
// Meanwhile 'cloud-ai' and 'generative-ai' DO have full real entries in
// `Solution` (and matching curated SEO in SEOContent.js) but were never in
// generateStaticParams, so they had no static build output and weren't
// discoverable via the sitemap.
//
// Fix: only prerender/serve the ids that actually have content —
// REAL_SOLUTION_IDS below, which is exactly ['edge-ai', 'cloud-ai',
// 'generative-ai']. The 7 orphaned ids are 301-redirected in
// next.config.js to the equivalent page that already has real content
// (or, for 'corporate', which has no equivalent, simply removed — a real
// 404 there is honest; a fake 200 was not).
export const revalidate = 86400;

export function generateStaticParams() {
  return Array.from(REAL_SOLUTION_IDS).map((solutionId) => ({ solutionId }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { solutionId } = params;

  if (!REAL_SOLUTION_IDS.has(solutionId)) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const solutionSEO = getSolutionSEO(solutionId);
  const title = solutionSEO?.metatitle ?? `${solutionId.replace(/-/g, ' ')} Surveillance Solutions`;
  const description =
    solutionSEO?.metadescription ??
    `AI surveillance solutions for ${solutionId.replace(/-/g, ' ')} — edge AI cameras, cloud VMS, and smart analytics from ArcisAI.`;
  const canonical = solutionSEO?.canonical ?? `https://arcisai.io/solution/${solutionId}`;
  const ogImage = solutionSEO?.ogimage ?? '/og/solutions.jpg';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@arcisai',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SolutionPage(props) {
  const params = await props.params;
  // Real 404 (not a 200 "Solution not found" placeholder) for any id with no
  // backing content — see the soft-404 note above. Solutions.js (a 'use
  // client' component) does the equivalent `Solution[solutionId]` check
  // itself and would render nothing useful anyway; this just makes sure the
  // HTTP status is honest before it gets that far.
  if (!REAL_SOLUTION_IDS.has(params.solutionId)) {
    notFound();
  }
  return <Solutions solutionId={params.solutionId} />;
}
