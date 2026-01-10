export const EventData = {
  hero: [
    {
      id: 1,
      heading: "Connecting Smarter, Safer and Across Industries",
      description:
        "We actively participate in leading security and technology expos to engage with partners, integrators and industry innovators. These platforms help us collaborate stronger, showcase our AI surveillance breakthroughs and build meaningful connections.",
      d_image: "/images/event_home_main.png",
      m_image: "/images/event_home_main_mobile.png",
      logos: [
        {
          name: "IFSEC",
          image: "/images/event_home_logo1.png",
        },
        {
          name: "SEMICON INDIA",
          image: "/images/event_home_logo2.png", // Placeholder - replace with actual logo
        },
        {
          name: "Smart Tech",
          image: "/images/event_home_logo3.png", 
      ],
      sectionProps: {
        desktop: {
          marginTop: "-2%",
        },
        mobile: {
          marginTop: "-25%",
        },
      },
      textProps: {
        desktop: {
          textColor: "white",
          alignItems: "center",
          textAlign: "center",
          top: "30%",
          left: "0%",
          width: "100%",
        },
        mobile: {
          textColor: "white",
          alignItems: "center",
          textAlign: "center",
          top: "120%",
          left: "0%",
          width: "100%",
          fontSize: "30px",
        },
      },
      headingProps: {
        desktop: {
          fontSize: "50px",
          lineHeight: "76px",
          fontWeight: "400",
          maxWidth: "1400px",
        },
        mobile: {
          fontSize: "28px",
          lineHeight: "36px",
          fontWeight: "400",
          maxWidth: "80%",
        },
      },
      descriptionProps: {
        desktop: {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
          maxWidth: "2000px",
          padding: "1px 2px",
        },
        mobile: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "100%",

          padding: "12px 6px",
        },
      },
      logoProps: {
        desktop: {
          spacing: "16px",
          boxWidth: "130px",
          boxHeight: "130px",
          boxPadding: "2px 2px",
        },
        mobile: {
          spacing: "12px",
          boxWidth: "107.39px",
          boxHeight: "107.39px",
          boxPadding: "2px 2px",
        },
      },
    },
  ],
  carousel: {
    sectionTitle: "A Glimpse into Past Events", // Shared heading for carousel
    logo: "/images/event_home_logo1.png", // Shared logo for all carousel slides
    description:
      "Explore how ArcisAI showcased its next-gen AI CCTV cameras, EdgeAI, CloudAI, GenAI technologies and enterprise surveillance solutions at IFSEC India 2025. From product unveilings to live demos and industry interactions, get the full highlight of ArcisAI's presence at this premier security exhibition.",
    detailsLink: "/event/ifsec-india-2025", // Shared button link for all carousel slides
    events: [
      {
        id: 1,
        title: "IFSEC India 2025",
        eventName: "IFSEC",
        image: "/images/event_carousel_1.png",
        mobileImage: "/images/event_carousel_mobile_1.png",
      },
      {
        id: 2,
        title: "Smart Tech Expo 2024",
        eventName: "Smart Tech",
        image: "/images/event_carousel_2.png",
        mobileImage: "/images/event_carousel_mobile_2.png",
      },
      {
        id: 3,
        title: "Event 3",
        eventName: "Event 3",
        image: "/images/event_carousel_3.png",
        mobileImage: "/images/event_carousel_mobile_3.png",
      },
      {
        id: 4,
        title: "Event 4",
        eventName: "Event 4",
        image: "/images/event_carousel_4.png",
        mobileImage: "/images/event_carousel_mobile_4.png",
      },
    ],
    bgColor: "#000",
    headingProps: {
      desktop: {
        fontSize: "48px",
        fontWeight: "400",
        color: "white",
        marginBottom: "24px", // Reduced from 48px
      },
      mobile: {
        fontSize: "32px",
        fontWeight: "400",
        color: "white",
        marginBottom: "20px", // Reduced from 38px
      },
    },
    descriptionProps: {
      desktop: {
        fontSize: "16px",
        lineHeight: "22px",
        color: "white",
        noOfLines: 2,
      },
      mobile: {
        fontSize: "12px",
        lineHeight: "18px",
        color: "white",
        noOfLines: 3,
      },
    },
    logoProps: {
      desktop: {
        boxBg: "white",
        boxPadding: "12px",
        logoHeight: "80px",
        logoWidth: "80px",
      },
      mobile: {
        boxBg: "white",
        boxPadding: "8px",
        logoHeight: "107px",
        logoWidth: "107px",
      },
    },
    buttonProps: {
      desktop: {
        width: "170px",
        height: "40px",
        textColor: "white",
        borderColor: "white",
        bgColor: "#454545",
        hoverBorderColor: "#A4FF79",
        hoverTextColor: "#A4FF79",
      },
      mobile: {
        width: "160px",
        height: "40px",
        textColor: "white",
        borderColor: "white",
        bgColor: "#454545",
        hoverBorderColor: "#A4FF79",
        hoverTextColor: "#A4FF79",
      },
    },
  },
  cta: {
    data: "Discover the Future of AI Surveillance with ArcisAI",
    buttonText: "Schedule a Demo",
    d_image: "/images/abd_cta.png",
    m_Image: "/images/whyarcis_cta_mobile.png",
    link: "/contact-us",
    textPosition: {
      desktop: { top: "50%", left: "0%" }, // Changed to 50%
      mobile: { top: "50%", left: "0%" }, // Changed to 50%
    },

    buttonProps: {
      desktop: {
        textColor: "black",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "",
        height: "",
      },
      mobile: {
        textColor: "black",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "200px",
        height: "",
      },
    },
    textProps: {
      desktop: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        alignItems: "center", // Changed to center
        textAlign: "center",
        width: "80%",
      },
      mobile: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        alignItems: "center", // Changed to center
        textAlign: "center", // Changed to center
        width: "80%",
      },
    },
  },
};

export const IFSECData = {
  heroCarousel: {
    heading:
      "ArcisAI's AI-Powered Surveillance Innovations Captured Attention at IFSEC India 2025 Exhibition",
    description:
      "ArcisAI showcased its next-generation AI CCTV Camera ecosystem at IFSEC India 2025, held at Bharat Mandapam, New Delhi, from 11-13 December 2025. As one of India's fastest-growing AI CCTV camera brands, ArcisAI demonstrated a full lineup of Edge AI CCTV cameras, CloudAI surveillance, smart VMS, Arcis Bridging Device, enterprise-grade AI, NVRs, and ArcisGPT — the first Surveillance AI assistant. Visitors from across India explored how ArcisAI's intelligent surveillance solutions help businesses enhance security, improve response times, enable proactive threat detection and unlock powerful analytics.",
    logo: "/images/IFSEC_logo.png",
    images: [
      {
        id: 1,
        src: "/images/IFSEC_carousel_1.png",
        alt: "IFSEC India 2025 - ArcisAI Booth",
      },
      {
        id: 2,
        src: "/images/IFSEC_carousel_2.png",
        alt: "IFSEC India 2025 - Product Demo",
      },
      {
        id: 3,
        src: "/images/IFSEC_carousel_3.png",
        alt: "IFSEC India 2025 - Visitor Engagement",
      },
      {
        id: 4,
        src: "/images/IFSEC_carousel_4.png",
        alt: "IFSEC India 2025 - Team",
      },
    ],
    headingProps: {
      desktop: {
        fontSize: "48px",
        lineHeight: "56px",
        fontWeight: "700",
        textAlign: "left",
      },
      mobile: {
        fontSize: "28px",
        lineHeight: "36px",
        fontWeight: "700",
        textAlign: "left",
      },
    },
    descriptionProps: {
      desktop: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
      },
      mobile: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "400",
      },
    },
    logoProps: {
      desktop: {
        logoHeight: "157px",
        logoWidth: "337px",
        boxPadding: "0px",
      },
      mobile: {
        logoHeight: "150px",
        logoWidth: "150px",
        boxPadding: "0px",
      },
    },
  },

  information: {
    sections: [
      {
        heading: "A Remarkable Three-Day Experience at IFSEC India Expo 2025",
        description:
          "Across all three days, the ArcisAI booth remained active with distributors, system integrators, enterprise visitors and technology enthusiasts. Attendees explored how AI-driven CCTV systems improve threat detection, reduce response time and deliver deeper insights through real-time analytics. The IFSEC India 2025 Exhibition helped visitors understand the growing need for advanced surveillance tailored for Indian homes, retail environments, campuses, factories and warehouses.",
        headingProps: {
          desktop: {
            fontSize: "50px",
            lineHeight: "58px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "700",
            textAlign: "center",
          },
        },
        descriptionProps: {
          desktop: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "400",
            textAlign: "center",
          },
        },
      },
      {
        heading:
          "Showcasing ArcisAI's Complete Next-Gen Surveillance Ecosystem",
        description: [
          "ArcisAI showcased its full next-gen surveillance ecosystem, featuring the S-Series EdgeAI cameras, Eco-Series models, and the complete Dome, Bullet, PTZ, and Baby PTZ range available in both 3MP and 5MP variants. The exhibition also highlighted the ArcisAI NVR lineup, built for high-performance recording, seamless AI event management, and smooth compatibility with AI CCTV camera solutions used across commercial, industrial, and smart-city environments.",
          "Live demonstrations allowed visitors to experience real-time Edge AI detections processed directly on the camera, along with cloud-ready analytics powered by ArcisAI CloudAI. The conversational monitoring capabilities of ArcisGPT drew strong attention for transforming traditional CCTV systems into smart, interactive security assistants.",
          "",
          "ArcisAI’s STQC-certified cloud VMS was presented as the central command platform, showing how easily multi-location setups, AI alerts, playback, and device control can be managed from a single interface. Another highlight was the ABD integration device, which enables existing third-party CCTV cameras to join the ArcisAI ecosystem without requiring any hardware replacement, making it a practical upgrade path for businesses looking to adopt advanced AI-based security camera solutions.",
        ],
        headingProps: {
          desktop: {
            fontSize: "50px",
            lineHeight: "58px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "700",
            textAlign: "center",
          },
        },
        descriptionProps: {
          desktop: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "400",
            textAlign: "center",
          },
        },
      },
      {
        heading:
          "Introducing Smarter Monitoring With ArcisAI's Expanded Surveillance Lineup",
        description: [
          "At IFSEC India, ArcisAI unveiled a broader surveillance ecosystem designed to give businesses more intelligent, unified and scalable monitoring options. The ArcisAI VMS continued to attract attention for its simplified multi-location control, STQC-ready framework and real-time AI alerts, but the spotlight this year shifted to the newly introduced hardware additions that extend the ArcisAI monitoring stack.",
          "Enterprise visitors explored the upgraded ArcisAI NVR solutions built for dependable AI event handling, long-duration recording and effortless integration with both AI CCTV cameras and conventional IP cameras. The NVR range demonstrated how businesses can achieve smoother playback, safer storage and centralised management across retail, industrial and smart-infrastructure setups.",
          "Alongside the NVR lineup, ArcisAI also introduced new Eco-Series cameras, 3MP/5MP video variants, compact Baby PTZ models and the ABD integration device—enabling existing third-party CCTV installations to transition into a modern AI-powered surveillance system without hardware replacement. Together, these additions strengthened ArcisAI’s position as a leading Indian CCTV camera brand delivering end-to-end smart surveillance solutions.",
        ],
        headingProps: {
          desktop: {
            fontSize: "50px",
            lineHeight: "44px",
            fontWeight: "700",
            textAlign: "center",
          },
          mobile: {
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "700",
            textAlign: "center",
          },
        },
        descriptionProps: {
          desktop: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "400",
            textAlign: "center",
          },
        },
      },
      {
        heading: "Why IFSEC 2025 India Was a Milestone for ArcisAI",
        description:
          "Participation at the IFSEC India 2025 Expo established ArcisAI as a future-forward surveillance technology provider. Visitors recognized the brand’s commitment to delivering powerful, scalable and Made-in-India security solutions. The event strengthened ArcisAI’s position as one of the top AI CCTV camera companies in India.",
        headingProps: {
          desktop: {
            fontSize: "50px",
            lineHeight: "60px",
            fontWeight: "700",
            textAlign: "center",
          },
          mobile: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "700",
            textAlign: "center",
          },
        },
        descriptionProps: {
          desktop: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            textAlign: "center",
          },
          mobile: {
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "400",
            textAlign: "center",
          },
        },
      },
    ],
  },
  imageGallery: {
    title: "Image Gallery",
    images: [
      {
        src: "/images/IFSEC_gallery_1.png",
        alt: "IFSEC India 2025 - Booth View",
      },
      {
        src: "/images/IFSEC_gallery_2.png",
        alt: "IFSEC India 2025 - Team Photo",
      },
      {
        src: "/images/IFSEC_gallery_3.png",
        alt: "IFSEC India 2025 - Visitor Interaction",
      },
    ],
    titleProps: {
      desktop: {
        fontSize: "48px",
        lineHeight: "56px",
        fontWeight: "700",
        textAlign: "center",
      },
      mobile: {
        fontSize: "32px",
        lineHeight: "40px",
        fontWeight: "700",
        textAlign: "center",
      },
    },
  },
  cta: {
    data: "Explore Our AI Surveillance Solutions",
    buttonText: "View Products",
    d_image: "/images/abd_cta.png",
    m_Image: "/images/whyarcis_cta_mobile.png",
    link: "/products",
    textPosition: {
      desktop: { top: "50%", left: "0%" },
      mobile: { top: "50%", left: "0%" },
    },
    buttonProps: {
      desktop: {
        textColor: "black",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "200px",
        height: "50px",
      },
      mobile: {
        textColor: "black",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "160px",
        height: "40px",
      },
    },
    textProps: {
      desktop: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        alignItems: "center",
        textAlign: "center",
        width: "80%",
      },
      mobile: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        alignItems: "center",
        textAlign: "center",
        width: "90%",
      },
    },
  },
};
