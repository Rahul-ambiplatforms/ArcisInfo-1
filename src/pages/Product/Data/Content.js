import React from "react";
import { ReactComponent as FeatureIcon1 } from "../../../Components/Icons/product_all_camerafeatures_1.svg";
import { ReactComponent as FeatureIcon2 } from "../../../Components/Icons/product_all_camerafeatures_2.svg";
import { ReactComponent as FeatureIcon3 } from "../../../Components/Icons/product_bullet_temperproof.svg";
import { ReactComponent as FeatureIcon4 } from "../../../Components/Icons/product_bullet_talksvg.svg";
import { ReactComponent as FeatureIcon5 } from "../../../Components/Icons/nvr_features_4.svg";
import { ReactComponent as FeatureIcon6 } from "../../../Components/Icons/product_bullet_nightvision.svg";
import { ReactComponent as FeatureIcon7 } from "../../../Components/Icons/product_bullet_colornightvision.svg";
import { ReactComponent as FeatureIcon8 } from "../../../Components/Icons/product_bullet_highresimaging.svg";
import { ReactComponent as FeatureIcon9 } from "../../../Components/Icons/product_all_camerafeatures_9.svg";
import { ReactComponent as FeatureIcon10 } from "../../../Components/Icons/product_bullet_waterproof.svg";
import { ReactComponent as FeatureIcon11 } from "../../../Components/Icons/product_bullet_plugandplaysetup.svg";
import { ReactComponent as FeatureIcon12 } from "../../../Components/Icons/product_bullet_quality.svg";
import { ReactComponent as FeatureIcon13 } from "../../../Components/Icons/product_all_camerafeatures_13.svg";
import { ReactComponent as FeatureIcon14 } from "../../../Components/Icons/product_all_camerafeatures_14.svg";
import { ReactComponent as FeatureIcon15 } from "../../../Components/Icons/product_all_camerafeatures_15.svg";
import { ReactComponent as FeatureIcon16 } from "../../../Components/Icons/product_all_camerafeatures_16.svg";
import { ReactComponent as WhyChooseIcon1 } from "../../../Components/Icons/product_all_whychoose_1.svg";
import { ReactComponent as WhyChooseIcon2 } from "../../../Components/Icons/product_all_whychoose_2.svg";
import { ReactComponent as WhyChooseIcon3 } from "../../../Components/Icons/product_all_whychoose_3.svg";
import { ReactComponent as WhyChooseIcon4 } from "../../../Components/Icons/product_all_whychoose_4.svg";
import { ReactComponent as WhyChooseIcon5 } from "../../../Components/Icons/product_all_whychoose_5.svg";
import { ReactComponent as WhyChooseIcon6 } from "../../../Components/Icons/product_all_whychoose_6.svg";
import { ReactComponent as WhyChooseIcon7 } from "../../../Components/Icons/product_all_whychoose_7.svg";
import { ReactComponent as WhyChooseIcon8 } from "../../../Components/Icons/product_all_whychoose_8.svg";
import InnovationIcon1 from "../../../Components/Icons/product_bullet_innovation_madeinIndia.svg";
import InnovationIcon2 from "../../../Components/Icons/product_bullet_quality.svg";
import InnovationIcon3 from "../../../Components/Icons/product_bullet_plugandplaysetup.svg";
import InnovationIcon4 from "../../../Components/Icons/product_bullet_performance.svg";
import InnovationIcon5 from "../../../Components/Icons/product_bullet_costeffective.svg";
import InnovationIcon6 from "../../../Components/Icons/product_bullet_variants.svg";
import InnovationIcon7 from "../../../Components/Icons/product_dome_footage.svg";
import InnovationIcon8 from "../../../Components/Icons/product_dome_location.svg";

export const Product = {
  //----------S SERIES----------\\
  aibulletcctvcamera: {
    downloadLink: "/pdfs/S Series Bullet 4G.pdf",
    hero: [
      {
        title: "AI Bullet CCTV Camera",
        image: "/images/bullet_hero.png",
        d_image: "/images/product_bullet_main.png",
        m_image: "/images/product_bullet_main_mobile.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-5%",
          },
          mobile: {
            marginTop: "",
          },
        },
        textProps: {
          desktop: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
          mobile: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
        },
      },
    ],
    features: {
      d_image: "/images/product_feature_bullet_bg.png",
      m_image: "/images/product_feature_bullet_bg_mobile.png",
      heading: "AI Bullet CCTV Cameras – Built for Reliable Outdoor Security",
      description:
        "The ArcisAI’s Bullet Security Camera is an advanced outdoor security camera built for homes, shops, offices and businesses. With powerful EdgeAI analytics, 2K HD clarity, and event-based intelligent alerts, it ensures proactive monitoring and secure visibility. Designed for fast plug-n-play setup, 24×7 reliability, and high-quality surveillance, this is your ultimate choice for smart protection.",
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "1%",
          bigscreen: "1%",
        },
        featuresMarginTop: {
          mobile: "85%",
          tablet: "55%",
          laptop: "60%",
          bigscreen: "60%",
        },
        alignment: "center",
        descriptionColor: "white",
        featureColor: "white",
      },
      featuresList: [
        { name: "3MP HD Resolution", icon: <FeatureIcon1 /> },
        { name: "Dual-band Wi-Fi (2.4GHz / 5GHz)", icon: <FeatureIcon2 /> },
        { name: "EdgeAI Technology", icon: <FeatureIcon3 /> },
        { name: "Two-Way Audio", icon: <FeatureIcon4 /> },
        { name: "Active Defense", icon: <FeatureIcon5 /> },
        { name: "Color Night Vision", icon: <FeatureIcon6 /> },
        { name: "Live View with 10x Digital Zoom", icon: <FeatureIcon7 /> },
        { name: "Auto Tracking", icon: <FeatureIcon8 /> },
        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        {
          name: "Storage: MicroSD (up to 256GB) + Arcis-Cloud Backup",
          icon: <FeatureIcon10 />,
        },
        { name: "IP66 Weatherproof Design", icon: <FeatureIcon11 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon12 /> },
        { name: "Instant AI Alerts On Mobile", icon: <FeatureIcon13 /> },
        { name: "Multi-User Secure Access", icon: <FeatureIcon14 /> },
      ],
    },
    comparisonData: {
      d_image: "/images/product_cameracomparision.png",
      m_image: "/images/product_cameracomparision_mobile.png",
      heading: "Discover Our Smart CCTV Bullet Camera Range",
      headers: ["Category", "Bullet 4G", "Bullet Wi-Fi", "Bullet PoE"],
      rows: [
        {
          label: "Primary Connectivity",
          values: [
            "4G SIM (LTE CAT1)",
            "Dual-Band Wi-Fi 2.4GHz/5GHz",
            "Wired LAN RJ-45",
          ],
        },
        { label: "SIM Slot", values: ["Yes", "No", "No"] },
        { label: "Wi-Fi Support", values: ["No", "Yes", "No"] },
        {
          label: "Ethernet Port",
          values: ["No (optional fallback only?)", "No", "Yes – 10/100 Mbps"],
        },
        {
          label: "Power Method",
          values: ["DC 12V 1A", "DC 12V 1A", "PoE / DC 12V 1A"],
        },
        {
          label: "Installation Difficulty",
          values: ["Plug-N-Play", "Plug-N-Play", "Plug-N-Play"],
        },
        {
          label: "Cabling Required",
          values: [
            "No cable required",
            "Only power cable",
            "Single cable for power + network",
          ],
        },
        {
          label: "Monthly Cost",
          values: [
            "SIM recharge needed",
            "No recurring cost",
            "No recurring cost",
          ],
        },
        {
          label: "Full Details",
          values: ["Download PDF", "Download PDF", "Download PDF"],
          links: [
            "/pdfs/S Series Bullet 4G.pdf",
            "/pdfs/S Series Bullet WiFi.pdf",
            "/pdfs/S Series Bullet POE.pdf",
          ],
          isButton: true,
        },
      ],
    },
    surveillanceStack: {
      mainHeading: "AI Security Stack for Modern Surveillance",
      description:
        "Lead every moment with our AI PTZ camera — intelligent surveillance designed for critical outdoor security.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "8 Powerful real-time detection on camera — humans, intrusions, line crossing & more.",
          image: "/images/solution_surveillance_1.png",
          link: "/solution/edge-ai",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI features are available as modular paid add-ons. Users can enable specific analytics packs as required.",
          image: "/images/solution_surveillance_1.png",
          link: "/solution/cloud-ai",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "Manage multiple locations, cameras, alerts & users through a unified government-certified platform.",
          image: "/images/solution_surveillance_1.png",
          link: "/arcis-vms",
        },
        {
          heading: "ArcisGPT",
          description:
            "Search video by asking questions — e.g., “Show events where a person entered after 10 PM”.",
          image: "/images/solution_surveillance_1.png",
          link: "/solution/generative-ai",
        },
        {
          heading: "Cloud Storage",
          description:
            "Secure video retention online to protect footage even if the device or SD card is damaged.",
          image: "/images/solution_surveillance_1.png",
          link: "/",
        },
      ],
    },
    industries: {
      heading: "AI Bullet Security Cameras Built for Every Industry",
      items: [
        {
          name: "Manufacturing",
          description:
            "Monitor lines and yards with on-camera AI for safety, PPE, and assets. Resilient 4G keeps alerts and evidence flowing even during LAN outages.",
          image: "/images/product_productindustries_1.png", // Placeholder
        },
        {
          name: "Smart Cities",
          description:
            "Real-time visibility for traffic, crowds, and incidents, even where wired links can't exist. Deploy fast across intersections and plazas with dependable 4G uptime.",
          image: "/images/product_productindustries_2.png", // Placeholder
        },
        {
          name: "Retail & Malls",
          description:
            "Track movement and footfall while securing entrances, aisles, and parking. Always-on 4G keeps monitoring active during outages or store renovations.",
          image: "/images/product_productindustries_3.png", // Placeholder
        },
        {
          name: "Construction Sites",
          description:
            "Plug-and-play mobility for large or temporary sites to watch workers, materials, and perimeters. Relocate easily as the site evolves – no fixed internet required.",
          image: "/images/product_productindustries_4.png", // Placeholder
        },
        {
          name: "Transportation & Highways",
          description:
            "Ideal for highways, toll plazas, and transit hubs to flag speed, vehicles and incidents. Flexible 4G placement enables rapid coverage where power and poles allow.",
          image: "/images/product_productindustries_5.png", // Placeholder
        },
        {
          name: "Industrial Plants & Warehouses",
          description:
            "Detects unauthorized motion, missing objects, and PPE issues in real time. Strengthen safety audits and reduce downtime with dependable, independent connectivity.",
          image: "/images/product_productindustries_6.png", // Placeholder
        },
        {
          name: "Banks & ATMs",
          description:
            "Identify suspicious behavior and loitering patterns with instant alerts. Even if local networks fail, 4G keeps evidence capture and notifications running.",
          image: "/images/product_productindustries_7.png", // Placeholder
        },
        {
          name: "Educational Campuses",
          description:
            "Protect gates, pathways, and parking with human/vehicle detection and smart alerts. Central teams can review events remotely without campus Wi-Fi dependencies.",
          image: "/images/product_productindustries_8.png", // Placeholder
        },
        {
          name: "Healthcare Facilities",
          description:
            "Guard restricted zones, pharmacies, and entrances with intelligent detection. Maintain secure evidence retention and audit trails with resilient 4G lines.",
          image: "/images/product_productindustries_9.png", // Placeholder
        },
        {
          name: "Residential Societies",
          description:
            "Cover gates, lobbies, and parking without complex cabling. Residents and admins get instant mobile alerts and reliable remote viewing.",
          image: "/images/product_productindustries_10.png", // Placeholder
        },
        {
          name: "Oil Gas & Utilities",
          description:
            "Rugged oversight for substations, wellheads, and service yards. Get real-time anomaly alerts with connectivity independent of local networks.",
          image: "/images/product_productindustries_11.png", // Placeholder
        },
        {
          name: "Offices & Corporate",
          description:
            "Protect entrances, lobbies, parking, and premises with real-time people/vehicle alerts. 4G keeps 4G and branches monitored—even during IT outages.",
          image: "/images/product_productindustries_12.png", // Placeholder
        },
      ],
    },
    whychoosearcis: {
      heading: "Why Should You Choose ArcisAI’s AI Cameras?",
      items: [
        {
          name: "Proven at Scale",
          description:
            "15K+ cameras deployed across 20+ districts - reliability validated in real-world, large-area programs.",
          icon: <WhyChooseIcon1 />,
        },
        {
          name: "After-Sales Support",
          description:
            "Reliable technical assistance, regular updates, and quick issue resolution — ensuring your cameras always perform at their best.",
          icon: <WhyChooseIcon2 />,
        },
        {
          name: "Made in India",
          description:
            "Local manufacturing and QA for faster supply, better cost control and confident after-sales support.",
          icon: <WhyChooseIcon3 />,
        },
        {
          name: "Deep R&D",
          description:
            "In-house AI and firmware teams ship continuous improvements - new models, stronger detections, and secure updates.",
          icon: <WhyChooseIcon4 />,
        },
        {
          name: "End-to-End Platform",
          description:
            "One stack from Edge cameras -> VMS -> Cloud/GenAI -> Reporting, so you get faster rollouts, fewer vendors, and unified governance.",
          icon: <WhyChooseIcon5 />,
        },
        {
          name: "Plug-N-Play Setup",
          description:
            "Scan to pair and go live in minutes - no complex IT, no site-by-site headaches.",
          icon: <WhyChooseIcon6 />,
        },
        {
          name: "8 Built-In AI Detections",
          description:
            "Real-time, on-camera intelligence reduces false alarms and bandwidth while catching what matters instantly.",
          icon: <WhyChooseIcon7 />,
        },
        {
          name: "Remote Access Anywhere",
          description:
            "STQC-certified Cloud VMS and Mobile App deliver secure live view, playback, and control across every site.",
          icon: <WhyChooseIcon8 />,
        },
      ],
    },
    CTAButton: {
      data: "Ready to See ArcisAI in Action? Book a Quick Demo",
      buttonText: "Schedule a Demo",
      d_image: "/images/product_cta_bullet.png",
      m_image: "/images/product_cta_bullet_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "-4%" },
        mobile: { top: "60%", left: "4%" },
      },
      buttonProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "",
          height: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "200px",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
          width: "60%",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-end",
      textAlign: "right",
    },
    FAQsData: {
      heading: "FAQs Related to AI Bullet CCTV",
      data: [
        // {
        //   question: "Which phones work with the AI 4G Bullet CCTV Camera?",
        //   answer: "iOS and Android",
        // },
        {
          question: "Will I get alerts if the CCTV Camera goes offline?",
          answer:
            "Yes - health notifications for offline status, storage full or tamper events.",
        },
        {
          question: "How are firmware updates handled for my AI Bullet Camera?",
          answer:
            "Secure OTA updates; schedule them off-hours and track progress in the app/VMS.",
        },
      ],
    },
  },
  aiptzcctvcamera: {
    downloadLink: "/pdfs/S Series PTZ 4G 5G.pdf",
    hero: [
      {
        title: "AI PTZ CCTV Camera",
        image: "/images/product_ptz_main.png",
        d_image: "/images/product_ptz_main.png",
        m_image: "/images/product_ptz_main_mobile.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-7%",
          },
          mobile: {
            marginTop: "",
          },
        },
        textProps: {
          desktop: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
          mobile: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
        },
      },
    ],
    features: {
      d_image: "/images/product_feature_ptz_bg.png",
      m_image: "/images/product_feature_ptz_bg_mobile.png",
      heading: "AI PTZ CCTV Camera Built for Smarter Outdoor Surveillance",
      description:
        "The ArcisAI S-Series AI PTZ Camera combines intelligent motion tracking, long-range  zoom and 350° coverage, making it ideal for open areas, perimeters, parking zones, factory yards, and large campuses. Powered by built-in EdgeAI analytics, Its 10× digital zoom and auto-tracking ensure every movement is captured with precision, while color night vision maintains clear visibility even in low light. With STQC-certified Cloud VMS, instant mobile alerts, and two-way communication, it provides complete control, clarity and command for modern outdoor security environments.",
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "1%",
          bigscreen: "1%",
        },
        featuresMarginTop: {
          mobile: "70%",
          tablet: "55%",
          laptop: "10%",
          bigscreen: "10%",
        },
        alignment: "center",
        descriptionColor: "black",
        featureColor: "black",
      },
      featuresList: [
        { name: "3MP HD Resolution", icon: <FeatureIcon1 /> },
        { name: "4G Network Connectivity", icon: <FeatureIcon2 /> },
        { name: "EdgeAI Technology", icon: <FeatureIcon3 /> },
        { name: "Two-Way Audio", icon: <FeatureIcon4 /> },
        { name: "Active Defense", icon: <FeatureIcon5 /> },
        { name: "Color Night Vision", icon: <FeatureIcon6 /> },
        { name: "Live View with 10x Digital Zoom", icon: <FeatureIcon7 /> },
        { name: "Auto Tracking", icon: <FeatureIcon8 /> },
        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        {
          name: "Storage: MicroSD (up to 256GB) + Arcis-Cloud Backup",
          icon: <FeatureIcon10 />,
        },
        { name: "IP66 Weatherproof Design", icon: <FeatureIcon11 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon12 /> },
        { name: "Instant AI Alerts On Mobile", icon: <FeatureIcon13 /> },
        { name: "Multi-User Secure Access", icon: <FeatureIcon14 /> },
        { name: "350° Panoramic View", icon: <FeatureIcon15 /> },
      ],
    },
    comparisonData: {
      heading: "Explore Our AI-Powered PTZ Camera Range",
      d_image: "/images/product_cameracomparision.png",
      m_image: "/images/product_cameracomparision_mobile.png",
      headers: ["Category", "PTZ 4G", "PTZ Wi-Fi", "PTZ PoE"],
      rows: [
        {
          label: "Primary Connectivity",
          values: [
            "4G SIM (LTE CAT1)",
            "Dual-Band Wi-Fi 2.4GHz/5GHz",
            "Wired LAN RJ-45",
          ],
        },
        { label: "SIM Slot", values: ["Yes", "No", "No"] },
        { label: "Wi-Fi Support", values: ["No", "Yes", "No"] },
        {
          label: "Ethernet Port",
          values: ["No (optional fallback only?)", "No", "Yes – 10/100 Mbps"],
        },
        {
          label: "Power Method",
          values: ["DC 12V 1A", "DC 12V 1A", "PoE / DC 12V 1A"],
        },
        {
          label: "Installation Difficulty",
          values: ["Plug-N-Play", "Plug-N-Play", "Plug-N-Play"],
        },
        {
          label: "Cabling Required",
          values: [
            "No cable required",
            "Only power cable",
            "Single cable for power + network",
          ],
        },
        {
          label: "Monthly Cost",
          values: [
            "SIM recharge needed",
            "No recurring cost",
            "No recurring cost",
          ],
        },
        {
          label: "Full Details",
          values: ["Download PDF", "Download PDF", "Download PDF"],
          links: [
            "/pdfs/S Series PTZ 4G 5G.pdf",
            "/pdfs/S Series PTZ WiFi.pdf",
            "/pdfs/S Series PTZ POE.pdf",
          ],
          isButton: true,
        },
      ],
    },
    industries: {
      heading:
        "AI PTZ Cameras Built for Wide-Area Surveillance Across Industries",
      items: [
        {
          name: "Manufacturing",
          description:
            "Monitor lines and yards with on-camera AI for safety, PPE, and assets. Resilient 4G keeps alerts and evidence flowing even during LAN outages.",
          image: "/images/product_productindustries_1.png", // Placeholder
        },
        {
          name: "Smart Cities",
          description:
            "Real-time visibility for traffic, crowds, and incidents, even where wired links can't exist. Deploy fast across intersections and plazas with dependable 4G uptime.",
          image: "/images/product_productindustries_2.png", // Placeholder
        },
        {
          name: "Retail & Malls",
          description:
            "Track movement and footfall while securing entrances, aisles, and parking. Always-on 4G keeps monitoring active during outages or store renovations.",
          image: "/images/product_productindustries_3.png", // Placeholder
        },
        {
          name: "Construction Sites",
          description:
            "Plug-and-play mobility for large or temporary sites to watch workers, materials, and perimeters. Relocate easily as the site evolves – no fixed internet required.",
          image: "/images/product_productindustries_4.png", // Placeholder
        },
        {
          name: "Transportation & Highways",
          description:
            "Ideal for highways, toll plazas, and transit hubs to flag speed, vehicles and incidents. Flexible 4G placement enables rapid coverage where power and poles allow.",
          image: "/images/product_productindustries_5.png", // Placeholder
        },
        {
          name: "Industrial Plants & Warehouses",
          description:
            "Detects unauthorized motion, missing objects, and PPE issues in real time. Strengthen safety audits and reduce downtime with dependable, independent connectivity.",
          image: "/images/product_productindustries_6.png", // Placeholder
        },
        {
          name: "Banks & ATMs",
          description:
            "Identify suspicious behavior and loitering patterns with instant alerts. Even if local networks fail, 4G keeps evidence capture and notifications running.",
          image: "/images/product_productindustries_7.png", // Placeholder
        },
        {
          name: "Educational Campuses",
          description:
            "Protect gates, pathways, and parking with human/vehicle detection and smart alerts. Central teams can review events remotely without campus Wi-Fi dependencies.",
          image: "/images/product_productindustries_8.png", // Placeholder
        },
        {
          name: "Healthcare Facilities",
          description:
            "Guard restricted zones, pharmacies, and entrances with intelligent detection. Maintain secure evidence retention and audit trails with resilient 4G lines.",
          image: "/images/product_productindustries_9.png", // Placeholder
        },
        {
          name: "Residential Societies",
          description:
            "Cover gates, lobbies, and parking without complex cabling. Residents and admins get instant mobile alerts and reliable remote viewing.",
          image: "/images/product_productindustries_10.png", // Placeholder
        },
        {
          name: "Oil Gas & Utilities",
          description:
            "Rugged oversight for substations, wellheads, and service yards. Get real-time anomaly alerts with connectivity independent of local networks.",
          image: "/images/product_productindustries_11.png", // Placeholder
        },
        {
          name: "Offices & Corporate",
          description:
            "Protect entrances, lobbies, parking, and premises with real-time people/vehicle alerts. 4G keeps 4G and branches monitored—even during IT outages.",
          image: "/images/product_productindustries_12.png", // Placeholder
        },
      ],
    },
    surveillanceStack: {
      mainHeading:
        "Complete AI Security Stack for Modern Video Surveillance Need",
      description:
        "Lead every moment with our AI PTZ CCTV cameras — intelligent surveillance designed for critical outdoor security.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "AI runs directly on the camera for faster, bandwidth-free event detection, tracking, and classification.",
          image: "/images/product_ptz_surveillance_1.png",
          link: "/solution/edge-ai",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI is an optional upgrade — choose and pay for deeper analytics beyond basic alerts, including reports and trend insights.",
          image: "/images/product_ptz_surveillance_1.png",
          link: "/solution/cloud-ai",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "Securely manage and monitor live feeds, playback, and alerts from a unified ArcisAI dashboard.",
          image: "/images/product_ptz_surveillance_1.png",
          link: "/arcis-vms",
        },
        {
          heading: "ArcisGPT",
          description:
            "Your AI-powered assistant for smart video search — ask natural questions like “Show vehicle movement at Gate 2 last night” and get instant clips.",
          image: "/images/product_ptz_surveillance_1.png",
          link: "/solution/generative-ai",
        },
        {
          heading: "Cloud Storage",
          description:
            "Encrypted cloud storage with flexible retention and retrieval options for compliance and evidence management.",
          image: "/images/product_ptz_surveillance_1.png",
          link: "/",
        },
      ],
    },
    whychoosearcis: {
      heading: "Why Should You Choose ArcisAI’s AI Cameras?",
      items: [
        {
          name: "Proven at Scale",
          description:
            "15K+ cameras deployed across 20+ districts - reliability validated in real-world, large-area programs.",
          icon: <WhyChooseIcon1 />,
        },
        {
          name: "After-Sales Support",
          description:
            "Reliable technical assistance, regular updates, and quick issue resolution — ensuring your cameras always perform at their best.",
          icon: <WhyChooseIcon2 />,
        },
        {
          name: "Made in India",
          description:
            "Local manufacturing and QA for faster supply, better cost control and confident after-sales support.",
          icon: <WhyChooseIcon3 />,
        },
        {
          name: "Deep R&D",
          description:
            "In-house AI and firmware teams ship continuous improvements - new models, stronger detections, and secure updates.",
          icon: <WhyChooseIcon4 />,
        },
        {
          name: "End-to-End Platform",
          description:
            "One stack from Edge cameras -> VMS -> Cloud/GenAI -> Reporting, so you get faster rollouts, fewer vendors, and unified governance.",
          icon: <WhyChooseIcon5 />,
        },
        {
          name: "Plug-N-Play Setup",
          description:
            "Scan to pair and go live in minutes - no complex IT, no site-by-site headaches.",
          icon: <WhyChooseIcon6 />,
        },
        {
          name: "8 Built-In AI Detections",
          description:
            "Real-time, on-camera intelligence reduces false alarms and bandwidth while catching what matters instantly.",
          icon: <WhyChooseIcon7 />,
        },
        {
          name: "Remote Access Anywhere",
          description:
            "STQC-certified Cloud VMS and Mobile App deliver secure live view, playback, and control across every site.",
          icon: <WhyChooseIcon8 />,
        },
      ],
    },
    CTAButton: {
      data: "AI-Powered PTZ Camera - Top Security CCTV Camera for Large-Area Monitoring",
      buttonText: "Book a Live Demo",
      d_image: "/images/product_cta_ptz.png",
      m_image: "/images/product_cta_ptz_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "-6%" },
        mobile: { top: "65%", left: "-5%" },
      },
      buttonProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "",
          height: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "200px",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "65%",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "100%",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-end",
      textAlign: "right",
    },
    FAQsData: {
      heading: "Frequently Asked Questions Related to AI PTZ CCTV",
      data: [
        {
          question: "Can this AI PTZ camera be used for outdoor security?",
          answer:
            "Absolutely. It is built for rugged outdoor deployment, with weather-resistant housing and 350° surveillance coverage for large areas.",
        },
        {
          question: "Can I control the PTZ remotely?",
          answer:
            "Yes. Get 350° PTZ control, auto-tracking, zoom-in on events, and patrol routes via the ArcisAI app or Web VMS.",
        },
        {
          question: "What does ArcisGPT do with this camera?",
          answer:
            "ArcisGPT enables natural-language video search & smart incident insights. Example: “Show me unauthorized entry at Gate B last night.”",
        },
      ],
    },
  },
  aidomecctvcamera: {
    hero: [
      {
        title: "AI Dome CCTV Camera",
        image: "/images/product_dome_main.png",
        d_image: "/images/product_dome_main.png",
        m_image: "/images/product_dome_main_mobile.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-5%",
          },
          mobile: {
            marginTop: "-50%",
          },
        },
        textProps: {
          desktop: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
          mobile: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
        },
      },
    ],
    features: {
      d_image: "/images/product_feature_dome_bg.png",
      m_image: "/images/product_feature_dome_bg_mobile.png",
      heading: "AI Dome CCTV Camera — Built for Smarter Indoor Security",
      description:
        "The ArcisAI S-Series dome blends into ceilings for discreet, wide coverage in lobbies, corridors, cash counters, classrooms, meeting rooms and more places. Crisp 2K video with balanced exposure keeps faces and badges clear, while the low-profile design hides the viewing angle and deters tampering. With built-in on-device AI (8 detections, including people/face and line-cross/zone intrusion), plus silent IR and instant alerts with STQC-certified Cloud VMS, it delivers reliable, unobtrusive indoor security.",
      styles: {
        contentMarginTop: {
          mobile: "85%",
          tablet: "35%",
          laptop: "40%",
          bigscreen: "40%",
        },
        featuresMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "5%",
          bigscreen: "5%",
        },
        alignment: "center",
        descriptionColor: "white",
        featureColor: "white",
      },
      featuresList: [
        { name: "3MP HD Resolution", icon: <FeatureIcon1 /> },
        { name: "Dual-band Wi-Fi (2.4GHz / 5GHz)", icon: <FeatureIcon2 /> },
        { name: "EdgeAI Technology", icon: <FeatureIcon3 /> },
        { name: "Two-Way Audio", icon: <FeatureIcon4 /> },
        { name: "Active Defense", icon: <FeatureIcon5 /> },
        { name: "Color Night Vision", icon: <FeatureIcon6 /> },
        { name: "Live View with 10x Digital Zoom", icon: <FeatureIcon7 /> },
        { name: "Auto Tracking", icon: <FeatureIcon8 /> },
        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        {
          name: "Storage: MicroSD (up to 256GB) + Arcis-Cloud Backup",
          icon: <FeatureIcon10 />,
        },
        { name: "IP66 Weatherproof Design", icon: <FeatureIcon11 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon12 /> },
        { name: "Instant AI Alerts On Mobile", icon: <FeatureIcon13 /> },
        { name: "Multi-User Secure Access", icon: <FeatureIcon14 /> },
      ],
    },
    comparisonData: {
      heading: "Explore Our S-Series AI-based Dome Camera Range",
      d_image: "/images/product_cameracomparision.png",
      m_image: "/images/product_cameracomparision_mobile.png",
      headers: ["Category", "Dome 4G", "Dome Wi-Fi", "Dome PoE"],
      rows: [
        {
          label: "Primary Connectivity",
          values: [
            "4G SIM (LTE CAT1)",
            "Dual-Band Wi-Fi 2.4GHz/5GHz",
            "Wired LAN RJ-45",
          ],
        },
        { label: "SIM Slot", values: ["Yes", "No", "No"] },
        { label: "Wi-Fi Support", values: ["No", "Yes", "No"] },
        {
          label: "Ethernet Port",
          values: ["No (optional fallback only?)", "No", "Yes – 10/100 Mbps"],
        },
        {
          label: "Power Method",
          values: ["DC 12V 1A", "DC 12V 1A", "PoE / DC 12V 1A"],
        },
        {
          label: "Installation Difficulty",
          values: ["Plug-N-Play", "Plug-N-Play", "Plug-N-Play"],
        },
        {
          label: "Cabling Required",
          values: [
            "No cable required",
            "Only power cable",
            "Single cable for power + network",
          ],
        },
        {
          label: "Monthly Cost",
          values: [
            "SIM recharge needed",
            "No recurring cost",
            "No recurring cost",
          ],
        },
        {
          label: "Full Details",
          values: ["Download PDF", "Download PDF", "Download PDF"],
          links: [
            "/pdfs/S Series Dome 4G.pdf",
            "/pdfs/S Series Dome WiFi.pdf",
            "/pdfs/S Series Dome POE.pdf",
          ],
          isButton: true,
        },
      ],
    },
    industries: {
      heading: "AI Security Cameras Built for Every Industry",
      items: [
        {
          name: "Manufacturing",
          description:
            "Monitor lines and yards with on-camera AI for safety, PPE, and assets. Resilient 4G keeps alerts and evidence flowing even during LAN outages.",
          image: "/images/product_productindustries_1.png", // Placeholder
        },
        {
          name: "Smart Cities",
          description:
            "Real-time visibility for traffic, crowds, and incidents, even where wired links can't exist. Deploy fast across intersections and plazas with dependable 4G uptime.",
          image: "/images/product_productindustries_2.png", // Placeholder
        },
        {
          name: "Retail & Malls",
          description:
            "Track movement and footfall while securing entrances, aisles, and parking. Always-on 4G keeps monitoring active during outages or store renovations.",
          image: "/images/product_productindustries_3.png", // Placeholder
        },
        {
          name: "Construction Sites",
          description:
            "Plug-and-play mobility for large or temporary sites to watch workers, materials, and perimeters. Relocate easily as the site evolves – no fixed internet required.",
          image: "/images/product_productindustries_4.png", // Placeholder
        },
        {
          name: "Transportation & Highways",
          description:
            "Ideal for highways, toll plazas, and transit hubs to flag speed, vehicles and incidents. Flexible 4G placement enables rapid coverage where power and poles allow.",
          image: "/images/product_productindustries_5.png", // Placeholder
        },
        {
          name: "Industrial Plants & Warehouses",
          description:
            "Detects unauthorized motion, missing objects, and PPE issues in real time. Strengthen safety audits and reduce downtime with dependable, independent connectivity.",
          image: "/images/product_productindustries_6.png", // Placeholder
        },
        {
          name: "Banks & ATMs",
          description:
            "Identify suspicious behavior and loitering patterns with instant alerts. Even if local networks fail, 4G keeps evidence capture and notifications running.",
          image: "/images/product_productindustries_7.png", // Placeholder
        },
        {
          name: "Educational Campuses",
          description:
            "Protect gates, pathways, and parking with human/vehicle detection and smart alerts. Central teams can review events remotely without campus Wi-Fi dependencies.",
          image: "/images/product_productindustries_8.png", // Placeholder
        },
        {
          name: "Healthcare Facilities",
          description:
            "Guard restricted zones, pharmacies, and entrances with intelligent detection. Maintain secure evidence retention and audit trails with resilient 4G lines.",
          image: "/images/product_productindustries_9.png", // Placeholder
        },
        {
          name: "Residential Societies",
          description:
            "Cover gates, lobbies, and parking without complex cabling. Residents and admins get instant mobile alerts and reliable remote viewing.",
          image: "/images/product_productindustries_10.png", // Placeholder
        },
        {
          name: "Oil Gas & Utilities",
          description:
            "Rugged oversight for substations, wellheads, and service yards. Get real-time anomaly alerts with connectivity independent of local networks.",
          image: "/images/product_productindustries_11.png", // Placeholder
        },
        {
          name: "Offices & Corporate",
          description:
            "Protect entrances, lobbies, parking, and premises with real-time people/vehicle alerts. 4G keeps 4G and branches monitored—even during IT outages.",
          image: "/images/product_productindustries_12.png", // Placeholder
        },
      ],
    },
    surveillanceStack: {
      mainHeading: "A Complete AI-Powered Security Surveillance Suite",
      description:
        "Stay ahead with the ArcisAI S-Series Dome CCTV - an intelligent surveillance system built to deliver clarity, control, and confidence indoors.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "AI intelligence operates directly on the camera, detecting and responding to events instantly on-site.",
          image: "/images/product_dome_surveillance_1.png",
          link: "/solution/edge-ai",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI add-on — pay only for advanced analytics like reports and multi-site insights.",
          image: "/images/product_dome_surveillance_1.png",
          link: "/solution/cloud-ai",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "A secure, unified platform to view, manage, and control all cameras, events, and users from a single dashboard.",
          image: "/images/product_dome_surveillance_1.png",
          link: "/arcis-vms",
        },
        {
          heading: "ArcisGPT",
          description:
            "An AI assistant that allows you to search and analyze video footage using natural language queries.",
          image: "/images/product_dome_surveillance_1.png",
          link: "/solution/generative-ai",
        },
        {
          heading: "Cloud Storage",
          description:
            "Encrypted and scalable video storage with flexible retention options for seamless evidence management.",
          image: "/images/product_dome_surveillance_1.png",
          link: "/",
        },
      ],
    },
    whychoosearcis: {
      heading: "Why Should You Choose ArcisAI’s AI Cameras?",
      items: [
        {
          name: "Proven at Scale",
          description:
            "15K+ cameras deployed across 20+ districts - reliability validated in real-world, large-area programs.",
          icon: <WhyChooseIcon1 />,
        },
        {
          name: "After-Sales Support",
          description:
            "Reliable technical assistance, regular updates, and quick issue resolution — ensuring your cameras always perform at their best.",
          icon: <WhyChooseIcon2 />,
        },
        {
          name: "Made in India",
          description:
            "Local manufacturing and QA for faster supply, better cost control and confident after-sales support.",
          icon: <WhyChooseIcon3 />,
        },
        {
          name: "Deep R&D",
          description:
            "In-house AI and firmware teams ship continuous improvements - new models, stronger detections, and secure updates.",
          icon: <WhyChooseIcon4 />,
        },
        {
          name: "End-to-End Platform",
          description:
            "One stack from Edge cameras -> VMS -> Cloud/GenAI -> Reporting, so you get faster rollouts, fewer vendors, and unified governance.",
          icon: <WhyChooseIcon5 />,
        },
        {
          name: "Plug-N-Play Setup",
          description:
            "Scan to pair and go live in minutes - no complex IT, no site-by-site headaches.",
          icon: <WhyChooseIcon6 />,
        },
        {
          name: "8 Built-In AI Detections",
          description:
            "Real-time, on-camera intelligence reduces false alarms and bandwidth while catching what matters instantly.",
          icon: <WhyChooseIcon7 />,
        },
        {
          name: "Remote Access Anywhere",
          description:
            "STQC-certified Cloud VMS and Mobile App deliver secure live view, playback, and control across every site.",
          icon: <WhyChooseIcon8 />,
        },
      ],
    },
    CTAButton: {
      data: "Secure Every Corner That Matters with ArcisAI’s Dome Camera",
      buttonText: "Request a Demo",
      d_image: "/images/product_cta_dome.png",
      m_image: "/images/product_cta_dome_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "5%" },
        mobile: { top: "65%", right: "5%" },
      },
      buttonProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "",
          height: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "200px",
          height: "34px",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
          width: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "90%",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-start",
      textAlign: "left",
    },
    FAQsData: {
      heading: "FAQs Related to AI Dome Camera",
      data: [
        {
          question: "What makes this a good indoor dome camera?",
          answer:
            "Its low-profile dome blends into ceilings, delivers sharp 2K video, and hides the viewing angle to deter tampering—ideal for lobbies, corridors, and rooms.",
        },
        {
          question: "Can I search video in natural language?",
          answer:
            "Yes. ArcisGPT lets you ask questions (e.g., “after-hours entries yesterday”) and returns summaries and tracks.",
        },
        {
          question: "Is cloud storage mandatory, or can I use local recording?",
          answer:
            "You can choose either or both. The S-Series supports MicroSD cards up to 256 GB for local recording, as well as ArcisCloud backup for redundancy and remote access. This flexibility allows you to balance cost, retention, and security needs.",
        },
      ],
    },
  },

  //----------ECO SERIES----------\\

  ptzcctvcamera: {
    hero: [
      {
        title: "Eco-Series PTZ CCTV Cameras",
        image: "/images/product_ptz_main.png",
        d_image: "/images/product_ptz_main.png",
        m_image: "/images/product_ptz_main_mobile.png",
        buttonText: "Get PTZ Cameras",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-7%",
          },
          mobile: {
            marginTop: "",
          },
        },
        textProps: {
          desktop: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
          mobile: {
            textColor: "",
            borderColor: "",
            bgColor: "",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
        },
      },
    ],
    features: {
      d_image: "/images/product_feature_ptz_bg.png",
      m_image: "/images/product_feature_ptz_bg_mobile.png",
      heading: "Next-Level PTZ CCTV Cameras Built for 24/7 Monitoring",
      description:
        "ArcisAI Eco-Series PTZ CCTV Cameras deliver 360° rotatable surveillance with long-range coverage, making them ideal for Indian businesses, offices, factories, apartments, and outdoor areas. Built for durable performance in Indian conditions, these cameras feature infrared night vision, IP66 weatherproof housing, and flexible PoE/IP/WiFi/4G connectivity for reliable monitoring anywhere. Whether you require a full PTZ for wide-area coverage, a Mini PTZ for compact spaces, or a Baby PTZ for discreet surveillance, ArcisAI offers the perfect solution for every security setup.",
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "1%",
          bigscreen: "1%",
        },
        featuresMarginTop: {
          mobile: "70%",
          tablet: "55%",
          laptop: "10%",
          bigscreen: "10%",
        },
        alignment: "center",
        descriptionColor: "black",
        featureColor: "black",
      },
      featuresList: [
        { name: "Superior Image Quality", icon: <FeatureIcon1 /> },
        { name: "Stable Network Connectivity", icon: <FeatureIcon2 /> },
        { name: "Easy Mounting Design", icon: <FeatureIcon3 /> },
        { name: "Two-Way Talk", icon: <FeatureIcon4 /> },
        { name: "Temper Proof", icon: <FeatureIcon5 /> },
        { name: "Color Night Vision", icon: <FeatureIcon6 /> },
        { name: "Infrared Night Vision", icon: <FeatureIcon6 /> },
        { name: "Fixed Lens Options", icon: <FeatureIcon7 /> },
        { name: "Strong Build Quality", icon: <FeatureIcon8 /> },
        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        { name: "ONVIF-Compatible", icon: <FeatureIcon16 /> },
        { name: "IP66/IP67 Weatherproof Design", icon: <FeatureIcon11 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon12 /> },
        { name: "360° PTZ Coverage", icon: <FeatureIcon15 /> },
      ],
    },
    comparisonData: {
      heading: "Find Your Ideal PTZ CCTV Camera for Your Security Needs",
      d_image: "/images/product_cameracomparision.png",
      m_image: "/images/product_cameracomparision_mobile.png",
      headers: [
        "Category",
        "AD-90ARWFBDP",
        "AD-90ARXBDP",
        "AD-90AIWFBDP",
        "AD-90AI4GBDP",
        "AD-90ARE3MPT",
        "AD-90ARE3PT",
        "AD-90ARE3PTB",
        "AD-90ARP3PT",
        "AD-90ARP3MPT",
        "AD-90ARP3MPT2",
        "AD-90ARP3PT2",
      ],
      rows: [
        {
          label: "Enclosure",
          values: [
            "PTZ",
            "Baby PTZ",
            "PTZ",
            "PTZ",
            "Mini PTZ",
            "PTZ",
            "PTZ (12V Battery)",
            "PTZ",
            "Mini PTZ",
            "Mini PTZ",
            "PTZ",
          ],
        },
        {
          label: "Resolution",
          values: [
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
            "3MP",
          ],
        },
        {
          label: "Lens",
          values: [
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "4 mm",
            "2.8 mm",
            "2.8 mm",
          ],
        },
        {
          label: "Dynamic Range",
          values: [
            "DWDR, 3D-DNR",
            "DWDR, 3D-DNR",
            "DWDR, 3D-DNR",
            "DWDR, 3D-DNR",
            "HDR",
            "HDR",
            "HDR",
            "HDR",
            "HDR",
            "HDR",
            "HDR",
          ],
        },
        {
          label: "IR Distance",
          values: [
            "20 m",
            "10 m",
            "30 m",
            "20 m",
            "20 m",
            "20 m",
            "20 m",
            "20 m",
            "20 m",
            "20 m",
            "20 m",
          ],
        },
        {
          label: "Connectivity",
          values: [
            "WiFi",
            "WiFi",
            "WiFi",
            "SIM/PoE (optional)",
            "10/100 (IP)",
            "10/100 (IP)",
            "10/100 (IP)",
            "PoE",
            "PoE",
            "PoE",
            "PoE",
          ],
        },
        {
          label: "SD Card",
          values: [
            "Up to 128GB",
            "Up to 128GB",
            "Up to 128GB",
            "Up to 128GB",
            "Supported",
            "Supported",
            "Supported",
            "Supported",
            "Supported",
            "Supported",
            "Supported",
          ],
        },
        {
          label: "IP Rating",
          values: [
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
            "IP66",
          ],
        },
        {
          label: "Full Details",
          values: [
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
            "Download PDF",
          ],
          links: [
            "/pdfs/AD-90AIWFBDP.pdf",
            "/pdfs/AD-90ARXBDP.pdf",
            "/pdfs/AD-90AIWFBDP.pdf",
            "/pdfs/AD-90AI4GBDP.pdf",
            "/pdfs/AD-90ARE3MPT.pdf",
            "/pdfs/AD-90ARE3PT.pdf",
            "/pdfs/AD-90ARE3PTB.pdf",
            "/pdfs/AD-90ARP3PT.pdf",
            "/pdfs/AD-90ARP3MPT.pdf",
            "/pdfs/AD-90ARP3MPT2.pdf",
            "/pdfs/AD-90ARP3PT2.pdf",
          ],
          isButton: true,
        },
      ],
    },
    AISolutionIndustry: {
      heading:
        "An Indian Security CCTV Camera Brand Delivering AI Solutions for Every Industry",
      description:
        "From retail stores to housing societies, factories to warehouses and public infrastructure - We deliver smart surveillance solutions tailored to each industry’s unique challenges. Our security cameras help you detect threats, monitor activity and respond faster.",
      industries: [
        {
          name: "Manufacturing & Factory Plants",
          image: "/images/home_aisolutionindustry_1.png",
        }, // Placeholder
        {
          name: "Warehouses & Logistics",
          image: "/images/home_aisolutionindustry_2.png",
        },
        {
          name: "Smart Cities",
          image: "/images/home_aisolutionindustry_3.png",
        },
        {
          name: "Construction Sites",
          image: "/images/home_aisolutionindustry_4.png",
        },
        { name: "Hospitality", image: "/images/home_aisolutionindustry_5.png" },
        {
          name: "Banks & ATMs",
          image: "/images/home_aisolutionindustry_6.png",
        },
        { name: "Hospitals", image: "/images/home_aisolutionindustry_7.png" },
        {
          name: "Airports, Bus & Railway Stations",
          image: "/images/home_aisolutionindustry_8.png",
        },
        {
          name: "Retail Stores",
          image: "/images/home_aisolutionindustry_9.png",
        },
        {
          name: "Corporate Offices",
          image: "/images/home_aisolutionindustry_10.png",
        },
        {
          name: "Housing Societies",
          image: "/images/home_aisolutionindustry_11.png",
        },
        {
          name: "Educational Premises",
          image: "/images/home_aisolutionindustry_12.png",
        },
      ],
    },
    whychoosearcis: {
      heading: "What Makes ArcisAI PTZ Cameras Stand Out",
      items: [
        {
          name: "Built for Indian Conditions",
          description:
            "Cameras are heat, dust, humidity, and low-light resistant, providing stable performance year-round.",
          icon: <WhyChooseIcon1 />,
        },
        {
          name: "360° Coverage",
          description:
            "Rotatable PTZ cameras monitor every angle, eliminating blind spots in large areas.",
          icon: <WhyChooseIcon2 />,
        },
        {
          name: "Easy Upgrade & Integration",
          description:
            "Seamlessly connect with ArcisAI NVRs, VMS, and ONVIF-compatible systems without replacing existing setups.",
          icon: <WhyChooseIcon3 />,
        },
        {
          name: "Advanced Monitoring",
          description:
            "Get night vision, remote access, and smart recording on your existing network.",
          icon: <WhyChooseIcon4 />,
        },
        {
          name: "Trusted by Professionals",
          description:
            "System integrators, companies, and residential societies rely on ArcisAI for long-term, consistent surveillance.",
          icon: <WhyChooseIcon5 />,
        },
        {
          name: "Flexible Deployment Options",
          description:
            "Full PTZ, Mini PTZ, and Baby PTZ options adapt to any space—large or compact.",
          icon: <WhyChooseIcon6 />,
        },
      ],
    },
    CTAButton: {
      data: "Let’s Secure Your Space With ArcisAI PTZ Cameras",
      buttonText: "Get Your PTZ CCTV Quote",
      d_image: "/images/product_cta_ptz.png",
      m_image: "/images/product_cta_ptz_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "-6%" },
        mobile: { top: "73%", left: "-2%" },
      },
      buttonProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "290px",
          height: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "270px",
          height: "34px",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "65%",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "100%",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-end",
      textAlign: "right",
    },
    FAQsData: {
      heading: "PTZ CCTV Camera FAQs",
      data: [
        {
          question: "Can PTZ cameras provide 360° coverage?",
          answer:
            "Absolutely. The rotatable PTZ mechanism allows full 360° monitoring, minimizing blind spots for large areas like warehouses, offices, and factories.",
        },
        {
          question: "Do these cameras work in low-light areas?",
          answer:
            "Yes. All PTZ models include infrared night vision, ensuring clear footage even in dark or poorly lit spaces.",
        },
      ],
    },
  },
  bulletcctvcamera: {
    hero: [
      {
        title: "Eco Series Bullet Camera",
        image: "/images/product_ecoseries_bullet_main.png",
        d_image: "/images/product_ecoseries_bullet_main.png",
        m_image: "/images/product_ecoseries_bullet_main_mobile.png",
        buttonText: "Get Your CCTV Cameras",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: { marginTop: "-3.5%" },
          mobile: { marginTop: "" },
        },
        textProps: {
          desktop: {
            textColor: "#000",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "#000",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "#000",
            textHover: "black",
            borderColor: "black",
            bgColor: "",
            width: "120%",
            height: "",
          },
          mobile: {
            textColor: "black",
            borderColor: "black",
            bgColor: "",
            width: "120%",
            height: "",
          },
        },
      },
    ],
    features: {
      d_image: "",
      m_image: "",
      heading: "",
      description: [""],
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "0%",
          bigscreen: "0%",
        },
        featuresMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "5%",
          bigscreen: "5%",
        },
        justify: "center",
        alignment: "center",
        descriptionColor: "white",
        featureColor: "white",
        descriptionTextAlign: "center", // or "center", "right", "justify"
        descriptionWidth: {
          mobile: "90%",
          tablet: "70%",
          laptop: "99%",
          bigscreen: "99%",
        },
      },
      featuresList: [
        { name: "Fixed Lens Options", icon: <FeatureIcon1 /> },
        { name: "Stable Network Connectivity", icon: <FeatureIcon2 /> },
        { name: "Temper Proof", icon: <FeatureIcon3 /> },
        { name: "Two-Way Talk", icon: <FeatureIcon4 /> },
        { name: "ONVIF-Compatible", icon: <FeatureIcon5 /> },
        { name: "Infrared Night Vision", icon: <FeatureIcon6 /> },
        { name: "Color Night Vision", icon: <FeatureIcon7 /> },
        { name: "High-Resolution Imaging", icon: <FeatureIcon8 /> },

        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        { name: "IP66/IP67 Weatherproof Design", icon: <FeatureIcon10 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon11 /> },
        { name: "Strong Build Quality", icon: <FeatureIcon12 /> },
      ],
    },
    productList: {
      bg_image: "/images/product_bullet_bg.png",
      heading: "AI CCTV Camera Range for Every Need",
      description: "",
      products: [
        {
          product_type: "Eco-series",
          productarray: [
            {
              image: "/images/Ecoseries_bullet_AD-90NRE5BM.png",
              product_name: "AD-90NRE5BM",
              subtitle: "IP Bullet - 5MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["5 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90NRE5BP.png",
              product_name: "AD-90NRE5BP",
              subtitle: "IP Bullet - 5MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["5 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARP3BP2.png",
              product_name: "AD-90ARP3BP2",
              subtitle: "POE Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90NRP5BP.png",
              product_name: "AD-90NRP5BP",
              subtitle: "POE Bullet - 5MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["5 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARE3BP2.png",
              product_name: "AD-90ARE3BP2",
              subtitle: "IP Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90AIEBDP.png",
              product_name: "AD-90AIEBDP",
              subtitle: "IP Bullet",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90NRP5BM.png",
              product_name: "AD-90NRP5BM",
              subtitle: "POE Bullet - 5MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["5 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARE3BP.png",
              product_name: "AD-90ARE3BP",
              subtitle: "IP Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARP3BP.png",
              product_name: "AD-90ARP3BP",
              subtitle: "POE Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90AI4GBDPB.png",
              product_name: "AD-90AI4GBDPB",
              subtitle: "4G AI Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["4G"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARE3BM.png",
              product_name: "AD-90ARE3BM",
              subtitle: "IP Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARP3BM.png",
              product_name: "AD-90ARP3BM",
              subtitle: "POE Bullet - 3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_bullet_AD-90ARE3BPB.png",
              product_name: "AD-90ARE3BPB",
              subtitle: "IP Bullet Battery-3MP",
              link: "/eco-series/bullet-cctv-camera",
              attributes: {
                type: ["Bullet"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
          ],
        },
      ],
    },
    innovation: {
      heading: "Trusted Bullet CCTV Cameras for Every Business",
      subHeading: "",
      array: [
        {
          title: "Made In India",
          description:
            "Designed to withstand harsh Indian weather, dust, and extreme temperatures, ensuring long-lasting performance.",
          icon: InnovationIcon1,
        },
        {
          title: "High-Quality Construction",
          description:
            "Choose from metal and plastic bullet CCTV cameras, with IP66/IP67 protection for indoor and outdoor surveillance.",
          icon: InnovationIcon2,
        },
        {
          title: "Flexible Installation",
          description:
            "Supports POE, IP, and 4G connectivity, suitable for commercial, industrial, and residential setups.",
          icon: InnovationIcon3,
        },
        {
          title: "Reliable Performance",
          description:
            "Continuous, stable video monitoring with 3MP and 5MP bullet CCTV cameras, delivering clear footage for every environment.",
          icon: InnovationIcon4,
        },
        {
          title: "Cost-Effective",
          description:
            "Get premium bullet CCTV cameras, ideal for budget-conscious businesses and institutions.",
          icon: InnovationIcon5,
        },
        {
          title: "Multiple Variants",
          description:
            "Various lens sizes, enclosure types, and connectivity options to meet diverse surveillance requirements.",
          icon: InnovationIcon6,
        },
      ],
    },
    CTAButton: {
      data: "Protect Your Facility with ArcisAI Eco-Series Bullet Security CCTV Cameras",
      buttonText: "Get a Quote",
      d_image: "/images/product_cta_bullet.png",
      m_image: "/images/product_cta_bullet_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "-5%" },
        mobile: { top: "60%", left: "-5%" },
      },
      buttonProps: {
        desktop: {
          textColor: "black",
          borderColor: "#7F56D9",
          bgColor: "rgba(23, 23, 23, 0.05)",
          width: "220px",
          height: "56px",
          fontWeight: "400",
        },
        mobile: {
          textColor: "black",
          borderColor: "#7F56D9",
          bgColor: "rgba(23, 23, 23, 0.05)",
          width: "200px",
          height: "48px",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "55%",
          marginBottom: "40px",
        },
        mobile: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "90%",
          marginBottom: "20px",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
    },
    FAQsData: {
      heading: "Eco-Series Bullet Camera FAQs",
      data: [
        {
          question: "Are Eco-Series Bullet Cameras suitable for outdoor use?",
          answer:
            "Eco-Series Bullet Cameras come in IP66/IP67 rated enclosures (metal and plastic), making them weatherproof and ideal for both indoor and outdoor installations.",
        },
        {
          question:
            "What types of connectivity do Eco-Series Bullet Cameras support?",
          answer:
            "They support IP network connectivity, PoE, 12V battery, and some 4G models. This allows flexible installation across commercial, industrial, and residential sites.",
        },
      ],
    },
  },
  domecctvcamera: {
    hero: [
      {
        title: "",
        image: "/images/product_ecoseries_dome_main.png",
        d_image: "/images/product_ecoseries_dome_main.png",
        m_image: "/images/product_ecoseries_dome_main_mobile.png",

        sectionProps: {
          desktop: { marginTop: "-5.5%" },
          mobile: { marginTop: "" },
        },
        textProps: {
          desktop: {
            textColor: "#000",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "#000",
            alignItems: "",
            textAlign: "",
            top: "",
            left: "",
            width: "",
          },
        },
      },
    ],
    features: {
      d_image: "",
      m_image: "",
      heading: "",
      description: [""],
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "0%",
          bigscreen: "0%",
        },
        featuresMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "5%",
          bigscreen: "5%",
        },
        justify: "center",
        alignment: "center",
        descriptionColor: "white",
        featureColor: "white",
        descriptionTextAlign: "center", // or "center", "right", "justify"
        descriptionWidth: {
          mobile: "90%",
          tablet: "70%",
          laptop: "99%",
          bigscreen: "99%",
        },
      },
      featuresList: [
        { name: "Fixed Lens Options", icon: <FeatureIcon1 /> },
        { name: "Stable Network Connectivity", icon: <FeatureIcon2 /> },
        { name: "Temper Proof", icon: <FeatureIcon3 /> },
        { name: "Two-Way Talk", icon: <FeatureIcon4 /> },
        { name: "ONVIF-Compatible", icon: <FeatureIcon5 /> },
        { name: "Infrared Night Vision", icon: <FeatureIcon6 /> },
        { name: "Color Night Vision", icon: <FeatureIcon7 /> },
        { name: "High-Resolution Imaging", icon: <FeatureIcon8 /> },

        { name: "Remote Access via Mobile App", icon: <FeatureIcon9 /> },
        { name: "IP66/IP67 Weatherproof Design", icon: <FeatureIcon10 /> },
        { name: "Plug-and-Play Setup", icon: <FeatureIcon11 /> },
        { name: "Strong Build Quality", icon: <FeatureIcon12 /> },
      ],
    },
    productList: {
      bg_image: "/images/product_bullet_bg.png",
      heading: "Find the Right Dome CCTV Camera for Your Security Needs",
      description: "",
      products: [
        {
          product_type: "Eco-series",
          productarray: [
            {
              image: "/images/Ecoseries_dome_AD-90ARP3DP.png",
              product_name: "AD-90ARP3DP",
              subtitle: "POE Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90NRP5DP.png",
              product_name: "AD-90NRP5DP",
              subtitle: "POE Dome - 5MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["5 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90ARP3DM.png",
              product_name: "AD-90ARP3DM",
              subtitle: "POE Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90NRP5DM.png",
              product_name: "AD-90NRP5DM",
              subtitle: "POE Dome - 5MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["5 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90ARE3DP2.png",
              product_name: "AD-90ARE3DP2",
              subtitle: "IP Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90ARE3DP.png",
              product_name: "AD-90ARE3DP",
              subtitle: "IP Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90ARP3DP2.png",
              product_name: "AD-90ARP3DP2",
              subtitle: "POE Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["PoE"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90ARE3DM.png",
              product_name: "AD-90ARE3DM",
              subtitle: "IP Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90NRE5DP.png",
              product_name: "AD-90NRE5DP",
              subtitle: "IP Dome - 5MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["5 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90NRE5DM.png",
              product_name: "AD-90NRE5DM",
              subtitle: "IP Dome - 5MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["5 MP"],
                connectivity: ["IP"],
              },
            },
            {
              image: "/images/Ecoseries_dome_AD-90AI4GBDPD.png",
              product_name: "AD-90AI4GBDPD",
              subtitle: "4G AI Dome - 3MP",
              link: "/eco-series/dome-cctv-camera",
              attributes: {
                type: ["Dome"],
                lens: ["3 MP"],
                connectivity: ["4G"],
              },
            },
          ],
        },
      ],
    },
    innovation: {
      heading: "Trusted Dome CCTV Cameras for Every Business",
      subHeading: "",
      array: [
        {
          title: "Made for India",
          description:
            "ArcisAI Dome Cameras are built to handle heat, dust, humidity, and low light—making them reliable for Indian homes, shops, offices, and industries all year round.",
          icon: InnovationIcon1,
        },
        {
          title: "Clear Footage Day & Night",
          description:
            "Choose from metal and plastic bullet CCTV cameras, with IP66/IP67 protection for indoor and outdoor surveillance.",
          icon: InnovationIcon7,
        },
        {
          title: "Flexible Installation",
          description:
            "Supports POE, IP, and 4G connectivity, suitable for commercial, industrial, and residential setups.",
          icon: InnovationIcon8,
        },
        {
          title: "Reliable Performance",
          description:
            "Continuous, stable video monitoring with 3MP and 5MP bullet CCTV cameras, delivering clear footage for every environment.",
          icon: InnovationIcon3,
        },
        {
          title: "Cost-Effective",
          description:
            "Get premium bullet CCTV cameras, ideal for budget-conscious businesses and institutions.",
          icon: InnovationIcon6,
        },
        {
          title: "Multiple Variants",
          description:
            "Various lens sizes, enclosure types, and connectivity options to meet diverse surveillance requirements.",
          icon: InnovationIcon2,
        },
      ],
    },
    CTAButton: {
      data: "Protect Your Facility with ArcisAI Eco-Series Bullet    Security CCTV Cameras",
      buttonText: "Schedule A Demo",
      d_image: "/images/product_cta_dome.png",
      m_image: "/images/product_cta_dome_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "4%" },
        mobile: { top: "65%", left: "-4%" },
      },
      buttonProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "",
          height: "",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          borderColor: "#7F56D9",
          bgColor: "",
          width: "200px",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
          width: "50%",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
          width: "90%",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-start",
      textAlign: "left",
    },
    FAQsData: {
      heading: "Eco-Series Dome Camera FAQs",
      data: [
        {
          question: "Are Eco-Series Bullet Cameras suitable for outdoor use?",
          answer:
            "Yes. Eco-Series Bullet Cameras come in IP66/IP67 rated enclosures (metal and plastic), making them weatherproof and ideal for both indoor and outdoor installations.",
        },
        {
          question:
            "What types of connectivity do Eco-Series Bullet Cameras support?",
          answer:
            "They support IP network connectivity, PoE, 12V battery, and some 4G models. This allows flexible installation across commercial, industrial, and residential sites.",
        },
      ],
    },
  },
};
