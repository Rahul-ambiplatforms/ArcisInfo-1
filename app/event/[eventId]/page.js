import IFSEC from '@/src/pages/EventPage/IFSEC';

export async function generateMetadata({ params }) {
  const { eventId } = params;
  const name = eventId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${name} | ArcisAI Events`,
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

export default function EventDetailPage({ params }) {
  return <IFSEC eventId={params.eventId} />;
}
