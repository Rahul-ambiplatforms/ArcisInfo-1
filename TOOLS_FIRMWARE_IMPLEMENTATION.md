# Tools & Firmware Pages — Implementation Guide

A complete reference for how the **Tools** and **Firmware** download pages are implemented in the ArcisAI website, written so the same feature can be ported to the **Adiance** website.

---

## 1. High-Level Architecture

```
Browser
  │
  ├── /tools  ──────► app/tools/page.js          (Server Component — SEO + JSON-LD)
  │                     └── src/views/Tools/Tools.js     (Client Component — UI + data fetch)
  │
  ├── /firmware ────► app/firmware/page.js       (Server Component — SEO + JSON-LD)
  │                     └── src/views/Firmware/Firmware.js
  │
  └── /api/version/* ───► app/api/version/[...path]/route.js   (Next.js proxy)
                            └── https://etaems.arcisai.io:5000/api/version/*   (External backend)
```

**Key idea:** the website itself stores **no tool/firmware data**. Everything (list + binary files + release notes) lives on a remote backend. The Next.js app only proxies requests and renders a table.

---

## 2. Backend Contract (the ONLY thing Adiance must replace)

The frontend talks to four endpoints. Point Adiance's proxy at a backend that exposes the same shape — or change the URLs in the component.

| Purpose | Method | Path | Returns |
|---|---|---|---|
| List all tools | `GET` | `/api/version/app/latest` | `{ success: true, data: [...] }` |
| Download tool / release notes | `GET` | `/api/version/app/download/:id?type=app\|releaseNotes` | binary blob with `content-disposition` |
| List all firmware | `GET` | `/api/version/firmware/getAllFirmware` | `{ success: true, data: [...] }` |
| Download firmware / release notes | `GET` | `/api/version/firmware/download/:id?type=firmware\|releaseNotes` | binary blob with `content-disposition` |

**Row shape:**

```json
{
  "_id": "65a1b2c3...",
  "appName": "ArcisAI Configurator",    // tools only
  "cameraName": "S-Series Bullet",      // firmware only
  "versionName": "2.1.0",
  "modelNumber": "ARC-S1-BULLET",
  "updatedAt": "2024-06-08T16:56:00Z",
  "uploadedAt": "2024-06-08T16:56:00Z",
  "createdAt":  "2024-06-08T16:56:00Z"
}
```

The download endpoints must return the file as the response body and set `Content-Disposition: attachment; filename="..."` so the browser uses the right filename.

---

## 3. File Inventory

| File | Role |
|---|---|
| [app/tools/page.js](app/tools/page.js) | Tools route — metadata + JSON-LD, renders `<Tools/>` |
| [app/firmware/page.js](app/firmware/page.js) | Firmware route — metadata + JSON-LD, renders `<Firmware/>` |
| [src/views/Tools/Tools.js](src/views/Tools/Tools.js) | Tools client component — fetch, search, paginate, download |
| [src/views/Firmware/Firmware.js](src/views/Firmware/Firmware.js) | Same pattern, firmware variant |
| [app/api/version/[...path]/route.js](app/api/version/[...path]/route.js) | Catch-all proxy → external backend |
| [src/Components/Header/navbarData.js](src/Components/Header/navbarData.js) | "RESOURCES" dropdown links |

There is **no local JSON, no CMS, no admin UI** for these pages. Content management lives entirely on the backend.

---

## 4. Step-by-Step: Porting to Adiance

### Step 1 — Add the proxy route

Create `app/api/version/[...path]/route.js`. This is a catch-all that streams responses (including binary downloads) from the backend without CORS issues and lets you keep the backend URL out of client JS.

```js
import { NextResponse } from 'next/server';
import https from 'node:https';
import { URL } from 'node:url';

// 🔁 CHANGE THIS for Adiance
const BACKEND_BASE = 'https://your-adiance-backend.example.com/api/version';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function requestUpstream(targetUrl, method, headers, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(targetUrl);
    const req = https.request(
      {
        hostname: u.hostname,
        port: u.port || 443,
        path: `${u.pathname}${u.search}`,
        method,
        headers,
        rejectUnauthorized: false, // only needed if the backend uses a self-signed cert
      },
      (res) => resolve(res),
    );
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function proxy(request, context) {
  const params = await context.params;
  const segments = params?.path || [];
  const search = new URL(request.url).search;
  const targetUrl = `${BACKEND_BASE}/${segments.join('/')}${search}`;

  try {
    const incomingHeaders = {
      accept: request.headers.get('accept') || '*/*',
      'user-agent': 'Adiance-Web-Proxy',
    };
    const body = ['GET', 'HEAD'].includes(request.method)
      ? undefined
      : Buffer.from(await request.arrayBuffer());

    const upstream = await requestUpstream(targetUrl, request.method, incomingHeaders, body);

    const outHeaders = new Headers();
    for (const key of ['content-type', 'content-disposition', 'content-length', 'cache-control']) {
      const value = upstream.headers[key];
      if (value) outHeaders.set(key, Array.isArray(value) ? value.join(', ') : String(value));
    }

    const stream = new ReadableStream({
      start(controller) {
        upstream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
        upstream.on('end', () => controller.close());
        upstream.on('error', (err) => controller.error(err));
      },
    });

    return new NextResponse(stream, {
      status: upstream.statusCode || 502,
      headers: outHeaders,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Upstream request failed: ${err?.message || 'unknown error'}` },
      { status: 502 },
    );
  }
}

export { proxy as GET, proxy as POST };
```

Why proxy at all? It (a) hides the backend hostname, (b) forwards `content-disposition` so blob downloads get the correct filename, (c) avoids browser CORS, and (d) lets you keep `https` with a self-signed cert behind the scenes.

### Step 2 — Add the route pages

`app/tools/page.js`:

```js
import Tools from '@/src/views/Tools/Tools';

const SITE_URL = 'https://www.adiance.com';
const TITLE = 'Tools & Software Downloads | Adiance';
const DESCRIPTION =
  'Download the latest Adiance tools, configuration utilities and software updates, along with their release notes.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Adiance tools', 'Adiance software', 'configuration tool', 'software download'],
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/tools`,
    type: 'website',
    siteName: 'Adiance',
    images: [{ url: '/images/og-default.webp', width: 1200, height: 630, alt: 'Adiance Tools' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/tools#webpage`,
  url: `${SITE_URL}/tools`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'en',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',  item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Tools />
    </>
  );
}
```

`app/firmware/page.js` is identical, swapping titles/URLs and importing `Firmware` from `@/src/views/Firmware/Firmware`.

### Step 3 — Add the client component

Create `src/views/Tools/Tools.js`. This is the heart of the feature — see the full source at [src/views/Tools/Tools.js](src/views/Tools/Tools.js). The structure:

1. **Setup** — `axios` instance pointed at `/api/version`, page size = 10.
2. **Fetch on mount** with a `cancelled` flag for cleanup.
3. **Search** — case-insensitive match on `appName / cameraName`, `versionName`, `modelNumber` (memoized).
4. **Pagination** — slice the filtered list; reset to page 1 whenever the query changes.
5. **Download** — `axios.get(..., { responseType: 'blob' })`, read filename from `content-disposition`, create an object URL, click an invisible `<a download>`, revoke.
6. **States** — loading spinner, error box, empty-results box, table.

The critical download snippet:

```js
const downloadAppById = async (id, type) => {
  const res = await instance.get(`/app/download/${id}?type=${type}`, {
    responseType: 'blob',
    timeout: 60000,
  });
  let filename = type === 'releaseNotes' ? 'releaseNotes.txt' : 'applicationFiles.zip';
  const disposition = res.headers['content-disposition'];
  if (disposition && disposition.includes('filename=')) {
    filename = disposition.split('filename=')[1].replace(/["']/g, '').trim() || filename;
  }
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};
```

For Firmware, copy `Tools.js` to `src/views/Firmware/Firmware.js` and change:

- `getAllAppVersion()` → call `/firmware/getAllFirmware`
- `/app/download/${id}` → `/firmware/download/${id}`
- `type=app` → `type=firmware`
- Column header `App Name` → `Camera Name`; row field `row.appName` → `row.cameraName`
- Headline copy ("Tools & Software" → "Firmware Updates")

### Step 4 — Wire navigation

In `src/Components/Header/navbarData.js`, add a Resources dropdown (or whatever pattern Adiance uses):

```js
resources: {
  title: 'RESOURCES',
  items: [
    { label: 'Tools',    link: '/tools'    },
    { label: 'Firmware', link: '/firmware' },
  ],
}
```

### Step 5 — Re-brand the visuals

Find/replace these tokens with Adiance equivalents:

| ArcisAI value | Where it appears | What to use for Adiance |
|---|---|---|
| `#A4FF79` (neon green) | Headings, accents, table border, buttons | Adiance primary accent |
| `#7F56D9` (purple) | Heading gradient endpoint | Adiance secondary or remove gradient |
| `#171717` (charcoal) | Page background | Match Adiance theme — light or dark |
| `linear(90deg, #A4FF79, #7F56D9)` | Heading bgGradient | Re-tune to brand palette |
| `'Resources'` / `'ArcisAI Configurator'` | Headline + copy | Adiance copy |
| `/images/home_hero_1.webp` | OG image | Adiance OG image |

If Adiance is **not on Chakra UI**, you'll need to translate the Chakra props (`bg`, `borderColor`, `_hover={{}}`) to whatever styling system it uses (Tailwind, CSS modules, styled-components). The component logic — fetch, search, paginate, download — is framework-agnostic; only the JSX presentation changes.

---

## 5. Dependencies

Already used in this repo, ensure they exist in Adiance:

```json
{
  "next": "^14.2.0",
  "@chakra-ui/react": "^2.0.0",
  "@chakra-ui/icons": "^2.0.0",
  "axios": "^1.12.2",
  "react-icons": "^5.4.0",
  "framer-motion": "^10.0.0"
}
```

If Adiance doesn't use Chakra, drop these and re-skin with the local design system.

---

## 6. Things That Are NOT in the Frontend

These exist on the backend side and must be built/reused on the Adiance backend:

- **Admin UI** to upload tools/firmware, set version/model, attach release notes, manage records.
- **Storage** for the binary files.
- **Auth** around upload/edit endpoints (the public GET endpoints are unauthenticated).

The ArcisInfo repo has admin pages for Blog, News, HR Jobs (at `app/admin/dashboard/`) but **not** for tools/firmware. If Adiance needs in-website admin, that's net-new work.

---

## 7. Quick Test Checklist

Once wired up:

- [ ] `/tools` renders, shows spinner, then the table.
- [ ] `/firmware` renders the same.
- [ ] Search filters live and resets to page 1 each keystroke.
- [ ] Pagination: Previous/Next disabled at boundaries, page numbers collapse with `…` when > 7 pages.
- [ ] "View" (release notes) downloads `.txt`.
- [ ] "Download" (app/firmware) downloads `.zip` (or whatever the backend sends) with the correct filename.
- [ ] Backend down → red error box, not a crash.
- [ ] Empty list → "No tools available yet" box.
- [ ] OG / Twitter preview works (test with `https://www.opengraph.xyz/`).
- [ ] `view-source:` of the page contains the two `application/ld+json` blocks.

---

## 8. TL;DR — Minimum Changes for Adiance

1. Copy `app/tools/page.js`, `app/firmware/page.js`, `src/views/Tools/`, `src/views/Firmware/`, `app/api/version/[...path]/route.js`.
2. Change `BACKEND_BASE` in the proxy to Adiance's backend.
3. Change `SITE_URL`, titles, descriptions, OG image in the two `page.js` files.
4. Replace `#A4FF79` / `#7F56D9` / `#171717` with Adiance brand colors.
5. Replace "ArcisAI" copy with "Adiance" copy.
6. Add Tools/Firmware links to the navbar.
7. Make sure the Adiance backend exposes the four endpoints listed in §2.

That's the whole port.