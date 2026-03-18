import Series from '@/src/views/Series/Series';

export const metadata = {
  title: 'ECO-Series Value AI Cameras | Affordable Smart CCTV | ArcisAI',
  description:
    'ECO-Series PTZ, Dome, Bullet cameras for budget-conscious deployments. Same powerful AI capabilities at value pricing. 30+ models available with edge AI analytics.',
  keywords: [
    'ECO-Series camera', 'affordable CCTV', 'budget surveillance',
    'AI camera value', 'cost-effective security camera',
  ],
  alternates: { canonical: 'https://arcisai.io/eco-series' },
  openGraph: {
    title: 'ECO-Series Value AI Cameras | ArcisAI',
    description: 'Affordable AI CCTV cameras with full edge analytics. Value pricing, enterprise quality.',
    url: 'https://arcisai.io/eco-series',
    images: [{ url: '/og/eco-series.jpg', width: 1200, height: 630 }],
  },
};

export default function EcoSeriesPage() {
  return <Series seriesId="eco-series" />;
}
