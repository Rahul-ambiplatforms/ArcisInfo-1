const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const SITE_BASE_URL = process.env.SITE_BASE_URL || "https://arcisai.io";
const API_BASE_URL =
  process.env.API_BASE_URL || "https://vmukti.com/backend/api";
const TENANT = process.env.TENANT || "arcis";

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      { headers: { "User-Agent": "sitemap-generator/1.0" } },
      (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(
            new Error(`Request failed: ${res.statusCode} ${res.statusMessage}`)
          );
          res.resume();
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
  });
}

async function fetchAllPublishedBlogs() {
  const limit = 100;
  let page = 1;
  let totalPages = 1;
  const all = [];

  while (page <= totalPages) {
    const url = `${API_BASE_URL}/blogs?page=${page}&limit=${limit}&status=published&sort=latest&tenant=${encodeURIComponent(
      TENANT
    )}`;
    const resp = await fetchJson(url);
    const list = Array.isArray(resp.data) ? resp.data : [];
    all.push(...list);
    const pag = resp.pagination || {};
    totalPages = Number(pag.total) || 1;
    page += 1;
    if (list.length === 0) break; // safety
  }
  return all;
}

function toXmlSafe(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlLoc(pathname) {
  const base = SITE_BASE_URL.replace(/\/$/, "");
  const pathPart = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${pathPart}`;
}

function formatDateISO(dateInput) {
  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString();
  } catch {
    return undefined;
  }
}

async function generate() {
  // Static routes
  const staticRoutes = [
    { loc: buildUrlLoc("/"), changefreq: "daily", priority: "1.0" },
    {
      loc: buildUrlLoc("/solution/edge-ai"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/solution/cloud-ai"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/solution/generative-ai"),
      changefreq: "weekly",
      priority: "0.8",
    },
    { loc: buildUrlLoc("/s-series"), changefreq: "weekly", priority: "0.8" },
    {
      loc: buildUrlLoc("/s-series/ai-bullet-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/s-series/ai-ptz-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/s-series/ai-dome-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    { loc: buildUrlLoc("/eco-series"), changefreq: "weekly", priority: "0.8" },
    {
      loc: buildUrlLoc("/eco-series/bullet-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/eco-series/ptz-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/eco-series/ptz-cctv-camera"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/arcis-bridge-device"),
      changefreq: "weekly",
      priority: "0.8",
    },
    { loc: buildUrlLoc("/cloud-vms"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/arcis-nvr"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/about-us"), changefreq: "weekly", priority: "0.8" },
    {
      loc: buildUrlLoc("/why-choose-arcisai"),
      changefreq: "weekly",
      priority: "0.8",
    },
    { loc: buildUrlLoc("/event"), changefreq: "weekly", priority: "0.8" },
    {
      loc: buildUrlLoc("/event/ifsec-india-2025"),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: buildUrlLoc("/privacy-policy"),
      changefreq: "monthly",
      priority: "0.6",
    },
    {
      loc: buildUrlLoc("/terms-of-service"),
      changefreq: "monthly",
      priority: "0.6",
    },
    { loc: buildUrlLoc("/contact-us"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/blog"), changefreq: "monthly", priority: "0.6" },

    // SEO City Pages (50 cities)
    { loc: buildUrlLoc("/cctv-cameras-mumbai"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-delhi"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-bangalore"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-hyderabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-chennai"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-kolkata"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-pune"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-ahmedabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-jaipur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-lucknow"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-surat"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-kanpur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-nagpur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-indore"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-thane"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-bhopal"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-visakhapatnam"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-patna"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-vadodara"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-ghaziabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-ludhiana"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-agra"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-nashik"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-faridabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-meerut"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-rajkot"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-varanasi"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-srinagar"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-aurangabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-dhanbad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-amritsar"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-navi-mumbai"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-allahabad"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-ranchi"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-howrah"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-coimbatore"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-jabalpur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-gwalior"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-vijayawada"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-jodhpur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-madurai"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-raipur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-kota"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-chandigarh"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-guwahati"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-solapur"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-hubli"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-mysore"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-tiruchirappalli"), changefreq: "weekly", priority: "0.8" },
    { loc: buildUrlLoc("/cctv-cameras-bareilly"), changefreq: "weekly", priority: "0.8" },

    // SEO Industry Pages (12)
    { loc: buildUrlLoc("/industry/banking-finance-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/retail-surveillance"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/healthcare-security"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/education-campus-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/manufacturing-surveillance"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/warehouse-logistics-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/government-defense-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/smart-city-surveillance"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/hospitality-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/real-estate-construction"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/transportation-highways"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/industry/oil-gas-surveillance"), changefreq: "monthly", priority: "0.7" },

    // SEO Comparison Pages (10)
    { loc: buildUrlLoc("/compare/arcisai-vs-cp-plus"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/arcisai-vs-hikvision"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/arcisai-vs-dahua"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/arcisai-vs-godrej"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/arcisai-vs-honeywell"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/ai-cctv-vs-traditional-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/cloud-vms-vs-dvr-nvr"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/4g-cameras-vs-wifi-cameras"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/indian-vs-chinese-cctv"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/compare/stqc-certified-vs-non-certified"), changefreq: "monthly", priority: "0.7" },

    // SEO Resource Pages (10)
    { loc: buildUrlLoc("/resources/cctv-buyers-guide-india"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/how-to-choose-cctv-camera"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/stqc-certification-guide"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/cctv-installation-cost-india"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/ai-surveillance-roi-calculator"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/cctv-camera-comparison-chart"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/video-surveillance-laws-india"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/cctv-maintenance-guide"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/cloud-vs-onpremise-surveillance"), changefreq: "monthly", priority: "0.6" },
    { loc: buildUrlLoc("/resources/smart-city-surveillance-guide"), changefreq: "monthly", priority: "0.6" },

    // SEO State Pages (15)
    { loc: buildUrlLoc("/state/maharashtra"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/gujarat"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/karnataka"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/tamil-nadu"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/telangana"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/delhi-ncr"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/uttar-pradesh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/rajasthan"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/madhya-pradesh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/west-bengal"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/punjab"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/kerala"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/andhra-pradesh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/bihar"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("/state/odisha"), changefreq: "monthly", priority: "0.7" },
      { loc: buildUrlLoc("cctv-cameras-for-education-industry"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-healthcare-industry"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-retail-industry"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-banking-finance"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-logistics-warehousing"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-hospitality-industry"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-temples-religious-places"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-smart-city-projects"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-parking-management"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-for-traffic-management"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-assam"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-meghalaya"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-manipur"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-tripura"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-mizoram"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-nagaland"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-arunachal-pradesh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-sikkim"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-goa"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-himachal-pradesh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-uttarakhand"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-jharkhand"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-chhattisgarh"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-visakhapatnam"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-mysore"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-mangalore"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-hubli"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-belgaum"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-guwahati"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-bhubaneswar"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-raipur"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-ranchi"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-dehradun"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-shimla"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-jammu"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-srinagar"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-amritsar"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-ludhiana"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-jalandhar"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-meerut"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-agra"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-varanasi"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-allahabad"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-kanpur"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-gorakhpur"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-bareilly"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-moradabad"), changefreq: "monthly", priority: "0.7" },
    { loc: buildUrlLoc("cctv-cameras-aligarh"), changefreq: "monthly", priority: "0.7" },
  ];

  // Dynamic blog routes
  let dynamicRoutes = [];
  try {
    const blogs = await fetchAllPublishedBlogs();
    dynamicRoutes = blogs
      .filter((b) => b && b.metadata && b.metadata.urlWords)
      .map((b) => ({
        loc: buildUrlLoc(`/blog/${b.metadata.urlWords}`),
        lastmod: formatDateISO(b.updatedAt || b.createdAt),
        changefreq: "monthly",
        priority: "0.6",
      }));
  } catch (e) {
    console.error("Failed to fetch blogs for sitemap:", e.message || e);
  }

  const urls = [...staticRoutes, ...dynamicRoutes];

  const xmlParts = [];
  xmlParts.push('<?xml version="1.0" encoding="UTF-8"?>');
  xmlParts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const u of urls) {
    xmlParts.push("  <url>");
    xmlParts.push(`    <loc>${toXmlSafe(u.loc)}</loc>`);
    if (u.lastmod)
      xmlParts.push(`    <lastmod>${toXmlSafe(u.lastmod)}</lastmod>`);
    if (u.changefreq)
      xmlParts.push(`    <changefreq>${u.changefreq}</changefreq>`);
    if (u.priority) xmlParts.push(`    <priority>${u.priority}</priority>`);
    xmlParts.push("  </url>");
  }
  xmlParts.push("</urlset>");

  const xml = xmlParts.join("\n");
  const outPath = path.join(__dirname, "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`Sitemap generated: ${outPath} (${urls.length} URLs)`);
}

generate().catch((e) => {
  console.error("Sitemap generation failed:", e);
  process.exit(1);
});

// npm run sitemap
