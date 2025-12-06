import React from "react";
import { ReactComponent as FeatureIcon1 } from "../../../Components/Icons/product_all_camerafeatures_1.svg";
import { ReactComponent as FeatureIcon2 } from "../../../Components/Icons/product_all_camerafeatures_2.svg";
import { ReactComponent as FeatureIcon3 } from "../../../Components/Icons/product_all_camerafeatures_3.svg";
import { ReactComponent as FeatureIcon4 } from "../../../Components/Icons/product_all_camerafeatures_4.svg";
import { ReactComponent as FeatureIcon5 } from "../../../Components/Icons/product_all_camerafeatures_5.svg";
import { ReactComponent as FeatureIcon6 } from "../../../Components/Icons/product_all_camerafeatures_6.svg";
import { ReactComponent as FeatureIcon7 } from "../../../Components/Icons/product_all_camerafeatures_7.svg";
import { ReactComponent as FeatureIcon8 } from "../../../Components/Icons/product_all_camerafeatures_8.svg";
import { ReactComponent as FeatureIcon9 } from "../../../Components/Icons/product_all_camerafeatures_9.svg";
import { ReactComponent as FeatureIcon10 } from "../../../Components/Icons/product_all_camerafeatures_10.svg";
import { ReactComponent as FeatureIcon11 } from "../../../Components/Icons/product_all_camerafeatures_11.svg";
import { ReactComponent as FeatureIcon12 } from "../../../Components/Icons/product_all_camerafeatures_12.svg";
import { ReactComponent as FeatureIcon13 } from "../../../Components/Icons/product_all_camerafeatures_13.svg";
import { ReactComponent as FeatureIcon14 } from "../../../Components/Icons/product_all_camerafeatures_14.svg";
import { ReactComponent as WhyChooseIcon1 } from "../../../Components/Icons/product_all_whychoose_1.svg";
import { ReactComponent as WhyChooseIcon2 } from "../../../Components/Icons/product_all_whychoose_2.svg";
import { ReactComponent as WhyChooseIcon3 } from "../../../Components/Icons/product_all_whychoose_3.svg";
import { ReactComponent as WhyChooseIcon4 } from "../../../Components/Icons/product_all_whychoose_4.svg";
import { ReactComponent as WhyChooseIcon5 } from "../../../Components/Icons/product_all_whychoose_5.svg";
import { ReactComponent as WhyChooseIcon6 } from "../../../Components/Icons/product_all_whychoose_6.svg";
import { ReactComponent as WhyChooseIcon7 } from "../../../Components/Icons/product_all_whychoose_7.svg";
import { ReactComponent as WhyChooseIcon8 } from "../../../Components/Icons/product_all_whychoose_8.svg";

export const Product = {
  aibulletcctvcamera: {
    hero: [
      {
        title: "AI Bullet CCTV Camera",
        image: "/images/bullet_hero.png",
        d_image: "/images/product_bullet_main.png",
        m_image: "/images/product_bullet_main_mobile.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "/contact-us",
      },
    ],
    features: {
      d_image: "/images/product_feature_bullet_bg.png",
      m_image: "/images/product_feature_bullet_bg_mobile.png",
      heading: "AI CCTV Camera Range for Every Need",
      description:
        "The ArcisAI Wi-Fi Bullet Camera is an advanced outdoor security camera built for homes, shops, offices, and businesses that already have Wi-Fi. With powerful EdgeAI analytics, 2K HD clarity, and event-based intelligent alerts, it ensures proactive monitoring and secure visibility — all without needing cables or network complexity. Designed for fast plug-n-play setup, 24×7 reliability, and high-quality surveillance, this is your ultimate choice for smart wireless protection.",
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
      heading: "AI CCTV Camera Range for Every Need",
      d_image: "/images/product_cameracomparision.png",
      m_image: "/images/product_cameracomparision_mobile.png",
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
    industries: {
      heading: "AI 4G Security Cameras Built for Every Industry",
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
        "A Complete AI-Powered Security Suite with AI-Based Wifi CCTV Camera",
      description:
        "Built for connected environments, our AI Wi-Fi Bullet Camera delivers instant intelligence, smart alerts and centralized control over your secure Wi-Fi network.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "8 Powerful real-time detection on camera — humans, intrusions, line crossing & more.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI features are available as modular paid add-ons. Users can enable specific analytics packs as required.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "Manage multiple locations, cameras, alerts & users through a unified government-certified platform.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "ArcisGPT",
          description:
            "Search video by asking questions — e.g., “Show events where a person entered after 10 PM”.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "Cloud Storage",
          description:
            "Secure video retention online to protect footage even if the device or SD card is damaged.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
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
      link: "#",
      textPosition: {
        desktop: { top: "50%", left: "-4%" },
        mobile: { top: "60%", left: "-40%" },
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
          width: "",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
        },
      },
      textColor: "linear(45deg, #171717, #7F56D9)",
      alignItems: "flex-end",
      textAlign: "right",
    },
    FAQsData: {
      heading: "FAQs Related to AI Bullet CCTV",
      data: [
        {
          question: "Which phones work with the AI 4G Bullet CCTV Camera?",
          answer: "iOS and Android",
        },
        {
          question: "Will I get alerts if the CCTV Camera goes offline?",
          answer:
            "Yes - health notifications for offline status, storage full or tamper events.",
        },
        {
          question:
            "How are firmware updates handled for my AI 4G Bullet Camera?",
          answer:
            "Secure OTA updates; schedule them off-hours and track progress in the app/VMS.",
        },
      ],
    },
  },
  aiptzcctvcamera: {
    hero: [
      {
        title: "AI PTZ CCTV Camera",
        image: "/images/ptz_hero.png",
        d_image: "/images/ptz_hero.png",
        m_image: "/images/ptz_hero.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "/contact-us",
      },
    ],
    features: {
      d_image: "/images/product_feature_ptz_bg.png",
      m_image: "/images/product_feature_ptz_bg_mobile.png",
      heading: "AI CCTV Camera Range for Every Need",
      description:
        "The ArcisAI Wi-Fi Bullet Camera is an advanced outdoor security camera built for homes, shops, offices, and businesses that already have Wi-Fi. With powerful EdgeAI analytics, 2K HD clarity, and event-based intelligent alerts, it ensures proactive monitoring and secure visibility — all without needing cables or network complexity. Designed for fast plug-n-play setup, 24×7 reliability, and high-quality surveillance, this is your ultimate choice for smart wireless protection.",
      styles: {
        contentMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "1%",
          bigscreen: "1%",
        },
        featuresMarginTop: {
          mobile: "25%",
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
      heading: "AI CCTV Camera Range for Every Need",
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
      heading: "AI 4G Security Cameras Built for Every Industry",
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
      mainHeading: "AI Security Stack for Modern Surveillance",
      description:
        "Lead every moment with our 4G AI PTZ camera — intelligent surveillance designed for critical outdoor security.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "AI runs directly on the camera for faster, bandwidth-free event detection, tracking, and classification.",
          image: "/images/screen.png",
          link: "#",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI is an optional upgrade — choose and pay for deeper analytics beyond basic alerts, including reports and trend insights.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "Securely manage and monitor live feeds, playback, and alerts from a unified ArcisAI dashboard.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "ArcisGPT",
          description:
            "Your AI-powered assistant for smart video search — ask natural questions like “Show vehicle movement at Gate 2 last night” and get instant clips.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "Cloud Storage",
          description:
            "Encrypted cloud storage with flexible retention and retrieval options for compliance and evidence management.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
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
      data: "AI-Powered 4G PTZ Camera - Top Security CCTV Camera for Large-Area Monitoring",
      buttonText: "Book a Live Demo",
      d_image: "/images/product_cta_ptz.png",
      m_image: "/images/product_cta_ptz_mobile.png",
      bgImage: "",
      link: "#",
      textPosition: {
        desktop: { top: "50%", left: "-5%" },
        mobile: { top: "60%", left: "5%" },
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
          width: "",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-end",
          textAlign: "right",
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
        image: "/images/dome_hero.png",
        d_image: "/images/dome_hero.png",
        m_image: "/images/dome_hero.png",
        buttonText: "Get Your AI CCTV",
        buttonLink: "contact-us",
      },
    ],
    features: {
      d_image: "/images/product_feature_dome_bg.png",
      m_image: "/images/product_feature_dome_bg_mobile.png",
      heading: "AI CCTV Camera Range for Every Need",
      description:
        "The ArcisAI Wi-Fi Bullet Camera is an advanced outdoor security camera built for homes, shops, offices, and businesses that already have Wi-Fi. With powerful EdgeAI analytics, 2K HD clarity, and event-based intelligent alerts, it ensures proactive monitoring and secure visibility — all without needing cables or network complexity. Designed for fast plug-n-play setup, 24×7 reliability, and high-quality surveillance, this is your ultimate choice for smart wireless protection.",
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
      heading: "AI CCTV Camera Range for Every Need",
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
      heading: "AI 4G Security Cameras Built for Every Industry",
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
        "Stay ahead with the ArcisAI S-Series 4G Dome CCTV - an intelligent surveillance system built to deliver clarity, control, and confidence indoors.",
      stack: [
        {
          heading: "EdgeAI Analytics",
          description:
            "AI intelligence operates directly on the camera, detecting and responding to events instantly on-site.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "CloudAI Analytics",
          description:
            "CloudAI add-on — pay only for advanced analytics like reports and multi-site insights.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "STQC-Certified VMS",
          description:
            "A secure, unified platform to view, manage, and control all cameras, events, and users from a single dashboard.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "ArcisGPT",
          description:
            "An AI assistant that allows you to search and analyze video footage using natural language queries.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
        },
        {
          heading: "Cloud Storage",
          description:
            "Encrypted and scalable video storage with flexible retention options for seamless evidence management.",
          image: "/images/solution_surveillance_1.png",
          link: "#",
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
      d_image: "/images/product_cta_dome.png",
      m_image: "/images/product_cta_dome_mobile.png",
      bgImage: "",
      link: "#",
      textPosition: {
        desktop: { top: "50%", left: "5%" },
        mobile: { top: "60%", left: "5%" },
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
          width: "",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
        },
        mobile: {
          textColor: "linear(45deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
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
};
