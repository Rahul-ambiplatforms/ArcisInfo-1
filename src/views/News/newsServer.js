import { cache } from 'react';

// Server-side counterpart to getNewsByUrlWords() in ./news.js, written to
// match the sibling CMS route app/blog/[slug]/page.js: native fetch wrapped in
// React cache() so generateMetadata() and the page component share ONE request,
// `cache: 'no-store'` so the route stays dynamic and an edit in the admin
// dashboard shows up immediately.
//
// Why this exists: news.js uses axios and runs inside NewsContent.js
// ('use client'), so the route had no way to know whether a slug existed
// before answering HTTP 200. Every /news/<anything> returned 200 with a
// humanized <title>/canonical/OG block built from the slug and a spinner in
// the body — a soft 404. With the lookup on the server, the route can call
// notFound() for real misses the way /solution/[solutionId] does.
//
// API base / tenant header contract: same backend as ./news.js (which reads
// NEXT_PUBLIC_API_BASE_URL) and as app/blog/[slug]/page.js (which reads
// API_BASE_URL); both are honoured here so either override keeps working.
// The x-tenant header is what makes the backend read arcis-news rather than
// the vmukti collection on a server-side render — see the note in news.js.
const API_BASE =
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://vmukti.com/backend/api';

export const NEWS_FOUND = 'found';
export const NEWS_NOT_FOUND = 'not-found';
// The backend answered in a way we cannot interpret (network error, 5xx,
// unparseable body). Deliberately distinct from NEWS_NOT_FOUND: a backend blip
// must not turn every published article into a 404. On this state the route
// keeps returning 200 and hands off to the client component, which retries and
// shows its own error UI — exactly the behaviour that existed before.
export const NEWS_UNAVAILABLE = 'unavailable';

export const getNewsByUrlWordsServer = cache(async (slug) => {
  if (!slug) return { state: NEWS_NOT_FOUND, data: null };

  let res;
  try {
    res = await fetch(`${API_BASE}/news/urlWords/${encodeURIComponent(slug)}`, {
      headers: { 'x-tenant': 'arcis', Origin: 'https://arcisai.io' },
      cache: 'no-store',
    });
  } catch (e) {
    console.error('Server news fetch failed:', e?.message || e);
    return { state: NEWS_UNAVAILABLE, data: null };
  }

  // The backend answers 404 + {status:'error',message:'News not found'} for an
  // unknown slug. Any other non-OK status is an outage, not a missing article.
  if (res.status === 404) return { state: NEWS_NOT_FOUND, data: null };
  if (!res.ok) return { state: NEWS_UNAVAILABLE, data: null };

  let body;
  try {
    body = await res.json();
  } catch (e) {
    return { state: NEWS_UNAVAILABLE, data: null };
  }

  if (body?.status === 'success' && body?.data) {
    return { state: NEWS_FOUND, data: body.data };
  }
  // A 200 that carries no article is still a miss — better a 404 than an
  // empty page.
  return { state: NEWS_NOT_FOUND, data: null };
});
