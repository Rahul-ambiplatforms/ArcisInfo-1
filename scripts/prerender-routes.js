/**
 * ArcisAI Prerender Routes Configuration
 *
 * This script generates a list of all routes that need to be prerendered
 * for SEO crawlability. Used by react-snap during build.
 *
 * Usage: Add to package.json scripts:
 *   "postbuild": "react-snap"
 *
 * And add reactSnap config to package.json:
 *   "reactSnap": {
 *     "include": [routes from this file],
 *     "headless": true,
 *     "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"]
 *   }
 */

const routes = [
  // Core pages
  '/',
  '/about-us',
  '/why-choose-arcisai',
  '/contact-us',
  '/blog',
  '/privacy-policy',
  '/terms-of-service',

  // Product series
  '/s-series/s-101',
  '/s-series/s-102',
  '/s-series/s-103',
  '/s-series/s-104',
  '/s-series/s-105',
  '/eco-series/eco-101',
  '/eco-series/eco-102',
  '/eco-series/eco-103',

  // Solutions
  '/solution/retail',
  '/solution/banking',
  '/solution/healthcare',
  '/solution/smart-city',
  '/solution/manufacturing',
  '/solution/education',

  // Events
  '/event',
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('ArcisAI Prerender Routes:');
  console.log(JSON.stringify(routes, null, 2));
  console.log(`Total: ${routes.length} routes`);
}
