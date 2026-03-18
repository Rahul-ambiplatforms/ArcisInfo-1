import BlogsContent from '@/src/pages/Blogs/BlogsContents';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${title} | ArcisAI Blog`,
    description: `Read the ArcisAI blog article: ${title}. Insights on AI surveillance, smart cities, edge analytics, and video intelligence.`,
    alternates: { canonical: `https://arcisai.io/blog/${slug}` },
    openGraph: {
      title: `${title} | ArcisAI Blog`,
      description: `ArcisAI blog: ${title}`,
      url: `https://arcisai.io/blog/${slug}`,
      type: 'article',
      images: [{ url: '/og/blog.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function BlogPostPage({ params }) {
  return <BlogsContent urlWords={params.slug} />;
}
