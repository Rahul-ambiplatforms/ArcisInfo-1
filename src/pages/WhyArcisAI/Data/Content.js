import { ReactComponent as FeatureIcon1 } from "../../../Components/Icons/whyarcis_camerafeatures_1.svg";
import { ReactComponent as FeatureIcon2 } from "../../../Components/Icons/whyarcis_camerafeatures_2.svg";
import { ReactComponent as FeatureIcon3 } from "../../../Components/Icons/whyarcis_camerafeatures_3.svg";
import { ReactComponent as FeatureIcon4 } from "../../../Components/Icons/whyarcis_camerafeatures_4.svg";
import { ReactComponent as FeatureIcon5 } from "../../../Components/Icons/whyarcis_camerafeatures_5.svg";
import { ReactComponent as ServiceIcon1 } from "../../../Components/Icons/whyarcis_service_1.svg";
import { ReactComponent as ServiceIcon2 } from "../../../Components/Icons/whyarcis_service_2.svg";
import { ReactComponent as ServiceIcon3 } from "../../../Components/Icons/whyarcis_service_3.svg";
import { ReactComponent as ServiceIcon4 } from "../../../Components/Icons/whyarcis_service_4.svg";
import { ReactComponent as ServiceIcon5 } from "../../../Components/Icons/whyarcis_service_5.svg";
import { ReactComponent as ServiceIcon6 } from "../../../Components/Icons/whyarcis_service_6.svg";
import { ReactComponent as ServiceIcon7 } from "../../../Components/Icons/whyarcis_service_7.svg";
import { ReactComponent as ServiceIcon8 } from "../../../Components/Icons/whyarcis_service_8.svg";
import { ReactComponent as ServiceIcon9 } from "../../../Components/Icons/whyarcis_service_9.svg";
import { ReactComponent as ServiceIcon10 } from "../../../Components/Icons/whyarcis_service_10.svg";

export const WhyArcisAIContent = {
  hero: [
    {
      heading:
        "Smarter AI CCTV Starts with ArcisAI - EdgeAI, CloudAI & ArcisGPT in One Platform",
      description:
        "At ArcisAI, we give you real-time detection right from the camera, powerful cloud insights and ArcisGPT to help you find footage just by asking. We make CCTV simpler, faster and built entirely around your needs.",
      buttonText: "Request a Demo",
      buttonLink: "/contact-us",
      image: "/images/camera3.png",
      d_image: "/images/whyarcis_hero.png",
      m_image: "/images/whyarcis_hero.png",
      // m_image: "/images/whyarcis_hero_mobile.png",
    },
  ],
  EdgeAIFeatures: {
    image: "/images/whyarcisai_edgeai_main.png",
    heading: "AI CCTV That Works at the Edge. No Servers. No Waiting",
    description:
      "With EdgeAI, the intelligence lives inside the camera - not in a server. That means faster alerts, smarter detection and less dependency on NVRs or heavy setups. Unlike traditional CCTV that just records, our security cameras detect and notify in real time, keeping you informed the moment something happens.",
    subHeading:
      "Here are the EdgeAI powered features that work instantly inside our cameras",
    features: [
      {
        name: "Line Crossing Detection",
        description:
          "Notifies when someone crosses a virtual boundary or restricted path.",
        image: "/images/whyarcisai_edgeai_feature_1.png",
      },
      {
        name: "Area Detection",
        description:
          "Alerts when a person enters a defined no-go zone or sensitive space.",
        image: "/images/whyarcisai_edgeai_feature_2.png",
      },
      {
        name: "Customer Traffic Statistics",
        description:
          "Counts visitors, observes movement patterns and detects crowd build-ups — enabling smarter space management.",
        image: "/images/whyarcisai_edgeai_feature_3.png",
      },
      {
        name: "Unattended Object Detection",
        description:
          "Detects suspicious, left-behind items like bags or boxes in public areas.",
        image: "/images/whyarcisai_edgeai_feature_4.png",
      },
      {
        name: "Missing Object Detection",
        description:
          "Alerts when an object is removed from its place — keeping assets accounted for.",
        image: "/images/whyarcisai_edgeai_feature_5.png",
      },
      {
        name: "Human Detection",
        description:
          "Detects when a person appears in view — enabling real-time activity awareness.",
        image: "/images/whyarcisai_edgeai_feature_6.png",
      },
      {
        name: "Face Detection",
        description:
          "Identifies when a human face appears in view — enabling real-time presence awareness and identity monitoring.",
        image: "/images/whyarcisai_edgeai_feature_7.png",
      },
      {
        name: "Motion Detection",
        description:
          "Detects movement within the frame and triggers instant notifications.",
        image: "/images/whyarcisai_edgeai_feature_8.png",
      },
    ],
  },
  ArcisGPTFeatures: {
    heading: "Stop Scrubbing. Start Asking. ArcisGPT Makes CCTV Conversational",
    description:
      "ArcisGPT turns hours of footage into instant answers using GenAI. Just ask what happened, when or where - and get smart summarized results as images, text or video. Available as a paid add-on for enabled cameras, ArcisGPT brings conversational search and faster incident review to your AI CCTV system.",
    features: [
      {
        name: "Smart Data Retrieval",
        description:
          "Easily find key video moments using natural language commands - cutting down manual review time and boosting efficiency.",
        icon: <FeatureIcon1 />,
      },
      {
        name: "Track Any Object or Person",
        description:
          "Track individuals or objects across multiple cameras in live or recorded footage - even in crowded or complex scenes - with high accuracy.",
        icon: <FeatureIcon2 />,
      },
      {
        name: "Visual Intelligence Powered by GPT",
        description:
          "AI understands video content and delivers clear, context-aware summaries in natural language, helping teams act faster with better insights.",
        icon: <FeatureIcon3 />,
      },
      {
        name: "Activity & Action Recognition",
        description:
          "Detect actions like standing, sitting, running, falling or loitering in real-time using pattern-based recognition. Get instant alerts to respond to potential threats swiftly.",
        icon: <FeatureIcon4 />,
      },
      {
        name: "Custom Video Data Reports",
        description:
          "Create detailed reports from selected footage based on specific incidents or events. Includes smart summaries and key insights to simplify analysis and reporting.",
        icon: <FeatureIcon5 />,
      },
    ],
  },
  CTAButton: {
    data: "Discover GPT-Powered AI in Your CCTV System with ArcisGPT",
    buttonText: "Try ArcisGPT",
    d_image: "/images/whyarcis_cta.png",
    m_Image: "/images/whyarcis_cta.png",
    // m_Image: "/images/whyarcis_cta_mobile.png",
    link: "#",
    textPosition: {
      desktop: { top: "50%", left: "5%" },
      mobile: { top: "60%", left: "5%" },
    },
    buttonProps: {
      desktop: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "",
        height: "",
      },
      mobile: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "",
        height: "",
      },
    },
    textProps: {
      desktop: { textColor: "linear(30deg, #171717, #7F56D9)", alignItems: "flex-start", textAlign: "left" },
      mobile: { textColor: "linear(30deg, #171717, #7F56D9)", alignItems: "flex-start", textAlign: "left" },
    },
    textColor: "linear(30deg, #171717, #7F56D9)",
    alignItems: "flex-start",
    textAlign: "left",
  },
  GoodbyeNVR: {
    heading:
      "Say Goodbye to NVR Hassles - Store Your CCTV Footage on the Cloud",
    description:
      "Move beyond the limitations of traditional NVR systems. With our secure Indian cloud-based storage, you get easy, on-demand access to your CCTV footage - minimizing the need for bulky on-site hardware and making surveillance more flexible and efficient.",
    description2:
      "Choose from a range of simple storage options designed to fit your needs: 1-day, 3-day, 7-day, 15-day or 30-day plans. Our pricing is based on a per camera, per year model with multiple plan options available. Whether for short-term monitoring or extended retention, our cloud plans keep your footage safe, accessible and hassle-free.",
    d_image: "/images/whyarcis_goodbyenvr.png",
    m_image: "/images/whyarcis_goodbyenvr.png",
  },
  ArcisVMS: {
    heading:
      "All Your AI CCTV Intelligence in One Platform - Welcome to the ArcisVMS",
    description:
      "ArcisVMS is the all-in-one AI CCTV platform that unifies EdgeAI alerts, CloudAI analytics, ArcisGPT video summaries, and cloud storage into one powerful system. Access it seamlessly via the VMS and mobile app for real-time visibility, smart alerts, and complete control — whether you're overseeing retail, industrial, smart city, or gated environments. Stay secure, informed, and in command from one scalable, unified dashboard.",
    d_image: "/images/whyarcis_arcisvms.png",
    m_image: "/images/whyarcis_arcisvms.png",
  },
  Services: [
    {
      name: "STQC-Certified VMS",
      description:
        "Ensures end-to-end data security and compliance for critical deployments.",
      icon: <ServiceIcon1 />,
    },
    {
      name: "Mobile Alerts (Free)",
      description:
        "Get smart detection alerts via the ArcisAI Mobile app - no extra cost.",
      icon: <ServiceIcon2 />,
    },
    {
      name: "Access Control Sharing",
      description: "Grant or restrict camera access instantly by team or role.",
      icon: <ServiceIcon3 />,
    },
    {
      name: "Camera Grouping",
      description:
        "Organize cameras by department, site, or zone for quick monitoring.",
      icon: <ServiceIcon4 />,
    },
    {
      name: "Custom View Modes",
      description:
        "Switch between grid and list layouts to suit your workflow.",
      icon: <ServiceIcon5 />,
    },
    {
      name: "Auto Firmware Updates",
      description: "Keep cameras up to date without manual effort.",
      icon: <ServiceIcon6 />,
    },
    {
      name: "QR Code Setup",
      description: "Onboard cameras in seconds — perfect for fast rollouts.",
      icon: <ServiceIcon7 />,
    },
    {
      name: "Two-Way Audio",
      description: "Speak directly through cameras for real-time instructions.",
      icon: <ServiceIcon8 />,
    },
    {
      name: "Exportable Reports",
      description:
        "Download footage logs with time, event type, and snapshots.",
      icon: <ServiceIcon9 />,
    },
    {
      name: "Third-Party Compatible",
      description: "Works with other VMS platforms and non-AI cameras.",
      icon: <ServiceIcon10 />,
    },
  ],
  CTAButton2: {
    data: "Manny Have Upgraded to Smarter Security - Will You?",
    buttonText: "Schedule a Demo",
    d_image: "/images/whyarcis_cta_2.png",
    m_Image: "/images/whyarcis_cta_2.png",
    // m_Image: "/images/whyarcis_cta_mobile_2.png",
    link: "#",
    textPosition: {
      desktop: { top: "50%", left: "5%" },
      mobile: { top: "60%", left: "5%" },
    },
    buttonProps: {
      desktop: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "",
        height: "",
      },
      mobile: {
        textColor: "linear(30deg, #171717, #7F56D9)",
        borderColor: "#7F56D9",
        bgColor: "",
        width: "",
        height: "",
      },
    },
    textProps: {
      desktop: { textColor: "linear(30deg, #171717, #7F56D9)", alignItems: "center", textAlign: "center" },
      mobile: { textColor: "linear(30deg, #171717, #7F56D9)", alignItems: "center", textAlign: "center" },
    },
    textColor: "linear(30deg, #171717, #7F56D9)",
    alignItems: "center",
    textAlign: "center",
  },
  FAQsData: {
    heading: "FAQs About ArcisAI Security Cameras",
    data: [
      {
        question: "What makes us different from traditional CCTV systems?",
        answer:
          "We offer EdgeAI and CloudAI capabilities in every camera, plus GPT-powered video summaries and STQC-certified VMS - all in one platform.",
      },
      {
        question: "Is my CCTV footage stored securely?",
        answer:
          "Yes, your footage is stored securely on our Indian cloud servers with end-to-end encryption, ensuring complete data privacy and compliance with local regulations.",
      },
      {
        question: "Can I access cameras from my mobile phone?",
        answer:
          "Absolutely. You can access live feeds, recorded footage, and receive smart alerts directly on your smartphone via the ArcisAI Mobile app, available for both iOS and Android.",
      },
      {
        question: "How do I get started with ArcisAI?",
        answer:
          "Getting started is easy. Simply request a demo through our website, and our team will guide you through the selection of cameras and plans that best fit your security needs.",
      },
    ],
  },
};
