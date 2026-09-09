export const homeSEO = {
  metatitle: "ArcisAI | BIS-ER & STQC Certified CCTV Cameras in India",
  metadescription:
    "ArcisAI offers BIS-ER & STQC Certified CCTV cameras, STQC Certified VMS in India. Made-in-India surveillance for government, enterprise, office & home use.",
  ogimage: "https://arcisai.io/images/home_hero_1.webp",
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
      // SEO audit fix (2026-09-07, checklist item #41): this used to be a full
      // inline Organization object with its own name/logo/address/foundingDate
      // that conflicted with the canonical Organization schema in app/layout.js
      // (different founding date, different address formatting, no shared @id) —
      // two competing Organization entities for the same page confuses
      // structured-data parsers. Now just references the single canonical
      // Organization by its @id instead of duplicating (and drifting from) its
      // fields.
      publisher: { "@id": "https://arcisai.io/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "Image Link",
        width: 174,
        height: 123,
        caption: "CCTV Camera Brand | AI Security Camera Company",
      },
      inLanguage: "en-US",
    },

    // Organization Schema — REMOVED (SEO audit fix, checklist item #41,
    // 2026-09-07). This used to be a second, standalone Organization entity
    // with its own name ("ArcisAI - AI CCTV Camera Brand" vs. the canonical
    // "ArcisAI"), its own logo, a differently-formatted address, and a
    // conflicting foundingDate ("2003", which is actually Adiance's founding
    // year — layout.js correctly attributes 2003 to the parentOrganization and
    // 2021 to ArcisAI itself). Live-verified: this produced two competing
    // Organization JSON-LD blocks on the homepage alongside the canonical one
    // in app/layout.js (which has a shared @id, the correct legalName,
    // certifications, and areaServed). Removed the duplicate; the WebPage
    // schema above now references the canonical Organization by @id instead.

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
      image: "https://arcisai.io/images/ArcisAi.webp",
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
