// seoPageDataCompliance.js
// ArcisAI regulatory buyer-guide landing pages (rewritten 2026-11-16, ARC-002).
//
// Why these were rewritten: the earlier copy made claims that could not be
// verified – e.g. "NDAA Section 889 certified", FedRAMP, "approved status across
// all six GCC nations", "TAA certification", "EU AI Act compliant", "zero Chinese
// components". Those claims are removed. Each page now explains the rule in
// plain words and only states facts ArcisAI already publishes elsewhere on the
// site (Made in India by Adiance, BIS-ER registration R-72003735, STQC-certified
// VMS, on-camera edge AI, cloud VMS / NVR options). Product claims that are still
// being verified (task T22: "NDAA compliant", "EU AI Act compliant", "zero
// Chinese components") must NOT be added back until they are confirmed in writing.
//
// Pages removed from this file (ARC-011 merges, see seoMergeRedirects.json):
//   - india-bis-certified-cctv-cameras -> /bis-certified-cctv-cameras-india
//   - taa-compliant-security-cameras   -> /ndaa-compliant-ai-security-cameras
//     (India is not a TAA-designated country, so the old TAA claim was wrong.)
//
// Regulation sources checked on 16 Nov 2026: IPVM NDAA guide; European
// Commission AI Act page (Regulation (EU) 2024/1689, AI Omnibus dates);
// DLA Piper UAE data protection overview; Morgan Lewis Middle East privacy note.
//
// Shape: standard SEOLandingPage shape (heroTitle, sections, faqs, cta), so the
// normaliser in resolveSeoPageData.js passes these through unchanged.
// `claimsReviewed: true` = copy checked against the rules above.

const COMMON_CTA = {
  title: 'Talk to the ArcisAI team about your project',
  description: 'Tell us your country, site type and the rules your project must meet. We will share the product documents and certificates that apply.',
  buttonText: 'Contact Us',
  buttonLink: '/contact-us',
};

const ARCISAI_FACTS = [
  'Designed and made in India by Adiance Technologies',
  'BIS-ER registration R-72003735 for ArcisAI cameras – check model coverage on the certificate verifier',
  'STQC-certified video management software (VMS)',
  'Edge AI analytics that run on the camera itself',
  'Choice of cloud VMS or on-site NVR recording',
  'ArcisGPT natural-language search for recorded video',
];

const RELATED = [
  { href: '/certifications', label: 'ArcisAI certifications explained' },
  { href: '/tools/certificate-verifier', label: 'Verify an ArcisAI certificate' },
  { href: '/contact-us', label: 'Request product documents for your project' },
];

const seoPageDataCompliance = [
  // 1. NDAA Section 889 (US federal buyers)
  {
    slug: 'ndaa-compliant-ai-security-cameras',
    claimsReviewed: true,
    title: "NDAA Section 889 & Security Cameras: Buyer's Guide | ArcisAI",
    metaDescription: 'What NDAA Section 889 bans, which camera brands it names, why there is no official "NDAA certificate", and what to ask any camera supplier.',
    heroTitle: 'NDAA Section 889 and Security Cameras: What US Buyers Need to Know',
    heroSubtitle: 'US federal agencies and contractors',
    heroDescription: 'Section 889 of the 2019 US National Defense Authorization Act limits video surveillance equipment from five named Chinese companies in federal procurement. Here is what it covers and what to check.',
    showSectionContent: true,
    sections: [
      {
        title: 'What Section 889 bans',
        content: 'Section 889 names five companies: Hikvision, Dahua, Huawei, ZTE and Hytera, together with their subsidiaries and affiliates. Since 13 August 2019, US federal agencies may not buy their covered video surveillance or telecom equipment, or systems that use it as a substantial or essential part. Since 13 August 2020, agencies also may not contract with companies that use such equipment.',
      },
      {
        title: 'There is no official "NDAA certificate"',
        content: 'The US government does not issue a certificate for cameras. Contractors make their own representation about covered equipment in each offer and in SAM. So a label that says "NDAA certified" is a supplier statement, not a government approval. Always ask for component and origin documents for the exact models you plan to use.',
      },
      {
        title: 'Questions to ask any camera supplier',
        features: [
          'Is the brand, or any OEM maker behind it, one of the five named companies?',
          'Where is the camera chipset (SoC) from? Huawei HiSilicon chips are covered too.',
          'Can you share a written component and origin statement for each model?',
          'Where are the cameras designed and manufactured?',
          'Where is video stored and processed – on the camera, on site or in the cloud?',
        ],
      },
      {
        title: 'About ArcisAI',
        content: 'ArcisAI is an Indian AI CCTV brand of Adiance Technologies. It is not one of the five companies named in Section 889. For federal or federal-contractor projects, contact us for the product documents of the exact models you need, so your compliance team can review them.',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      {
        q: 'Which companies does NDAA Section 889 name?',
        a: 'Hikvision, Dahua, Huawei, ZTE and Hytera, including their subsidiaries and affiliates.',
      },
      {
        q: 'Is there an official NDAA certification for cameras?',
        a: 'No. Contractors self-declare whether they provide or use covered equipment. Ask suppliers for written component and origin documents instead of relying on a label.',
      },
      {
        q: 'Does Section 889 apply to private companies?',
        a: 'It applies to US federal agencies and to companies that contract with them. Other buyers may still choose to follow it as a supply-chain policy.',
      },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/compare/ndaa-compliant-cameras', label: 'Compare NDAA-related camera options' }, ...RELATED],
  },

  // 2. Saudi Arabia PDPL
  {
    slug: 'saudi-arabia-pdpl-compliant-cctv-cameras',
    claimsReviewed: true,
    title: 'Saudi PDPL and CCTV: What Camera Buyers Should Check | ArcisAI',
    metaDescription: "Saudi Arabia's Personal Data Protection Law (PDPL) covers CCTV footage of people. What it means for camera projects and what to ask your supplier.",
    heroTitle: 'Saudi Arabia PDPL and CCTV Systems: A Buyer’s Guide',
    heroSubtitle: 'Saudi Arabia',
    heroDescription: 'Video of identifiable people is personal data. Saudi Arabia’s PDPL sets rules on how it is collected, stored and shared.',
    showSectionContent: true,
    sections: [
      {
        title: 'What the PDPL is',
        content: "Saudi Arabia's Personal Data Protection Law (PDPL) came into force on 14 September 2023, with a one-year period for organisations to comply. It is overseen by the Saudi Data and Artificial Intelligence Authority (SDAIA). CCTV footage that shows identifiable people is personal data under the law.",
      },
      {
        title: 'What it means for a camera project',
        features: [
          'Have a clear purpose for each camera and tell people they are being recorded.',
          'Keep footage only as long as you need it, then delete it.',
          'Limit who can view and export video, and keep an access log.',
          'Check where footage is stored and whether it leaves the country.',
          'Get legal advice for face recognition or other biometric use.',
        ],
      },
      {
        title: 'How the system design can help',
        content: 'Edge AI that runs on the camera can reduce how much video is sent to other systems. On-site NVR recording keeps footage within your premises. Role-based access in the VMS limits who sees what. These features support good practice, but compliance depends on how you set up and run the system.',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'Is CCTV footage personal data under the Saudi PDPL?', a: 'Yes, when it shows people who can be identified.' },
      { q: 'Who enforces the PDPL?', a: 'The Saudi Data and Artificial Intelligence Authority (SDAIA).' },
      { q: 'Can a camera be "PDPL compliant" on its own?', a: 'No. Compliance depends on how the organisation collects, stores and uses the footage. The right product features make it easier, but they do not replace legal review.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/ai-cctv-cameras-saudi-arabia', label: 'AI CCTV cameras in Saudi Arabia' }, ...RELATED],
  },

  // 3. UAE data protection
  {
    slug: 'uae-data-protection-compliant-security-cameras',
    claimsReviewed: true,
    title: "UAE Data Protection Law and CCTV: A Buyer's Guide | ArcisAI",
    metaDescription: 'How the UAE federal data protection law (Decree-Law 45 of 2021) and free-zone rules apply to CCTV, and what to check before you buy cameras.',
    heroTitle: 'UAE Data Protection and CCTV: What Camera Buyers Should Check',
    heroSubtitle: 'United Arab Emirates',
    heroDescription: 'The UAE has a federal data protection law, and some free zones have their own. Here is how that affects a CCTV project.',
    showSectionContent: true,
    sections: [
      {
        title: 'Which law applies',
        content: 'The UAE federal law is Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data. Financial free zones such as DIFC and ADGM have their own data protection laws, and some sectors have extra rules. Check which rules apply to your site before you design the system.',
      },
      {
        title: 'Good practice for a camera project',
        features: [
          'Record only what you need for a clear, stated purpose.',
          'Show signs where cameras are recording.',
          'Set a retention period and delete footage after it.',
          'Control who can view or export video.',
          'Check where footage is stored, especially for cloud recording.',
        ],
      },
      {
        title: 'How ArcisAI fits',
        content: 'You can run ArcisAI analytics on the camera and record on an on-site NVR, or use cloud VMS where that suits your rules. Our team can share product documents for your compliance review.',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'What is the UAE federal data protection law?', a: 'Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.' },
      { q: 'Do DIFC and ADGM follow the same law?', a: 'No. These financial free zones have their own data protection regimes.' },
      { q: 'Can we keep CCTV footage on site?', a: 'Yes. ArcisAI supports on-site NVR recording as well as cloud VMS.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/ai-cctv-cameras-uae', label: 'AI CCTV cameras in the UAE' }, { href: '/ai-cctv-cameras-dubai', label: 'AI CCTV cameras in Dubai' }, ...RELATED],
  },

  // 4. GDPR
  {
    slug: 'gdpr-compliant-cctv-camera-systems',
    claimsReviewed: true,
    title: 'GDPR and CCTV Cameras: What Buyers Should Check | ArcisAI',
    metaDescription: 'How GDPR applies to CCTV in the UK and EU: lawful basis, signs, retention, DPIAs and face recognition – plus what to ask your camera supplier.',
    heroTitle: 'GDPR and CCTV Systems: A Practical Guide for Buyers',
    heroSubtitle: 'UK and European Union',
    heroDescription: 'Under GDPR, CCTV footage of identifiable people is personal data. These are the main points to plan for.',
    showSectionContent: true,
    sections: [
      {
        title: 'The key GDPR points for CCTV',
        features: [
          'You need a lawful basis for recording, often legitimate interests.',
          'Tell people with clear signs who is recording and why.',
          'Keep footage only as long as needed.',
          'Large-scale or systematic monitoring usually needs a Data Protection Impact Assessment (DPIA).',
          'Face recognition for identification uses biometric data, a special category with stricter rules.',
          'People can ask for copies of footage of themselves.',
        ],
      },
      {
        title: 'How system design helps',
        content: 'Processing analytics on the camera, keeping recordings on site, limiting access by role and setting automatic deletion all make GDPR duties easier to meet. No camera is "GDPR compliant" by itself. Compliance comes from how you set up and run the system.',
      },
      {
        title: 'About ArcisAI',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'Is CCTV footage personal data under GDPR?', a: 'Yes, when it shows people who can be identified.' },
      { q: 'Do we need a DPIA for CCTV?', a: 'Often yes, especially for large-scale or systematic monitoring of public areas. Check with your data protection officer.' },
      { q: 'Is face recognition allowed under GDPR?', a: 'It uses biometric data, which is a special category. It is only allowed under specific conditions, so get legal advice first.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/ai-cctv-cameras-uk', label: 'AI CCTV cameras in the UK' }, { href: '/eu-ai-act-compliant-ai-cameras', label: 'EU AI Act and AI cameras' }, ...RELATED],
  },

  // 5. EU AI Act
  {
    slug: 'eu-ai-act-compliant-ai-cameras',
    claimsReviewed: true,
    title: 'EU AI Act and AI Security Cameras: Key Dates | ArcisAI',
    metaDescription: 'What the EU AI Act (Regulation 2024/1689) means for AI video analytics: banned uses since Feb 2025, high-risk biometric rules, and current dates.',
    heroTitle: 'The EU AI Act and AI Security Cameras: What Buyers Need to Know',
    heroSubtitle: 'European Union',
    heroDescription: 'The EU AI Act bans some AI uses and sets strict rules for others, including some video analytics. Here are the parts that matter for camera buyers.',
    showSectionContent: true,
    sections: [
      {
        title: 'Banned since 2 February 2025',
        features: [
          'Real-time remote biometric identification in public spaces for law enforcement (with narrow exceptions).',
          'Emotion recognition in workplaces and schools.',
          'Untargeted scraping of face images to build face recognition databases.',
        ],
      },
      {
        title: 'High-risk uses',
        content: 'Other remote biometric identification systems, such as identifying a person in recorded video, are classed as high-risk. Under the European Commission’s current timetable (after the AI Omnibus changes), the rules for these high-risk uses apply from 2 December 2027. High-risk systems need risk management, human oversight, logging and documentation.',
      },
      {
        title: 'What it means for ordinary video analytics',
        content: 'Analytics that do not identify people, such as intrusion alerts, line crossing or counting, are not banned. Check each feature you plan to use against the Act, and keep humans in charge of decisions.',
      },
      {
        title: 'About ArcisAI',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'When did the EU AI Act bans start?', a: '2 February 2025.' },
      { q: 'When do the high-risk rules apply?', a: 'Under the European Commission’s current timetable, rules for high-risk uses listed in Annex III apply from 2 December 2027.' },
      { q: 'Are motion and intrusion alerts high-risk?', a: 'Analytics that do not identify people are generally not in the banned or biometric high-risk groups. Review each use case with your legal team.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/gdpr-compliant-cctv-camera-systems', label: 'GDPR and CCTV' }, ...RELATED],
  },

  // 6. Non-Chinese alternatives
  {
    slug: 'non-chinese-security-camera-alternatives',
    claimsReviewed: true,
    title: 'Non-Chinese Security Camera Alternatives | ArcisAI',
    metaDescription: 'Why buyers are moving to non-Chinese CCTV brands, what India and the US rules actually say, and what to check before you switch.',
    heroTitle: 'Non-Chinese Security Camera Alternatives: What to Check Before You Switch',
    heroSubtitle: 'India and global buyers',
    heroDescription: 'Many buyers now want CCTV from non-Chinese brands for supply-chain and data reasons. Here is what the rules say and how to compare options.',
    showSectionContent: true,
    sections: [
      {
        title: 'What the rules actually say',
        content: 'In India, from 1 April 2026, internet-connected (IP) CCTV cameras must meet the security Essential Requirements (ER-01:2024) and carry STQC test certification before they can be sold. This is a certification rule, not a ban on named brands. In the US, NDAA Section 889 stops federal agencies from buying equipment from five named companies: Hikvision, Dahua, Huawei, ZTE and Hytera.',
      },
      {
        title: 'What to check when you switch',
        features: [
          'Brand ownership and where the cameras are designed and made.',
          'The chipset (SoC) inside the camera.',
          'Valid certificates for the exact models (in India: BIS-ER / STQC).',
          'Where video is stored and processed.',
          'Firmware update policy and support in your region.',
        ],
      },
      {
        title: 'About ArcisAI',
        content: 'ArcisAI is an Indian AI CCTV brand of Adiance Technologies. Check our certificates for each model on the certificate verifier.',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'Are Chinese CCTV brands banned in India?', a: 'No brand is banned by name. Since 1 April 2026, IP cameras sold in India must meet ER-01:2024 and carry STQC certification.' },
      { q: 'Which brands does the US NDAA Section 889 name?', a: 'Hikvision, Dahua, Huawei, ZTE and Hytera, including subsidiaries and affiliates.' },
      { q: 'Is ArcisAI a Chinese brand?', a: 'No. ArcisAI is an Indian brand of Adiance Technologies.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/blog/is-hikvision-banned-in-india-2026', label: 'Is Hikvision banned in India?' }, { href: '/why-choose-non-chinese-soc-cctv', label: 'Why the camera chipset matters' }, ...RELATED],
  },

  // 7. GCC government projects
  {
    slug: 'gcc-government-approved-security-cameras',
    claimsReviewed: true,
    title: 'Security Cameras for GCC Government Projects | ArcisAI',
    metaDescription: 'What GCC government and critical-site CCTV projects usually require, why approvals differ by country, and what to ask your camera supplier.',
    heroTitle: 'Security Cameras for GCC Government Projects',
    heroSubtitle: 'Saudi Arabia, UAE, Qatar, Bahrain, Oman, Kuwait',
    heroDescription: 'There is no single GCC-wide camera approval. Each country, authority and project sets its own requirements. Here is how to prepare.',
    showSectionContent: true,
    sections: [
      {
        title: 'Requirements differ by country and project',
        content: 'Government and critical-site projects in the GCC usually follow the security authority and data protection rules of that country, plus the project specification. Ask the project owner or consultant early which approvals, standards and documents they require.',
      },
      {
        title: 'What tenders often ask for',
        features: [
          'Brand and country of origin documents.',
          'Cybersecurity features: encryption, user roles, firmware updates.',
          'Local data storage and data protection compliance.',
          'Local partner, installation and support.',
          'Compatibility with the site’s existing VMS or NVR (for example ONVIF).',
        ],
      },
      {
        title: 'About ArcisAI',
        content: 'ArcisAI offers on-camera edge AI, cloud VMS and on-site NVR options. Contact us with your project specification and we will tell you which documents we can provide.',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'Is there a single GCC approval for CCTV cameras?', a: 'No. Requirements are set by each country, authority and project.' },
      { q: 'What documents should I ask a camera supplier for?', a: 'Country of origin, certificates for the exact models, cybersecurity features and data storage options.' },
      { q: 'Can ArcisAI store video locally?', a: 'Yes. ArcisAI supports on-site NVR recording as well as cloud VMS.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/saudi-arabia-pdpl-compliant-cctv-cameras', label: 'Saudi PDPL and CCTV' }, { href: '/uae-data-protection-compliant-security-cameras', label: 'UAE data protection and CCTV' }, ...RELATED],
  },

  // 8. Critical infrastructure
  {
    slug: 'critical-infrastructure-security-cameras',
    claimsReviewed: true,
    title: 'Security Cameras for Critical Infrastructure | ArcisAI',
    metaDescription: 'How to choose CCTV for power, water, transport and telecom sites: certification, cybersecurity, local recording and perimeter AI analytics.',
    heroTitle: 'Security Cameras for Critical Infrastructure Sites',
    heroSubtitle: 'Power, water, transport, telecom and government sites',
    heroDescription: 'Critical sites need cameras that are certified, cyber-secure and reliable. Here is a simple checklist.',
    showSectionContent: true,
    sections: [
      {
        title: 'A checklist for critical sites',
        features: [
          'Certified models (in India: BIS-ER / STQC for IP cameras).',
          'Network separation: keep cameras on their own network.',
          'Encrypted video and strong user access control.',
          'Regular, signed firmware updates.',
          'On-site recording option if the site cannot depend on the internet.',
          'Perimeter analytics such as intrusion and line-crossing alerts.',
        ],
      },
      {
        title: 'Why on-camera AI helps',
        content: 'Edge AI analyses video on the camera, so alerts still work when bandwidth is low, and less raw video needs to travel over the network.',
      },
      {
        title: 'About ArcisAI',
        features: ARCISAI_FACTS,
      },
    ],
    faqs: [
      { q: 'Do IP cameras in India need certification?', a: 'Yes. Since 1 April 2026, IP CCTV cameras sold in India must meet ER-01:2024 and carry STQC certification.' },
      { q: 'Can the system work without the internet?', a: 'Yes. ArcisAI cameras can record to an on-site NVR, and edge AI runs on the camera.' },
      { q: 'How do I check an ArcisAI certificate?', a: 'Use the certificate verifier tool on arcisai.io.' },
    ],
    cta: COMMON_CTA,
    relatedPages: [{ href: '/industry/solutions-critical-infrastructure-protection', label: 'Critical infrastructure protection solutions' }, ...RELATED],
  },
];

export default seoPageDataCompliance;
