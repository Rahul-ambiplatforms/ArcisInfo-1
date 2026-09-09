import NewsDashboard from '@/src/views/News/NewsDashboard';
import { buildHreflang } from '@/src/data/hreflang';

export const metadata = {
  title: 'News & Press Releases',
  description:
    'Latest news, announcements and press releases from ArcisAI. Stay up to date with our newest AI surveillance products, events and milestones.',
  keywords: [
    'ArcisAI news',
    'AI surveillance news',
    'press releases',
    'announcements',
    'company updates',
  ],
  alternates: { canonical: 'https://arcisai.io/news', languages: buildHreflang('https://arcisai.io/news') },
  openGraph: {
    title: 'News & Press Releases | ArcisAI',
    description:
      'Latest news, announcements and press releases from ArcisAI.',
    url: 'https://arcisai.io/news',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Press Releases | ArcisAI',
    description: 'Latest news, announcements and press releases from ArcisAI.',
    images: ['/og/home.jpg'],
  },
};

export default function NewsPage() {
  return <NewsDashboard />;
}
