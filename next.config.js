/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'vmukti.com' },
      { protocol: 'https', hostname: 'arcisai.io' },
      { protocol: 'https', hostname: 'www.arcisai.io' },
    ],
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
            // 'auto' supports both the default-import pattern AND the
            // { ReactComponent as X } named-import pattern from CRA.
            exportType: 'auto',
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
