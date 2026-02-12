/**
 * ArcisAI — Comprehensive JSON-LD Schema Markup
 * Adds structured data for Google, AI engines, and rich results
 *
 * Include in public/index.html before </head>:
 * <script src="%PUBLIC_URL%/schema-markup.js"></script>
 */

(function() {
  'use strict';

  // Helper: inject JSON-LD into page head
  function addSchema(data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // 1. Organization Schema
  addSchema({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ArcisAI",
    "alternateName": ["Arcis AI", "ArcisAI by Adiance Technologies"],
    "url": "https://arcisai.io",
    "logo": "https://arcisai.io/logo.png",
    "description": "ArcisAI is India's first premium AI-powered CCTV camera and intelligent surveillance ecosystem. Featuring Edge AI cameras, Cloud AI analytics, ArcisGPT generative AI, and a unified Video Management System — all Made in India with STQC certification.",
    "foundingDate": "2003",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Adiance Technologies",
      "url": "https://adiance.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Gujarat"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-968-777-9999",
        "contactType": "sales",
        "email": "marketing@arcisai.io",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/arcisai",
      "https://www.instagram.com/arcisai",
      "https://www.youtube.com/@arcisai",
      "https://www.amazon.in/stores/ArcisAI"
    ],
    "brand": {
      "@type": "Brand",
      "name": "ArcisAI",
      "slogan": "India's First Premium AI CCTV"
    },
    "knowsAbout": [
      "AI CCTV Cameras",
      "Edge AI Surveillance",
      "Video Management System",
      "Generative AI for Video Surveillance",
      "Cloud Video Analytics",
      "Smart City Surveillance",
      "Made in India CCTV"
    ],
    "award": [
      "STQC Certified",
      "BIS Certified (IS 13252)",
      "ONVIF Compliant"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "STQC Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "BIS Certification (IS 13252 / IEC 60950-1)"
      }
    ]
  });

  // 2. WebSite Schema (for sitelinks search box)
  addSchema({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArcisAI",
    "url": "https://arcisai.io",
    "description": "India's first premium AI-powered CCTV camera and intelligent surveillance ecosystem",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://arcisai.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  // 3. Product Schemas — S-Series
  addSchema({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI S-Series AI Camera",
    "description": "Premium AI-powered surveillance camera with 3MP resolution, 1/2.8\" CMOS sensor, two-way audio, IP66/67 weatherproofing, and built-in Edge AI analytics. Available in PTZ, Dome, and Bullet variants with WiFi, SIM (4G/5G), and PoE connectivity.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "manufacturer": { "@type": "Organization", "name": "Adiance Technologies" },
    "category": "AI CCTV Cameras",
    "image": "https://arcisai.io/images/s-series.png",
    "url": "https://arcisai.io/products/s-series",
    "countryOfOrigin": { "@type": "Country", "name": "India" },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Resolution", "value": "3MP" },
      { "@type": "PropertyValue", "name": "Sensor", "value": "1/2.8\" CMOS" },
      { "@type": "PropertyValue", "name": "Weatherproofing", "value": "IP66/IP67" },
      { "@type": "PropertyValue", "name": "Connectivity", "value": "WiFi, SIM (4G/5G), PoE" },
      { "@type": "PropertyValue", "name": "Audio", "value": "Two-Way Audio" },
      { "@type": "PropertyValue", "name": "Storage", "value": "SD Card up to 256GB" },
      { "@type": "PropertyValue", "name": "AI Features", "value": "Edge AI Analytics, Line-Cross Detection, Face Detection, Human Detection, Area Detection" },
      { "@type": "PropertyValue", "name": "Certification", "value": "STQC, BIS, ISO, CE, FCC, RoHS, ONVIF" }
    ]
  });

  // 4. Product Schemas — ECO-Series
  addSchema({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI ECO-Series AI Camera",
    "description": "Versatile AI surveillance camera range with 3MP to 5MP resolution, available in 30+ configurations including PTZ, Baby PTZ, Bullet, Dome, and Mini PTZ. Supports SIM, WiFi, PoE, and 10/100 IP connectivity with IP66 protection and built-in Edge AI analytics.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "manufacturer": { "@type": "Organization", "name": "Adiance Technologies" },
    "category": "AI CCTV Cameras",
    "image": "https://arcisai.io/images/eco-series.png",
    "url": "https://arcisai.io/products/eco-series",
    "countryOfOrigin": { "@type": "Country", "name": "India" },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Resolution", "value": "3MP to 5MP" },
      { "@type": "PropertyValue", "name": "Variants", "value": "30+ SKUs: PTZ, Baby PTZ, Bullet, Dome, Mini PTZ" },
      { "@type": "PropertyValue", "name": "Weatherproofing", "value": "IP66/IP67" },
      { "@type": "PropertyValue", "name": "Connectivity", "value": "SIM, WiFi, PoE, 10/100 IP" },
      { "@type": "PropertyValue", "name": "AI Features", "value": "Edge AI Analytics, Cloud AI, Generative AI via ArcisGPT" },
      { "@type": "PropertyValue", "name": "Certification", "value": "STQC, BIS, ISO, CE, FCC, RoHS, ONVIF" }
    ]
  });

  // 5. Product Schema — ArcisAI VMS
  addSchema({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ArcisAI VMS (Video Management System)",
    "description": "Premium next-generation video management platform that blends Edge AI analytics with Cloud AI intelligence and ArcisGPT generative AI. Features global remote access, multi-site camera management, real-time alerts, PTZ control, and advanced event reporting.",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web, Android, iOS",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "url": "https://arcisai.io/vms",
    "offers": {
      "@type": "Offer",
      "description": "6 months free VMS + Cloud Storage (limited time offer)",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Global Remote Access",
      "Multi-Site Camera Management",
      "Cloud AI — crowd count, vehicle detection, PPE kit detection, fire detection",
      "ArcisGPT — talk to your video, smart retrieval, action recognition",
      "Real-Time Alerts — push notifications and email triggers",
      "PTZ Remote Control",
      "Event Reports",
      "Patented Bandwidth Optimization — up to 70% savings",
      "Third-Party Integration — works with existing ONVIF cameras",
      "Cloud, On-Premise, or Hybrid Deployment"
    ]
  });

  // 6. Product Schema — ArcisAI Bridge Device (ABD)
  addSchema({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ArcisAI Bridge Device (ABD)",
    "description": "Plug-and-play device that connects any existing ONVIF IP camera to the ArcisAI VMS platform. Modernize your surveillance without replacing a single camera.",
    "brand": { "@type": "Brand", "name": "ArcisAI" },
    "manufacturer": { "@type": "Organization", "name": "Adiance Technologies" },
    "category": "Surveillance Accessories",
    "image": "https://arcisai.io/images/abd.png",
    "url": "https://arcisai.io/products/abd",
    "countryOfOrigin": { "@type": "Country", "name": "India" },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Compatibility", "value": "All ONVIF IP Cameras" },
      { "@type": "PropertyValue", "name": "Security", "value": "TLS 1.3 Encrypted Streaming, Secure Boot" },
      { "@type": "PropertyValue", "name": "Setup", "value": "Plug-and-Play, Auto Camera Discovery" },
      { "@type": "PropertyValue", "name": "Features", "value": "Cloud Recording, AI Alerts, Smart Streaming, Adaptive Bitrate" }
    ]
  });

  // 7. FAQ Schema — Top questions for rich snippets and GEO
  addSchema({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ArcisAI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ArcisAI is India's first premium AI-powered surveillance ecosystem by Adiance Technologies. It combines Edge AI cameras (S-Series and ECO-Series), a cloud-based Video Management System (VMS), Cloud AI analytics, and ArcisGPT — India's first generative AI for video surveillance. All products are Made in India with STQC certification."
        }
      },
      {
        "@type": "Question",
        "name": "What is ArcisGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ArcisGPT is India's first generative AI engine for video surveillance. It lets you interact with your security footage using natural language — ask questions, search for specific events, track objects or people, and get instant visual intelligence."
        }
      },
      {
        "@type": "Question",
        "name": "Is ArcisAI STQC certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ArcisAI cameras and products are STQC certified by the Government of India. This certification is mandatory for government procurement projects. ArcisAI also holds BIS, ISO, CE, FCC, RoHS, and ONVIF certifications."
        }
      },
      {
        "@type": "Question",
        "name": "How does ArcisAI compare to Hikvision?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ArcisAI is a Made-in-India alternative to Hikvision with key advantages: STQC certification for government procurement, non-Chinese SoCs for compliance, integrated generative AI (ArcisGPT) that Hikvision lacks, and a complete ecosystem (cameras + VMS + Cloud AI + Gen AI)."
        }
      },
      {
        "@type": "Question",
        "name": "What AI features do ArcisAI cameras have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ArcisAI cameras feature built-in Edge AI analytics including face detection, human detection, line-cross detection, area detection, motion detection, missing object detection, and customer traffic statistics. Cloud AI adds crowd counting, vehicle detection, PPE kit detection, and fire detection. ArcisGPT enables natural-language video search."
        }
      },
      {
        "@type": "Question",
        "name": "Can ArcisAI work with my existing cameras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The ArcisAI Bridge Device (ABD) connects any existing ONVIF-compatible IP camera to the ArcisAI VMS platform. It is plug-and-play with auto-discovery, enabling cloud recording, AI alerts, and ArcisGPT features on your existing cameras."
        }
      },
      {
        "@type": "Question",
        "name": "What is Edge AI in CCTV cameras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Edge AI means the artificial intelligence processing happens directly on the camera hardware, not in the cloud. ArcisAI cameras process video analytics like face detection and object recognition at the edge in real-time, reducing bandwidth usage and enabling faster response times."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does ArcisAI serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ArcisAI serves 12+ industry verticals: banking and finance, retail and malls, smart cities, manufacturing, healthcare, education, corporate offices, oil and gas, defense and border security, highways and tunnels, sports and entertainment, and warehousing and logistics."
        }
      }
    ]
  });

  // 8. LocalBusiness Schema
  addSchema({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ArcisAI (Adiance Technologies)",
    "image": "https://arcisai.io/logo.png",
    "url": "https://arcisai.io",
    "telephone": "+91-968-777-9999",
    "email": "marketing@arcisai.io",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Gujarat"
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  });

  // 9. BreadcrumbList Schema (dynamic based on current page)
  var path = window.location.pathname;
  var crumbs = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arcisai.io" }];

  if (path.indexOf('/products') === 0) {
    crumbs.push({ "@type": "ListItem", "position": 2, "name": "Products", "item": "https://arcisai.io/products" });
  } else if (path.indexOf('/blog') === 0) {
    crumbs.push({ "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://arcisai.io/blog" });
  } else if (path.indexOf('/about') === 0) {
    crumbs.push({ "@type": "ListItem", "position": 2, "name": "About", "item": "https://arcisai.io/about" });
  } else if (path.indexOf('/contact') === 0) {
    crumbs.push({ "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://arcisai.io/contact-us" });
  } else if (path.indexOf('/faq') === 0) {
    crumbs.push({ "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://arcisai.io/faq" });
  }

  if (crumbs.length > 1) {
    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": crumbs
    });
  }

})();
