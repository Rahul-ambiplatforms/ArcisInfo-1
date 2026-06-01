import BlogsContent from '@/src/views/Blogs/BlogsContents';

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
  const { slug } = params;
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
      <BlogsContent urlWords={slug} />
    </>
  );
}
