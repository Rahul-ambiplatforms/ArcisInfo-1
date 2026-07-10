import BlogsContent from '@/src/views/Blogs/BlogsContents';

const API_BASE = process.env.API_BASE_URL || 'https://vmukti.com/backend/api';

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

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  let initialBlog = null;

  try {
    const res = await fetch(`${API_BASE}/blogs/urlWords/${slug}`, {
      headers: { 'User-Agent': 'next-server' },
      cache: 'no-store',
    });
    if (res.ok) {
      const json = await res.json();
      // Client expects `blog` state to be the response.data object
      initialBlog = json && json.data ? json.data : null;
    }
  } catch (e) {
    // swallow - component will handle missing blog
    console.error('Server blog fetch failed:', e?.message || e);
    initialBlog = null;
  }
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const canonicalUrl = `https://arcisai.io/blog/${slug}`;

  // Static Article + BreadcrumbList JSON-LD rendered server-side so crawlers
  // see structured data immediately without executing JavaScript.
  // The client-side BlogsContent component additionally injects any richer
  // schemas stored in blog.content.schemas from the API.
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    url: canonicalUrl,
    author: {
      '@type': 'Organization',
      '@id': 'https://arcisai.io/#organization',
      name: 'ArcisAI',
    },
    publisher: {
      '@id': 'https://arcisai.io/#organization',
    },
    image: 'https://arcisai.io/og/blog.jpg',
    inLanguage: 'en-IN',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arcisai.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://arcisai.io/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogsContent urlWords={slug} initialBlog={initialBlog} />
    </>
  );
}
