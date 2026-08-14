# ArcisAI — arcisai.io

Marketing and SEO site for ArcisAI (Adiance Technologies). **Next.js 15 App
Router**, React 18, Chakra UI.

> The previous README was Create React App boilerplate left over from the
> pre-migration stack. It described `npm test`, a `build/` output directory and
> a GitHub Pages deploy, none of which exist in this project.

## Requirements

- Node.js 20+
- npm

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server on http://localhost:3000
npm run build        # production build → .next/  (NOT build/)
npm run start        # serve the production build
npm run lint         # next lint
```

There is no test runner configured.

## Stack and layout

| Path | What lives there |
| --- | --- |
| `app/` | App Router routes. Every `page.js` is a **server component** unless marked otherwise. |
| `app/layout.js` | Root layout, global `metadata`, CSP, GTM, and the canonical Organization + WebSite JSON-LD. |
| `app/sitemap.js` | Generated `/sitemap.xml`. |
| `app/robots.js` | Generated `/robots.txt`. |
| `src/views/` | Page bodies. Most are `'use client'` and receive server-resolved data as props. |
| `src/data/` | SEO landing-page dataset (~270 entries) plus the server-only resolver and schema builders. |
| `src/Components/` | Shared UI. |
| `public/` | Static assets served verbatim at the site root. |

Rendering is SSR/ISR — the app **cannot** be exported as a static site or
deployed to GitHub Pages.

## SEO conventions

These are load-bearing. Breaking them silently removes pages from search
results, which is exactly what happened before the current fixes.

**1. Never use `react-helmet-async` for anything a crawler must see.**
`HelmetProvider` is mounted in `app/providers.js`, which is `'use client'`.
Helmet therefore only injects into `<head>` *after hydration*, and nothing it
renders appears in the server HTML that Googlebot reads. Titles, descriptions,
canonicals, hreflang and JSON-LD emitted through Helmet are invisible to search
engines.

- **Metadata** → the route's `metadata` export or `generateMetadata()`.
- **JSON-LD** → build the object in a server-safe module and render
  `<script type="application/ld+json" dangerouslySetInnerHTML={...} />` from the
  route's server component. JSON-LD is valid anywhere in the document, so
  rendering it inline in a client component's body also works — it is only
  `<Helmet>` that loses it.

Templates: [`src/data/buildSeoPageSchemas.js`](src/data/buildSeoPageSchemas.js)
and [`src/Components/SEO/SeoPageSchemaScripts.jsx`](src/Components/SEO/SeoPageSchemaScripts.jsx).

**2. One URL per page.** Every bare key in the SEO dataset also round-trips
through the `/[slug]` catch-all, so entries in a sectioned category
(`compare`, `industry`, `resources`, `state`) would otherwise be served at two
self-canonicalising URLs. `/[slug]` 301s those to the sectioned URL, and each
section route rejects entries from other categories. See
`SECTION_BY_CATEGORY` in [`src/data/resolveSeoPageData.js`](src/data/resolveSeoPageData.js).

**3. Missing data must 404, not render an empty page.** A "Page Not Found" body
served with HTTP 200 is a soft 404 and pushes URLs into Search Console's
"crawled – currently not indexed" bucket. Landing routes call `notFound()`.

**4. Never invent `aggregateRating`, review counts or prices.** Rating markup
without reviews visible on the page violates Google's structured-data policy
and risks a manual action. A hard-coded 4.8★/150-review block previously
shipped on every landing page and has been removed.

**5. The sitemap is generated, not hand-edited.** Add pages to the data
modules or `STATIC_ROUTES` in `app/sitemap.js`. Never list a URL that
redirects.

## Deployment

**Host: DigitalOcean App Platform, behind Cloudflare.** Identified from the
response headers on the dev deployment
(`https://arcisinfo1-dev-v7u4w.ondigitalocean.app`):

```
x-do-app-origin: cb7881e7-cae1-419e-bc8b-6177102c7806
server: cloudflare
x-powered-by: Next.js
```

App Platform builds from a connected branch and runs `npm run build` then
`npm run start`, so `.next/` is the artifact — there is nothing to configure
for SSR. The build needs a Node server; **this app cannot be statically
exported.** A static export silently drops all 25 redirects in
`next.config.js`, the CSP in `headers()`, the ISR revalidation on 11 routes,
the `/api/version` route, and image optimization.

The GitHub Pages workflow that used to live in `.github/workflows/` built a
CRA app (`build/index.html`) and has been deleted — it could not have worked
since the Next migration, and its last successful run was Feb 2026.

> ⚠️ **`www.arcisai.io` is separate and stale.** The `gh-pages` branch carries
> `CNAME = www.arcisai.io` and a CRA build from Feb 2026. `next.config.js` has
> a host-based 301 from `www` to the apex, but that redirect runs *inside the
> Next app* — if `www` resolves to GitHub Pages the request never reaches Next
> and the redirect cannot fire, leaving a stale duplicate of the whole site.
> Resolving this is a DNS/repo-settings task, not a code change.

### Environment variables

| Variable | Used for | Default |
| --- | --- | --- |
| `API_BASE_URL` | Server-side blog/CMS fetches | `https://vmukti.com/backend/api` |
| `NEXT_PUBLIC_API_BASE_URL` | Client API origin; also widens the CSP `connect-src` | — |

A production/local mismatch in these is one of the few things that can make a
page behave differently in production than it does locally.
