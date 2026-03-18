export const sseriesbulletSEO = {
  metatitle: "AI Bullet CCTV Camera | S-Series AI Security Camera by ArcisAI",
  metadescription:
    "Secure homes, offices & outdoor areas with ArcisAI's AI Wi-Fi Bullet CCTV Camera. 2K HD, EdgeAI alerts, night vision, 2-way talk & IP66 weatherproof design. Plug-N-Play Wi-Fi setup.",
  ogimage: "https://arcisai.io/images/product_bullet_main.png",
  canonical: "https://arcisai.io/s-series/ai-bullet-cctv-camera",
  schema: [
    // Webpage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AI Bullet CCTV Camera | S-Series AI Security Camera by ArcisAI",
      description:
        "Secure homes, offices & outdoor areas with ArcisAI's AI Bullet CCTV Camera. 2K HD, EdgeAI alerts, night vision, 2-way talk & IP66 weatherproof design. Plug-N-Play Wi-Fi setup.",
      url: "https://arcisai.io/s-series/ai-bullet-cctv-camera",
      datePublished: "2025-12-14",
      dateModified: "2025-12-14",
      publisher: {
        "@type": "Organization",
        name: "ArcisAI - AI CCTV Camera Brand",
        url: "https://arcisai.io/",
        logo: {
          "@type": "ImageObject",
          url: "https://arcisai.io/images/ArcisAi_logo.png",
          width: 150,
          height: 30,
        },
        sameAs: [
          "https://www.facebook.com/thearcisai/",
          "https://www.instagram.com/_arcisai_/",
          "https://www.linkedin.com/company/thearcisai/",
          "https://x.com/arcisai",
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "Image File",
        width: 1886,
        height: 982,
        caption: "ArcisAI - S-Series AI Bullet CCTV Cameras",
      },
      inLanguage: "en-US",
    },
    // FAQs Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: "https://arcisai.io/s-series/ai-bullet-cctv-camera",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will I get alerts if the CCTV Camera goes offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes - health notifications for offline status, storage full or tamper events.",
          },
        },
        {
          "@type": "Question",
          name: "How are firmware updates handled for my AI Bullet Camera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Secure OTA updates; schedule them off-hours and track progress in the app/VMS.",
          },
        },
      ],
    },
  ],
};

export const sseriesptzSEO = {
  metatitle: "AI PTZ CCTV Camera | S-Series AI PTZ Surveillance Camera",
  metadescription:
    "ArcisAI AI PTZ Camera offers smart tracking, 360° view, optical zoom, night vision, and Cloud VMS alerts. Built-in EdgeAI ensures secure outdoor surveillance.",
  ogimage: "https://arcisai.io/images/product_ptz_main.png",
  canonical: "https://arcisai.io/s-series/ai-ptz-cctv-camera",
  schema: [],
};

export const sseriesdomeSEO = {
  metatitle: "AI Dome CCTV Camera | S-Series AI CCTV Camera by ArcisAI",
  metadescription:
    "ArcisAI S-Series AI PTZ Camera with smart tracking, digital zoom, night vision, and instant cloud alerts. Built-in EdgeAI for reliable outdoor monitoring.",
  ogimage: "https://arcisai.io/images/product_dome_main.png",
  canonical: "https://arcisai.io/s-series/ai-dome-cctv-camera",
  schema: [],
};

export const ecoseriesbulletSEO = {
  metatitle: "High-Quality Bullet CCTV Camera | Indian CCTV Brand ArcisAI",
  metadescription:
    "Get reliable outdoor surveillance with ArcisAI Eco-Series Bullet Cameras—weatherproof, high-resolution and made for long-lasting security performance.",
  ogimage: "https://arcisai.io/images/product_ecoseries_bullet_main.png",
  canonical: "https://arcisai.io/eco-series/bullet-cctv-camera",
  schema: [],
};

export const ecoseriesptzSEO = {
  metatitle: "Best PTZ CCTV Cameras in India | ArcisAI Eco-Series Security Cameras",
  metadescription:
    "Protect your property with ArcisAI Eco-Series PTZ CCTV Cameras. 3MP, durable, with day/night IR vision, PoE/IP/WiFi/4G support, and easy installation for Indian conditions.",
  ogimage: "https://arcisai.io/images/product_ptz_main.png",
  canonical: "https://arcisai.io/eco-series/ptz-cctv-camera",
  schema: [],
};

export const ecoseriesdomeSEO = {
  metatitle: "Best Dome CCTV Cameras in India | ArcisAI Eco-Series",
  metadescription:
    "Secure your property with ArcisAI Dome CCTV Cameras. Compact, durable, night vision enabled, with PoE/IP/4G connectivity and simple installation.",
  ogimage: "https://arcisai.io/images/product_dome_main.png",
  canonical: "https://arcisai.io/eco-series/dome-cctv-camera",
  schema: [],
};

// Function to get SEO content based on product key
export const getProductSEO = (productKey) => {
  const normalizedKey = productKey ? productKey.toLowerCase() : "";

  // Map product keys to SEO data
  const seoMap = {
    aibulletcctvcamera: sseriesbulletSEO,
    aiptzcctvcamera: sseriesptzSEO,
    aidomecctvcamera: sseriesdomeSEO,
    bulletcctvcamera: ecoseriesbulletSEO,
    ptzcctvcamera: ecoseriesptzSEO,
    domecctvcamera: ecoseriesdomeSEO,
  };

  return seoMap[normalizedKey];
};
