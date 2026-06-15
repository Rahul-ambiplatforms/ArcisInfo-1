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
      'react-icons',
      'react-icons/fa',
      'react-icons/fa6',
      'react-icons/md',
      'react-icons/ai',
      'react-icons/bs',
      'react-icons/go',
      'react-icons/ri',
      'react-icons/io',
      '@chakra-ui/react',
      '@chakra-ui/icons',
      'framer-motion',
    ],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'vmukti.com' },
      { protocol: 'https', hostname: 'arcisai.io' },
      { protocol: 'https', hostname: 'www.arcisai.io' },
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
    const isDev = process.env.NODE_ENV !== 'production';
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    let apiOrigin = '';
    try {
      if (apiBase) apiOrigin = new URL(apiBase).origin;
    } catch {
      apiOrigin = '';
    }
    const extras = [];
    if (apiOrigin) extras.push(apiOrigin);
    if (isDev) extras.push('ws://localhost:*', 'wss://localhost:*', 'http://localhost:*');
    const extraConnect = extras.length ? ' ' + extras.join(' ') : '';

    const scriptSrc = [
      "script-src 'self' 'unsafe-inline'",
      isDev ? "'unsafe-eval'" : '',
      'https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net',
    ].filter(Boolean).join(' ');

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
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy
          { key: 'Content-Security-Policy', value: csp },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // XSS protection (legacy browsers)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // HSTS – tell browsers to always use HTTPS (2 years)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Restrict browser features not needed by this site
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
      // Force every PDF under /pdfs/ to be downloaded as a file rather than
      // rendered inline by the browser's PDF viewer. This guarantees the
      // Download button on /documents always saves the file.
      {
        source: '/pdfs/:path*',
        headers: [
          { key: 'Content-Disposition', value: 'attachment' },
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
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
      (rule) => rule.test && rule.test.test?.('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // All SVG imports use the default pattern: import X from './icon.svg'
            // X is the React component returned by SVGR.
            exportType: 'default',
            svgo: false,      // keep SVG as-is (no minification surprises)
            titleProp: true,  // allows <Icon title="..." />
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
      { source: '/:path*', has: [{ type: 'host', value: 'www.arcisai.io' }], destination: 'https://arcisai.io/:path*', permanent: true },
      { source: '/solutions',               destination: '/solution/edge-ai',    permanent: true },
      { source: '/about',                   destination: '/about-us',            permanent: true },
      { source: '/contact',                 destination: '/contact-us',          permanent: true },
      { source: '/products',                destination: '/s-series',            permanent: true },
      { source: '/products/s-series',       destination: '/s-series',            permanent: true },
      { source: '/products/eco-series',     destination: '/eco-series',          permanent: true },
      { source: '/products/bridge-device',  destination: '/arcis-bridge-device', permanent: true },
      { source: '/products/vms',            destination: '/cloud-vms',           permanent: true },
    ];
  },
};

module.exports = nextConfig;
