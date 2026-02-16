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

  // SEO City Pages (50 cities)
  '/cctv-cameras-mumbai',
  '/cctv-cameras-delhi',
  '/cctv-cameras-bangalore',
  '/cctv-cameras-hyderabad',
  '/cctv-cameras-chennai',
  '/cctv-cameras-kolkata',
  '/cctv-cameras-pune',
  '/cctv-cameras-ahmedabad',
  '/cctv-cameras-jaipur',
  '/cctv-cameras-lucknow',
  '/cctv-cameras-surat',
  '/cctv-cameras-kanpur',
  '/cctv-cameras-nagpur',
  '/cctv-cameras-indore',
  '/cctv-cameras-thane',
  '/cctv-cameras-bhopal',
  '/cctv-cameras-visakhapatnam',
  '/cctv-cameras-patna',
  '/cctv-cameras-vadodara',
  '/cctv-cameras-ghaziabad',
  '/cctv-cameras-ludhiana',
  '/cctv-cameras-agra',
  '/cctv-cameras-nashik',
  '/cctv-cameras-faridabad',
  '/cctv-cameras-meerut',
  '/cctv-cameras-rajkot',
  '/cctv-cameras-varanasi',
  '/cctv-cameras-srinagar',
  '/cctv-cameras-aurangabad',
  '/cctv-cameras-dhanbad',
  '/cctv-cameras-amritsar',
  '/cctv-cameras-navi-mumbai',
  '/cctv-cameras-allahabad',
  '/cctv-cameras-ranchi',
  '/cctv-cameras-howrah',
  '/cctv-cameras-coimbatore',
  '/cctv-cameras-jabalpur',
  '/cctv-cameras-gwalior',
  '/cctv-cameras-vijayawada',
  '/cctv-cameras-jodhpur',
  '/cctv-cameras-madurai',
  '/cctv-cameras-raipur',
  '/cctv-cameras-kota',
  '/cctv-cameras-chandigarh',
  '/cctv-cameras-guwahati',
  '/cctv-cameras-solapur',
  '/cctv-cameras-hubli',
  '/cctv-cameras-mysore',
  '/cctv-cameras-tiruchirappalli',
  '/cctv-cameras-bareilly',

  // SEO Industry Pages (12)
  '/industry/banking-finance-cctv',
  '/industry/retail-surveillance',
  '/industry/healthcare-security',
  '/industry/education-campus-cctv',
  '/industry/manufacturing-surveillance',
  '/industry/warehouse-logistics-cctv',
  '/industry/government-defense-cctv',
  '/industry/smart-city-surveillance',
  '/industry/hospitality-cctv',
  '/industry/real-estate-construction',
  '/industry/transportation-highways',
  '/industry/oil-gas-surveillance',

  // SEO Comparison Pages (10)
  '/compare/arcisai-vs-cp-plus',
  '/compare/arcisai-vs-hikvision',
  '/compare/arcisai-vs-dahua',
  '/compare/arcisai-vs-godrej',
  '/compare/arcisai-vs-honeywell',
  '/compare/ai-cctv-vs-traditional-cctv',
  '/compare/cloud-vms-vs-dvr-nvr',
  '/compare/4g-cameras-vs-wifi-cameras',
  '/compare/indian-vs-chinese-cctv',
  '/compare/stqc-certified-vs-non-certified',

  // SEO Resource Pages (10)
  '/resources/cctv-buyers-guide-india',
  '/resources/how-to-choose-cctv-camera',
  '/resources/stqc-certification-guide',
  '/resources/cctv-installation-cost-india',
  '/resources/ai-surveillance-roi-calculator',
  '/resources/cctv-camera-comparison-chart',
  '/resources/video-surveillance-laws-india',
  '/resources/cctv-maintenance-guide',
  '/resources/cloud-vs-onpremise-surveillance',
  '/resources/smart-city-surveillance-guide',

  // SEO State Pages (15)
  '/state/maharashtra',
  '/state/gujarat',
  '/state/karnataka',
  '/state/tamil-nadu',
  '/state/telangana',
  '/state/delhi-ncr',
  '/state/uttar-pradesh',
  '/state/rajasthan',
  '/state/madhya-pradesh',
  '/state/west-bengal',
  '/state/punjab',
  '/state/kerala',
  '/state/andhra-pradesh',
  '/state/bihar',
  '/state/odisha',
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('Total routes:', routes.length);
  routes.forEach(r => console.log(r));
}
