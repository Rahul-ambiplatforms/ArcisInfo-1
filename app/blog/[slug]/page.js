import { cache } from 'react';
import BlogsContent from '@/src/views/Blogs/BlogsContents';
import { notFound } from 'next/navigation';
import { buildHreflang } from '@/src/data/hreflang';
import Breadcrumbs from '@/src/Components/Breadcrumbs';

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

// SEO overrides (2026-11-14, ARC-005 / ARC-006): title + meta description for
// posts with high Search Console impressions but very low CTR. Kept in code
// so they apply regardless of the CMS record; remove an entry once the CMS
// metaTitle/metaDescription have been updated to match. Body copy is NOT
// changed here -- that still lives in the CMS.
const BLOG_SEO_OVERRIDES = {
  'is-hikvision-banned-in-india-2026': {
    title: 'Is Hikvision Banned in India? No – The 2026 STQC Rule Explained',
    description:
      "Hikvision isn't banned by name. Since 1 April 2026, IP CCTV cameras sold in India must pass STQC security testing. What this means for buyers and installers.",
  },
  'two-way-audio-cctv-camera': {
    title: 'Two-Way Audio CCTV Camera: How Talk-Back Works & What to Buy',
    description:
      'See how a two-way audio (talk-back) CCTV camera works, where it helps most, and what to check before you buy one for your home, shop or office.',
  },
  'cctv-camera-with-mobile-app': {
    title: 'CCTV Camera With Mobile App: See All Cameras on One Phone',
    description:
      'View every CCTV camera at home or work from one phone app – live view, recordings and AI alerts. See how the ArcisAI app works and what to look for.',
  },
  // ARC-017 (2026-11-16): title <= 65 chars / description 70-165 chars.
  // Only the field that was out of range is overridden; the rest still comes from the CMS.
  'fsie-2026-ai-fire-security-industry-india': {
    title: "FSIE 2026: How AI Is Changing India's Fire & Security Sector",
  },
  'arcisai-sponsors-jalandhar-warriors-sher-e-punjab-t20-league': {
    title: "ArcisAI Partners With Jalandhar Warriors | Sher-e-Punjab T20",
  },
  'cctv-after-sales-support-guide': {
    title: "CCTV After-Sales Support: Why It Beats Specs | ArcisAI",
  },
  'arcisai-mobile-app-ai-insights-camera-health-login': {
    title: "New ArcisAI Mobile App: AI Insights & Camera Health",
    description:
      "The new ArcisAI mobile app brings AI Insights, camera health checks, mobile number login, a support assistant and full CCTV control from anywhere.",
  },
  'arcisai-vs-hikvision-vs-dahua-ai-camera-comparison-2026': {
    description:
      "ArcisAI vs Hikvision vs Dahua AI cameras for enterprise security: edge AI, STQC certification, data sovereignty, pricing and analytics compared.",
  },
  'best-ai-cctv-cameras-enterprise-security-2026': {
    description:
      "A guide to the best AI CCTV cameras for enterprise security in 2026. ArcisAI, Hikvision, Dahua and Axis compared on edge AI, STQC and features.",
  },
  'edge-ai-cctv-cameras-on-camera-processing-future-surveillance': {
    title: "Edge AI CCTV Cameras: Why On-Camera AI Wins | ArcisAI",
    description:
      "How edge AI on CCTV cameras cuts cloud dependency, lowers alert delay and keeps video data local. Learn how ArcisAI edge AI cameras work.",
  },
  'how-to-choose-ai-cctv-camera-smart-city-projects-india-2026': {
    title: "Choosing AI CCTV for Smart City Projects in India | ArcisAI",
    description:
      "How to pick AI CCTV cameras for Indian smart city projects: edge AI, cloud VMS, STQC compliance, BIS certification and scale requirements.",
  },
  'edge-ai-vs-cloud-ai-video-surveillance-enterprise-buyers-guide-2026': {
    title: "Edge AI vs Cloud AI CCTV: 2026 Buyer's Guide | ArcisAI",
    description:
      "Edge AI vs cloud AI for enterprise video surveillance: latency, bandwidth, privacy, total cost and scale compared to help you buy right.",
  },
  'best-ai-cctv-camera-home-security-india-2026': {
    description:
      "The best AI CCTV cameras for home security in India in 2026. Compare edge AI, cloud storage, night vision and alerts from ArcisAI, CP Plus and more.",
  },
  'arcisai-vs-cp-plus-ai-cctv-comparison-2026': {
    title: "ArcisAI vs CP Plus: AI CCTV Comparison 2026",
    description:
      "ArcisAI vs CP Plus AI CCTV cameras in 2026: edge AI, STQC certification, cloud VMS, pricing and analytics compared to help you choose.",
  },
  'best-ai-cctv-camera-office-business-security-india-2026': {
    title: "Best AI CCTV for Office & Business Security 2026 | ArcisAI",
    description:
      "The best AI CCTV cameras for office and business security in India in 2026: edge AI analytics, people counting, access control and compliance.",
  },
  'ai-cctv-camera-for-bank-security': {
    title: "AI CCTV Cameras for Bank & ATM Security | ArcisAI",
    description:
      "How AI CCTV cameras help banks and ATMs spot threats early, prevent fraud and improve day-to-day safety. See what to look for in a bank camera.",
  },
};

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const seoOverride = BLOG_SEO_OVERRIDES[slug] || null;
  // Shared with the page render via cache() — no extra request.
  const blog = await getBlog(slug);

  const fallbackTitle = slugToTitle(slug);
  const canonical = `https://arcisai.io/blog/${slug}`;

  // Prefer the real CMS SEO fields; fall back to slug-derived values so
  // metadata generation never depends on the backend being reachable.
  const realTitle = seoOverride?.title || blog?.content?.metaTitle || blog?.metadata?.metaTitle || null;
  const description =
    seoOverride?.description ||
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
    alternates: { canonical, languages: buildHreflang(canonical) },
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
  // ARC-028 (2026-11-17): some posts name a real author only inside the
  // CMS-authored JSON-LD (blog.content.schemas), while content.author is empty.
  // That page then carried two conflicting authors (Organization here, Person in
  // the CMS schema). Reuse the CMS Person name when the plain field is empty, so
  // the page states one author. Nothing is invented: the name is already
  // published on the page by the CMS.
  const cmsPersonAuthor = (() => {
    const list = Array.isArray(initialBlog?.content?.schemas) ? initialBlog.content.schemas : [];
    for (const item of list) {
      try {
        const parsed = JSON.parse(item?.content?.schemaData || '');
        const nodes = [].concat(parsed?.['@graph'] || parsed);
        for (const node of nodes) {
          const a = node && node.author ? [].concat(node.author)[0] : null;
          if (a && a['@type'] === 'Person' && typeof a.name === 'string' && a.name.trim()) {
            return a.name.trim();
          }
        }
      } catch {
        /* skip malformed CMS schema */
      }
    }
    return null;
  })();
  const authorName =
    initialBlog?.content?.author || initialBlog?.blogAuthor || cmsPersonAuthor || null;
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

  // Robustness fix (2026-09-16) for the CMS-authored schemas (FAQPage, HowTo, etc.
  // stored in blog.content.schemas).
  //
  // To be clear about what this does NOT fix: these were already present in the
  // server HTML. BlogsContents.js carries 'use client', but it is a plain static
  // import with no ssr:false, so Next.js still server-renders it, and its
  // useState(initialBlog) seed means `blog` is populated during that server pass.
  // Crawlers — including non-JS ones — were already seeing this schema.
  //
  // What was actually wrong: the old call was an unguarded
  // blog.content.schemas.map(...). Any post where the CMS omits `schemas` (or
  // returns null) throws during render and takes the whole page down. It also
  // emitted schemaData verbatim, so a single malformed entry from the CMS shipped
  // broken JSON-LD to search engines.
  //
  // So this moves the render server-side where the data already lives, guards the
  // array, and validates each entry as JSON — anything unparseable is skipped
  // rather than emitted. Emitting malformed JSON-LD is worse than emitting none.
  const cmsSchemas = (
    Array.isArray(initialBlog?.content?.schemas) ? initialBlog.content.schemas : []
  )
    .map((item) => item?.content?.schemaData)
    .filter((raw) => {
      if (typeof raw !== 'string' || !raw.trim()) return false;
      try {
        JSON.parse(raw);
        return true;
      } catch {
        return false;
      }
    });

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
      {cmsSchemas.map((raw, index) => (
        <script
          key={`cms-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: raw }}
        />
      ))}
      {/* SEO audit fix (2026-09-07, checklist item #59): visible trail
          matching the BreadcrumbList schema above — was JSON-LD-only before. */}
      <Breadcrumbs
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: title },
        ]}
      />
      <BlogsContent urlWords={slug} initialBlog={initialBlog} />
    </>
  );
}
