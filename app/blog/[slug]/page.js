import { cache } from 'react';
import BlogsContent from '@/src/views/Blogs/BlogsContents';
import { notFound } from 'next/navigation';

const API_BASE = process.env.API_BASE_URL || 'https://vmukti.com/backend/api';

// Cloudinary base for blog OG images — mirrors IMAGE_BASE_URL in
// src/views/Blogs/BlogsContents.js so the OG image matches what the page shows.
const IMAGE_BASE_URL =
  'https://res.cloudinary.com/dzs02ecai/image/upload/f_auto,q_auto,w_1920/v1761637680/upload_arcis';

// Slug → Title Case, used as a safe fallback when the CMS has no metaTitle.
const slugToTitle = (slug) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

// Build an absolute OG image URL from the blog's mainImage, with guards for a
// missing value or an already-absolute URL. Falls back to the static default.
const buildOgImage = (blog) => {
  const img = blog?.content?.mainImage;
  if (typeof img === 'string' && img.length > 0) {
    return img.startsWith('http') ? img : `${IMAGE_BASE_URL}/${img}`;
  }
  return '/og/blog.jpg';
};

// Fetch the published blog by slug ONCE per request. Wrapped in React cache()
// so generateMetadata() and the page component share a single network request
// (no duplicate fetch). Never throws — returns the blog data object or null so
// callers (metadata fallback + notFound) stay resilient to backend failures.
// Keeps the original `cache: 'no-store'` behavior (route stays dynamic).
const getBlog = cache(async (slug) => {
  try {
    const res = await fetch(`${API_BASE}/blogs/urlWords/${slug}`, {
      headers: { 'User-Agent': 'next-server', Origin: 'https://arcisai.io' },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    // Client expects `blog` state to be the response.data object
    return json && json.data ? json.data : null;
  } catch (e) {
    console.error('Server blog fetch failed:', e?.message || e);
    return null;
  }
});

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  // Shared with the page render via cache() — no extra request.
  const blog = await getBlog(slug);

  const fallbackTitle = slugToTitle(slug);
  const canonical = `https://arcisai.io/blog/${slug}`;

  // Prefer the real CMS SEO fields; fall back to slug-derived values so
  // metadata generation never depends on the backend being reachable.
  const realTitle = blog?.content?.metaTitle || blog?.metadata?.metaTitle || null;
  const description =
    blog?.content?.metaDescription ||
    blog?.metadata?.metaDescription ||
    `Read the ArcisAI blog article: ${fallbackTitle}. Insights on AI surveillance, smart cities, edge analytics, and video intelligence.`;
  const ogImage = buildOgImage(blog);
  const ogTitle = realTitle || `${fallbackTitle} | ArcisAI Blog`;

  return {
    // `absolute` emits the real CMS title verbatim so the root layout's
    // "%s | ArcisAI" template doesn't double the brand. When the CMS title is
    // missing, keep the previous templated slug title.
    title: realTitle ? { absolute: realTitle } : `${fallbackTitle} | ArcisAI Blog`,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: 'article',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage(props) {
  const params = await props.params;
  const { slug } = params;
  // Same cached fetch used by generateMetadata — deduped to one request.
  const initialBlog = await getBlog(slug);

  const title = slugToTitle(slug);
  if (!initialBlog) {
    notFound();
  }
  const canonicalUrl = `https://arcisai.io/blog/${slug}`;

  // Static BlogPosting + BreadcrumbList JSON-LD rendered server-side so crawlers
  // see structured data immediately without executing JavaScript.
  // The client-side BlogsContent component additionally injects any richer
  // schemas stored in blog.content.schemas from the API.
  //
  // Pull the real CMS values (title, author, publish/modify dates, hero image)
  // so the schema reflects the actual post: this carries author for E-E-A-T and
  // dateModified for freshness signals in AI/search surfaces. Every field is
  // guarded and omitted when the backend doesn't supply it — never fabricated.
  const realTitle =
    initialBlog?.content?.metaTitle || initialBlog?.metadata?.metaTitle || null;
  const realDescription =
    initialBlog?.content?.metaDescription ||
    initialBlog?.metadata?.metaDescription ||
    null;
  const authorName =
    initialBlog?.content?.author || initialBlog?.blogAuthor || null;
  const datePublished = initialBlog?.createdAt || null;
  const dateModified = initialBlog?.updatedAt || initialBlog?.createdAt || null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: realTitle || title,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    ...(realDescription ? { description: realDescription } : {}),
    author: authorName
      ? { '@type': 'Person', name: authorName }
      : { '@type': 'Organization', '@id': 'https://arcisai.io/#organization', name: 'ArcisAI' },
    publisher: {
      '@id': 'https://arcisai.io/#organization',
    },
    image: buildOgImage(initialBlog),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
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
