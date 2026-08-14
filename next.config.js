/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ─── Bundle Tree-Shaking ─────────────────────────────────────────────────
  // Auto-rewrites barrel imports (e.g. `import { FaX } from 'react-icons/fa'`)
  // into direct-path imports so Webpack can drop the unused icons/components.
  // Reduces parse/compile work during hydration → lower INP. No code, UI, or
  // SEO change.
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "react-icons/fa",
      "react-icons/fa6",
      "react-icons/md",
      "react-icons/ai",
      "react-icons/bs",
      "react-icons/go",
      "react-icons/ri",
      "react-icons/io",
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "framer-motion",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "vmukti.com" },
      { protocol: "https", hostname: "arcisai.io" },
      { protocol: "https", hostname: "www.arcisai.io" },
    ],
  },

  // ─── Security Headers ────────────────────────────────────────────────────────
  async headers() {
    // Content-Security-Policy
    // - script-src includes 'unsafe-inline' required by GTM inline bootstrap + Emotion CSS-in-JS
    // - style-src 'unsafe-inline' required by Chakra UI / Emotion
    // - frame-src allows GTM noscript iframe
    // Derive an extra connect-src entry from NEXT_PUBLIC_API_BASE_URL so the
    // CSP automatically follows the API URL the app is actually configured
    // to call (e.g. http://localhost:5000 in dev). In dev we also allow the
    // Next.js HMR websocket. Prod with the env var unset stays strict.
    const isDev = process.env.NODE_ENV !== "production";
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    let apiOrigin = "";
    try {
      if (apiBase) apiOrigin = new URL(apiBase).origin;
    } catch {
      apiOrigin = "";
    }
    const extras = [];
    if (apiOrigin) extras.push(apiOrigin);
    if (isDev)
      extras.push(
        "ws://localhost:*",
        "wss://localhost:*",
        "http://localhost:*",
      );
    const extraConnect = extras.length ? " " + extras.join(" ") : "";

    const scriptSrc = [
      "script-src 'self' 'unsafe-inline'",
      isDev ? "'unsafe-eval'" : "",
      "https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
    ]
      .filter(Boolean)
      .join(" ");

    const csp = [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "frame-src https://www.googletagmanager.com https://www.facebook.com",
      `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.facebook.com https://connect.facebook.net https://www.arcisai.io https://arcisai.io https://vmukti.com https://hook.eu1.make.com https://etaems.arcisai.io:5000${extraConnect}`,
      "media-src 'self' https:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://www.arcisai.io https://www.facebook.com",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy
          { key: "Content-Security-Policy", value: csp },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // XSS protection (legacy browsers)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // HSTS – tell browsers to always use HTTPS (2 years)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Restrict browser features not needed by this site
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
      // Force every PDF under /pdfs/ to be downloaded as a file rather than
      // rendered inline by the browser's PDF viewer. This guarantees the
      // Download button on /documents always saves the file.
      {
        source: "/pdfs/:path*",
        headers: [
          { key: "Content-Disposition", value: "attachment" },
          { key: "Content-Type", value: "application/pdf" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
      // Static assets under /public are served by Next with
      // `Cache-Control: public, max-age=0` — Next cannot fingerprint them the
      // way it does /_next/static, so it refuses to cache them by default.
      // Measured on the live dev deployment, that meant every visit re-fetched
      // 5.1 MB of images and a 148 KB font with no browser cache at all.
      //
      // These files are content-stable between deploys (they change only when
      // someone edits the file), so a long max-age with stale-while-revalidate
      // is safe. If an image is ever replaced in place, change its filename —
      // that is the trade for cacheability.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          // Fonts are referenced by exact filename and effectively immutable.
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ─── SVG Support ────────────────────────────────────────────────────────────
  // Enables both import patterns that CRA components use:
  //   import { ReactComponent as Foo } from './foo.svg'   (inline React component)
  //   import Foo from './foo.svg'                          (also returns React component)
  webpack(config) {
    // Remove Next.js' default SVG rule so @svgr/webpack can take over
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test?.(".svg"),
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // All SVG imports use the default pattern: import X from './icon.svg'
            // X is the React component returned by SVGR.
            exportType: "default",
            svgo: false, // keep SVG as-is (no minification surprises)
            titleProp: true, // allows <Icon title="..." />
            ref: true,
          },
        },
      ],
    });

    return config;
  },

  // ─── Legacy URL Redirects (301) ─────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.arcisai.io" }],
        destination: "https://arcisai.io/:path*",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/solutions",
        destination: "/solution/edge-ai",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/solution/cloud-ai-cctv-camera",
        destination: "/solution/cloud-ai",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/solution/edge-ai-cctv-camera",
        destination: "/solution/edge-ai",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products",
        destination: "/s-series",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/s-series",
        destination: "/s-series",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/eco-series",
        destination: "/eco-series",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/bridge-device",
        destination: "/arcis-bridge-device",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/vms",
        destination: "/cloud-vms",
        permanent: true,
        statusCode: 301,
      },
      // Redirect common broken/legacy VMS paths to the canonical VMS page
      {
        source: "/vms",
        destination: "/cloud-vms",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/arcis-vms",
        destination: "/cloud-vms",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/5g-ptz",
        destination: "/s-series/ai-ptz-cctv-camera",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/wifi-ptz",
        destination: "/s-series/ai-ptz-cctv-camera",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/products/4g-bullet",
        destination: "/s-series/ai-bullet-cctv-camera",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/compare/arcisai-vs-godrej",
        destination: "/compare/best-enterprise-cctv-india",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/arcisai-vs-godrej",
        destination: "/compare/best-enterprise-cctv-india",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/compare/arcisai-vs-honeywell",
        destination: "/compare/ai-cctv-alternative-india",
        permanent: true,
        statusCode: 301,
      },

      // ─── Banking / ATM consolidation ────────────────────────────────────
      // Five separate pages targeted the same bank/ATM CCTV intent and split
      // the ranking signal between them. /ai-cctv-banking-atm-security is now
      // the single canonical page (deepest content, covers both the "bank"
      // and "ATM" head terms); the other four data entries were deleted so
      // they cannot regenerate, and every old URL 301s here.
      {
        source: "/banking-finance-cctv",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/industry/banking-finance-cctv",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/cctv-cameras-for-banking-finance",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/industry/cctv-cameras-for-banking-finance",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/ai-cctv-banks",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
      {
        source: "/ai-cctv-for-banks-india",
        destination: "/ai-cctv-banking-atm-security",
        permanent: true,
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
