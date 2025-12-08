export const bulletSEO = {
  metatitle:
    "AI Bullet CCTV Camera | S-Series AI Security Camera by ArcisAI",
  metadescription:
    "Secure homes, offices & outdoor areas with ArcisAI's AI Wi-Fi Bullet CCTV Camera. 2K HD, EdgeAI alerts, night vision, 2-way talk & IP66 weatherproof design. Plug-N-Play Wi-Fi setup.",
  ogimage: "https://arcisai.io/images/product_bullet_main.png",
  canonical: "https://arcisai.io/s-series/ai-bullet-cctv-camera",
  schema: [],
};

export const ptzSEO = {
  metatitle: "AI PTZ CCTV Camera | S-Series AI PTZ Surveillance Camera",
  metadescription:
    "ArcisAI AI PTZ Camera offers smart tracking, 360° view, optical zoom, night vision, and Cloud VMS alerts. Built-in EdgeAI ensures secure outdoor surveillance.",
  ogimage: "https://arcisai.io/images/product_ptz_main.png",
  canonical: "https://arcisai.io/s-series/ai-ptz-cctv-camera",
  schema: [],
};

export const domeSEO = {
  metatitle: "AI Dome CCTV Camera | S-Series AI CCTV Camera by ArcisAI",
  metadescription:
    "ArcisAI S-Series AI PTZ Camera with smart tracking, digital zoom, night vision, and instant cloud alerts. Built-in 4G and EdgeAI for reliable outdoor monitoring.",
  ogimage: "https://arcisai.io/images/product_dome_main.png",
  canonical: "https://arcisai.io/s-series/ai-dome-cctv-camera",
  schema: [],
};

// Function to get SEO content based on product key
export const getProductSEO = (productKey) => {
  const normalizedKey = productKey ? productKey.toLowerCase() : "";
  
  // Map product keys to SEO data
  const seoMap = {
    aibulletcctvcamera: bulletSEO,
    aiptzcctvcamera: ptzSEO,
    aidomecctvcamera: domeSEO,
  };

  return seoMap[normalizedKey] || bulletSEO; // Default to bulletSEO if not found
};