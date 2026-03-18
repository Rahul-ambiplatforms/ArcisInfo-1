/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow importing from src/ using @/ alias
  // e.g. import Foo from '@/src/pages/Foo/Foo'

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'vmukti.com' },
      { protocol: 'https', hostname: 'arcisai.io' },
      { protocol: 'https', hostname: 'www.arcisai.io' },
    ],
  },

  // Compiler: suppress known console.error noise from 3rd-party libs during SSR
  compiler: {
    styledComponents: false,
  },

  // Suppress Next.js strict-mode double-invoke warning for legacy CRA code
  experimental: {
    // esmExternals: true,
  },

  // Redirect legacy CRA-era URLs to the canonical Next.js equivalents
  async redirects() {
    return [
      { source: '/solutions',              destination: '/solution/edge-ai',      permanent: true },
      { source: '/about',                  destination: '/about-us',              permanent: true },
      { source: '/contact',               destination: '/contact-us',            permanent: true },
      { source: '/products',              destination: '/s-series',              permanent: true },
      { source: '/products/s-series',     destination: '/s-series',              permanent: true },
      { source: '/products/eco-series',   destination: '/eco-series',            permanent: true },
      { source: '/products/bridge-device',destination: '/arcis-bridge-device',   permanent: true },
      { source: '/products/vms',          destination: '/cloud-vms',             permanent: true },
    ];
  },
};

module.exports = nextConfig;
