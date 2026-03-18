import ConvergenceIndia2026 from '@/src/pages/Events/ConvergenceIndia2026';

export const metadata = {
  title: 'ArcisAI at Convergence India 2026 | AI Surveillance Exhibition',
  description:
    'Visit ArcisAI at Convergence India 2026. Experience live demos of AI CCTV cameras, ArcisGPT video search, and Cloud VMS. Meet our team and explore enterprise surveillance solutions.',
  keywords: [
    'Convergence India 2026', 'ArcisAI exhibition', 'AI surveillance demo',
    'ArcisGPT demo', 'CCTV trade show India',
  ],
  alternates: { canonical: 'https://arcisai.io/events/convergence-india-2026' },
  openGraph: {
    title: 'ArcisAI at Convergence India 2026',
    description: 'Experience live demos of AI CCTV cameras and ArcisGPT at Convergence India 2026.',
    url: 'https://arcisai.io/events/convergence-india-2026',
    images: [{ url: '/og/convergence-india-2026.jpg', width: 1200, height: 630 }],
  },
};

export default function ConvergenceIndia2026Page() {
  return <ConvergenceIndia2026 />;
}
