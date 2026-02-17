/**
 * ArcisAI Prerender Routes Configuration
 *
 * This script generates a list of all routes that need to be prerendered
 * for SEO crawlability. Used by react-snap during build.
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

  // SEO City Pages (50 cities - from seoPageData)
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

  // SEO Industry Pages (12 - from seoPageData)
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

  // SEO State Pages (15 - from seoPageData)
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

  // === EXPANSION PAGES (from seoPageDataExpansion) ===

  // Expansion Industry Pages (10)
  '/cctv-cameras-for-education-industry',
  '/cctv-cameras-for-healthcare-industry',
  '/cctv-cameras-for-retail-industry',
  '/cctv-cameras-for-banking-finance',
  '/cctv-cameras-for-logistics-warehousing',
  '/cctv-cameras-for-hospitality-industry',
  '/cctv-cameras-for-temples-religious-places',
  '/cctv-cameras-for-smart-city-projects',
  '/cctv-cameras-for-parking-management',
  '/cctv-cameras-for-traffic-management',

  // Expansion State Pages (13)
  '/cctv-cameras-assam',
  '/cctv-cameras-meghalaya',
  '/cctv-cameras-manipur',
  '/cctv-cameras-tripura',
  '/cctv-cameras-mizoram',
  '/cctv-cameras-nagaland',
  '/cctv-cameras-arunachal-pradesh',
  '/cctv-cameras-sikkim',
  '/cctv-cameras-goa',
  '/cctv-cameras-himachal-pradesh',
  '/cctv-cameras-uttarakhand',
  '/cctv-cameras-jharkhand',
  '/cctv-cameras-chhattisgarh',

  // Expansion City Pages (new cities not in original list)
  '/cctv-cameras-mangalore',
  '/cctv-cameras-belgaum',
  '/cctv-cameras-bhubaneswar',
  '/cctv-cameras-dehradun',
  '/cctv-cameras-shimla',
  '/cctv-cameras-jammu',
  '/cctv-cameras-jalandhar',
  '/cctv-cameras-gorakhpur',
  '/cctv-cameras-moradabad',
  '/cctv-cameras-aligarh',
];

module.exports = routes;

// If run directly, print routes
if (require.main === module) {
  console.log('Total routes:', routes.length);
  routes.forEach(r => console.log(r));
}
