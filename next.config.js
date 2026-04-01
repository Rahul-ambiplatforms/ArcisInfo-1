/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "frame-src https://www.googletagmanager.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.facebook.com https://connect.facebook.net https://www.arcisai.io https://arcisai.io https://vmukti.com",
      "media-src 'self' https:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://www.arcisai.io",
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
