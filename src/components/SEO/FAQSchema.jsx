import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQ Schema Component for ArcisAI
 * - Generates FAQPage JSON-LD structured data
 * - Enables FAQ rich snippets in Google search results
 * - Increases SERP real estate and click-through rate
 * - India's first premium AI CCTV with STQC certification
 */

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
