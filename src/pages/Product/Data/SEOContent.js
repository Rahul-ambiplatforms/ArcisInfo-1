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
  metatitle:
    "Best PTZ CCTV Cameras in India | ArcisAI Eco-Series Security Cameras",
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

export const ProductSpecificSEO = {
  "AD-90AI4GBDP": {
    metaTitle: "4G AI PTZ Camera – AD-90AI4GBDP | ArcisAI",
    metaDescription:
      "ArcisAI AD-90AI4GBDP 4G AI PTZ camera, 3MP, PTZ control, human detection, H.264/H.265, audio, SD card, IP66 protection.",
    canonical: "https://arcisai.io/ad-90ai4gbdp",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90AI4GBDP_main.png",
  },
  "AD-90AI4GBDPB": {
    metaTitle: "4G AI Bullet Camera – AD-90AI4GBDPB | ArcisAI",
    metaDescription:
      "ArcisAI AD-90AI4GBDPB 4G AI Bullet Camera, 3MP, AI human detection, IR 20m, H.265, audio, SD card, IP66 protection.",
    canonical: "https://arcisai.io/ad-90ai4gbdpb",
    ogImage:
      "https://arcisai.io/images/Ecoseries_bullet_AD-90AI4GBDPB_main.png",
  },
  "AD-90AI4GBDPD": {
    metaTitle: "4G AI Dome Camera – AD-90AI4GBDPD | ArcisAI",
    metaDescription:
      "ArcisAI AD-90AI4GBDPD 4G AI Dome Camera, 3MP, AI human detection, 4mm lens, day/night, audio, SD card, IP66 housing.",
    canonical: "https://arcisai.io/ad-90ai4gbdpd",
    ogImage: "https://arcisai.io/images/Ecoseries_dome_AD-90AI4GBDPD_main.png",
  },
  "AD-90AIEBDP": {
    metaTitle: "AI IP Bullet Camera – AD-90AIEBDP | ArcisAI",
    metaDescription:
      "ArcisAI AI IP Bullet Camera AD-90AIEBDP with 1/3″ CMOS sensor, 4mm lens, 3D DNR, Digital WDR, dual light IR, H.265 encoding, and cloud/TF storage.",
    canonical: "https://arcisai.io/ad-90aiebpd",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90AIEBDP_main.png",
  },
  "AD-90AIWFBDP": {
    metaTitle: "Outdoor WiFi AI PT Camera – AD-90AIWFBDP | ArcisAI",
    metaDescription:
      "ArcisAI Outdoor WiFi AI PT Camera AD-90AIWFBDP with 3MP CMOS sensor, PT control, WiFi 2.4G, IR up to 30m, audio I/O, and TF storage up to 256GB.",
    canonical: "https://arcisai.io/ad-90aiwfbdp",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90AIWFBDP_main.png",
  },
  "AD-90ARE3BM": {
    metaTitle: "IP Bullet Camera (Metal) – AD-90ARE3BM | ArcisAI",
    metaDescription:
      "ArcisAI IP Bullet Camera AD-90ARE3BM features a 3MP 1/2.8″ CMOS sensor, 4mm lens, color night mode, H.265 compression, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3bm",
    ogImage: "https://arcisai.io/images/Ecoseries_Bullet_AD-90ARE3BM_main.png",
  },
  "AD-90ARE3BP": {
    metaTitle: "IP Bullet Camera (Plastic) – AD-90ARE3BP | ArcisAI",
    metaDescription:
      "ArcisAI IP Bullet Camera AD-90ARE3BP with 3MP 1/2.8″ CMOS sensor, 4mm lens, HDR, color night mode, H.265 compression, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3bp",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90ARE3BP_main.png",
  },
  "AD-90ARE3BP2": {
    metaTitle: "IP Bullet Camera (Plastic) – AD-90ARE3BP2 | ArcisAI",
    metaDescription:
      "ArcisAI IP Bullet Camera AD-90ARE3BP2 with 3MP 1/2.8″ CMOS sensor, 2.8mm lens, HDR, color night mode, H.265 compression, audio support, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3bp2",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90ARE3BP2_main.png",
  },
  "AD-90ARE3BPB": {
    metaTitle: "IP Battery Bullet Camera (Plastic) – AD-90ARE3BPB | ArcisAI",
    metaDescription:
      "ArcisAI AD-90ARE3BPB 3MP IP Battery Bullet Camera, 4mm lens, HDR, color night mode, H.265, built-in audio, battery support, IP66.",
    canonical: "https://arcisai.io/ad-90are3bpb",
    ogImage: "https://arcisai.io/images/Ecoseries_Bullet_AD-90ARE3BPB_main.png",
  },
  "AD-90ARE3DM": {
    metaTitle: "IP Dome Camera (Metal) – AD-90ARE3DM | ArcisAI",
    metaDescription:
      "ArcisAI IP Dome Camera AD-90ARE3DM with 3MP 1/2.8″ CMOS sensor, 4mm lens, HDR, color night mode, H.265 compression, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3dm",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90ARE3DM_main.png",
  },
  "AD-90ARE3DP": {
    metaTitle: "IP Dome Camera (Plastic) – AD-90ARE3DP | ArcisAI",
    metaDescription:
      "ArcisAI IP Dome Camera AD-90ARE3DP with 3MP 1/2.8″ CMOS sensor, 4mm lens, HDR, color night mode, H.265 compression, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3dp",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90ARE3DP_main.png",
  },
  "AD-90ARE3DP2": {
    metaTitle: "IP Dome Camera (Plastic) – AD-90ARE3DP2 | ArcisAI",
    metaDescription:
      "ArcisAI IP Dome Camera AD-90ARE3DP2 with 3MP 1/2.8″ CMOS sensor, 2.8mm lens, HDR, color night mode, H.265 compression, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3dp2",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90ARE3DP2_main.png",
  },
  "AD-90ARE3MPT": {
    metaTitle: "IP Mini PT Camera – AD-90ARE3MPT | ArcisAI",
    metaDescription:
      "ArcisAI IP Mini PT Camera AD-90ARE3MPT with 3MP CMOS sensor, 4mm lens, HDR, color night mode, H.265 compression, PT control, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3mpt",
    ogImage:
      "https://arcisai.io/images/Ecoseries_PTZ_mini_AD-90ARE3MPT_main.png",
  },
  "AD-90ARE3PT": {
    metaTitle: "IP PT Camera (Plastic) – AD-90ARE3PT | ArcisAI",
    metaDescription:
      "ArcisAI IP PT Camera AD-90ARE3PT with 3MP 1/2.8″ CMOS sensor, 4mm lens, HDR, color night mode, H.265 compression, PT control, built-in audio, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90are3pt",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90ARE3PT_main.png",
  },
  "AD-90ARE3PTB": {
    metaTitle: "IP Battery PT Camera (Plastic) – AD-90ARE3PTB | ArcisAI",
    metaDescription:
      "ArcisAI IP Battery PT Camera AD-90ARE3PTB with 3MP CMOS sensor, 4mm lens, HDR, H.265 video, PT control, battery support, and IP66 protection.",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90ARE3PTB_main.png",
  },
  "AD-90ARP3BM": {
    metaTitle: "ArcisAI POE Bullet Camera 3MP Metal | AD-90ARP3BM",
    metaDescription:
      "ArcisAI AD-90ARP3BM POE bullet camera delivers clear 3MP security with metal body, night vision, audio support, and IP66 protection.",
    canonical: "https://arcisai.io/ad-90arp3bm",
    ogImage: "https://arcisai.io/images/Ecoseries_Bullet_AD-90ARP3BM_main.png",
  },
  "AD-90ARP3BP": {
    metaTitle: "ArcisAI POE Bullet Camera 3MP Plastic | AD-90ARP3BP",
    metaDescription:
      "ArcisAI AD-90ARP3BP POE bullet camera features 3MP clarity, plastic body, night vision, built-in mic & speaker, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3bp",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90ARP3BP_main.png",
  },
  "AD-90ARP3BP2": {
    metaTitle: "ArcisAI POE Bullet Camera 3MP 2.8mm | AD-90ARP3BP2",
    metaDescription:
      "ArcisAI AD-90ARP3BP2 POE bullet camera offers 3MP video, 2.8mm wide lens, night vision, built-in mic & speaker, IP66 protection, and POE power.",
    canonical: "https://arcisai.io/ad-90arp3bp2",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90ARP3BP2_main.png",
  },
  "AD-90ARP3DM": {
    metaTitle: "ArcisAI POE Dome Camera 3MP Metal | AD-90ARP3DM",
    metaDescription:
      "ArcisAI AD-90ARP3DM POE dome camera offers 3MP video, 4mm lens, HDR, night vision, built-in audio, IP66 protection, and stable POE power.",
    canonical: "https://arcisai.io/ad-90arp3dm",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90ARP3DM_main.png",
  },
  "AD-90ARP3DP": {
    metaTitle: "ArcisAI POE Dome Camera 3MP Plastic | AD-90ARP3DP",
    metaDescription:
      "ArcisAI AD-90ARP3DP POE dome camera features 3MP CMOS sensor, 4mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3dp",
    ogImage: "https://arcisai.io/images/ecoseries_dome_AD-90ARP3DP_main.png",
  },
  "AD-90ARP3DP2": {
    metaTitle: "ArcisAI POE Dome Camera 3MP 2.8mm Plastic | AD-90ARP3DP2",
    metaDescription:
      "ArcisAI AD-90ARP3DP2 POE dome camera with 3MP CMOS sensor, 2.8mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3dp2",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90ARP3DP2_main.png",
  },
  "AD-90ARP3MPT": {
    metaTitle: "ArcisAI POE Mini PT Camera 3MP Plastic | AD-90ARP3MPT",
    metaDescription:
      "ArcisAI AD-90ARP3MPT POE mini PT camera with 3MP CMOS sensor, 4mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3mpt",
    ogImage:
      "https://arcisai.io/images/Ecoseries_PTZ_mini_AD-90ARP3MPT_main.png",
  },
  "AD-90ARP3MPT2": {
    metaTitle: "ArcisAI POE Mini PT Camera 3MP 2.8mm Plastic | AD-90ARP3MPT2",
    metaDescription:
      "ArcisAI AD-90ARP3MPT2 POE mini PT camera with 3MP CMOS sensor, 2.8mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3mpt2",
    ogImage:
      "https://arcisai.io/images/Ecoseries_PTZ_mini_AD-90ARP3MPT2_main.png",
  },
  "AD-90ARP3PT": {
    metaTitle: "ArcisAI POE PT Camera 3MP Plastic | AD-90ARP3PT",
    metaDescription:
      "ArcisAI AD-90ARP3PT POE PT camera with 3MP CMOS sensor, 4mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3pt",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90ARP3PT_main.png",
  },
  "AD-90ARP3PT2": {
    metaTitle: "ArcisAI POE PT Camera 3MP 2.8mm Plastic | AD-90ARP3PT2",
    metaDescription:
      "ArcisAI AD-90ARP3PT2 POE PT camera with 3MP CMOS sensor, 2.8mm lens, HDR, night vision, built-in audio, IP66 protection, and POE support.",
    canonical: "https://arcisai.io/ad-90arp3pt2",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90ARP3PT2_main.png",
  },
  "AD-90ARWFBDP": {
    metaTitle: "ArcisAI Outdoor WiFi PT Camera 3MP | AD-90ARWFBDP",
    metaDescription:
      "ArcisAI AD-90ARWFBDP outdoor WiFi PT camera with 3MP CMOS sensor, 4mm lens, HDR, night vision, PT control, built-in audio, IP66 protection, and WiFi",
    canonical: "https://arcisai.io/ad-90arwfbdp",
    ogImage: "https://arcisai.io/images/Ecoseries_PTZ_AD-90ARWFBDP_main.png",
  },
  "AD-90ARXBDP": {
    metaTitle: "ArcisAI Wireless Indoor Panning Camera 3MP | AD-90ARXBDP",
    metaDescription:
      "ArcisAI AD-90ARXBDP wireless indoor panning camera with 3MP CMOS, 4mm lens, HDR, night vision, WiFi, built-in audio, and compact design.",
    canonical: "https://arcisai.io/ad-90arxbdp",
    ogImage: "https://arcisai.io/images/Ecoseries_Bullet_AD-90ARXBDP_main.png",
  },
  "AD-90NRE5BM": {
    metaTitle: "ArcisAI IP Bullet Camera 5MP Metal | AD-90NRE5BM",
    metaDescription:
      "ArcisAI AD-90NRE5BM IP bullet camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and reliable POE/Ethernet.",
    canonical: "https://arcisai.io/ad-90nre5bm",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90NRE5BM_main.png",
  },
  "AD-90NRE5BP": {
    metaTitle: "ArcisAI IP Bullet Camera 5MP Plastic | AD-90NRE5BP",
    metaDescription:
      "ArcisAI AD-90NRE5BP IP bullet camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and reliable POE/Ethernet.",
    canonical: "https://arcisai.io/ad-90nre5bp",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90NRE5BP_main.png",
  },
  "AD-90NRE5DM": {
    metaTitle: "ArcisAI IP Dome Camera 5MP Metal | AD-90NRE5DM",
    metaDescription:
      "ArcisAI AD-90NRE5DM IP dome camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and reliable POE/Ethernet.",
    canonical: "https://arcisai.io/ad-90nre5dm",
    ogImage: "https://arcisai.io/images/Ecoseries_dome_AD-90NRE5DM_main.png",
  },
  "AD-90NRE5DP": {
    metaTitle: "ArcisAI IP Dome Camera 5MP Plastic | AD-90NRE5DP",
    metaDescription:
      "ArcisAI AD-90NRE5DP IP dome camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and POE/Ethernet support.",
    canonical: "https://arcisai.io/ad-90nre5dp",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90NRE5DP_main.png",
  },
  "AD-90NRP5BM": {
    metaTitle: "ArcisAI POE Bullet Camera 5MP Metal | AD-90NRP5BM",
    metaDescription:
      "ArcisAI AD-90NRP5BM POE bullet camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and reliable POE/Ethernet.",
    canonical: "https://arcisai.io/ad-90nrp5bm",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90NRP5BM_main.png",
  },
  "AD-90NRP5BP": {
    metaTitle: "ArcisAI POE Bullet Camera 5MP Plastic | AD-90NRP5BP",
    metaDescription:
      "ArcisAI AD-90NRP5BP POE bullet camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and stable POE connectivity.",
    canonical: "https://arcisai.io/ad-90nrp5bp",
    ogImage: "https://arcisai.io/images/Ecoseries_bullet_AD-90NRP5BP_main.png",
  },
  "AD-90NRP5DM": {
    metaTitle: "ArcisAI POE Dome Camera 5MP Metal | AD-90NRP5DM",
    metaDescription:
      "ArcisAI AD-90NRP5DM POE dome camera with 5MP CMOS, 2.8mm lens, HDR, night vision, built-in audio, IP67 protection, and POE connectivity.",
    canonical: "https://arcisai.io/ad-90nrp5dm",
    ogImage: "https://arcisai.io/images/Ecoseries_dome_AD-90NRP5DM_main.png",
  },
  "AD-90NRP5DP": {
    metaTitle: "POE Dome CCTV Camera – AD-90NRP5DP | ArcisAI",
    metaDescription:
      "ArcisAI 5MP POE dome camera offers AI H.265+, HDR, 30m IR, IP67 protection, and high-resolution video for advanced indoor and outdoor security.",
    canonical: "https://arcisai.io/ad-90nrp5dp",
    ogImage: "https://arcisai.io/images/Ecoseries_DOME_AD-90NRP5DP_main.png",
  },
};
