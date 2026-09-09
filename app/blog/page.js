import BlogsDashboard from '@/src/views/Blogs/BlogsDashboard';
import { buildHreflang } from '@/src/data/hreflang';

// Server-fetch the published blog list so the post <Link> cards are rendered
// into the initial HTML (crawlable) instead of only after a client-side
// useEffect fetch. Mirrors the proven server-fetch pattern in
// app/blog/[slug]/page.js. ISR keeps the hub fast and resilient to backend
// blips; on any failure we fall back to [] and the client fetch takes over.
const API_BASE = process.env.API_BASE_URL || 'https://vmukti.com/backend/api';

// Keep in sync with VMUKTI_BLOG_SLUGS in src/views/Blogs/BlogsGrid.js — the
// shared backend has no per-site flag, so VMukti posts must be filtered out
// server-side before their links reach crawlable HTML.
const VMUKTI_BLOG_SLUGS = new Set([
  'ai-video-analytics-buyers-guide',
  'edge-ai-vs-cloud-video-surveillance',
  'banks-ai-video-analytics-fraud',
  'cloud-vms-vs-on-premise-comparison',
  'healthcare-video-analytics',
  'logistics-video-analytics',
]);

export const revalidate = 3600;

async function getInitialBlogs() {
  try {
    const res = await fetch(
      `${API_BASE}/blogs?page=1&limit=200&sort=latest&status=published`,
      {
        headers: {
          Origin: 'https://arcisai.io',
          'x-tenant': 'arcis',
          'User-Agent': 'next-server',
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const json = await res.json();
    if (json?.status !== 'success' || !Array.isArray(json.data)) return [];
    return json.data.filter(
      (b) =>
        b.status === 'published' &&
        !VMUKTI_BLOG_SLUGS.has(b.metadata?.urlWords) &&
        !b.content?.title?.toLowerCase().includes('vmukti'),
    );
  } catch (e) {
    console.error('Server blog list fetch failed:', e?.message || e);
    return [];
  }
}

export const metadata = {
  title: 'ArcisAI Blog | AI Surveillance & Security Insights',
  description:
    'Latest in AI surveillance, smart cities, edge analytics, and video intelligence. Industry trends, product updates, and security best practices from ArcisAI.',
  keywords: [
    'surveillance blog', 'AI security articles', 'video analytics insights',
    'smart city news', 'surveillance trends',
  ],
  alternates: { canonical: 'https://arcisai.io/blog', languages: buildHreflang('https://arcisai.io/blog') },
  openGraph: {
    title: 'ArcisAI Blog | AI Surveillance & Security Insights',
    description: 'Latest AI surveillance trends, product updates, and security best practices.',
    url: 'https://arcisai.io/blog',
    images: [{ url: '/og/blog.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcisAI Blog | AI Surveillance & Security Insights',
    description: 'Latest AI surveillance trends, product updates, and security best practices.',
    images: ['/og/blog.jpg'],
  },
};

// /blog previously shipped no structured data at all: the only JSON-LD in
// BlogsDashboard was commented out, and everything else on that component went
// through the client-only <Helmet>. Built here, in the server component, from
// the same post list the page renders — so the markup can't drift from the
// visible content.
function buildBlogSchemas(posts) {
  const SITE = 'https://arcisai.io';
  const url = `${SITE}/blog`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${url}#blog`,
      url,
      name: 'ArcisAI Blog',
      description:
        'Latest in AI surveillance, smart cities, edge analytics, and video intelligence.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${SITE}/#website` },
      publisher: { '@id': `${SITE}/#organization` },
      blogPost: posts.slice(0, 50).map((b) => ({
        '@type': 'BlogPosting',
        headline: b.content?.title,
        url: `${SITE}/blog/${b.metadata?.urlWords}`,
        ...(b.createdAt ? { datePublished: b.createdAt } : {}),
        ...(b.updatedAt ? { dateModified: b.updatedAt } : {}),
        author: { '@id': `${SITE}/#organization` },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: url },
      ],
    },
  ];
}

export default async function BlogPage() {
  const initialBlogs = await getInitialBlogs();
  const schemas = buildBlogSchemas(initialBlogs);
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
      <BlogsDashboard initialBlogs={initialBlogs} />
    </>
  );
}
