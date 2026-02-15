import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQ Schema Component for ArcisAI
 * - Generates FAQPage JSON-LD structured data
 * - Enables FAQ rich snippets in Google search results
 * - Increases SERP real estate and click-through rate
 * - India's first premium AI CCTV with STQC certification
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQSchema - Enhanced FAQ Schema for ArcisAI Full Ecosystem
 * Covers: Cameras, App, VMS, Cloud Dashboard, AI Analytics, NVR, Certifications
 * Generates FAQPage JSON-LD for Google rich snippets
 */

const DEFAULT_FAQS = {
  home: [
    {
      question: 'What is ArcisAI?',
      answer: 'ArcisAI is India\'s first premium AI CCTV brand by Adiance, offering a complete surveillance ecosystem including AI cameras (S-Series and Eco-Series), STQC-certified VMS, mobile app, cloud dashboard, NVRs, and 15+ built-in AI analytics like face recognition, ANPR, and people counting.'
    },
    {
      question: 'Is ArcisAI STQC certified?',
      answer: 'Yes, ArcisAI VMS is STQC certified by the Ministry of Electronics and Information Technology (MeitY), Government of India. ArcisAI products also hold ISO 27001:2022, BIS, CE, FCC, RoHS, and ONVIF certifications.'
    },
    {
      question: 'Does ArcisAI have a mobile app?',
      answer: 'Yes, the ArcisAI App is available on both Google Play Store and Apple App Store. It provides live view, playback, PTZ control, push notifications, AI event alerts, and multi-site monitoring from your smartphone.'
    },
    {
      question: 'What AI analytics does ArcisAI support?',
      answer: 'ArcisAI supports 15+ AI analytics including Face Recognition, ANPR (Automatic Number Plate Recognition), People Counting, Intrusion Detection, Fire and Smoke Detection, Object Detection, Line Crossing, Heat Map Analytics, PPE Detection, Fall Detection, Loitering Detection, Crowd Density, and Vehicle Counting.'
    },
    {
      question: 'Does ArcisAI offer a cloud-based surveillance dashboard?',
      answer: 'Yes, the ArcisAI Cloud Dashboard provides centralized multi-site monitoring, AI analytics visualization, event-driven alerts, health monitoring, cloud storage, role-based access control, and automated reporting - all accessible from any web browser.'
    },
    {
      question: 'What is the difference between ArcisAI S-Series and Eco-Series cameras?',
      answer: 'The S-Series (S-101 to S-105) is the premium range with advanced AI edge processing, higher resolution, and professional-grade features for enterprises. The Eco-Series (Eco-101 to Eco-103) offers essential AI features at an affordable price point for SMBs, retail stores, and homes.'
    },
    {
      question: 'Does ArcisAI offer NVRs?',
      answer: 'Yes, ArcisAI offers a complete NVR range from 4-Channel (AD-N0481-PoE) to 32-Channel (AD-N3251) with built-in AI analytics, PoE support, up to 8MP recording, HDMI/VGA output, and hot-swap HDD bays for enterprise deployments.'
    },
    {
      question: 'Can I buy ArcisAI cameras in India?',
      answer: 'Yes, ArcisAI is made in India and available across all major cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Ahmedabad. Contact us at marketing@arcisai.io or call +91 968 777 9999 to find a dealer near you or book a demo.'
    }
  ],
  product: [
    {
      question: 'What resolution do ArcisAI cameras support?',
      answer: 'ArcisAI S-Series cameras support up to 8MP (4K) resolution with AI edge processing. Eco-Series cameras support up to 5MP resolution. All cameras feature H.265+ compression for efficient storage.'
    },
    {
      question: 'Do ArcisAI cameras work with third-party NVRs?',
      answer: 'Yes, all ArcisAI cameras are ONVIF compliant, ensuring compatibility with third-party NVRs and VMS platforms. However, for best AI analytics performance, we recommend using ArcisAI NVRs and VMS.'
    }
  ],
  vms: [
    {
      question: 'What is ArcisAI VMS?',
      answer: 'ArcisAI VMS is a STQC-certified Video Management System that supports 15+ AI analytics, manages up to 10,000+ cameras per deployment, and provides enterprise-grade features like role-based access, automated alerts, forensic search, and cloud integration.'
    },
    {
      question: 'Can ArcisAI VMS run on cloud?',
      answer: 'Yes, ArcisAI VMS supports on-premise, cloud, and hybrid deployment models. The cloud-based VMS eliminates hardware dependency and enables remote management from anywhere via the ArcisAI Cloud Dashboard.'
    },
    {
      question: 'Is ArcisAI VMS suitable for government projects?',
      answer: 'Absolutely. ArcisAI VMS is STQC certified by MeitY (Government of India), making it eligible for all government tenders and smart city projects. It also holds ISO 27001:2022 certification for information security management.'
    }
  ],
  analytics: [
    {
      question: 'How accurate is ArcisAI face recognition?',
      answer: 'ArcisAI face recognition achieves 99%+ accuracy in controlled environments using deep learning models. It supports real-time face detection, VIP/blocklist alerts, attendance tracking, and access control across multiple cameras simultaneously.'
    },
    {
      question: 'Can ArcisAI detect fire and smoke?',
      answer: 'Yes, ArcisAI AI-powered fire and smoke detection uses computer vision to identify fire, smoke, and thermal anomalies in real-time. It provides instant alerts before traditional fire alarms, making it ideal for warehouses, factories, data centers, and commercial buildings.'
    },
    {
      question: 'What is ANPR and how does ArcisAI use it?',
      answer: 'ANPR (Automatic Number Plate Recognition) is an AI feature that reads vehicle license plates in real-time. ArcisAI ANPR works across Indian number plate formats and supports parking management, toll collection, law enforcement, and gated community access control.'
    }
  ],
  dashcam: [
    {
      question: 'Does ArcisAI offer a dashcam?',
      answer: 'Yes, the ArcisAI Dashcam (AD-DC4G-200W) features dual-lens (front + cabin), 4G LTE connectivity, GPS tracking, ADAS (Advanced Driver Assistance System), DMS (Driver Monitoring System) for fatigue detection, and real-time cloud upload. Ideal for fleet management across India.'
    }
  ]
};

const FAQSchema = ({ faqs, pageType = 'home' }) => {
  const faqItems = faqs || DEFAULT_FAQS[pageType] || DEFAULT_FAQS.home;
  if (!faqItems || faqItems.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default FAQSchema; */

const DEFAULT_FAQS = {
  home: [
    {
      question: 'What is ArcisAI?',
      answer: 'ArcisAI is India\'s first premium AI CCTV camera brand with STQC certification. It offers intelligent surveillance cameras with built-in AI analytics for face recognition, intrusion detection, vehicle tracking, and smart monitoring across retail, banking, healthcare, smart city, manufacturing, and education sectors.',
    },
    {
      question: 'What is STQC certification and why does it matter?',
      answer: 'STQC (Standardisation Testing and Quality Certification) is a government certification under the Ministry of Electronics and Information Technology (MeitY), India. STQC certification ensures that ArcisAI cameras meet the highest quality, reliability, and security standards required for government and enterprise deployments in India.',
    },
    {
      question: 'What AI features do ArcisAI cameras offer?',
      answer: 'ArcisAI cameras come with built-in AI capabilities including face recognition, ANPR (Automatic Number Plate Recognition), intrusion detection, object detection, crowd analytics, behavioral analysis, people counting, and smart alerts — all processed on-device for real-time performance.',
    },
    {
      question: 'What is the difference between S-Series and Eco-Series?',
      answer: 'The S-Series (S-101 to S-105) is ArcisAI\'s premium line with advanced AI features, higher resolution, and rugged build for mission-critical deployments. The Eco-Series (Eco-101 to Eco-103) offers essential AI features at competitive pricing, ideal for small-to-medium businesses and cost-conscious installations.',
    },
    {
      question: 'Where can I buy ArcisAI cameras in India?',
      answer: 'ArcisAI cameras are available through authorized dealers and system integrators across India. Contact us at arcisai.io/contact-us to find a dealer near you or to request a product demonstration.',
    },
  ],
  product: [
    {
      question: 'What resolution do ArcisAI cameras support?',
      answer: 'ArcisAI S-Series cameras support up to 4K (8MP) resolution with AI-powered image enhancement. Eco-Series cameras support up to 5MP resolution with smart IR for clear night vision.',
    },
    {
      question: 'Do ArcisAI cameras work with existing NVR/VMS systems?',
      answer: 'Yes, ArcisAI cameras support ONVIF protocol and are compatible with most NVR and VMS platforms. They also integrate seamlessly with VMukti VMS for advanced enterprise management.',
    },
  ],
};

const FAQSchema = ({ faqs, pageType = 'home' }) => {
  const faqItems = faqs || DEFAULT_FAQS[pageType] || DEFAULT_FAQS.home;

  if (!faqItems || faqItems.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export { DEFAULT_FAQS };
export default FAQSchema;
