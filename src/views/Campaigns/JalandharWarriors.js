'use client';
import React, { useCallback } from 'react';
import {
  Box, Container, Heading, Text, Flex, VStack, HStack, SimpleGrid, Icon, Link as CLink, Image,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdVerified, MdBolt, MdCloud, MdSearch } from 'react-icons/md';
import CustomButton from '../../Components/CustomButton';

// Jalandhar Warriors — PERMANENT campaign / entity hub (URL stays live after the
// campaign ends). Site design system: dark #171717, purple #7F56D9 + green
// #A4FF79, shared CustomButton; global Header/Footer from ClientLayout.
//
// SEO/GEO: single <h1>; question-style H2s; answer-first ArcisAI context;
// contextual in-prose internal links; visible FAQ + matching FAQPage schema
// (schema mirrors visible, factual content). Server-rendered JSON-LD.
// CONTENT TEAM: campaign-specific narrative/imagery goes in the "COPY:" slots;
// the ArcisAI context and links are factual and SEO-bearing.

const PURPLE = '#7F56D9';
const GREEN = '#A4FF79';
const DARK = '#171717';
const PANEL = '#1E1E1E';

function pushDL(payload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  // Direct-to-GA4 path (see app/jalandhar-warriors/page.js) — fires the same
  // event straight to GA4 (G-FGCHHSNZ7D) since GTM-T5CXTDPH isn't configured
  // to relay dataLayer pushes. Safe no-op if gtag hasn't loaded yet.
  if (typeof window.gtag === 'function') {
    const { event, ...params } = payload;
    window.gtag('event', event, params);
  }
}

const FAQS = [
  {
    q: 'What is ArcisAI?',
    a: 'ArcisAI is a Made-in-India brand of AI CCTV cameras and edge-AI video surveillance, built by Adiance Technologies. It offers STQC- and BIS-ER-certified, NDAA Section 889-compliant cameras with 20+ on-camera analytics, a Cloud VMS, and ArcisGPT for natural-language video search.',
  },
  {
    q: 'Is ArcisAI certified to sell in India?',
    a: 'Yes. ArcisAI holds STQC certification (Video Management Software) and BIS-ER certification (hardware, R-72003735 under ER01:2024) — both required for CCTV sold and installed in India from April 2026, including government, PSU and GeM procurement.',
  },
  {
    q: 'What makes ArcisAI different from other CCTV brands?',
    a: 'ArcisAI runs AI analytics on the camera (edge AI) with no per-camera annual licence fees, is Made-in-India and NDAA compliant, and pairs a cloud-native VMS with ArcisGPT — a conversational AI layer that most Indian competitors do not offer.',
  },
  {
    q: 'How can I get ArcisAI for my organisation?',
    a: 'Contact the ArcisAI team for a demo or quote. Cameras are available across ArcisAI\'s AI CCTV lineup in PoE, Wi-Fi and 4G-SIM variants, with a 3-year warranty (extendable to 5).',
  },
];

const JalandharWarriors = () => {
  const onCta = useCallback((name) => () => {
    pushDL({ event: 'cta_click', cta_name: name, page: 'jalandhar-warriors' });
  }, []);

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arcisai.io/' },
      { '@type': 'ListItem', position: 2, name: 'Jalandhar Warriors', item: 'https://arcisai.io/jalandhar-warriors' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const entityLinks = [
    { href: '/eco-series', icon: MdBolt, label: 'ECO-Series AI Cameras', desc: 'Value edge-AI CCTV with on-camera analytics.' },
    { href: '/cloud-vms', icon: MdCloud, label: 'Cloud VMS', desc: 'STQC-certified video management, any scale.' },
    { href: '/arcisgpt', icon: MdSearch, label: 'ArcisGPT', desc: 'Natural-language search across your footage.' },
    { href: '/about-us', icon: MdVerified, label: 'About ArcisAI', desc: 'Made-in-India, STQC & BIS-ER certified.' },
  ];
  const inlineLink = { color: GREEN, textDecoration: 'underline', _hover: { color: '#C7FFB0' } };

  return (
    <Box bg={DARK} color="white" minH="100vh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <Box bgGradient={`linear(135deg, ${DARK} 0%, #2A1B4A 100%)`} py={{ base: 16, md: 28 }} px={4} position="relative" overflow="hidden">
        <Box position="absolute" bottom="-25%" left="-10%" w="520px" h="520px" bg={PURPLE} opacity={0.2} filter="blur(130px)" borderRadius="full" />
        <Container maxW="1100px" position="relative">
          <VStack spacing={6} align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }}>
            <Text color={GREEN} fontWeight="bold" letterSpacing="wide">OFFICIAL CAMPAIGN HUB</Text>
            <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight={1.05} fontWeight="700">Jalandhar Warriors</Heading>
            {/* COPY: campaign tagline / positioning from content team. */}
            <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.800" maxW="640px">
              The official campaign hub — powered by ArcisAI, built by{' '}
              <CLink as={NextLink} href="/about-us" sx={inlineLink}>Adiance Technologies</CLink>.
            </Text>
            <HStack spacing={4} pt={2} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
              <CustomButton as={NextLink} href="/contact-us" onClick={onCta('follow_warriors')} width="200px" height="50px" fontSize="16px" fontWeight="600" hoverBorderColor={GREEN}>Follow the Warriors</CustomButton>
              <CustomButton as={NextLink} href="/eco-series" onClick={onCta('explore_arcisai')} width="180px" height="50px" fontSize="16px" fontWeight="600">Explore ArcisAI</CustomButton>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* ABOUT THE CAMPAIGN */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Container maxW="900px">
          <VStack spacing={5} align="flex-start">
            <Heading as="h2" size="lg" fontWeight="700">About the campaign</Heading>
            {/* COPY: content team supplies the campaign narrative as real, visible prose. */}
            <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
              This is the permanent home for the Jalandhar Warriors campaign — the story, updates and imagery are
              curated by the ArcisAI team. The campaign is powered by ArcisAI, whose cameras keep venues, campuses
              and public spaces secure with real-time, on-camera intelligence.
            </Text>
            <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
              ArcisAI cameras are STQC and BIS-ER certified and NDAA Section 889 compliant, running 20+ analytics
              directly on the camera — face recognition, ANPR, crowd counting, intrusion and fire detection and more.
              Explore <CLink as={NextLink} href="/why-choose-arcisai" sx={inlineLink}>why teams choose ArcisAI</CLink> or
              see the full <CLink as={NextLink} href="/certifications" sx={inlineLink}>certifications</CLink>.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* WHY ARCISAI (answer-first) */}
      <Box py={{ base: 10, md: 14 }} px={4} bg="#0F0F0F">
        <Container maxW="1100px">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
            <VStack spacing={5} align="flex-start" flex={1}>
              <Heading as="h2" size="lg" fontWeight="700">Why ArcisAI for AI surveillance?</Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
                ArcisAI is one of the few Indian brands certified across both hardware and software, so it is fully
                eligible for government, PSU and GeM procurement under India&rsquo;s April 2026 CCTV mandate. Its edge-AI
                approach runs analytics on the camera with no per-camera annual licence fees, and cameras ship in PoE,
                Wi-Fi and 4G-SIM variants across the <CLink as={NextLink} href="/eco-series" sx={inlineLink}>ECO-Series</CLink> lineup.
              </Text>
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
                The stack is complete end to end: on-camera <CLink as={NextLink} href="/solution/edge-ai" sx={inlineLink}>edge AI</CLink>,
                a <CLink as={NextLink} href="/cloud-vms" sx={inlineLink}>Cloud VMS</CLink> that scales to 10,000+ cameras, and{' '}
                <CLink as={NextLink} href="/arcisgpt" sx={inlineLink}>ArcisGPT</CLink> for natural-language video search — a
                conversational AI layer most Indian competitors do not offer.
              </Text>
            </VStack>
            <Box
              flex={1} w="100%" maxW={{ base: '100%', md: '440px' }}
              bg={PANEL} borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100" p={6}
            >
              <Image
                loading="lazy"
                src="/images/camera2-card.webp"
                htmlWidth="880"
                htmlHeight="790"
                alt="ArcisAI AI CCTV camera"
                w="100%"
                h={{ base: '220px', md: '300px' }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ENTITY LINKS */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Container maxW="1100px">
          <VStack spacing={10}>
            <VStack spacing={2}>
              <Heading as="h2" size="lg" textAlign="center" fontWeight="700">Powered by ArcisAI</Heading>
              <Text color="whiteAlpha.700" textAlign="center" maxW="640px">Explore the products behind the campaign.</Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="100%">
              {entityLinks.map((l) => (
                <Box key={l.href} as={NextLink} href={l.href} onClick={onCta(`entity_${l.href.replace(/\//g, '')}`)}
                  bg={PANEL} p={7} borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100"
                  _hover={{ borderColor: PURPLE, transform: 'translateY(-3px)' }} transition="all .2s">
                  <Icon as={l.icon} boxSize={8} color={GREEN} mb={3} />
                  <Heading as="h3" size="sm" mb={2}>{l.label}</Heading>
                  <Text color="whiteAlpha.600" fontSize="sm">{l.desc}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* FAQ (visible) — mirrored into FAQPage schema above */}
      <Box py={{ base: 12, md: 16 }} px={4} bg="#0F0F0F">
        <Container maxW="900px">
          <Heading as="h2" size="lg" fontWeight="700" mb={6}>Frequently asked questions</Heading>
          <Accordion allowToggle>
            {FAQS.map((f, i) => (
              <AccordionItem key={i} border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg" mb={3} bg={PANEL}>
                <AccordionButton _hover={{ bg: 'whiteAlpha.100' }} py={4}>
                  <Box as="h3" flex="1" textAlign="left" fontWeight="600">{f.q}</Box>
                  <AccordionIcon color={GREEN} />
                </AccordionButton>
                <AccordionPanel pb={4} color="whiteAlpha.800">{f.a}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CLOSING CTA */}
      <Box bgGradient={`linear(135deg, #2A1B4A 0%, ${DARK} 100%)`} py={16} px={4} textAlign="center">
        <Container maxW="800px">
          <Heading as="h2" size="lg" mb={4} fontWeight="700">Bring AI surveillance to your team</Heading>
          <Text mb={8} color="whiteAlpha.800">Talk to ArcisAI about Made-in-India, STQC &amp; BIS-ER certified AI CCTV.</Text>
          <Flex justify="center">
            <CustomButton as={NextLink} href="/contact-us" onClick={onCta('closing_contact')} width="190px" height="50px" fontSize="16px" fontWeight="600" hoverBorderColor={GREEN}>Contact ArcisAI</CustomButton>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default JalandharWarriors;
