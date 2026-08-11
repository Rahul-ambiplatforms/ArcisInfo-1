const fs = require('fs');
const path = require('path');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const s = fs.readFileSync(sitemapPath, 'utf8');
const urls = [
    "/blog/best-ai-cctv-camera-office-business-security-india-2026",
    "/arcisai-vs-godrej",
    "/blog/ai-cctv-camera-for-manufacturing",
    "/blog/best-ai-cctv-camera-business-security-india-2026",
    "/blog/ai-cctv-cameras-for-hotels-resorts-restaurants",
    "/blog/best-ai-cctv-cameras-enterprise-security-2026",
    "/blog/best-ai-cctv-camera-home-security-india-2026",
    "/blog/ai-cctv-vs-traditional-cctv",
    "/blog/arcisai-vs-dahua-ai-cctv-comparison-india-2026",
    "/blog/arcisgpt-ai-assistant-video-surveillance-natural-language-search",
    "/blog/ai-cctv-for-construction-industry",
    "/blog/top-ai-cctv-camera-brands-india-2026",
    "/blog/edge-ai-and-cloud-ai-surveillance",
    "/blog/edge-ai-cctv-cameras-on-camera-processing-future-surveillance",
    "/blog/arcisai-vs-hikvision-vs-dahua-ai-camera-comparison-2026",
    "/blog/ai-cctv-camera-for-bank-security",
    "/blog/ai-cctv-camera-for-transportation",
    "/blog/top-security-camera-features",
    "/blog/stqc-certification-ai-surveillance-cameras-enterprise-compliance",
    "/blog/reasons-to-visit-arcisai-at-ifsec-india-expo",
    "/blog/ai-cctv-cameras-for-smart-city",
    "/blog/ai-cctv-camera-for-school-bus",
    "/blog/ai-cctv-for-schools",
    "/blog/benefits-of-ai-cctv-cameras",
    "/blog/best-4g-5g-cctv-camera-india-2026",
    "/blog/ai-cctv-camera-for-retail-and-shopping-malls",
    "/blog/ai-powered-retail-surveillance",
    "/blog/ai-surveillance-for-warehousing",
    "/vms",
    "/blog/choosing-the-right-cctv-camera",
    "/arcis-vms",
    "/solution",
    "/products"
];

urls.forEach(u => {
    const found = s.includes(u) ? 'YES' : 'NO';
    console.log(`${u}: ${found}`);
});
