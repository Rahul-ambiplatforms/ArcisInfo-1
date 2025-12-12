import InnovationIcon1 from "../../../Components/Icons/aboutus_innovation_1.svg";
import InnovationIcon2 from "../../../Components/Icons/aboutus_innovation_2.svg";
import InnovationIcon3 from "../../../Components/Icons/aboutus_innovation_3.svg";
import InnovationIcon4 from "../../../Components/Icons/aboutus_innovation_4.svg";
import InnovationIcon5 from "../../../Components/Icons/aboutus_innovation_5.svg";
import InnovationIcon6 from "../../../Components/Icons/aboutus_innovation_6.svg";

export const AboutUsContent = {
  hero: {
    image: "/images/ArcisAi_logo.png",
    d_image: "/images/aboutus_home.png",
    m_image: "/images/aboutus_home.png",
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
    heading: "India’s First Complete AI CCTV Ecosystem",
    subheading:
      "Smarter Surveillance. Real-Time Intelligence. Trusted Performance.",
    description: [
      "ArcisAI is an advanced AI CCTV Camera brand by Adiance Technologies, built to redefine security through Edge AI, Cloud AI, and Generative AI. We are not just transforming how cameras capture the visuals — we are transforming how they understand, analyze and act in real time.",
      "Designed and manufactured in India, ArcisAI’s security surveillance ecosystem combines Edge-AI Cameras, advanced AI Detections on Cloud, STQC-Certified Cloud VMS, GenAI-powered Video Intelligence and ArcisAI Mobile App, offering one of the most complete, intelligent and secure surveillance solutions in the world.",
    ],
  },
  poweredBy: {
    heading: "Powered by Adiance Technologies",
    subheading: "ODM & OEM CCTV Manufacturer From Gujarat",
    image: "/images/aboutus_adiance.png", // Placeholder
    description: [
      "ArcisAI is proudly powered by Adiance Technologies, a leading OEM and ODM CCTV manufacturer with world-class R&D, SMT manufacturing lines, and AI engineering capabilities at Sanad, Ahmedabad, Gujarat.",
      "Adiance specializes in developing AI-enabled surveillance hardware, firmware, and software tailored to global standards. With end-to-end manufacturing — from PCB assembly and firmware design to AI model integration and cloud architecture — Adiance ensures that every ArcisAI product meets the highest standards of quality, scalability and security.",
    ],
  },
  Vision: {
    name: "Our Vision",
    heading: "Smarter Security for Everyday Life",
    array: [
      {
        description:
          "To make intelligent surveillance simple, accessible and truly useful for everyone — from homes and offices to industries and entire cities.",
      },
      {
        description:
          "We envision a world where AI-powered CCTV cameras work like digital guardians, keeping people safe, protecting assets and making daily operations smarter.",
      },
      {
        description:
          "With EdgeAI, CloudAI, and GenAI, ArcisAI turns ordinary video into meaningful insights — giving users the power to see more, act faster and live safer every day.",
      },
    ],
  },
  Mission: {
    name: "Our Mission",
    heading: "Empowering People with Intelligent Vision",
    array: [
      {
        description:
          "ArcisAI redefines CCTV from passive watching to proactive intelligence, giving users the power to detect, decide, and respond instantly.",
      },
      {
        description:
          "Through Edge AI, Cloud AI, and GenAI, we help businesses, institutions, and citizens improve safety, efficiency, and trust in every environment.",
      },
      {
        description:
          "ArcisAI uses EdgeAI, CloudAI, and GenAI to turn everyday video into insights—helping people see more, act faster, and stay safer.",
      },
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
  CTAButton: {
    data: "The Future of Intelligent Surveillance is Already Here — Don’t Get Left Behind.",
    buttonText: "Connect Now",
    d_image: "/images/aboutus_cta.png",
    m_Image: "/images/aboutus_cta_mobile.png",
    link: "/contact-us",
    textPosition: {
      desktop: { top: "50%", left: "-5%" },
      mobile: { top: "2%", left: "1%" },
    },
    buttonProps: {
      desktop: {
        textColor: "white",
        borderColor: "white",
        bgColor: "rgba(255, 255, 255, 0.2)",
        width: "",
        height: "",
      },
      mobile: {
        textColor: "white",
        borderColor: "white",
        bgColor: "rgba(255, 255, 255, 0.2)",
        width: "",
        height: "",
      },
    },
    textProps: {
      desktop: {
        textColor: "white",
        alignItems: "flex-end",
        textAlign: "right",
        width: "",
      },
      mobile: {
        textColor: "white",
        alignItems: "flex-end",
        textAlign: "right",
        width: "100%",
      },
    },
  },
};
