import { ReactComponent as FeatureIcon1 } from "../../../Components/Icons/whyarcis_service_1.svg";
import { ReactComponent as FeatureIcon2 } from "../../../Components/Icons/product_all_camerafeatures_12.svg";
import { ReactComponent as FeatureIcon3 } from "../../../Components/Icons/product_all_camerafeatures_6.svg";
import { ReactComponent as FeatureIcon4 } from "../../../Components/Icons/product_all_camerafeatures_3.svg";
import { ReactComponent as FeatureIcon5 } from "../../../Components/Icons/product_all_camerafeatures_8.svg";
import { ReactComponent as FeatureIcon6 } from "../../../Components/Icons/Event Reports.svg";
import { ReactComponent as FeatureIcon7 } from "../../../Components/Icons/product_all_camerafeatures_7.svg";
import { ReactComponent as FeatureIcon8 } from "../../../Components/Icons/Smart Playback.svg";
import { ReactComponent as FeatureIcon9 } from "../../../Components/Icons/Role based.svg";
import { ReactComponent as FeatureIcon10 } from "../../../Components/Icons/product_all_camerafeatures_9.svg";
import { ReactComponent as FeatureIcon11 } from "../../../Components/Icons/Onvif.svg";

import InnovationIcon1 from "../../../Components/Icons/solution_edgeai_whychoose_8.svg";
import InnovationIcon2 from "../../../Components/Icons/solution_genai_whychoose_6.svg";
import InnovationIcon3 from "../../../Components/Icons/solution_genai_whychoose_7.svg";
import InnovationIcon4 from "../../../Components/Icons/product_all_whychoose_6.svg";
import InnovationIcon5 from "../../../Components/Icons/aboutus_innovation_5.svg";
import InnovationIcon6 from "../../../Components/Icons/solution_genai_whychoose_2.svg";
import InnovationIcon7 from "../../../Components/Icons/aboutus_innovation_6.svg";
import InnovationIcon8 from "../../../Components/Icons/solution_cloudai_whychoose_3.svg";
import InnovationIcon9 from "../../../Components/Icons/Innovation_arcis_1.svg";
import InnovationIcon10 from "../../../Components/Icons/Innovation_arcis_2.svg";

import NvrInnovationIcon1 from "../../../Components/Icons/nvr_innovation_1.svg";
import NvrInnovationIcon2 from "../../../Components/Icons/nvr_innovation_2.svg";
import NvrInnovationIcon3 from "../../../Components/Icons/nvr_innovation_3.svg";
import NvrInnovationIcon4 from "../../../Components/Icons/nvr_innovation_4.svg";
import NvrInnovationIcon5 from "../../../Components/Icons/nvr_innovation_5.svg";
import NvrInnovationIcon6 from "../../../Components/Icons/nvr_innovation_6.svg";

import { ReactComponent as ArcisIcon1 } from "../../../Components/Icons/product_all_whychoose_6.svg";
import { ReactComponent as ArcisIcon2 } from "../../../Components/Icons/Universal Camera Support.svg";
import { ReactComponent as ArcisIcon3 } from "../../../Components/Icons/Centralized Management.svg";
import { ReactComponent as ArcisIcon4 } from "../../../Components/Icons/solution_cloudai_whychoose_4.svg";
import { ReactComponent as ArcisIcon5 } from "../../../Components/Icons/aboutus_innovation_6.svg";
import { ReactComponent as ArcisIcon6 } from "../../../Components/Icons/Multi-site Deployment.svg";
import { ReactComponent as ArcisIcon7 } from "../../../Components/Icons/solution_cloudai_whychoose_7.svg";
import { ReactComponent as ArcisIcon8 } from "../../../Components/Icons/Cost-Effective Upgrade.svg";

import { ReactComponent as NvrIcon1 } from "../../../Components/Icons/nvr_features_1.svg";
import { ReactComponent as NvrIcon2 } from "../../../Components/Icons/solution_cloudai_whychoose_8.svg";
import { ReactComponent as NvrIcon3 } from "../../../Components/Icons/nvr_features_3.svg";
import { ReactComponent as NvrIcon4 } from "../../../Components/Icons/nvr_features_4.svg";
import { ReactComponent as NvrIcon5 } from "../../../Components/Icons/nvr_features_5.svg";
import { ReactComponent as NvrIcon6 } from "../../../Components/Icons/nvr_features_6.svg";

import { position } from "@chakra-ui/react";

export const Series = {
  sSeries: {
    hero: {
      d_image: "/images/sseries_hero_main.png",
      m_image: "/images/sseries_hero_main_mobile.png",
      heading: "AI-Powered S-Series CCTV Security Cameras",
      description:
        "With ArcisAI, you don't need to sit through endless footage or worry about missing key events. Our EdgeAI security cameras detect what matters and alert you instantly - even during off-hours.",
      sectionProps: {
        desktop: {
          marginTop: "",
        },
        mobile: {
          marginTop: "-25%",
        },
      },
      textProps: {
        desktop: {
          textColor: "",
          alignItems: "flex-start",
          textAlign: "",
          top: "",
          left: "",
          width: "",
        },
        mobile: {
          textColor: "",
          alignItems: "center",
          textAlign: "",
          top: "100%",
          left: "",
          width: "",
        },
      },
    },
    productList: {
      bg_image: "/images/home_wave_gif_1.gif",
      heading: "AI CCTV Camera Range for Every Need",
      description: "",
      products: [
        {
          product_type: "S-series",
          productarray: [
            {
              image: "/images/home_productlist_sseries_1.png",
              product_name: "AI PTZ camera",
              link: "/s-series/ai-ptz-cctv-camera",
            },
            {
              image: "/images/home_productlist_sseries_2.png",
              product_name: "AI Bullet camera",
              link: "/s-series/ai-bullet-cctv-camera",
            },
            {
              image: "/images/home_productlist_sseries_3.png",
              product_name: "AI Dome camera",
              link: "/s-series/ai-dome-cctv-camera",
            },
          ],
        },
      ],
    },
    CTAButton: {
      data: "Let Your Cameras Think, Not Just Watch. Upgrade to AI-powered CCTV with ArcisAI.",
      buttonText: "Schedule a Demo",
      d_image: "/images/sseries_cta.png",
      m_Image: "/images/sseries_cta_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "0%" },
        mobile: { top: "25%", left: "0%" },
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
          borderColor: "#000",
          bgColor: "",
          width: "200px",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "center",
          textAlign: "center",
          width: "95%",
        },
        mobile: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "center",
          textAlign: "center",
          width: "95%",
        },
      },
      textColor: "linear(30deg, #171717, #7F56D9)",
      alignItems: "center",
      textAlign: "center",
    },
  },
  ecoSeries: {
    hero: {
      // d_image: "/images/ecoseries_hero_main.png",
      // m_image: "/images/ecoseries_hero_main_mobile.png",
      d_image: "/images/sseries_hero_main.png",
      m_image: "/images/sseries_hero_main_mobile.png",
      heading: "Reliable CCTV Cameras for Everyday Security",
      description:
        "Built to handle Indian conditions with precision, the Eco-Series combines clear footage, stable operation and flexible installation options making it a trusted CCTV solution for long-lasting, essential security coverage.",
      sectionProps: {
        desktop: {
          marginTop: "",
        },
        mobile: {
          marginTop: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "",
          alignItems: "flex-start",
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
    productList: {
      bg_image: "/images/home_wave_gif_1.gif",
      heading: "Eco-Series: India’s Most Trusted CCTV Camera Range",
      description: "",
      products: [
        {
          product_type: "Eco-series",
          productarray: [
            {
              image: "/images/home_productlist_sseries_2.png",
              product_name: "Bullet CCTV camera",
              link: "/eco-series/bullet-cctv-camera",
            },
            {
              image: "/images/home_productlist_sseries_3.png",
              product_name: "Dome CCTV camera",
              link: "/eco-series/dome-cctv-camera",
            },
            {
              image: "/images/home_productlist_sseries_1.png",
              product_name: "PTZ CCTV camera",
              link: "/eco-series/ptz-cctv-camera",
            },
            // {
            //   image: "/images/home_productlist_sseries_1.png",
            //   product_name: "AI Baby PTZ camera",
            //   link: "eco-series/baby-ptz-cctv-camera",
            // },
          ],
        },
      ],
    },
    CTAButton: {
      data: "Get a Quote for Your CCTV Security Cameras",
      buttonText: "Enquire Now",
      d_image: "/images/sseries_cta.png",
      m_Image: "/images/sseries_cta_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "0%" },
        mobile: { top: "25%", left: "0%" },
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
          borderColor: "#000",
          bgColor: "",
          width: "200px",
          height: "",
        },
      },
      textProps: {
        desktop: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "center",
          textAlign: "center",
          width: "70%",
        },
        mobile: {
          textColor: "linear(150deg, #171717, #7F56D9)",
          alignItems: "center",
          textAlign: "center",
          width: "95%",
        },
      },
      textColor: "linear(30deg, #171717, #7F56D9)",
      alignItems: "center",
      textAlign: "center",
    },
  },
  nvrDvrSeries: {
    hero: [
      {
        id: 1,
        heading: "India’s Most Advanced AI-Powered Cloud VMS",
        description:
          "AI-powered, STQC-certified Cloud Video management system designed for India’s modern, large-scale surveillance needs with secure monitoring and smart analytics.",
        d_image: "/images/STQC_hero_main.png",
        m_image: "/images/STQC_hero_main.png",
        buttonText: "Talk to our Expert",
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
            textColor: "black",
            alignItems: "flex-start",
            textAlign: "",
            top: "7%",
            left: "",
            width: "",
          },
          mobile: {
            textColor: "white",
            alignItems: "flex-end",
            textAlign: "",
            top: "100%",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "black",
            textHover: "",
            borderColor: "#171717",
            borderHover: "",
            bgColor: "#EFEFEF",
            width: "",
            height: "",
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
      // {
      //   id: 2,
      //   heading:
      //     "India’s First AI CCTV Brand with GPT-Powered Surveillance Intelligence",
      //   description:
      //     "Ask your camera system anything — ArcisGPT responds instantly.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "12%",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "100%",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
      // {
      //   id: 3,
      //   heading: "Best AI CCTV Camera Company for Industrial Safety & Compliance",
      //   description: "Stay audit-ready with intelligent industrial monitoring.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
      // {
      //   id: 4,
      //   heading:
      //     "AI Security Cameras That Secure Your Warehouses & Logistics Zones",
      //   description: "Track vehicles, detect risk & prevent loss in real time.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
      // {
      //   id: 5,
      //   heading: "AI CCTV Cameras Built for Retail & Malls Surveillance in India",
      //   description: "Boost safety and shopper insights with AI-powered CCTV.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
      // {
      //   id: 6,
      //   heading: "India’s Top AI Security Camera Brand for Smart Cities",
      //   description:
      //     "Secure public spaces with AI-based face, crowd and object detection.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
      // {
      //   id: 7,
      //   heading: "Indian AI CCTV Camera System for Smart Housing Security",
      //   description:
      //     "24/7 AI-enabled residential safety, built for Indian societies.",
      //   image: "/images/home_hero_1.png",
      //   d_image: "/images/home_hero_1.png",
      //   m_image: "/images/mobile_home_hero_1.png",
      //   buttonText: "Let's Talk",
      //   buttonLink: "/contact-us",
      //   sectionProps: {
      //     desktop: {
      //       marginTop: "",
      //     },
      //     mobile: {
      //       marginTop: "",
      //     },
      //   },
      //   textProps: {
      //     desktop: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       alignItems: "",
      //       textAlign: "",
      //       top: "",
      //       left: "",
      //       width: "",
      //     },
      //   },
      //   buttonProps: {
      //     desktop: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //     mobile: {
      //       textColor: "",
      //       borderColor: "",
      //       bgColor: "",
      //       width: "",
      //       height: "",
      //       borderHover: "",
      //       textHover: "",
      //     },
      //   },
      // },
    ],
    informationData: {
      title: "What Is ArcisAI STQC Cloud VMS?",
      paragraphs: [
        "STQC-approved Cloud video management system that allows organizations to centralize and manage all their surveillance cameras, video recordings, and AI analytics from a single platform.",
        "Designed for India's modern surveillance needs, it ensures reliable performance, easy operations, real-time monitoring, and fully compliant data management—ideal for government agencies, enterprises, and multi-location deployments.",
      ],
      image: "/images/Standardisation_Testing_And_Quality_Certification.png",

      sectionProps: {
        desktop: {
          bgColor: "#fff",
          paddingY: "80px",
          paddingX: "80px",
          maxWidth: "1400px",
        },
        mobile: {
          paddingY: "40px",
          paddingX: "20px",
        },
      },
      contentProps: {
        desktop: {
          flex: "0.6",
          textAlign: "left",
          titleSize: "32px",
          titleWeight: "600",
          titleColor: "#000",
          titleMarginBottom: "20px",
          titleLineHeight: "42px",
          descSize: "16px",
          descWeight: "400",
          descColor: "#000",
          descLineHeight: "26px",
          descMaxWidth: "600px",
        },
        mobile: {
          textAlign: "left",
          titleSize: "24px",
          titleMarginBottom: "12px",
          titleLineHeight: "32px",
          descSize: "14px",
          descLineHeight: "22px",
        },
      },
      imageProps: {
        desktop: {
          flex: "0.4",
          width: "200px",
          height: "auto",
          justify: "flex-end",
          objectFit: "contain",
          borderRadius: "8px",
        },
        mobile: {
          width: "100%",
          height: "auto",
          justify: "center",
        },
        logo: {
          top: "20px",
          right: "20px",
          bgColor: "rgba(255, 255, 255, 0.95)",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          desktop: {
            width: "100px",
          },
          mobile: {
            width: "80px",
          },
        },
      },
    },
    features: {
      d_image: "/images/combo.png",
      m_image: "/images/product_feature_dome_bg_mobile.png",
      heading: "Cloud VMS Features That Make Surveillance Smarter and Safer",
      description: "",
      styles: {
        contentMarginTop: {
          mobile: "85%",
          tablet: "35%",
          laptop: "40%",
          bigscreen: "0%",
        },
        featuresMarginTop: {
          mobile: "5%",
          tablet: "5%",
          laptop: "5%",
          bigscreen: "5%",
        },
        alignment: "center",
        descriptionColor: "black",
        featureColor: "black",
      },
      featuresList: [
        { name: "STQC Certified VMS", icon: <FeatureIcon1 /> },
        { name: "Quick Camera Onboarding", icon: <FeatureIcon2 /> },
        { name: "Live View &  Playback", icon: <FeatureIcon3 /> },
        { name: "AI Detection & Analytics", icon: <FeatureIcon4 /> },
        { name: "Natural Language Video Search", icon: <FeatureIcon5 /> },
        { name: "Event Reports", icon: <FeatureIcon6 /> },
        { name: "Multi-Location Monitoring", icon: <FeatureIcon7 /> },
        { name: "Smart Timeline Playback", icon: <FeatureIcon8 /> },
        { name: "Role-Based Access Control", icon: <FeatureIcon9 /> },
        {
          name: "Intuitive User Interface",
          icon: <FeatureIcon10 />,
        },
        { name: "ONVIF Compatibility", icon: <FeatureIcon11 /> },
      ],
    },
    Innovation: {
      heading: "Innovation at the Core",
      subHeading:
        "Every ArcisAI innovation is designed in India and engineered for the world, ensuring our AI cameras don’t just record — they learn, adapt and evolve with every moment they capture.",
      array: [
        {
          title: "Computer Vision",
          description:
            "enabling cameras to detect, identify, and understand what they see.",
          icon: InnovationIcon1,
        },
        {
          title: "Multimodal AI",
          description:
            "combining video, audio, and contextual data for richer analysis.",
          icon: InnovationIcon2,
        },
        {
          title: "Human Activity Recognition (HAR)",
          description:
            "interpreting human motion, behavior, and intent in real time.",
          icon: InnovationIcon3,
        },
        {
          title: "Vision Transformers (ViT)",
          description:
            "enhancing visual perception and pattern recognition accuracy.",
          icon: InnovationIcon4,
        },
        {
          title: "Natural Language Understanding (NLU)",
          description:
            "allowing users to search and interact with surveillance data naturally.",
          icon: InnovationIcon5,
        },
        {
          title: "Generative AI for Video Summarization",
          description:
            "transforming hours of footage into meaningful, actionable highlights.",
          icon: InnovationIcon6,
        },
      ],
    },
    CTAButton1: {
      data: "Discover ArcisAI's STQC-Certified Cloud VMS for Smarter Surveillance",
      buttonText: "Try ArcisGPT",
      d_image: "/images/home_cta_1.png",
      m_Image: "/images/home_cta_mobile_1.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "5%" },
        mobile: { top: "70%", left: "5%" },
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
          alignItems: "flex-start",
          textAlign: "left",
          width: "",
        },
        mobile: {
          textColor: "linear(30deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
          width: "80%",
        },
      },
    },
    FAQsData: {
      heading: "FAQs",
      data: [
        {
          question: "How secure is the video data stored in ArcisAI cloud VMS>",
          answer:
            "All video streams and recordings are secured with end-to-end encryption and SQTC-compliant data protection standards, ensuring tamper-proof, safe, and audit-ready storage.",
        },
        {
          question: "Can users access the VMS from mobile or remote locations?",
          answer:
            "Yes. ArcisAI is a proudly AI-based Indian CCTV camera company, designed and manufactured by Adiance Technologies, a leading Indian OEM in surveillance and electronics. We’re committed to Make-in-India innovation and real-world protection.",
        },
      ],
    },
  },
  cloudVMS: {
    hero: [
      {
        id: 1,
        heading: "India’s Most Advanced AI-Powered Cloud VMS",
        description:
          "AI-powered, STQC-certified Cloud Video management system designed for India’s modern, large-scale surveillance needs with secure monitoring and smart analytics.",
        d_image: "/images/STQC_hero_main.png",
        m_image: "/images/STQC_hero_main_mobile.png",
        buttonText: "Talk to our Expert",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-1%",
            width: "100%",
          },
          mobile: {
            marginTop: "-25%",
          },
        },
        textProps: {
          desktop: {
            textColor: "black",
            alignItems: "flex-start",
            textAlign: "",
            top: "4%",
            left: "",
            width: "100%",
          },
          mobile: {
            textColor: "black",
            alignItems: "flex-start",
            textAlign: "",
            top: "25%",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "black",
            textHover: "",
            borderColor: "#171717",
            borderHover: "",
            bgColor: "#EFEFEF",
            width: "",
            height: "",
          },
          mobile: {
            textColor: "black",
            borderColor: "#171717",
            bgColor: "#171717",
            width: "",
            height: "",
            borderHover: "",
            textHover: "",
          },
        },
      },
    ],
    informationData: {
      title: "What Is ArcisAI STQC Cloud VMS?",
      paragraphs: [
        "STQC-approved Cloud video management system that allows organizations to centralize and manage all their surveillance cameras, video recordings, and AI analytics from a single platform.",
        "Designed for India's modern surveillance needs, it ensures reliable performance, easy operations, real-time monitoring, and fully compliant data management—ideal for government agencies, enterprises, and multi-location deployments.",
      ],
      image: "/images/Standardisation_Testing_And_Quality_Certification.png",

      sectionProps: {
        desktop: {
          bgColor: "#fff",
          paddingY: "80px",
          paddingX: "20px",
          maxWidth: "1400px",
        },
        mobile: {
          paddingY: "40px",
          paddingX: "20px",
        },
      },
      contentProps: {
        desktop: {
          flex: "0.6",
          textAlign: "left",
          titleSize: "42px",
          titleWeight: "400",
          titleColor: "#000",
          titleMarginBottom: "20px",
          titleLineHeight: "42px",
          descSize: "16px",
          descWeight: "400",
          descColor: "#000",
          descLineHeight: "26px",
          descMaxWidth: "600px",
        },
        mobile: {
          textAlign: "left",
          titleSize: "24px",
          titleMarginBottom: "12px",
          titleLineHeight: "32px",
          descSize: "14px",
          descLineHeight: "22px",
        },
      },
      imageProps: {
        desktop: {
          flex: "0.4",
          width: "200px",
          height: "auto",
          justify: "flex-end",
          objectFit: "contain",
          borderRadius: "8px",
        },
        mobile: {
          width: "50%",
          height: "auto",
          justify: "center",
        },
        logo: {
          top: "20px",
          right: "30px",
          bgColor: "rgba(255, 255, 255, 0.95)",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          desktop: {
            width: "100px",
          },
          mobile: {
            width: "80px",
          },
        },
      },
    },
    features: {
      d_image: "/images/cloud_vms_features.png",
      m_image: "/images/cloud_vms_features_mobile.png",
      heading: "Cloud VMS Features That Make Surveillance Smarter and Safer",
      description: "",
      styles: {
        contentMarginTop: {
          mobile: "15%",
          tablet: "35%",
          laptop: "0%",
          bigscreen: "0%",
        },
        featuresMarginTop: {
          mobile: "0%",
          tablet: "5%",
          laptop: "3%",
          bigscreen: "3%",
        },
        headingColor: "black",
        justify: "left",

        alignment: "center",
        descriptionColor: "black",
        featureColor: "black",
      },
      featuresList: [
        { name: "STQC Certified VMS", icon: <FeatureIcon1 /> },
        { name: "Quick Camera Onboarding", icon: <FeatureIcon2 /> },
        { name: "Live View &  Playback", icon: <FeatureIcon3 /> },
        { name: "AI Detection & Analytics", icon: <FeatureIcon4 /> },
        { name: "Natural Language Video Search", icon: <FeatureIcon5 /> },
        { name: "Event Reports", icon: <FeatureIcon6 /> },
        { name: "Multi-Location Monitoring", icon: <FeatureIcon7 /> },
        { name: "Smart Timeline Playback", icon: <FeatureIcon8 /> },
        { name: "Role-Based Access Control", icon: <FeatureIcon9 /> },
        {
          name: "Intuitive User Interface",
          icon: <FeatureIcon10 />,
        },
        { name: "ONVIF Compatibility", icon: <FeatureIcon11 /> },
      ],
    },
    Innovation: {
      heading: "STQC-Certified Cloud VMS: Secure, Reliable, and Compliant",

      array: [
        {
          title: "Government-Grade Security & Compliance",
          description:
            "STQC-approved Cloud VMS ensuring compliance with India’s official security and data regulations.",
          icon: InnovationIcon1,
        },
        {
          title: "Centralized AI-Powered Monitoring",
          description:
            "Monitor and analyze multiple sites and cameras from one secure, centralized dashboard.",
          icon: InnovationIcon2,
        },
        {
          title: "Secure Cloud Storage",
          description:
            "Encrypted, STQC-compliant video storage for tamper-proof and audit-ready recordings.",
          icon: InnovationIcon3,
        },
        {
          title: "Simplified Operations & Quick Deployment",
          description:
            "Fast, plug-and-play deployment across enterprises and government projects.",
          icon: InnovationIcon4,
        },
        {
          title: "Audit-Ready Data Management",
          description:
            "Complete logging of actions, alerts, and playback for STQC-compliant audits.",
          icon: InnovationIcon5,
        },
        {
          title: "Scalable Cloud Architecture",
          description:
            "Seamlessly scale to thousands of cameras without additional on-premise servers.",
          icon: InnovationIcon6,
        },
      ],
    },
    CTAButton1: {
      data: "Discover ArcisAI's STQC-Certified Cloud VMS for Smarter Surveillance",
      buttonText: "Try ArcisGPT",
      d_image: "/images/abd_cta_1.png",
      m_Image: "/images/home_cta_mobile_1.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "5%" },
        mobile: { top: "70%", left: "5%" },
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
          alignItems: "flex-start",
          textAlign: "left",
          width: "",
        },
        mobile: {
          textColor: "linear(30deg, #171717, #7F56D9)",
          alignItems: "flex-start",
          textAlign: "left",
          width: "80%",
        },
      },
    },
    FAQsData: {
      heading: "FAQs",
      data: [
        {
          question: "How secure is the video data stored in ArcisAI cloud VMS>",
          answer:
            "All video streams and recordings are secured with end-to-end encryption and SQTC-compliant data protection standards, ensuring tamper-proof, safe, and audit-ready storage.",
        },
        {
          question: "Can users access the VMS from mobile or remote locations?",
          answer:
            "Yes. ArcisAI is a proudly AI-based Indian CCTV camera company, designed and manufactured by Adiance Technologies, a leading Indian OEM in surveillance and electronics. We’re committed to Make-in-India innovation and real-world protection.",
        },
      ],
    },
  },
  arcisBridgeDevice: {
    hero: [
      {
        id: 1,
        heading:
          "Arcis Bridge Device: Connect Any CCTV Camera to ArcisAI Ecosystem",
        description:
          "Connect all existing ONVIF cameras to ArcisAI VMS for cloud monitoring, centralized management, and smart features—cost-effectively and hassle-free.",
        d_image: "/images/abd_hero_main.png",
        m_image: "/images/abd_hero_main.png",
        buttonText: "Lets Talk",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-1%",
          },
          mobile: {
            marginTop: "-10%",
          },
        },
        textProps: {
          desktop: {
            textColor: "white",
            alignItems: "flex-start",
            textAlign: "",
            top: "5%",
            left: "",
            width: "100%",
          },
          mobile: {
            textColor: "white",
            alignItems: "flex-start",
            textAlign: "",
            top: "15%",
            left: "",
            width: "",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "white",
            textHover: "",
            borderColor: "#fff",
            borderHover: "",
            bgColor: "#4B4B4B",
            width: "",
            height: "",
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
    // informationData: {
    //   title: "What is Arcis Bridge Device (ABD)?",
    //   paragraphs: [
    //     "The ArcisAI Bridge Device (ABD) is a compact, intelligent device that transforms your existing CCTV setup into a cloud-ready, smart surveillance system.",
    //     "Most organizations want AI-enabled, cloud-based monitoring, but replacing an entire camera setup is expensive and impractical. ABD allows you to keep every existing ONVIF camera and instantly connect it to the ArcisAI VMS platform, enabling centralized control, cloud storage, alerts, and reporting—all from a single interface.",
    //   ],
    //   sectionProps: {
    //     desktop: {
    //       bgColor: "#191919",
    //       paddingY: "50px",
    //       paddingX: "20px",
    //       maxWidth: "100%",
    //       display: "flex",
    //       justifyContent: "center",
    //     },
    //     mobile: {
    //       paddingY: "40px",
    //       paddingX: "20px",
    //       display: "flex",
    //       justifyContent: "center",
    //     },
    //   },
    //   contentProps: {
    //     desktop: {
    //       flex: "1",
    //       width: "100%", // NEW: Set to 80%, 85%, or 90% as needed
    //       contentMaxWidth: "1500px", // OPTIONAL: Maximum width constraint
    //       textAlign: "center",
    //       titleSize: "60px",
    //       titleWeight: "400",
    //       titleColor: "#fff",
    //       titleMarginBottom: "20px",
    //       titleLineHeight: "50px",
    //       descSize: "18px",
    //       descWeight: "400",
    //       descColor: "#b8b8b8",
    //       descLineHeight: "22px",
    //       descMaxWidth: "1650px",
    //       paragraphSpacing: "16px",
    //     },
    //     mobile: {
    //       textAlign: "center",
    //       titleSize: "24px",
    //       titleMarginBottom: "16px",
    //       titleLineHeight: "32px",
    //       descSize: "13px",
    //       descLineHeight: "20px",
    //       paragraphSpacing: "14px",
    //     },
    //   },
    // },
    features: {
      d_image: "/images/abd_features.png",
      m_image: "/images/abd_features_mobile.png",
      heading: "Unlock Cloud Monitoring and AI Features on Existing Cameras",
      description: "",
      styles: {
        contentMarginTop: {
          mobile: "15%",
          tablet: "35%",
          laptop: "0%",
          bigscreen: "0%",
        },
        featuresMarginTop: {
          mobile: "0%",
          tablet: "5%",
          laptop: "3%",
          bigscreen: "3%",
        },
        alignment: "center",
        descriptionColor: "black",
        featureColor: "white",
      },
      featuresList: [
        { name: "Plug-and-Play Integration", icon: <ArcisIcon1 /> },
        { name: "Universal Camera Support", icon: <ArcisIcon2 /> },
        { name: "Centralized Management", icon: <ArcisIcon3 /> },
        { name: "Cloud Connectivity", icon: <ArcisIcon4 /> },
        { name: "AI-Ready Features", icon: <ArcisIcon5 /> },
        { name: "Multi-Site Deployment", icon: <ArcisIcon6 /> },
        { name: "Scalable Channels", icon: <ArcisIcon7 /> },
        { name: "Cost-Effective Upgrade", icon: <ArcisIcon8 /> },
      ],
    },
    Innovation: {
      heading: "Centralize Your CCTV Monitoring with Arcis Bridge Device",

      array: [
        {
          title: "Connect 5 Cameras per Device",
          description:
            "Each ABD connects up to five ONVIF CCTV cameras, bringing them into the ArcisAI VMS without replacing existing hardware.",
          icon: InnovationIcon4,
        },
        {
          title: "Use Your Existing Cameras",
          description:
            "Keep your current CCTV cameras and extend their life while enabling cloud recording, AI alerts and smart streaming via ArcisAI VMS.",
          icon: InnovationIcon9,
        },
        {
          title: "Centralized Monitoring",
          description:
            "View, manage and replay all cameras from a single dashboard, across multiple locations ensuring seamless surveillance management.",
          icon: InnovationIcon10,
        },
        {
          title: "Hybrid Deployments",
          description:
            "Combine ArcisAI cameras and third-party CCTV cameras effortlessly on one platform, enabling mixed-brand deployments without compatibility issues.",
          icon: InnovationIcon8,
        },
        {
          title: "Multi-Site Control",
          description:
            "Monitor, manage, and control all cameras across multiple sites efficiently from one interface, ideal for enterprises, retail chains, factories, and system integrators.",
          icon: InnovationIcon5,
        },
      ],
    },
    CTAButton1: {
      data: "Modernize Your Existing CCTV Surveillance With Arcis Bridge Device",
      buttonText: "Schedule a Demo",
      d_image: "/images/abd_cta.png",
      m_Image: "/images/whyarcis_cta_mobile.png",
      link: "/contact-us",
      textPosition: {
        desktop: { top: "50%", left: "1%" }, // Changed to 50%
        mobile: { top: "50%", left: "1%" }, // Changed to 50%
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
    FAQsData: {
      heading: "Frequently Asked Questions",
      data: [
        {
          question: "How many cameras can one ABD device support?",
          answer:
            "Each ABD can connect up to five CCTV cameras, making it ideal for small to medium deployments while maintaining centralized control.",
        },
        {
          question:
            "Can I use ABD with a mix of ArcisAI and other brand cameras?",
          answer:
            "Absolutely. ABD supports hybrid deployments, allowing you to combine ArcisAI cameras with third-party cameras seamlessly on one platform.",
        },
      ],
    },
  },
  nvr: {
    hero: [
      {
        id: 1,
        heading: "High-Quality NVR Recorders for Smooth CCTV Monitoring",

        d_image: "/images/nvr_hero_main.png",
        m_image: "/images/nvr_hero_main.png",
        buttonText: "Lets Talk",
        buttonLink: "/contact-us",
        sectionProps: {
          desktop: {
            marginTop: "-1%",
          },
          mobile: {
            marginTop: "",
          },
        },
        textProps: {
          desktop: {
            textColor: "white",
            alignItems: "center",
            textAlign: "center",
            top: "-25%",
            left: "0",
            width: "100%",
          },
          mobile: {
            textColor: "white",
            alignItems: "center",
            textAlign: "center",
            top: "30%",
            left: "0",
            width: "100%",
          },
        },
        buttonProps: {
          desktop: {
            textColor: "white",
            textHover: "",
            borderColor: "#EFEFEF",
            borderHover: "",
            bgColor: "#171717",
            width: "",
            height: "",
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
    // informationData: {
    //   title:
    //     "Powerful Network Video Recorders Built for 24/7 CCTV Security Surveillance",
    //   paragraphs: [
    //     "ArcisAI Network Video Recorders deliver stable, high-resolution recording for 4CH, 8CH, 16CH, and 32CH CCTV setups. Built with high bandwidth performance, PoE support, and long-term storage capacity, these NVRs ensure smooth video streaming, clear playback, and uninterrupted 24/7 surveillance—ideal for commercial, industrial, and enterprise environments.",
    //     "Whether you’re deploying a small office system or managing multi-location surveillance, ArcisAI NVRs offer the reliability, scalability, and compatibility required for modern security infrastructures.",
    //   ],

    //   sectionProps: {
    //     desktop: {
    //       bgColor: "#1a1a1a",
    //       paddingY: "80px",
    //       paddingX: "80px",
    //       maxWidth: "1600px",
    //       display: "flex",
    //       justifyContent: "center",
    //     },
    //     mobile: {
    //       paddingY: "40px",
    //       paddingX: "20px",
    //       display: "flex",
    //       justifyContent: "center",
    //     },
    //   },
    //   contentProps: {
    //     desktop: {
    //       flex: "0",
    //       textAlign: "center",
    //       titleSize: "42px",
    //       titleWeight: "600",
    //       titleColor: "#fff",
    //       titleMarginBottom: "24px",
    //       titleLineHeight: "52px",
    //       descSize: "16px",
    //       descWeight: "400",
    //       descColor: "#e0e0e0",
    //       descLineHeight: "26px",
    //       descMaxWidth: "900px",
    //       paragraphSpacing: "20px",
    //     },
    //     mobile: {
    //       textAlign: "center",
    //       titleSize: "28px",
    //       titleMarginBottom: "16px",
    //       titleLineHeight: "36px",
    //       descSize: "14px",
    //       descLineHeight: "22px",
    //       paragraphSpacing: "16px",
    //     },
    //   },
    // },
    productInfo: {
      title: "Choose the Perfect NVR Model for Your Security Needs",

      sectionProps: {
        bgColor: "#000",
        maxWidth: "1400px",
        desktop: {
          paddingY: "80px",
          paddingX: "80px",
        },
        mobile: {
          paddingY: "40px",
          paddingX: "15px",
        },
      },

      titleProps: {
        fontWeight: "400",
        color: "#fff",
        textAlign: "center",
        desktop: {
          fontSize: "60px",
          lineHeight: "52px",
          marginBottom: "50px",
        },
        mobile: {
          fontSize: "28px",
          lineHeight: "36px",
          marginBottom: "10px",
        },
      },

      models: [
        {
          name: "AD-N0481-PoE | 4 Channel",
          image: "/images/nvr-4-channel.png",
          headerBgColor: "#333333", // Optional: specific color for header
          contentBgColor: "#000", // Background for expanded content
          headerHoverBgColor: "#222", // Optional: hover state for header
          imageBgColor: "#333333",
          specifications: [
            { label: "Channel Support", value: "4 Channel" },
            { label: "Access Bandwidth", value: "20 Mbps" },
            { label: "Recording Capability", value: "Up to 4CH 8MP" },
            { label: "Playback Capability", value: "1CH 8MP Playback" },
            { label: "Storage Capacity", value: "1× SATA, up to 6TB" },
            { label: "PoE Ports", value: "4× PoE Ports" },
          ],
          downloadLink: "/pdfs/nvr-32-channel.pdf",
          downloadText: "Download PDF",
          buttonWidth: "160px",
          buttonHeight: "40px",
          buttonBgColor: "#222",
          buttonBorderColor: "#A4FF79",
          buttonTextColor: "#fff",
          buttonHoverBorderColor: "#A4FF79",
          buttonHoverTextColor: "#A4FF79",
        },
        {
          name: "AD-N0881-PoE | 8 Channel",
          image: "/images/nvr-4-channel.png",
          headerBgColor: "#333333", // Optional: specific color for header
          contentBgColor: "#000", // Background for expanded content
          headerHoverBgColor: "#222", // Optional: hover state for header
          imageBgColor: "#333333",
          specifications: [
            { label: "Channel Support", value: "8 Channel" },
            { label: "Access Bandwidth", value: "40 Mbps" },
            { label: "Recording Capability", value: "Up to 8CH 8MP" },
            { label: "Playback Capability", value: "1CH 8MP Playback" },
            { label: "Storage Capacity", value: "1× SATA, up to 6TB" },
            { label: "PoE Ports", value: "8× PoE Ports" },
          ],
          downloadLink: "/pdfs/nvr-32-channel.pdf",
          downloadText: "Download PDF",
          buttonWidth: "160px",
          buttonHeight: "40px",
          buttonBgColor: "#222",
          buttonBorderColor: "#fff",
          buttonTextColor: "#fff",
          buttonHoverBorderColor: "#A4FF79",
          buttonHoverTextColor: "#A4FF79",
        },
        {
          name: "AD-N0481-PoE | 16 Channel",
          image: "/images/nvr-4-channel.png",
          headerBgColor: "#333333", // Optional: specific color for header
          contentBgColor: "#000", // Background for expanded content
          headerHoverBgColor: "#222", // Optional: hover state for header
          imageBgColor: "#333333",
          specifications: [
            { label: "Channel Support", value: "16 Channel" },
            { label: "Access Bandwidth", value: "72 Mbps" },
            { label: "Recording Capability", value: "Up to 16CH 8MP" },
            { label: "Playback Capability", value: "1CH 8MP Playback" },
            { label: "Storage Capacity", value: "1× SATA, up to 6TB" },
            { label: "PoE Ports", value: "1× PoE Ports" },
          ],
          downloadLink: "/pdfs/nvr-32-channel.pdf",
          downloadText: "Download PDF",
          buttonWidth: "160px",
          buttonHeight: "40px",
          buttonBgColor: "#222",
          buttonBorderColor: "#fff",
          buttonTextColor: "#fff",
          buttonHoverBorderColor: "#A4FF79",
          buttonHoverTextColor: "#A4FF79",
        },
        {
          name: "AD-N3251 | 32 Channel",
          image: "/images/nvr-4-channel.png",
          headerBgColor: "#333333", // Optional: specific color for header
          contentBgColor: "#000", // Background for expanded content
          headerHoverBgColor: "#222", // Optional: hover state for header
          imageBgColor: "#333333",
          specifications: [
            { label: "Channel Support", value: "32 Channel" },
            { label: "Access Bandwidth", value: "150 Mbps" },
            { label: "Recording Capability", value: "Up to 32CH 5MP" },
            { label: "Playback Capability", value: "" },
            { label: "Storage Capacity", value: "2× SATA, up to 6TB" },
            { label: "PoE Ports", value: "1× PoE Ports" },
          ],
          downloadLink: "/pdfs/nvr-32-channel.pdf",
          downloadText: "Download PDF",
          buttonWidth: "160px",
          buttonHeight: "40px",
          buttonBgColor: "#222",
          buttonBorderColor: "#fff",
          buttonTextColor: "#fff",
          buttonHoverBorderColor: "#A4FF79",
          buttonHoverTextColor: "#A4FF79",
        },
      ],
    },
    features: {
      d_image: "",
      m_image: "",
      heading:
        "Powerful Network Video Recorders Built for 24/7 CCTV Security Surveillance",
      description: [
        "ArcisAI Network Video Recorders deliver stable, high-resolution recording for 4CH, 8CH, 16CH, and 32CH CCTV setups. Built with high bandwidth performance, PoE support, and long-term storage capacity, these NVRs ensure smooth video streaming, clear playback, and uninterrupted 24/7 surveillance—ideal for commercial, industrial, and enterprise environments.",
        "Whether you’re deploying a small office system or managing multi-location surveillance, ArcisAI NVRs offer the reliability, scalability, and compatibility required for modern security infrastructures.",
      ],
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
        justify: "flex=start",
        alignment: "center",
        descriptionColor: "white",
        featureColor: "white",
      },
      featuresList: [
        { name: "Multi-Channel Support", icon: <ArcisIcon6 /> },
        { name: "High-Bandwidth Performance", icon: <NvrIcon1 /> },
        { name: "3MP/5MP/8MP Recording", icon: <NvrIcon6 /> },
        { name: "Built-In PoE Ports", icon: <ArcisIcon1 /> },
        { name: "Large Storage Capacity", icon: <NvrIcon3 /> },
        { name: "ONVIF Compatible", icon: <NvrIcon4 /> },
        { name: "Secure Recording", icon: <NvrIcon2 /> },
        { name: "Multi-Site Management", icon: <NvrIcon5 /> },
        { name: "Stable 24/7 Operation", icon: <ArcisIcon7 /> },
      ],
    },
    Innovation: {
      heading: "Why Choose ArcisAI NVRs for Your Surveillance Infrastructure?",

      array: [
        {
          title: "Built for Long-Term Reliability",
          description:
            "Designed for continuous operation in commercial and industrial environments.",
          icon: NvrInnovationIcon1,
        },
        {
          title: "Lower Ownership Cost",
          description:
            "Built-in PoE, simple setup, and long retention reduce wiring and maintenance costs.",
          icon: NvrInnovationIcon2,
        },
        {
          title: "Integration With Any CCTV Setup",
          description:
            "Works with ArcisAI cameras and all ONVIF-compatible third-party cameras.",
          icon: NvrInnovationIcon3,
        },
        {
          title: "Multi-Site Management",
          description:
            "Manage and review multiple locations from a single interface.",
          icon: NvrInnovationIcon4,
        },
        {
          title: "Data Protection",
          description:
            "Encrypted recording and strict authentication protect against unauthorized access.",
          icon: NvrInnovationIcon5,
        },
        {
          title: "Trusted by SI & OEM Partners",
          description:
            "Reliable performance, easy deployment, and high compatibility for large projects.",
          icon: NvrInnovationIcon6,
        },
      ],
    },
    CTAButton1: {
      data: "Modernize Your Existing CCTV Surveillance With Arcis Bridge Device",
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
    FAQsData: {
      heading: "Frequently Asked Questions",
      data: [
        {
          question:
            "How do I choose the right NVR capacity for my CCTV cameras?",
          answer:
            "Select an NVR based on the number of cameras, resolution (3MP/5MP/8MP), storage needs, and future expansion so your CCTV system runs efficiently.",
        },
        {
          question: "Can the NVR work with any brand’s CCTV cameras?",
          answer:
            "If the NVR is ONVIF compatible, it can work with most IP camera brands, ensuring flexible CCTV integration.",
        },
      ],
    },
  },
};
