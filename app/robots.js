// Generated robots.txt, replacing the hand-edited public/robots.txt.
//
// Two real defects in the old file, both invisible until you read the spec:
//
// 1. robots.txt groups are NOT inherited. `User-agent: *` disallowed /admin,
//    but every named bot below it (Googlebot, GPTBot, PerplexityBot, …) had a
//    bare `Allow: /` group, so those crawlers were explicitly permitted into
//    /admin and the sourcemap paths. Each named group now repeats the
//    disallow list.
// 2. `Bingbot` was declared twice — once with `Allow: /` and again with
//    `Crawl-delay: 5`. Parsers merge or drop duplicate groups
//    unpredictably; there is now exactly one group per user-agent.
//
// Missing AI crawlers have also been added, and the sitemap now points at the
// generated /sitemap.xml route (app/sitemap.js).

const SITE = 'https://arcisai.io';

// Applies to every crawler. Kept in one place so no group can drift.
const DISALLOW = ['/admin', '/admin/', '/api/', '/static/js/*.map', '/static/css/*.map'];

// Search engines.
const SEARCH_BOTS = ['Googlebot', 'Googlebot-Image', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'Yandex'];

// AI answer engines and training crawlers. ArcisAI content is meant to be
// citable by these, so each is explicitly allowed rather than left to the
// wildcard group — an explicit Allow is what an audit (and Search Console)
// can actually verify.
const AI_BOTS = [
  'GPTBot',            // OpenAI training
  'OAI-SearchBot',     // ChatGPT search index
  'ChatGPT-User',      // ChatGPT live browsing
  'ClaudeBot',         // Anthropic crawler
  'Claude-User',       // Claude live browsing
  'Claude-SearchBot',  // Claude search index
  'anthropic-ai',      // legacy Anthropic token
  'PerplexityBot',     // Perplexity index
  'Perplexity-User',   // Perplexity live browsing
  'Google-Extended',   // Gemini / Vertex grounding
  'Applebot',          // Siri / Spotlight
  'Applebot-Extended', // Apple Intelligence training
  'CCBot',             // Common Crawl — feeds many downstream models
  'Amazonbot',         // Alexa / Rufus
  'Meta-ExternalAgent',
  'meta-externalagent',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
  'Bytespider',
  'Diffbot',
  'omgili',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
