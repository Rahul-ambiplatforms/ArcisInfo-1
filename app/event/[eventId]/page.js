import IFSEC from '@/src/views/EventPage/IFSEC';

// Prerendered so the HTML is edge-cacheable instead of rendered per request.
export const revalidate = 86400;

export function generateStaticParams() {
  return [{ eventId: 'ifsec-india-2025' }];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { eventId } = params;
  const name = eventId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name}`,
    description: `ArcisAI at ${name} — experience live demos of AI CCTV cameras, ArcisGPT, and Cloud VMS. Meet our team and explore enterprise surveillance solutions.`,
    alternates: { canonical: `https://arcisai.io/event/${eventId}` },
    openGraph: {
      title: `${name} | ArcisAI Events`,
      description: `Meet ArcisAI at ${name} — live AI surveillance demos.`,
      url: `https://arcisai.io/event/${eventId}`,
      images: [{ url: '/og/events.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function EventDetailPage(props) {
  const params = await props.params;
  return <IFSEC eventId={params.eventId} />;
}
