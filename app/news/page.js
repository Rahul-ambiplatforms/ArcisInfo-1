import NewsDashboard from '@/src/views/News/NewsDashboard';

export const metadata = {
  title: 'News & Press Releases | ArcisAI',
  description:
    'Latest news, announcements and press releases from ArcisAI. Stay up to date with our newest AI surveillance products, events and milestones.',
  keywords: [
    'ArcisAI news',
    'AI surveillance news',
    'press releases',
    'announcements',
    'company updates',
  ],
  alternates: { canonical: 'https://arcisai.io/news' },
  openGraph: {
    title: 'News & Press Releases | ArcisAI',
    description:
      'Latest news, announcements and press releases from ArcisAI.',
    url: 'https://arcisai.io/news',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
};

export default function NewsPage() {
  return <NewsDashboard />;
}
