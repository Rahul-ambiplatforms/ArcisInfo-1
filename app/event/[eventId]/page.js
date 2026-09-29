import { notFound } from 'next/navigation';
import IFSEC from '@/src/views/EventPage/IFSEC';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
export const revalidate = 86400;

// SEO audit fix (2026-09-28): IFSEC.js resolves exactly one event id and
// `return null`s for anything else, so every other segment used to serve a
// 200 with a humanized <title>/description promising a real event page over a
// body containing no <h1> and no content at all — a soft 404 (and the source
// of the "missing H1" finding on invalid event URLs). Mirrors the
// /solution/[solutionId] fix. Keep this set in sync with the eventId checks in
// src/views/EventPage/IFSEC.js and the /event/* entries in app/sitemap.js when
// a second event is added.
const REAL_EVENT_IDS = new Set(['ifsec-india-2025']);

export function generateStaticParams() {
  return Array.from(REAL_EVENT_IDS).map((eventId) => ({ eventId }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { eventId } = params;

  if (!REAL_EVENT_IDS.has(eventId)) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const name = humanizeSlug(eventId);
  const ogTitle = `${name} | ArcisAI Events`;
  const ogDescription = `Meet ArcisAI at ${name} — live AI surveillance demos.`;

  return {
    title: `${name}`,
    description: `ArcisAI at ${name} — experience live demos of AI CCTV cameras, ArcisGPT, and Cloud VMS. Meet our team and explore enterprise surveillance solutions.`,
    alternates: { canonical: `https://arcisai.io/event/${eventId}`, languages: buildHreflang(`https://arcisai.io/event/${eventId}`) },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://arcisai.io/event/${eventId}`,
      images: [{ url: '/og/events.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ['/og/events.jpg'],
    },
  };
}

export default async function EventDetailPage(props) {
  const params = await props.params;
  // Real 404 instead of the blank 200 IFSEC.js's `return null` produced —
  // see the soft-404 note above.
  if (!REAL_EVENT_IDS.has(params.eventId)) {
    notFound();
  }
  return <IFSEC eventId={params.eventId} />;
}
