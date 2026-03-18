import BlogsDashboard from '@/src/pages/Blogs/BlogsDashboard';

export const metadata = {
  title: 'ArcisAI Blog | AI Surveillance & Security Insights',
  description:
    'Latest in AI surveillance, smart cities, edge analytics, and video intelligence. Industry trends, product updates, and security best practices from ArcisAI.',
  keywords: [
    'surveillance blog', 'AI security articles', 'video analytics insights',
    'smart city news', 'surveillance trends',
  ],
  alternates: { canonical: 'https://arcisai.io/blog' },
  openGraph: {
    title: 'ArcisAI Blog | AI Surveillance & Security Insights',
    description: 'Latest AI surveillance trends, product updates, and security best practices.',
    url: 'https://arcisai.io/blog',
    images: [{ url: '/og/blog.jpg', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <BlogsDashboard />;
}
