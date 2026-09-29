import { notFound } from 'next/navigation';
import NewsContent from '@/src/views/News/NewsContent';
import {
  getNewsByUrlWordsServer,
  NEWS_NOT_FOUND,
} from '@/src/views/News/newsServer';
import { humanizeSlug } from '@/src/data/buildSeoPageSchemas';
import { buildHreflang } from '@/src/data/hreflang';

// SEO audit fix (2026-09-28): this route never looked the article up. The
// lookup lived entirely in NewsContent.js ('use client'), so /news/<anything>
// answered HTTP 200 with a <title>/canonical/OG block built by humanizing the
// slug ("This Slug Does Not Exist Xyz 123") over a body that was a spinner and
// then an error message — a soft 404, and the reason invalid news URLs had no
// <h1>. Resolving the record on the server (see newsServer.js) lets the route
// call notFound() for real misses, the same way /solution/[solutionId] does
// for ids with no backing content.
//
// The resolved article is also handed to NewsContent as `initialNews`, so a
// valid article server-renders its <h1> instead of shipping a spinner to
// crawlers — the same seeding app/blog/[slug]/page.js already does with
// BlogsContents. getNewsByUrlWordsServer is cache()-wrapped, so the two calls
// below are a single request.

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;

  const { state } = await getNewsByUrlWordsServer(slug);
  if (state === NEWS_NOT_FOUND) {
    return { title: 'Page Not Found', robots: { index: false, follow: false } };
  }

  const title = humanizeSlug(slug);
  const ogTitle = `${title} | ArcisAI News`;
  const ogDescription = `ArcisAI news: ${title}`;

  return {
    title: `${title}`,
    description: `Read the ArcisAI news article: ${title}.`,
    alternates: { canonical: `https://arcisai.io/news/${slug}`, languages: buildHreflang(`https://arcisai.io/news/${slug}`) },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://arcisai.io/news/${slug}`,
      type: 'article',
      images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ['/og/home.jpg'],
    },
  };
}

export default async function NewsArticlePage(props) {
  const params = await props.params;

  const { state, data } = await getNewsByUrlWordsServer(params.slug);
  if (state === NEWS_NOT_FOUND) {
    notFound();
  }

  // `data` is null when the backend was unreachable (NEWS_UNAVAILABLE) — a
  // transient outage must not 404 a real article, so the client component
  // falls back to its own fetch + error UI exactly as before.
  return <NewsContent urlWords={params.slug} initialNews={data} />;
}
