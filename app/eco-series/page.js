import Series from '@/src/views/Series/Series';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'ECO-Series Value AI Cameras | Affordable Smart CCTV',
  description:
    'ECO-Series PTZ, Dome, Bullet cameras for budget-conscious deployments. Same powerful AI capabilities at value pricing. 30+ models available with edge AI analytics.',
  keywords: [
    'ECO-Series camera', 'affordable CCTV', 'budget surveillance',
    'AI camera value', 'cost-effective security camera',
  ],
  alternates: { canonical: 'https://arcisai.io/eco-series', languages: buildHreflang('https://arcisai.io/eco-series') },
  openGraph: {
    // Kept identical to the resolved <title> tag (this page's `title` above +
    // the root layout's ' | ArcisAI' template) — it previously said just
    // "... | ArcisAI", dropping the "Affordable Smart CCTV" middle segment,
    // so shared links didn't match what search results/tabs showed.
    title: 'ECO-Series Value AI Cameras | Affordable Smart CCTV | ArcisAI',
    description: 'Affordable AI CCTV cameras with full edge analytics. Value pricing, enterprise quality.',
    url: 'https://arcisai.io/eco-series',
    images: [{ url: '/og/eco-series.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECO-Series Value AI Cameras | Affordable Smart CCTV | ArcisAI',
    description: 'Affordable AI CCTV cameras with full edge analytics. Value pricing, enterprise quality.',
    images: ['/og/eco-series.jpg'],
  },
};

export default function EcoSeriesPage() {
  return <Series seriesId="eco-series" />;
}
