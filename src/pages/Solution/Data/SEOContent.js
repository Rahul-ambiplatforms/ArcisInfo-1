export const edgeAISEO = {
  metatitle: "EdgeAI CCTV Cameras for Smarter Real-Time Security - ArcisAI",
  metadescription:
    "Discover ArcisAI EdgeAI - AI-powered CCTV cameras that detect, analyze, and alert in real time. Smarter surveillance starts right inside the camera.",
  ogimage: "https://arcisai.io/images/solution_edgeai_hero.png",
  canonical: "https://arcisai.io/solution/edge-ai-cctv-camera",
  schema: [],
};

export const cloudAISEO = {
  metatitle: "Cloud AI CCTV Camera for Scalable, Smarter Surveillance – ArcisAI",
  metadescription:
    "Enhance your ArcisAI's AI CCTV cameras with CloudAI - a subscription-based alerts that unlocks advanced detections, analytics, and insights powered by the cloud.",
  ogimage: "https://arcisai.io/images/solution_cloudai_hero.png",
  canonical: "https://arcisai.io/solution/cloud-ai-cctv-camera",
  schema: [],
};

export const genAISEO = {
  metatitle: "ArcisAI GenAI – Smarter CCTV Search and Video Summarization",
  metadescription:
    "ArcisAI GenAI turns hours of CCTV footage into instant summaries. Search, analyze, and retrieve key moments with natural language commands for faster decisions.",
  ogimage: "https://arcisai.io/images/solution_genai_hero.png",
  canonical: "https://arcisai.io/solution/gen-ai-cctv-camera",
  schema: [],
};

// Function to get SEO content based on solution key
export const getSolutionSEO = (solutionId) => {
  const normalizedId = solutionId ? solutionId.toLowerCase() : "";

  // Map solution IDs to SEO data
  const seoMap = {
    "edge-ai-cctv-camera": edgeAISEO,
    "cloud-ai-cctv-camera": cloudAISEO,
    "gen-ai-cctv-camera": genAISEO,
  };

  return seoMap[normalizedId] || edgeAISEO; // Default to edgeAISEO if not found
};

