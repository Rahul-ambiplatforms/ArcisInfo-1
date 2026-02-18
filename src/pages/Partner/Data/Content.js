import React from "react";
import { Image } from "@chakra-ui/react";
import { ReactComponent as FeatureIcon1 } from "../../../Components/Icons/partner_1.svg";
import { ReactComponent as FeatureIcon2 } from "../../../Components/Icons/partner_2.svg";
import { ReactComponent as FeatureIcon3 } from "../../../Components/Icons/partner_3.svg";
import { ReactComponent as FeatureIcon4 } from "../../../Components/Icons/partner_4.svg";
import { ReactComponent as FeatureIcon5 } from "../../../Components/Icons/partner_5.svg";
import { ReactComponent as FeatureIcon6 } from "../../../Components/Icons/partner_6.svg";
import { ReactComponent as FeatureIcon7 } from "../../../Components/Icons/partner_7.svg";
import { ReactComponent as FeatureIcon8 } from "../../../Components/Icons/partner_8.svg";
import { ReactComponent as FeatureIcon9 } from "../../../Components/Icons/partner_9.svg";
import { ReactComponent as FeatureIcon10 } from "../../../Components/Icons/partner_10.svg";

export const partnerData = {
  hero: [
    {
      heading: "Join India’s Fastest-Growing AI CCTV Network",
      description:
        "Whether you're starting out or scaling up, ArcisAI helps you win more business with smart products, real leads, and regional exclusivity.",
      image: "/images/partner_page_main.png",
      d_image: "/images/partner_page_main.png",
      m_image: "/images/partner_page_main_mobile.png",

      sectionProps: {
        desktop: { marginTop: "-5.5%" },
        mobile: { marginTop: "-35%" },
      },
      textProps: {
        desktop: {
          fontSize: "60px",
          textColor: "#fff",
          alignItems: "flex-start",
          textAlign: "left",
          top: "5%",
          left: "0%",
          width: "55%",
        },
        mobile: {
          fontSize: "32px",
          textColor: "#fff",
          alignItems: "flex-start",
          textAlign: "center",
          top: "40%",
          left: "5%",
          width: "90%",
        },
      },
      descriptionProps: {
        desktop: {
          fontSize: "18px",
          textColor: "#fff", // distinct color if needed
          lineHeight: "25px",
          width: "60%",
        },
        mobile: {
          fontSize: "14px",
          textColor: "#fff",
          lineHeight: "18px",
          width: "100%",
        },
      },
    },
  ],
  gameChangeFeatures: {
    heading: "Don’t Just Compete - Change the Game with ArcisAI",
    description:
      "Give your market something new with our EdgeAI cameras, GPT-like video summaries, Indian cloud compliance and full partner support.",
    featuresList: [
      {
        name: "High Margin Opportunity",
        icon: <FeatureIcon1 />,
      },
      {
        name: "EdgeAI Cameras with 8 built-in AI detections",
        icon: <FeatureIcon2 />,
      },
      {
        name: "ArcisVMS: Real-time alerts, event-based summaries",
        icon: <FeatureIcon3 />,
      },
      {
        name: "ArcisGPT: GPT-like video summaries",
        icon: <FeatureIcon4 />,
      },
      {
        name: "Indian Cloud Hosting (STQC-certified)",
        icon: <FeatureIcon5 />,
      },
      {
        name: "Plug-and-Play Setup",
        icon: <FeatureIcon6 />,
      },
      {
        name: "4G/5G/WiFi/PoE Camera Options",
        icon: <FeatureIcon7 />,
      },
      {
        name: "Full Partner Support & Sales Enablement",
        icon: <FeatureIcon8 />,
      },
      {
        name: "Regional Priority Access: Get exclusivity based on performance",
        icon: <FeatureIcon9 />,
      },
      {
        name: "Local Lead Sharing: We forward qualified inquiries to you",
        icon: <FeatureIcon10 />,
      },
    ],
    styles: {
      heading: {
        fontSize: { base: "24px", md: "48px" },
      },
      description: {
        fontSize: { base: "14px", md: "18px" },
        color: "#ccc",
      },

      featureColor: "white",
      justify: "left",
      alignment: "center",
      contentMarginTop: {
        mobile: "5%",
        tablet: "2%",
        laptop: "2%",
        bigscreen: "2%",
      },
      featuresMarginTop: {
        mobile: "10%",
        tablet: "5%",
        laptop: "5%",
        bigscreen: "5%",
      },
      descriptionWidth: {
        mobile: "90%",
        tablet: "70%",
        laptop: "100%",
        bigscreen: "100%",
      },
      descriptionTextAlign: "center",
    },
  },
  programTypes: {
    bg_image: "/images/home_wave_gif_1.gif",
    heading: "Who Can Join the ArcisAI CCTV Partner Program?",
    description:
      "Give your market something new with our EdgeAI cameras, GPT-like video summaries, Indian cloud compliance and full partner support.",
    cards: [
      {
        title: "Distributors",
        subtitle:
          "You supply and manage a network of dealers or regional partners.",
        benefits: [
          "Exclusive access to bulk pricing tiers for all SKUs",
          "Potential for territory exclusivity based on sales performance",
          "Receive qualified leads for your assigned region",
          "Marketing support for dealer recruitment campaigns",
          "Access to printed catalogs, vinyl banners, standees, dealer kits",
          "Support for organizing dealer meetups in your region",
          "Priority access to new launches and pilot programs",
          "Sales guidance, quarterly planning and partner dashboard access",
        ],
      },
      {
        title: "Dealers",
        subtitle:
          "You're a local seller working with residential, retail or office buyers.",
        benefits: [
          "Sell plug-and-play EdgeAI CCTV cameras",
          "Access to dealer boards, brochures and promotional print kits",
          "Pre-made WhatsApp creatives and local marketing support",
          "Get added to regional dealer roadshows and events",
          "Partner welcome kit with catalogs, sample flyers and product guides",
          "Hands-on product training and demo walkthroughs",
          "Co-branded social media content for your business handles",
          "Quick inquiry support via WhatsApp and CRM",
        ],
      },
      {
        title: "System Integrators",
        subtitle:
          "You deliver end-to-end surveillance projects across verticals.",
        benefits: [
          "Offer ArcisAI's EdgeAI+Cloud-based stack with ArcisGPT",
          "No need to install heavy VMS servers — edge+cloud model is fully deployable",
          "Easy integration into smart buildings, commercial or industrial setups",
          "Technical documents, product spec sheets, and BOM templates",
          "On-demand support for project walkthroughs, pricing assistance and mockups",
          "Compact demo kits available for live demonstrations",
          "Make-in-India + STQC compliance for trust and deployment ease",
          "Access to partner success stories",
        ],
      },
    ],
  },
  CTAButton: {
    data: "Ready to Grow Your Security Business? Join India’s Most Advanced AI CCTV Network",
    buttonText: "Schedule A Demo",
    d_image: "/images/abd_cta.png",
    m_Image: "/images/whyarcis_cta_mobile.png",
    link: "/contact-us",
    textPosition: {
      desktop: { top: "50%", left: "0%" },
      mobile: { top: "50%", left: "0%" },
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
        alignItems: "center",
        textAlign: "center",
        width: "85%",
        marginBottom: "40px",
      },
      mobile: {
        textColor: "linear(150deg, #171717, #7F56D9)",
        alignItems: "center",
        textAlign: "center",
        width: "90%",
        marginBottom: "20px",
      },
    },
  },
};
