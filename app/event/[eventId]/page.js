import IFSEC from '@/src/views/EventPage/IFSEC';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
export const revalidate = 86400;

export function generateStaticParams() {
  return [{ eventId: 'ifsec-india-2025' }];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { eventId } = params;
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
  return <IFSEC eventId={params.eventId} />;
}
