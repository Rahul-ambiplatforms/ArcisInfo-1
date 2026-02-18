/**
 * ArcisAI - JSON-LD Structured Data Module
 * Comprehensive SEO and rich snippets for AI CCTV cameras by Adiance
 * Compatible with React Helmet, Next.js <Head>, and standard script tag injection
 */

// ============================================================================
// ORGANIZATION SCHEMA - ARCISAI
// ============================================================================
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://arcisai.io/#organization",
  "name": "ArcisAI",
  "alternateName": ["ArcisAI by Adiance", "Arcis AI"],
  "url": "https://arcisai.io",
  "logo": "https://arcisai.io/logo.png",
  "description": "ArcisAI by Adiance manufactures and distributes advanced AI CCTV cameras with built-in intelligence for smart surveillance. Offering indoor, outdoor, PTZ, bullet, and dome cameras with BIS certification for the Indian market and global deployment.",
  "founded": "2018",
  "foundingDate": "2018",
  "foundingLocation": {
    "@type": "Place",
    "name": "Bangalore, Karnataka, India"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bangalore",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "telephone": "+91-80-4141-1000",
    "email": "sales@arcisai.io",
    "url": "https://arcisai.io/contact"
  },
  "sameAs": [
    "https://www.linkedin.com/company/arcisai",
    "https://twitter.com/arcisai",
    "https://www.youtube.com/c/arcisai"
  ],
  "knowsAbout": [
    "AI CCTV Cameras",
    "Smart Surveillance",
    "Intelligent Video Analytics",
    "Edge AI Computing",
    "Industrial Cameras",
    "Security Cameras",
    "Video Intelligence",
    "IoT Surveillance"
  ],
  "naics": "334310",
  "slogan": "Intelligent Cameras for Smart Surveillance",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "210"
  }
});

// ============================================================================
// PRODUCT SCHEMA - AI CCTV Indoor Camera
// ============================================================================
export const getIndoorCameraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/products/indoor-ai-camera/#product",
  "name": "ArcisAI Indoor AI CCTV Camera",
  "alternateName": "ArcisAI Smart Indoor Camera",
  "description": "Compact indoor AI CCTV camera with built-in edge intelligence for real-time object detection, person tracking, and anomaly detection. Perfect for offices, retail, and indoor facilities.",
  "url": "https://arcisai.io/products/indoor-ai-camera",
  "image": [
    "https://arcisai.io/images/indoor-camera-front.jpg",
    "https://arcisai.io/images/indoor-camera-angle.jpg",
    "https://arcisai.io/images/indoor-camera-spec.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI"
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI by Adiance"
  },
  "category": "Security Camera",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "143",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://arcisai.io/products/indoor-ai-camera",
    "priceCurrency": "INR",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ArcisAI by Adiance"
    }
  },
  "hasSpecification": [
    {
      "@type": "PropertyValue",
      "name": "Resolution",
      "value": "4MP / 2MP options"
    },
    {
      "@type": "PropertyValue",
      "name": "Field of View",
      "value": "110 degrees"
    },
    {
      "@type": "PropertyValue",
      "name": "Night Vision",
      "value": "IR LED with 10m range"
    },
    {
      "@type": "PropertyValue",
      "name": "AI Processing",
      "value": "On-device edge AI"
    },
    {
      "@type": "PropertyValue",
      "name": "Power Consumption",
      "value": "8W (PoE)"
    },
    {
      "@type": "PropertyValue",
      "name": "Operating Temperature",
      "value": "-10Â°C to +50Â°C"
    }
  ],
  "hasFeature": [
    {
      "@type": "Text",
      "name": "Real-time Object Detection",
      "description": "Detect people, vehicles, and objects in real-time"
    },
    {
      "@type": "Text",
      "name": "Person Tracking",
      "description": "Track individuals across multiple frames"
    },
    {
      "@type": "Text",
      "name": "Anomaly Detection",
      "description": "Identify unusual behavior and activities"
    },
    {
      "@type": "Text",
      "name": "Tampering Detection",
      "description": "Alert on camera tampering or obstruction"
    },
    {
      "@type": "Text",
      "name": "Low Light Performance",
      "description": "Optimized for indoor and low-light environments"
    },
    {
      "@type": "Text",
      "name": "Edge AI Computing",
      "description": "Local processing without cloud dependency"
    }
  ],
  "applicableLocation": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "South Asia"
    }
  ],
  "inLanguage": ["en-US", "en-IN"],
  "potentialAction": {
    "@type": "TradeAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://arcisai.io/contact"
    },
    "name": "Request Quote"
  }
});

// ============================================================================
// PRODUCT SCHEMA - AI CCTV Outdoor Camera
// ============================================================================
export const getOutdoorCameraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/products/outdoor-ai-camera/#product",
  "name": "ArcisAI Outdoor AI CCTV Camera",
  "alternateName": "ArcisAI Weatherproof Outdoor Camera",
  "description": "Rugged outdoor AI CCTV camera with IP67 weatherproofing, wide dynamic range, and built-in intelligence for perimeter security, parking lots, and outdoor facilities.",
  "url": "https://arcisai.io/products/outdoor-ai-camera",
  "image": [
    "https://arcisai.io/images/outdoor-camera-front.jpg",
    "https://arcisai.io/images/outdoor-camera-mounting.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI"
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI by Adiance"
  },
  "category": "Outdoor Security Camera",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "98",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://arcisai.io/products/outdoor-ai-camera",
    "priceCurrency": "INR",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ArcisAI by Adiance"
    }
  },
  "hasSpecification": [
    {
      "@type": "PropertyValue",
      "name": "Resolution",
      "value": "5MP / 4MP / 2MP options"
    },
    {
      "@type": "PropertyValue",
      "name": "Field of View",
      "value": "100 degrees"
    },
    {
      "@type": "PropertyValue",
      "name": "Weatherproofing",
      "value": "IP67, IK10 vandal-resistant"
    },
    {
      "@type": "PropertyValue",
      "name": "Night Vision",
      "value": "IR LED with 30m range"
    },
    {
      "@type": "PropertyValue",
      "name": "Wide Dynamic Range",
      "value": "120dB WDR"
    },
    {
      "@type": "PropertyValue",
      "name": "Operating Temperature",
      "value": "-20Â°C to +60Â°C"
    }
  ],
  "hasFeature": [
    {
      "@type": "Text",
      "name": "Weather Resistant",
      "description": "IP67 rated for all weather conditions"
    },
    {
      "@type": "Text",
      "name": "Vandal Resistant",
      "description": "IK10 rated protection against physical damage"
    },
    {
      "@type": "Text",
      "name": "Long-Range Night Vision",
      "description": "30m infrared coverage for perimeter security"
    },
    {
      "@type": "Text",
      "name": "Vehicle Detection",
      "description": "AI-powered vehicle and license plate recognition"
    },
    {
      "@type": "Text",
      "name": "Intrusion Detection",
      "description": "Smart perimeter monitoring and alerts"
    },
    {
      "@type": "Text",
      "name": "Edge AI Processing",
      "description": "Real-time analytics without network latency"
    }
  ],
  "applicableLocation": [
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "inLanguage": ["en-US", "en-IN"],
  "potentialAction": {
    "@type": "TradeAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://arcisai.io/contact"
    },
    "name": "Request Demo"
  }
});

// ============================================================================
// PRODUCT SCHEMA - AI PTZ Camera
// ============================================================================
export const getPTZCameraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/products/ai-ptz-camera/#product",
  "name": "ArcisAI AI PTZ Camera",
  "alternateName": "ArcisAI Pan-Tilt-Zoom AI Camera",
  "description": "Intelligent Pan-Tilt-Zoom (PTZ) camera with AI auto-tracking, wide area coverage, and motorized pan/tilt/zoom for comprehensive surveillance of large outdoor areas.",
  "url": "https://arcisai.io/products/ai-ptz-camera",
  "image": "https://arcisai.io/images/ptz-camera.jpg",
  "brand": {
    "@type": "Brand",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI"
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI by Adiance"
  },
  "category": "PTZ Security Camera",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "52",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://arcisai.io/products/ai-ptz-camera",
    "priceCurrency": "INR",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock"
  },
  "hasSpecification": [
    {
      "@type": "PropertyValue",
      "name": "Resolution",
      "value": "4MP"
    },
    {
      "@type": "PropertyValue",
      "name": "Zoom Range",
      "value": "20x Optical / 16x Digital"
    },
    {
      "@type": "PropertyValue",
      "name": "Pan Range",
      "value": "360 degrees"
    },
    {
      "@type": "PropertyValue",
      "name": "Tilt Range",
      "value": "-5 to +90 degrees"
    },
    {
      "@type": "PropertyValue",
      "name": "Pan/Tilt Speed",
      "value": "0.1 to 300 degrees per second"
    }
  ],
  "hasFeature": [
    {
      "@type": "Text",
      "name": "AI Auto-Tracking",
      "description": "Automatically track detected subjects across pan and tilt"
    },
    {
      "@type": "Text",
      "name": "Preset Positions",
      "description": "Save and recall up to 300 preset positions"
    },
    {
      "@type": "Text",
      "name": "Smart Patrol",
      "description": "Automatic patrol mode with customizable routes"
    },
    {
      "@type": "Text",
      "name": "Zoom Tracking",
      "description": "Intelligent zoom on detected subjects"
    },
    {
      "@type": "Text",
      "name": "Wide Area Coverage",
      "description": "Monitor large outdoor areas with single camera"
    }
  ]
});

// ============================================================================
// PRODUCT SCHEMA - AI Bullet Camera
// ============================================================================
export const getBulletCameraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/products/ai-bullet-camera/#product",
  "name": "ArcisAI AI Bullet Camera",
  "alternateName": "ArcisAI Compact Bullet AI Camera",
  "description": "Compact bullet-style AI camera for discreet surveillance in residential and commercial environments with AI analytics at the edge.",
  "url": "https://arcisai.io/products/ai-bullet-camera",
  "image": "https://arcisai.io/images/bullet-camera.jpg",
  "brand": {
    "@type": "Brand",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI"
  },
  "category": "Bullet Security Camera",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "167",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://arcisai.io/products/ai-bullet-camera",
    "priceCurrency": "INR",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock"
  },
  "hasFeature": [
    {
      "@type": "Text",
      "name": "Compact Design",
      "description": "Discreet bullet-style form factor"
    },
    {
      "@type": "Text",
      "name": "Fixed or Motorized",
      "description": "Available in fixed and motorized zoom models"
    },
    {
      "@type": "Text",
      "name": "Low Profile",
      "description": "Minimal visual impact while maximizing coverage"
    },
    {
      "@type": "Text",
      "name": "Easy Installation",
      "description": "Simple mounting and configuration"
    },
    {
      "@type": "Text",
      "name": "Built-in AI",
      "description": "Edge intelligence included in compact package"
    }
  ]
});

// ============================================================================
// PRODUCT SCHEMA - AI Dome Camera
// ============================================================================
export const getDomeCameraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/products/ai-dome-camera/#product",
  "name": "ArcisAI AI Dome Camera",
  "alternateName": "ArcisAI Dome Security Camera with AI",
  "description": "Vandal-resistant dome camera with built-in AI intelligence, designed for retail, banks, and facilities requiring discrete high-performance surveillance.",
  "url": "https://arcisai.io/products/ai-dome-camera",
  "image": "https://arcisai.io/images/dome-camera.jpg",
  "brand": {
    "@type": "Brand",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI"
  },
  "category": "Dome Security Camera",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "121",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://arcisai.io/products/ai-dome-camera",
    "priceCurrency": "INR",
    "price": "Contact for pricing",
    "availability": "https://schema.org/InStock"
  },
  "hasFeature": [
    {
      "@type": "Text",
      "name": "Vandal Resistant",
      "description": "IK10 rated construction"
    },
    {
      "@type": "Text",
      "name": "Discrete Design",
      "description": "Low-profile dome for retail and commercial spaces"
    },
    {
      "@type": "Text",
      "name": "360-Degree Awareness",
      "description": "Hemispherical coverage of surveillance area"
    },
    {
      "@type": "Text",
      "name": "AI Analytics",
      "description": "Behavior analysis and threat detection"
    },
    {
      "@type": "Text",
      "name": "Motorized Zoom",
      "description": "Remote focus and zoom capability"
    }
  ]
});

// ============================================================================
// SOFTWARE APPLICATION SCHEMA
// ============================================================================
export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://arcisai.io/#software",
  "name": "ArcisAI Intelligence Platform",
  "alternateName": "ArcisAI Analytics Engine",
  "description": "Intelligent video analytics and management platform for ArcisAI cameras, providing real-time insights, threat detection, and surveillance intelligence.",
  "url": "https://arcisai.io",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": ["Web-based", "On-device Edge"],
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Real-time Object Detection",
    "Person Tracking",
    "Vehicle Recognition",
    "Anomaly Detection",
    "Edge AI Processing",
    "Cloud Integration",
    "Mobile Monitoring",
    "Event Logging"
  ],
  "author": {
    "@type": "Organization",
    "name": "ArcisAI by Adiance"
  },
  "inLanguage": ["en-US", "en-IN"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "189",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// ============================================================================
// FAQ SCHEMA
// ============================================================================
export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are AI CCTV cameras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI CCTV cameras are security cameras with built-in artificial intelligence and computer vision capabilities. Unlike traditional cameras that just record video, AI CCTV cameras process video in real-time to detect objects, people, vehicles, and unusual activities. ArcisAI cameras feature edge AI computing, meaning the intelligent processing happens directly on the camera without requiring a separate server or cloud connection."
      }
    },
    {
      "@type": "Question",
      "name": "What is smart surveillance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart surveillance refers to intelligent video monitoring systems that go beyond traditional recording. It includes real-time threat detection, automatic alerts, behavior analysis, and actionable insights. ArcisAI smart surveillance cameras detect suspicious activities, track individuals and vehicles, identify safety violations, and provide data-driven security intelligence rather than passive video recording."
      }
    },
    {
      "@type": "Question",
      "name": "What is BIS certification for security cameras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BIS (Bureau of Indian Standards) certification ensures that security equipment meets Indian quality, safety, and performance standards. BIS certification is mandatory for security cameras sold in India and indicates compliance with IS 4742 and related standards. ArcisAI cameras are BIS certified, ensuring they meet Indian regulatory requirements and quality benchmarks for surveillance equipment."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose between indoor, outdoor, PTZ, bullet, and dome cameras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Camera selection depends on your surveillance needs: Indoor cameras work best for offices and retail. Outdoor cameras are weatherproof for perimeter security. PTZ (Pan-Tilt-Zoom) cameras cover wide areas. Bullet cameras offer compact, discreet surveillance. Dome cameras provide vandal-resistant, discrete coverage for sensitive areas. ArcisAI offers all types with built-in AI intelligence to match any security requirement."
      }
    },
    {
      "@type": "Question",
      "name": "What is edge AI computing in cameras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edge AI computing means the artificial intelligence processing happens directly on the camera device itself, rather than sending video to a server or cloud. This provides real-time analysis, reduces network bandwidth, improves response time, and maintains privacy by not transmitting raw video. ArcisAI cameras feature powerful edge AI processors for instant threat detection and analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Can ArcisAI cameras work without internet connection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ArcisAI cameras feature edge AI computing, which means they perform analysis and object detection locally on the camera without requiring an internet connection. However, connecting to a network allows you to access live feeds remotely, receive alerts, and integrate with management platforms. The camera remains functional and intelligent even in offline mode."
      }
    },
    {
      "@type": "Question",
      "name": "What security risks do AI cameras help prevent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ArcisAI AI cameras help prevent intrusions, theft, vandalism, unauthorized access, safety violations, and suspicious activities. They can detect loitering, perimeter breaches, vehicle intrusions, person tracking, and abnormal behavior patterns. Real-time alerts enable security personnel to respond immediately, making ArcisAI cameras effective for loss prevention, access control, and proactive threat management."
      }
    },
    {
      "@type": "Question",
      "name": "Are ArcisAI cameras compatible with existing surveillance systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ArcisAI cameras support standard IP camera protocols (RTSP, ONVIF) for broad compatibility with most modern VMS (Video Management Systems) and NVR (Network Video Recorders). They can integrate with existing surveillance infrastructure, though they are optimized when used with ArcisAI management platforms to fully leverage built-in AI capabilities."
      }
    }
  ]
});

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================
export const getBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    { position: 1, name: "Home", item: "https://arcisai.io" },
    { position: 2, name: "Products", item: "https://arcisai.io/products" },
    { position: 3, name: "Solutions", item: "https://arcisai.io/solutions" }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item) => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.item
    }))
  };
};

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://arcisai.io/#local-business",
  "name": "ArcisAI by Adiance - Bangalore Office",
  "image": "https://arcisai.io/images/office.jpg",
  "description": "ArcisAI headquarters in Bangalore, Karnataka, India. Manufacturing and distribution center for AI CCTV cameras.",
  "url": "https://arcisai.io/about",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tech Park, Bangalore",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "telephone": "+91-80-4141-1000",
  "email": "info@arcisai.io",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "sameAs": [
    "https://www.linkedin.com/company/arcisai",
    "https://www.google.com/maps/place/ArcisAI"
  ]
});

// ============================================================================
// SERVICE SCHEMA
// ============================================================================
export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://arcisai.io/#service",
  "name": "AI-Powered CCTV Camera Systems",
  "description": "Intelligent video surveillance cameras with built-in edge AI for smart security and video analytics.",
  "provider": {
    "@type": "Organization",
    "@id": "https://arcisai.io/#organization",
    "name": "ArcisAI by Adiance"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "South Asia"
    }
  ],
  "hasOfferingDescription": [
    {
      "@type": "OfferingDescription",
      "name": "Indoor AI Cameras",
      "description": "AI CCTV cameras for indoor environments"
    },
    {
      "@type": "OfferingDescription",
      "name": "Outdoor AI Cameras",
      "description": "Weather-resistant AI cameras for outdoor deployment"
    },
    {
      "@type": "OfferingDescription",
      "name": "PTZ AI Cameras",
      "description": "Pan-tilt-zoom cameras with AI tracking"
    },
    {
      "@type": "OfferingDescription",
      "name": "Bullet & Dome Cameras",
      "description": "Specialized form factors for specific use cases"
    }
  ]
});

// ============================================================================
// ORGANIZATION (WITH CERTIFICATIONS)
// ============================================================================
export const getOrganizationWithCertifications = () => {
  const org = getOrganizationSchema();
  return {
    ...org,
    "certification": [
      {
        "@type": "Certification",
        "name": "BIS Certification",
        "issuer": {
          "@type": "Organization",
          "name": "Bureau of Indian Standards"
        },
        "credentialCategory": "ProductCertification",
        "url": "https://arcisai.io/certifications/bis"
      },
      {
        "@type": "Certification",
        "name": "ISO 9001:2015",
        "issuer": {
          "@type": "Organization",
          "name": "International Organization for Standardization"
        },
        "credentialCategory": "QualityCertification",
        "url": "https://arcisai.io/certifications/iso"
      }
    ]
  };
};

// ============================================================================
// AGGREGATE RATING SCHEMA (for customer reviews)
// ============================================================================
export const getAggregateRatingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://arcisai.io/#product",
  "name": "ArcisAI Camera Systems",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "210",
    "reviewCount": "210",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Security Director, Leading Bank"
      },
      "datePublished": "2024-02-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "ArcisAI cameras have transformed our security operations. The AI capabilities are impressive and BIS certification gave us confidence for deployment."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Operations Manager, Retail Chain"
      },
      "datePublished": "2024-02-05",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Easy installation, exceptional image quality, and the AI threat detection has prevented multiple incidents. Highly recommend ArcisAI."
    }
  ]
});

// ============================================================================
// COMPOSITE EXPORT - All Schemas
// ============================================================================
export const getAllSchemas = () => ({
  organization: getOrganizationSchema(),
  organizationWithCertifications: getOrganizationWithCertifications(),
  indoorCamera: getIndoorCameraProductSchema(),
  outdoorCamera: getOutdoorCameraProductSchema(),
  ptzCamera: getPTZCameraProductSchema(),
  bulletCamera: getBulletCameraProductSchema(),
  domeCamera: getDomeCameraProductSchema(),
  softwareApplication: getSoftwareApplicationSchema(),
  faq: getFAQSchema(),
  localBusiness: getLocalBusinessSchema(),
  service: getServiceSchema(),
  aggregateRating: getAggregateRatingSchema()
});

// ============================================================================
// REACT HELMET COMPATIBILITY - JSON-LD Script Tag Generator
// ============================================================================
export const generateJsonLdScript = (schema) => {
  return {
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema, null, 2)
  };
};

// ============================================================================
// NEXT.JS HEAD COMPATIBILITY - Script Component Props
// ============================================================================
export const getScriptProps = (schema) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: {
    __html: JSON.stringify(schema)
  }
});

// ============================================================================
// UTILITY FUNCTION - Get Schema by Type
// ============================================================================
export const getSchemaByType = (type) => {
  const schemas = {
    organization: getOrganizationSchema,
    organizationWithCertifications: getOrganizationWithCertifications,
    indoorCamera: getIndoorCameraProductSchema,
    outdoorCamera: getOutdoorCameraProductSchema,
    ptzCamera: getPTZCameraProductSchema,
    bulletCamera: getBulletCameraProductSchema,
    domeCamera: getDomeCameraProductSchema,
    software: getSoftwareApplicationSchema,
    faq: getFAQSchema,
    localBusiness: getLocalBusinessSchema,
    service: getServiceSchema,
    aggregateRating: getAggregateRatingSchema
  };

  return schemas[type] ? schemas[type]() : null;
};

export default {
  getOrganizationSchema,
  getOrganizationWithCertifications,
  getIndoorCameraProductSchema,
  getOutdoorCameraProductSchema,
  getPTZCameraProductSchema,
  getBulletCameraProductSchema,
  getDomeCameraProductSchema,
  getSoftwareApplicationSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getAggregateRatingSchema,
  getAllSchemas,
  generateJsonLdScript,
  getScriptProps,
  getSchemaByType
};
