'use client';
import React, { useState, useCallback } from 'react';
import {
  Box, Container, Heading, Text, Flex, VStack, HStack, SimpleGrid, Icon, Link as CLink, Image,
  List, ListItem, ListIcon, FormControl, FormLabel, Input, Select, Textarea, useToast,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdCheckCircle, MdLocationOn, MdEvent, MdPlace, MdArrowForward } from 'react-icons/md';
import CustomButton from '../../Components/CustomButton';

// IFSEC India 2026 — ArcisAI commercial campaign landing page (Booth E-10, Hall 5GF).
// LAYOUT re-themed (2026-11-05) to match the rest of the real site: light sections
// with large real product/event images and alternating light / dark-gradient
// bands (same visual language as /s-series, /cloud-vms, home). Purple-gradient
// headings on white; shared CustomButton; global Header/Footer from ClientLayout.
// CONTENT UNCHANGED: every heading, paragraph, FAQ answer, the working form and
// all JSON-LD are exactly as before — only the visual layout and images changed.
// SEO/GEO pattern intact: single <h1>, question H2s, answer-first intro, in-prose
// internal links, visible FAQ mirrored 1:1 into FAQPage schema, server-rendered
// JSON-LD. ArcisAI is an EXHIBITOR — Event schema omits `organizer`.
// BIS-ER = camera HARDWARE (R-72003735, ER01:2024); STQC = VMS SOFTWARE — distinct.

const PURPLE = '#7F56D9';
const PURPLE_DEEP = '#6B46C1';
const INK = '#171717';
const SOFT = '#F5F4F8';
const BORDER = '#E6E4EE';
const HEAD_GRAD = `linear(90deg, ${INK}, ${PURPLE})`;

function pushDL(payload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === 'function') {
    const { event, ...params } = payload;
    window.gtag('event', event, params);
  }
}

// vmukti.com is allow-listed in the site CSP connect-src (next.config.js).
const BACKEND_URL = 'https://vmukti.com/backend/api/send-email-arcis';

const ENQUIRY_TYPES = [
  'Book a meeting at IFSEC',
  'Request a product demo',
  'Distributor / channel partnership',
  'General enquiry',
];
const BUSINESS_TYPES = [
  'System Integrator', 'Distributor / Reseller', 'End Customer / Enterprise',
  'Government / PSU', 'Consultant / Architect', 'Other',
];
const PRODUCT_INTEREST = [
  'AI CCTV Cameras (S-Series / ECO-Series)', 'Cloud VMS', 'ArcisGPT video search',
  'Arcis Bridge Device (connect existing cameras)', 'NVR', 'Not sure yet',
];

// Visible FAQ — every answer is a verifiable ArcisAI / IFSEC fact, mirrored 1:1
// into FAQPage schema (both read from this one array, so they can't drift).
const FAQS = [
  {
    q: 'What is IFSEC India 2026?',
    a: 'IFSEC India is one of India’s largest trade exhibitions for security, surveillance and fire safety. IFSEC India 2026 runs from 3 to 5 December 2026 at Bharat Mandapam, New Delhi. ArcisAI is participating as an exhibitor at Booth E-10, Hall 5GF.',
  },
  {
    q: 'When is IFSEC India 2026?',
    a: 'IFSEC India 2026 takes place from 3 to 5 December 2026 (Thursday to Saturday) at Bharat Mandapam, New Delhi.',
  },
  {
    q: 'Where is IFSEC India 2026 held?',
    a: 'IFSEC India 2026 is held at Bharat Mandapam, Pragati Maidan, New Delhi. ArcisAI’s booth is E-10 in Hall 5GF.',
  },
  {
    q: 'Which companies are participating in IFSEC India 2026?',
    a: 'IFSEC India 2026 hosts many security, CCTV and surveillance companies. ArcisAI is one of the AI CCTV exhibitors, at Booth E-10, Hall 5GF. For the complete, official list of exhibitors, see the IFSEC India exhibitor directory on the organiser’s website, ifsecindia.com.',
  },
  {
    q: 'Is ArcisAI participating in IFSEC India 2026?',
    a: 'Yes. ArcisAI is exhibiting at IFSEC India 2026, Booth E-10, Hall 5GF, Bharat Mandapam, New Delhi, from 3 to 5 December 2026. ArcisAI is an exhibitor, not the event organiser.',
  },
  {
    q: 'Where can I find ArcisAI at IFSEC 2026?',
    a: 'ArcisAI is at Booth E-10 in Hall 5GF at Bharat Mandapam, New Delhi. You can book a dedicated meeting slot using the form on this page and our team will confirm a time at the booth.',
  },
  {
    q: 'What AI CCTV solutions does ArcisAI offer?',
    a: 'ArcisAI offers an end-to-end AI surveillance ecosystem: edge-AI CCTV cameras (S-Series and ECO-Series), a Cloud VMS for multi-site monitoring, ArcisGPT for natural-language video search, the Arcis Bridge Device to connect compatible existing ONVIF cameras to the cloud, and NVRs.',
  },
  {
    q: 'Does ArcisAI offer Edge AI and Cloud AI surveillance?',
    a: 'Yes. ArcisAI cameras run analytics on the camera itself (Edge AI) for real-time detection, and the Cloud VMS adds cloud-based analytics and centralised monitoring across multiple sites and cameras.',
  },
  {
    q: 'What is ArcisGPT?',
    a: 'ArcisGPT is ArcisAI’s generative-AI layer for video. It lets you search and ask questions of recorded footage in natural language — for example “show vehicles near the gate after 10 PM” — and returns relevant, timestamped results.',
  },
  {
    q: 'Does ArcisAI offer an STQC-certified VMS?',
    a: 'Yes. ArcisAI’s Video Management Software (VMS) is STQC certified. STQC certification applies to the software; it is separate from the BIS-ER certification that applies to the camera hardware.',
  },
  {
    q: 'Are ArcisAI CCTV cameras BIS-ER certified?',
    a: 'ArcisAI’s applicable camera hardware carries BIS-ER certification (registration R-72003735 under ER01:2024). Certification coverage applies to the certified hardware models; confirm the exact model and certificate with our team for your procurement. See the certifications page for details.',
  },
  {
    q: 'Can ArcisAI connect compatible existing CCTV cameras to its Cloud VMS?',
    a: 'Yes, in many cases. The Arcis Bridge Device connects compatible existing ONVIF cameras to the ArcisAI Cloud VMS, so you can add cloud monitoring and analytics without replacing all your hardware. Compatibility depends on the camera; our team can confirm for your setup.',
  },
  {
    q: 'Who should meet ArcisAI at IFSEC India?',
    a: 'CCTV distributors and dealers, system integrators, security solution providers, government and PSU procurement teams, enterprise security managers, and industrial, retail, healthcare, education and infrastructure buyers evaluating certified, AI-enabled surveillance.',
  },
  {
    q: 'Can CCTV distributors and system integrators connect with ArcisAI?',
    a: 'Yes. ArcisAI runs a channel partner and distributor programme. You can discuss dealership, distribution and integration opportunities at Booth E-10, or apply through the partner and distributor pages before the show.',
  },
  {
    q: 'How can I schedule a meeting with ArcisAI?',
    a: 'Use the enquiry form on this page — choose “Book a meeting at IFSEC”, add your preferred day and time, and our team will confirm a slot at Booth E-10. You can also reach us on WhatsApp or by phone at +91 96877 79999.',
  },
];

const IFSECIndia2026 = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    enquiryType: '', name: '', company: '', email: '', phone: '',
    cityCountry: '', businessType: '', productInterest: '', meetingTime: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const goToForm = useCallback((enquiryType, ctaName) => {
    pushDL({ event: 'cta_click', cta_name: ctaName, page: 'ifsec-india-2026' });
    setForm((f) => ({ ...f, enquiryType }));
    if (typeof document !== 'undefined') {
      document.getElementById('ifsec-lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch(BACKEND_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: `IFSEC-2026 (${form.enquiryType || 'General'})` }),
      }).catch(() => {});
      pushDL({
        event: 'generate_lead', form_name: 'ifsec_2026',
        enquiry_type: form.enquiryType || undefined,
        business_type: form.businessType || undefined, page: 'ifsec-india-2026',
      });
      toast({ title: 'Request received', description: 'Our team will get back to you shortly to confirm your IFSEC India 2026 meeting.', status: 'success', duration: 6000, isClosable: true });
      setForm({ enquiryType: '', name: '', company: '', email: '', phone: '', cityCountry: '', businessType: '', productInterest: '', meetingTime: '', message: '' });
    } catch (err) {
      toast({ title: 'Something went wrong', description: 'Please try again or email marketing@arcisai.io.', status: 'error', duration: 6000, isClosable: true });
    } finally { setSubmitting(false); }
  };

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arcisai.io/' },
      { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://arcisai.io/event' },
      { '@type': 'ListItem', position: 3, name: 'IFSEC India 2026', item: 'https://arcisai.io/ifsec-india-2026' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const eventSchema = {
    '@context': 'https://schema.org', '@type': 'Event',
    name: 'ArcisAI at IFSEC India 2026 — Booth E-10, Hall 5GF',
    description: 'ArcisAI exhibits Made-in-India AI CCTV cameras, Edge AI, Cloud AI, Cloud VMS and ArcisGPT at Booth E-10, Hall 5GF, IFSEC India 2026, Bharat Mandapam, New Delhi.',
    startDate: '2026-12-03',
    endDate: '2026-12-05',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Bharat Mandapam, New Delhi',
      address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
    },
    url: 'https://arcisai.io/ifsec-india-2026',
  };

  // Ecosystem cards — each with a real image, linking to its real page.
  const ecosystem = [
    { title: 'AI CCTV Cameras', href: '/products', img: '/images/arcis-ai-cctv-camera-hero.webp',
      desc: 'Edge-AI cameras across the S-Series and ECO-Series lineups, in Dome, Bullet and PTZ form factors, with PoE, Wi-Fi and 4G-SIM options.' },
    { title: 'Edge AI', href: '/solution/edge-ai', img: '/images/solution_edgeai_hero.webp',
      desc: 'Real-time analytics running on the camera itself — detection happens on-device, with no server round-trip and no per-camera AI-analytics licence fee.' },
    { title: 'Cloud AI', href: '/cloud-vms', img: '/images/solution_cloudai_hero.webp',
      desc: 'Cloud-based analytics and centralised monitoring across many cameras and sites, from a single dashboard.' },
    { title: 'Generative AI — ArcisGPT', href: '/arcisgpt', img: '/images/arcisgpt-generative-ai-overview.webp',
      desc: 'Ask recorded footage questions in plain language and get instant, timestamped results instead of scrubbing hours of video.' },
    { title: 'STQC-Certified Cloud VMS', href: '/cloud-vms', img: '/images/arcis-cloud-vms-dashboard-multidevice.webp',
      desc: 'Video management, remote monitoring, alerts and centralised control, on a VMS that is STQC certified.' },
    { title: 'Arcis Bridge Device', href: '/arcis-bridge-device', img: '/images/DeviceImage.webp',
      desc: 'Connect compatible existing ONVIF cameras to the ArcisAI Cloud VMS, adding cloud and AI without replacing all your hardware.' },
  ];

  // Product portfolio — verified products, real routes, real images.
  const products = [
    { title: 'S-Series', href: '/s-series', img: '/images/sseries_hero_main.webp', desc: 'Premium AI CCTV camera range for demanding and enterprise deployments.' },
    { title: 'ECO-Series', href: '/eco-series', img: '/images/product_ecoseries_bullet_main.webp', desc: 'Value AI camera range in PoE, Wi-Fi and 4G-SIM variants for everyday sites.' },
    { title: 'Arcis Bridge Device', href: '/arcis-bridge-device', img: '/images/DeviceImage.webp', desc: 'Brings compatible existing ONVIF cameras onto the ArcisAI cloud.' },
    { title: 'Cloud VMS', href: '/cloud-vms', img: '/images/arcis-cloud-vms-dashboard-multidevice.webp', desc: 'STQC-certified video management for multi-site, multi-camera monitoring.' },
    { title: 'NVR', href: '/arcis-nvr', img: '/images/nvr_hero_main.webp', desc: 'Network video recorder for reliable local recording and storage.' },
    { title: 'ArcisGPT', href: '/arcisgpt', img: '/images/arcisgpt-generative-ai-overview.webp', desc: 'Generative-AI natural-language search across your video.' },
  ];

  const analytics = [
    'Human detection', 'Face detection', 'Motion detection', 'Line crossing',
    'Tamper detection', 'Crowd & people analytics', 'Vehicle detection / ANPR',
    'PPE detection', 'Fire & smoke detection', 'Intelligent playback & search',
    'Instant & scheduled alerts',
  ];

  const audience = [
    { who: 'CCTV distributors & dealers', href: '/become-a-distributor', label: 'Distributor program' },
    { who: 'System integrators & solution providers', href: '/partners', label: 'Partner program' },
    { who: 'Government & PSU procurement', href: '/certifications', label: 'Certifications' },
    { who: 'Enterprise & industrial security teams', href: '/solution/edge-ai', label: 'Edge-AI solutions' },
  ];

  const industries = [
    'Manufacturing & factories', 'Warehouses & logistics', 'Retail', 'Banks & ATMs',
    'Hospitals', 'Educational institutions', 'Construction sites', 'Corporate offices',
    'Housing societies', 'Airports & transport', 'Smart cities',
  ];

  const ifsecPhotos = [
    { src: '/images/IFSEC_carousel_4.webp', alt: 'ArcisAI team at IFSEC India booth' },
    { src: '/images/IFSEC_gallery_1.webp', alt: 'ArcisAI AI CCTV and VMS display at IFSEC India' },
    { src: '/images/IFSEC_gallery_2.webp', alt: 'ArcisAI VMS wall at IFSEC India' },
    { src: '/images/IFSEC_gallery_3.webp', alt: 'ArcisAI STQC and Make in India display at IFSEC India' },
    { src: '/images/IFSEC_carousel_2.webp', alt: 'ArcisAI meeting a visitor at IFSEC India' },
  ];

  const whyArcis = [
    'Indian AI CCTV camera brand, built by Adiance Technologies',
    'Edge AI and Cloud AI in one ecosystem',
    'Generative-AI video search with ArcisGPT',
    'STQC-certified Video Management Software',
    'BIS-ER-certified camera hardware (R-72003735, ER01:2024)',
    'Integrated camera + software ecosystem',
    'Product and technology development in India',
    'Channel, distributor and OEM opportunities',
  ];

  // Light-theme form fields (match the light page).
  const field = {
    bg: 'white', color: INK, borderColor: 'gray.300',
    _hover: { borderColor: 'gray.400' },
    _focus: { borderColor: PURPLE, boxShadow: `0 0 0 1px ${PURPLE}` },
    _placeholder: { color: 'gray.400' },
  };
  const inlineLink = { color: PURPLE, fontWeight: 600, textDecoration: 'underline', _hover: { color: PURPLE_DEEP } };
  const btnPrimary = { bgColor: PURPLE, hoverBgColor: PURPLE_DEEP, borderColor: PURPLE, hoverBorderColor: PURPLE_DEEP, textColor: 'white', hoverTextColor: 'white' };
  const btnOutline = { bgColor: 'transparent', hoverBgColor: SOFT, borderColor: PURPLE, hoverBorderColor: PURPLE_DEEP, textColor: PURPLE, hoverTextColor: PURPLE_DEEP };
  const WA = 'https://wa.me/919687779999?text=' + encodeURIComponent(
    "Hi ArcisAI, I'd like to meet you at IFSEC India 2026 (Booth E-10, Hall 5GF).");

  const SectionHeading = (props) => (
    <Heading as="h2" bgGradient={HEAD_GRAD} bgClip="text" fontWeight="700" lineHeight={1.2} {...props} />
  );

  return (
    <Box bg="white" color={INK}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      {/* HERO — light, image-led, like /s-series and home */}
      <Box bg="white" py={{ base: 12, md: 20 }} px={4}>
        <Container maxW="1200px">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={{ base: 10, md: 14 }}>
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={6} flex={1} textAlign={{ base: 'center', md: 'left' }}>
              <HStack spacing={2} color={PURPLE}><Icon as={MdPlace} /><Text fontWeight="bold" letterSpacing="wide" fontSize={{ base: 'xs', md: 'sm' }}>BOOTH E-10 · HALL 5GF · NEW DELHI · 3–5 DEC 2026</Text></HStack>
              <Heading as="h1" bgGradient={HEAD_GRAD} bgClip="text" fontSize={{ base: '32px', md: '52px' }} lineHeight={1.12} fontWeight="700">
                Meet ArcisAI at IFSEC India 2026
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="#444" maxW="600px">
                Experience the future of AI-powered video surveillance. Meet the ArcisAI team at IFSEC India 2026,
                Booth E-10, Hall 5GF, Bharat Mandapam, New Delhi, from <Text as="span" color={INK} fontWeight="700">3–5 December 2026</Text> for
                live demos of AI CCTV cameras, Edge AI, Cloud AI, ArcisGPT and our STQC-certified Cloud VMS.
                Book a meeting below and we&rsquo;ll confirm a time at the booth.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                <CustomButton onClick={() => goToForm('Book a meeting at IFSEC', 'schedule_meeting_hero')} as="button" width="210px" height="50px" fontSize="16px" fontWeight="600" {...btnPrimary}>
                  Schedule a Meeting
                </CustomButton>
                <CustomButton as={NextLink} href="/products" width="210px" height="50px" fontSize="16px" fontWeight="600" {...btnOutline}>
                  Explore ArcisAI Solutions
                </CustomButton>
              </HStack>
              <CLink href={WA} isExternal onClick={() => pushDL({ event: 'cta_click', cta_name: 'whatsapp_hero', page: 'ifsec-india-2026' })} sx={inlineLink} fontSize="sm">
                Or start a WhatsApp chat →
              </CLink>
            </VStack>
            <Box flex={1} w="100%" maxW="520px">
              <Box borderRadius="2xl" overflow="hidden" bg={SOFT} border="1px solid" borderColor={BORDER}>
                <Image loading="eager" fetchpriority="high" src="/images/arcis-ai-cctv-camera-hero.webp" htmlWidth="900" htmlHeight="560"
                  alt="ArcisAI AI CCTV cameras at IFSEC India 2026, Booth E-10, Hall 5GF" w="100%" objectFit="cover" />
              </Box>
              <SimpleGrid columns={2} spacing={3} mt={3}>
                <HStack bg={SOFT} border="1px solid" borderColor={BORDER} borderRadius="lg" p={3} spacing={2}><Icon as={MdLocationOn} color={PURPLE} boxSize={5} /><Text fontSize="sm" fontWeight="600">Bharat Mandapam, New Delhi</Text></HStack>
                <HStack bg={SOFT} border="1px solid" borderColor={BORDER} borderRadius="lg" p={3} spacing={2}><Icon as={MdEvent} color={PURPLE} boxSize={5} /><Text fontSize="sm" fontWeight="600">3–5 December 2026</Text></HStack>
                <HStack bg={SOFT} border="1px solid" borderColor={BORDER} borderRadius="lg" p={3} spacing={2}><Icon as={MdPlace} color={PURPLE} boxSize={5} /><Text fontSize="sm" fontWeight="600">Hall 5GF · Booth E-10</Text></HStack>
                <HStack bg={SOFT} border="1px solid" borderColor={BORDER} borderRadius="lg" p={3} spacing={2}><Image src="/images/IFSEC_event_logo.webp" alt="IFSEC India 2026" h="22px" objectFit="contain" /><Text fontSize="sm" fontWeight="600">IFSEC India 2026</Text></HStack>
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* QUICK ANSWER (GEO) — soft band */}
      <Box py={{ base: 10, md: 12 }} px={4} bg={SOFT} borderTop="1px solid" borderBottom="1px solid" borderColor={BORDER}>
        <Container maxW="900px">
          <SectionHeading size="md" mb={3}>Which AI CCTV companies are at IFSEC India 2026?</SectionHeading>
          <Text color="#444" fontSize={{ base: 'md', md: 'lg' }}>
            ArcisAI is exhibiting AI CCTV at IFSEC India 2026, Booth E-10, Hall 5GF, Bharat Mandapam, New Delhi,
            from 3 to 5 December 2026. ArcisAI is a Made-in-India AI CCTV brand by Adiance Technologies, showing
            edge-AI cameras, Cloud AI, a STQC-certified Cloud VMS and ArcisGPT. ArcisAI participates as an
            exhibitor — for the full official exhibitor list, see ifsecindia.com.
          </Text>
        </Container>
      </Box>

      {/* WHY MEET US — white, image + text */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="1200px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 14 }} align="center">
            <VStack flex={1} align="flex-start" spacing={5}>
              <SectionHeading size="lg">Discover AI-powered CCTV and intelligent surveillance at IFSEC India 2026</SectionHeading>
              <Text color="#444" fontSize={{ base: 'md', md: 'lg' }}>
                IFSEC India is where security buyers evaluate what they can specify and deploy. ArcisAI is a
                Made-in-India brand of AI CCTV built by{' '}
                <CLink as={NextLink} href="/about-us" sx={inlineLink}>Adiance Technologies</CLink>, certified across
                both hardware and software, so at Booth E-10 you can see compliant, enterprise-grade AI surveillance
                running live rather than on a slide.
              </Text>
              <Text color="#444" fontSize={{ base: 'md', md: 'lg' }}>
                Our engineers will demo edge-AI cameras from the{' '}
                <CLink as={NextLink} href="/eco-series" sx={inlineLink}>ECO-Series</CLink> and{' '}
                <CLink as={NextLink} href="/s-series" sx={inlineLink}>S-Series</CLink>, the{' '}
                <CLink as={NextLink} href="/cloud-vms" sx={inlineLink}>Cloud VMS</CLink> for multi-site monitoring, and{' '}
                <CLink as={NextLink} href="/arcisgpt" sx={inlineLink}>ArcisGPT</CLink> for natural-language video
                search. Already have cameras? The{' '}
                <CLink as={NextLink} href="/arcis-bridge-device" sx={inlineLink}>Arcis Bridge Device</CLink> can bring
                compatible existing ONVIF cameras onto the cloud. Review our{' '}
                <CLink as={NextLink} href="/certifications" sx={inlineLink}>certifications</CLink> to confirm
                eligibility for your procurement, and read the{' '}
                <CLink as={NextLink} href="/blog/ifsec-india-2026-ai-cctv-innovations" sx={inlineLink}>IFSEC India 2026 AI CCTV guide</CLink> for background.
              </Text>
            </VStack>
            <Box flex={1} w="100%" borderRadius="2xl" overflow="hidden" border="1px solid" borderColor={BORDER}>
              <Image loading="lazy" src="/images/solution_edgeai_hero.webp" htmlWidth="900" htmlHeight="600"
                alt="ArcisAI edge-AI surveillance demonstrated at IFSEC India 2026" w="100%" objectFit="cover" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ECOSYSTEM — dark gradient band with image cards (like the product band) */}
      <Box py={{ base: 14, md: 20 }} px={4} bgGradient={`linear(160deg, #1c1533 0%, ${INK} 100%)`} color="white">
        <Container maxW="1200px">
          <VStack spacing={3} mb={10} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="700">One intelligent ecosystem. Multiple layers of AI surveillance.</Heading>
            <Text color="whiteAlpha.700" maxW="720px">Explore each layer of the ArcisAI surveillance stack — tap through to the full product or solution page.</Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {ecosystem.map((c) => (
              <Box key={c.title} as={NextLink} href={c.href} bg="whiteAlpha.50" borderRadius="xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.200" transition="all .2s" _hover={{ borderColor: PURPLE, transform: 'translateY(-3px)' }}>
                <Box h="170px" bg="#0F0F0F" overflow="hidden">
                  <Image loading="lazy" src={c.img} alt={`ArcisAI ${c.title}`} w="100%" h="100%" objectFit="cover" />
                </Box>
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2} color="white">{c.title}</Heading>
                  <Text color="whiteAlpha.700" mb={4} fontSize="sm">{c.desc}</Text>
                  <HStack color={PURPLE} spacing={1} sx={{ filter: 'brightness(1.6)' }}><Text fontSize="sm" fontWeight="600">Learn more</Text><Icon as={MdArrowForward} /></HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* PRODUCT PORTFOLIO — white, image cards */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="1200px">
          <SectionHeading size="lg" mb={2}>Explore AI CCTV cameras and surveillance products</SectionHeading>
          <Text color="#444" mb={10} maxW="760px">The products our team will demo at Booth E-10. Each links to its full specification page.</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {products.map((p) => (
              <Box key={p.title} as={NextLink} href={p.href} borderRadius="xl" overflow="hidden" border="1px solid" borderColor={BORDER} bg="white" transition="all .2s" boxShadow="sm" _hover={{ boxShadow: 'md', borderColor: PURPLE, transform: 'translateY(-3px)' }}>
                <Box h="200px" bg={SOFT} overflow="hidden">
                  <Image loading="lazy" src={p.img} alt={`ArcisAI ${p.title}`} w="100%" h="100%" objectFit="cover" />
                </Box>
                <Box p={6}>
                  <Heading as="h3" size="sm" mb={1} color={INK}>{p.title}</Heading>
                  <Text color="#555" fontSize="sm">{p.desc}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ANALYTICS — soft band, image + grid */}
      <Box py={{ base: 14, md: 20 }} px={4} bg={SOFT} borderTop="1px solid" borderBottom="1px solid" borderColor={BORDER}>
        <Container maxW="1200px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 14 }} align="center">
            <Box flex={1} w="100%" borderRadius="2xl" overflow="hidden" border="1px solid" borderColor={BORDER}>
              <Image loading="lazy" src="/images/multiview.webp" htmlWidth="1000" htmlHeight="700"
                alt="ArcisAI multi-camera monitoring and video analytics" w="100%" objectFit="cover" />
            </Box>
            <Box flex={1}>
              <SectionHeading size="lg" mb={2}>Turn surveillance footage into actionable intelligence</SectionHeading>
              <Text color="#444" mb={6}>ArcisAI cameras and the Cloud VMS support a wide range of video analytics. Availability of each depends on the camera model and configuration — our team will confirm what fits your use case.</Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                {analytics.map((a) => (
                  <HStack key={a} spacing={3} bg="white" p={3} borderRadius="lg" border="1px solid" borderColor={BORDER}>
                    <Icon as={MdCheckCircle} color={PURPLE} /><Text fontSize="sm">{a}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* CERTIFICATION — white, image + text */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="1100px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 14 }} align="center">
            <Box flex={1} display="flex" justifyContent="center">
              <Image loading="lazy" src="/images/arcis-stqc-bis-certified-camera.webp" htmlWidth="720" htmlHeight="450"
                alt="ArcisAI STQC and BIS-ER certified AI CCTV camera" w="100%" maxW="420px" objectFit="contain" />
            </Box>
            <VStack flex={1} align="flex-start" spacing={5}>
              <SectionHeading size="lg">Made in India. Certified for trust.</SectionHeading>
              <Text color="#444">
                <Text as="span" color={INK} fontWeight="700">BIS-ER</Text> certification applies to ArcisAI&rsquo;s
                applicable camera hardware (registration R-72003735 under ER01:2024).{' '}
                <Text as="span" color={INK} fontWeight="700">STQC</Text> certification applies to the Video
                Management Software and mobile app. Hardware and software certifications are separate — we&rsquo;ll
                confirm the exact coverage for the models you&rsquo;re evaluating.
              </Text>
              <HStack spacing={4}>
                <Image loading="lazy" src="/images/MakeInIndia.webp" alt="Made in India" h="56px" objectFit="contain" />
                <CustomButton as={NextLink} href="/certifications" width="230px" height="46px" fontSize="15px" {...btnPrimary}>
                  Explore ArcisAI Certifications
                </CustomButton>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* WHO SHOULD MEET US — soft band */}
      <Box py={{ base: 14, md: 20 }} px={4} bg={SOFT} borderTop="1px solid" borderBottom="1px solid" borderColor={BORDER}>
        <Container maxW="1000px">
          <VStack spacing={6} align="flex-start">
            <SectionHeading size="lg">Connect with ArcisAI at Booth E-10</SectionHeading>
            <Text color="#444">Book a slot that matches how you buy, build or deploy surveillance:</Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
              {audience.map((a) => (
                <HStack key={a.who} as={NextLink} href={a.href} bg="white" p={5} borderRadius="lg" justify="space-between" border="1px solid" borderColor={BORDER} _hover={{ borderColor: PURPLE, boxShadow: 'sm' }}>
                  <Text fontWeight="600">{a.who}</Text>
                  <HStack color={PURPLE} spacing={1}><Text fontSize="sm">{a.label}</Text><Icon as={MdArrowForward} /></HStack>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* INDUSTRIES — white */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="1000px">
          <SectionHeading size="lg" mb={6}>Intelligent surveillance for real-world environments</SectionHeading>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            {industries.map((i) => (
              <HStack key={i} spacing={3} bg="white" p={4} borderRadius="lg" border="1px solid" borderColor={BORDER}>
                <Box w="6px" h="6px" borderRadius="full" bg={PURPLE} flexShrink={0} /><Text fontSize="sm">{i}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* WHY ARCISAI — dark gradient band + image */}
      <Box py={{ base: 14, md: 20 }} px={4} bgGradient={`linear(160deg, #1c1533 0%, ${INK} 100%)`} color="white">
        <Container maxW="1200px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 10, md: 14 }} align="center">
            <Box flex={1} w="100%" borderRadius="2xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.200">
              <Image loading="lazy" src="/images/whyarcis_hero.webp" htmlWidth="900" htmlHeight="620"
                alt="Why choose ArcisAI intelligent surveillance" w="100%" objectFit="cover" />
            </Box>
            <Box flex={1}>
              <Heading as="h2" size="lg" fontWeight="700" mb={6}>Why explore ArcisAI&rsquo;s intelligent surveillance ecosystem?</Heading>
              <SimpleGrid columns={{ base: 1 }} spacing={3}>
                {whyArcis.map((w) => (
                  <HStack key={w} align="start" spacing={3}>
                    <Icon as={MdCheckCircle} color="#A4FF79" mt={1} boxSize={5} flexShrink={0} /><Text color="whiteAlpha.900">{w}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
              <Box mt={6}>
                <CustomButton as={NextLink} href="/why-choose-arcisai" width="200px" height="46px" fontSize="15px" hoverBorderColor="#A4FF79">Why ArcisAI</CustomButton>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* IFSEC PHOTOS — real booth images (webp) */}
      <Box py={{ base: 14, md: 20 }} px={4} bg={SOFT} borderTop="1px solid" borderBottom="1px solid" borderColor={BORDER}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={10} textAlign="center">
            <SectionHeading size="lg">ArcisAI at IFSEC India</SectionHeading>
            <Text color="#555" maxW="640px">A returning exhibitor at IFSEC India — showcasing Made-in-India AI CCTV, Edge AI, Cloud VMS and ArcisGPT in 2024, 2025, and again in 2026.</Text>
            <HStack spacing={3} flexWrap="wrap" justify="center">
              {['IFSEC 2024', 'IFSEC 2025', 'IFSEC 2026'].map((y, idx) => (
                <Box key={y} px={4} py={1.5} borderRadius="full" fontSize="sm" fontWeight="600"
                  border="1px solid" borderColor={idx === 2 ? PURPLE : BORDER}
                  bg={idx === 2 ? PURPLE : 'white'} color={idx === 2 ? 'white' : '#555'}>
                  {y}{idx === 2 ? ' · Upcoming' : ''}
                </Box>
              ))}
            </HStack>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
            {ifsecPhotos.map((ph) => (
              <Box key={ph.src} borderRadius="xl" overflow="hidden" border="1px solid" borderColor={BORDER} bg="white">
                <Image loading="lazy" src={ph.src} alt={ph.alt} w="100%" h={{ base: '220px', md: '260px' }} objectFit="cover" />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* EVENT DETAILS — white */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="1000px">
          <SectionHeading size="lg" mb={6}>Meet ArcisAI at IFSEC India 2026 — Booth E-10, Hall 5GF</SectionHeading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} mb={8}>
            <Box bg={SOFT} p={6} borderRadius="xl" border="1px solid" borderColor={BORDER}><Text color="#777" fontSize="sm">Event</Text><Text fontWeight="700">IFSEC India 2026</Text></Box>
            <Box bg={SOFT} p={6} borderRadius="xl" border="1px solid" borderColor={BORDER}><Text color="#777" fontSize="sm">Dates</Text><Text fontWeight="700">3–5 December 2026</Text></Box>
            <Box bg={SOFT} p={6} borderRadius="xl" border="1px solid" borderColor={BORDER}><Text color="#777" fontSize="sm">Venue</Text><Text fontWeight="700">Bharat Mandapam, New Delhi</Text></Box>
            <Box bg={SOFT} p={6} borderRadius="xl" border="1px solid" borderColor={BORDER}><Text color="#777" fontSize="sm">Hall &amp; Booth</Text><Text fontWeight="700">Hall 5GF · Booth E-10</Text></Box>
          </SimpleGrid>
          <HStack spacing={4} flexWrap="wrap">
            <CustomButton onClick={() => goToForm('Book a meeting at IFSEC', 'plan_visit')} as="button" width="190px" height="48px" fontSize="15px" {...btnPrimary}>Book a Meeting</CustomButton>
            <CLink as={NextLink} href="https://www.ifsecindia.com/" isExternal sx={inlineLink} alignSelf="center" fontSize="sm">Official IFSEC India website →</CLink>
          </HStack>
        </Container>
      </Box>

      {/* LEAD FORM — soft band, white form card */}
      <Box py={{ base: 14, md: 20 }} px={4} id="ifsec-lead-form" bg={SOFT} borderTop="1px solid" borderColor={BORDER}>
        <Container maxW="1000px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={12}>
            <VStack align="flex-start" spacing={5} flex={1}>
              <SectionHeading size="lg">Let&rsquo;s connect at IFSEC India 2026</SectionHeading>
              <Text color="#444">Book a meeting, request a product demo or start a partnership conversation. Tell us what you need and our team will respond to confirm.</Text>
              <List spacing={3} pt={2}>
                <ListItem display="flex" alignItems="center"><ListIcon as={MdCheckCircle} color={PURPLE} />One-on-one with AI surveillance engineers</ListItem>
                <ListItem display="flex" alignItems="center"><ListIcon as={MdCheckCircle} color={PURPLE} />Compliance guidance for Indian procurement</ListItem>
                <ListItem display="flex" alignItems="center"><ListIcon as={MdCheckCircle} color={PURPLE} />Live analytics matched to your use case</ListItem>
              </List>
              <Text color="#777" fontSize="sm">Prefer to talk now? WhatsApp or call +91 96877 79999, or <CLink as={NextLink} href="/contact-us" sx={inlineLink}>contact the team</CLink>.</Text>
            </VStack>
            <Box flex={1} w="100%">
              <Box as="form" onSubmit={handleSubmit} bg="white" p={{ base: 5, md: 7 }} borderRadius="2xl" border="1px solid" borderColor={BORDER} boxShadow="sm">
                <VStack spacing={4}>
                  <FormControl isRequired><FormLabel fontSize="sm">I&rsquo;m interested in</FormLabel>
                    <Select name="enquiryType" value={form.enquiryType} onChange={onChange} placeholder="Select…" {...field}>
                      {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </Select>
                  </FormControl>
                  <FormControl isRequired><FormLabel fontSize="sm">Full Name</FormLabel><Input name="name" autoComplete="name" value={form.name} onChange={onChange} {...field} /></FormControl>
                  <FormControl isRequired><FormLabel fontSize="sm">Company Name</FormLabel><Input name="company" autoComplete="organization" value={form.company} onChange={onChange} {...field} /></FormControl>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                    <FormControl isRequired><FormLabel fontSize="sm">Business Email</FormLabel><Input type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} {...field} /></FormControl>
                    <FormControl isRequired><FormLabel fontSize="sm">Phone Number</FormLabel><Input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={onChange} {...field} /></FormControl>
                  </SimpleGrid>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                    <FormControl><FormLabel fontSize="sm">City &amp; Country</FormLabel><Input name="cityCountry" value={form.cityCountry} onChange={onChange} {...field} /></FormControl>
                    <FormControl><FormLabel fontSize="sm">Business Type</FormLabel>
                      <Select name="businessType" value={form.businessType} onChange={onChange} placeholder="Select…" {...field}>
                        {BUSINESS_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
                      </Select>
                    </FormControl>
                  </SimpleGrid>
                  <FormControl><FormLabel fontSize="sm">Product of Interest</FormLabel>
                    <Select name="productInterest" value={form.productInterest} onChange={onChange} placeholder="Select…" {...field}>
                      {PRODUCT_INTEREST.map((p) => <option key={p} value={p}>{p}</option>)}
                    </Select>
                  </FormControl>
                  <FormControl><FormLabel fontSize="sm">Preferred Meeting Day &amp; Time</FormLabel><Input name="meetingTime" value={form.meetingTime} onChange={onChange} placeholder="e.g. 4 Dec, afternoon" {...field} /></FormControl>
                  <FormControl><FormLabel fontSize="sm">Message</FormLabel><Textarea name="message" value={form.message} onChange={onChange} rows={3} {...field} /></FormControl>
                  <Text color="#888" fontSize="xs">By submitting, you agree to be contacted by ArcisAI about your enquiry. See our <CLink as={NextLink} href="/privacy-policy" sx={inlineLink}>privacy policy</CLink>.</Text>
                  <Box w="100%" pt={1}>
                    <CustomButton as="button" type="submit" width="100%" height="50px" fontSize="16px" fontWeight="600" showGlow={false} {...btnPrimary} sx={{ opacity: submitting ? 0.6 : 1, pointerEvents: submitting ? 'none' : 'auto' }}>
                      {submitting ? 'Sending…' : 'Submit Enquiry'}
                    </CustomButton>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* FAQ — white */}
      <Box py={{ base: 14, md: 20 }} px={4}>
        <Container maxW="900px">
          <SectionHeading size="lg" mb={6}>Frequently asked questions</SectionHeading>
          <Accordion allowToggle>
            {FAQS.map((f, i) => (
              <AccordionItem key={i} border="1px solid" borderColor={BORDER} borderRadius="lg" mb={3} bg="white">
                <AccordionButton _hover={{ bg: SOFT }} py={4} borderRadius="lg">
                  <Box as="h3" flex="1" textAlign="left" fontWeight="600" color={INK}>{f.q}</Box>
                  <AccordionIcon color={PURPLE} />
                </AccordionButton>
                <AccordionPanel pb={4} color="#555">{f.a}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CLOSING CTA — purple gradient band */}
      <Box bgGradient={`linear(135deg, ${PURPLE_DEEP} 0%, ${PURPLE} 100%)`} py={16} px={4} textAlign="center" color="white">
        <Container maxW="900px">
          <Heading as="h2" size="lg" mb={4} fontWeight="700">See you at Booth E-10, Hall 5GF</Heading>
          <Text mb={8} color="whiteAlpha.900">Explore the products we&rsquo;ll demo at IFSEC India 2026, or book your meeting now.</Text>
          <HStack justify="center" spacing={4} flexWrap="wrap">
            <CustomButton onClick={() => goToForm('Book a meeting at IFSEC', 'schedule_meeting_footer')} as="button" width="190px" height="48px" fontSize="15px">Schedule Your Meeting</CustomButton>
            <CustomButton onClick={() => goToForm('Request a product demo', 'request_demo_footer')} as="button" width="190px" height="48px" fontSize="15px">Request a Product Demo</CustomButton>
            <CustomButton as={NextLink} href="/contact-us" width="150px" height="48px" fontSize="15px">Contact ArcisAI</CustomButton>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default IFSECIndia2026;
