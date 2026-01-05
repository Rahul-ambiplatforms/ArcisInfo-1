export const homeSEO = {
  metatitle: "Best AI CCTV Camera Brand in India | AI CCTV Company - ArcisAI",
  metadescription:
    "Looking for a reliable AI CCTV camera provider? ArcisAI is a top CCTV brand in India offering AI-driven surveillance to protect your space, anytime, anywhere.",
  ogimage: "https://arcisai.io/images/home_hero_1.png",
  canonical: "https://arcisai.io/",
  schema: [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Best CCTV Camera Brand in India | AI CCTV Company - ArcisAI",
      description:
        "Looking for a reliable AI CCTV camera provider? ArcisAI is a top CCTV brand in India offering AI-driven surveillance to protect your space, anytime, anywhere.",
      url: "https://arcisai.io/",
      datePublished: "2024-07-24",
      dateModified: "2025-05-05",
      publisher: {
        "@type": "Organization",
        name: "ArcisAI - AI CCTV Camera Brand",
        url: "https://arcisai.io/",
        logo: {
          "@type": "ImageObject",
          url: "https://arcisai.io/images/ArcisAi.png",
          width: 107,
          height: 24,
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
        url: "Image Link",
        width: 174,
        height: 123,
        caption: "CCTV Camera Brand | AI Security Camera Company",
      },
      inLanguage: "en-US",
    },

    // Organization Schema
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "ArcisAI - AI CCTV Camera Brand",
      url: "https://arcisai.io/",
      logo: "https://arcisai.io/images/ArcisAi.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9687779999",
        email: "marketing@arcisai.io",
        contactType: "Sales",
        areaServed: "Global",
      },
      sameAs: [
        "https://www.facebook.com/thearcisai/",
        "https://www.instagram.com/_arcisai_/",
        "https://www.linkedin.com/company/thearcisai/",
        "https://x.com/arcisai",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
        addressCountry: "IN",
      },
      foundingDate: "2024",
      description:
        "Discover ArcisAI – India’s first AI CCTV camera brand with 8 inbuilt EdgeAI detections, delivering smarter & faster surveillance via cloud VMS & Free mobile app.",
    },

    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "ArcisAI - AI CCTV Camera Brand",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        streetAddress:
          "7, Arista@Eight Corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
      },
      pricerange: "$$$",
      email: "marketing@arcisai.io",
      telephone: "+91 9687779999",
      openingHours: "Mo,Tu,We,Th,Fr,Sa 09:30-18:30",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.037684",
        longitude: "72.503439",
      },
      image: "https://arcisai.io/images/ArcisAi.png",
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url: "https://arcisai.io/",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes us different from traditional CCTV systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have combined EdgeAI, CloudAI and GPT-powered interaction in one surveillance platform - offering real-time alerts, smart playback and intelligent video analysis that traditional systems can’t match.",
          },
        },
        {
          "@type": "Question",
          name: "Is ArcisAI a truly Indian CCTV camera brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ArcisAI is a proudly AI-based Indian CCTV camera company, designed and manufactured by Adiance Technologies, a leading Indian OEM in surveillance and electronics. We’re committed to Make-in-India innovation and real-world protection.",
          },
        },
        {
          "@type": "Question",
          name: "Can I monitor my cameras remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can access live feeds, playback, alerts and more from anywhere using our platform on your desktop or mobile.",
          },
        },
        {
          "@type": "Question",
          name: "Can your cameras be integrated with existing systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our cameras support standard protocols (like ONVIF) and can be integrated with most third-party NVRs, VMS or access control systems.",
          },
        },
      ],
    },
  ],
};
