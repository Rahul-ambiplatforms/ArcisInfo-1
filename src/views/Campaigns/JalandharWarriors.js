'use client';
import React, { useCallback } from 'react';
import {
  Box, Container, Heading, Text, Flex, VStack, SimpleGrid, Icon, Link as CLink, Image,
  AspectRatio,
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

// COPY: campaign video for the "About the campaign" section. Set `src` to a
// privacy-friendly YouTube embed URL (https://www.youtube-nocookie.com/embed/<id>)
// or any other embeddable player URL. While `src` is empty the right column
// renders a neutral placeholder instead of a broken iframe.
// Source clip: https://youtube.com/shorts/CTll96CBQ60 — Shorts play in the
// standard embed player, so the /shorts/<id> link becomes /embed/<id>.
// controls=1 gives the viewer play/pause, scrubbing and volume; rel=0 keeps
// end-screen suggestions to this channel; the -nocookie host avoids setting
// tracking cookies until the viewer actually plays.
const CAMPAIGN_VIDEO = {
  src: 'https://www.youtube-nocookie.com/embed/CTll96CBQ60?controls=1&rel=0',
  title: 'Jalandhar Warriors campaign video',
};

// Real CustomButtons — corner brackets, ticks, hover animation and all — in
// place of the ones that were painted into the supplied banner.
//
// The row is anchored to where the artwork's buttons were drawn: left edge at
// x141 of the 1066x364 source. Sizes are given in
// cqw so they track the banner's own width (not the viewport) and resolve to
// the site's usual 200x50 / 180x50 buttons once the banner is at full width.
const HERO_BUTTONS = [
  {
    label: 'Follow the Warriors', href: '/contact-us', event: 'follow_warriors',
    width: 'clamp(150px, 18.2cqw, 200px)',
  },
  {
    label: 'Explore ArcisAI', href: '/eco-series', event: 'explore_arcisai',
    width: 'clamp(135px, 16.4cqw, 180px)',
  },
];
// Copy and buttons are anchored by their top edge to percentages of the banner,
// so they hold position as the artwork scales. The left inset matches where the
// artwork's own copy block started (x141 of 1066).
const HERO_COPY_LEFT = '13.23%';
const HERO_COPY_TOP = '22%';
const HERO_BUTTON_TOP = '70%';

// Type scales with the banner's width (cqw), not the viewport, so it stays in
// proportion to the artwork. Sizes are a step up from the artwork's baked-in
// text, which read too small once the banner was placed at container width.
const HERO_EYEBROW_FONT = 'clamp(12px, 1.5cqw, 16px)';
const HERO_TITLE_FONT = 'clamp(28px, 4.8cqw, 51px)';
const HERO_TAGLINE_FONT = 'clamp(14px, 1.7cqw, 18px)';
const HERO_BUTTON_HEIGHT = 'clamp(38px, 4.6cqw, 50px)';
const HERO_BUTTON_FONT = 'clamp(12px, 1.45cqw, 16px)';

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

      {/* HERO — campaign artwork as the backdrop, with the copy and buttons as
          real elements on top. The banner's own text was baked in at a size that
          read too small at container width, so PUNJAB_WARRIOR_BANNER_BG.webp is
          the supplied banner with the left-hand copy block painted out; the
          gradient, geometry, team photo and both logos are untouched.

          Copy and buttons switch from overlay to normal flow below md, where the
          artwork is too small to hold them. They stay a single instance in the
          DOM either way, so the page keeps exactly one <h1>. */}
      <Box bg={DARK} py={{ base: 6, md: 8 }} px={4}>
        <Container maxW="1100px">
          <Box position="relative" w="100%" sx={{ containerType: 'inline-size' }}>
            <Image
              src="/images/PUNJAB_WARRIOR_BANNER_BG.webp"
              alt="ArcisAI and Jalandhar Warriors campaign banner"
              htmlWidth="1066"
              htmlHeight="364"
              w="100%"
              h="auto"
              display="block"
              loading="eager"
            />

            <VStack
              position={{ base: 'static', md: 'absolute' }}
              left={{ md: HERO_COPY_LEFT }}
              top={{ md: HERO_COPY_TOP }}
              maxW={{ base: '100%', md: '48%' }}
              pt={{ base: 6, md: 0 }}
              align="flex-start"
              spacing={3}
            >
              <Text color={GREEN} fontWeight="bold" letterSpacing="wide" fontSize={HERO_EYEBROW_FONT}>
                OFFICIAL CAMPAIGN HUB
              </Text>
              <Heading as="h1" fontSize={HERO_TITLE_FONT} lineHeight={1.05} fontWeight="700">
                Jalandhar Warriors
              </Heading>
              {/* COPY: campaign tagline / positioning from content team. */}
              <Text color="whiteAlpha.900" fontSize={HERO_TAGLINE_FONT}>
                The official campaign hub — powered by ArcisAI, built by{' '}
                <CLink href="https://www.adiance.com" isExternal sx={inlineLink}>Adiance Technologies</CLink>.
              </Text>
            </VStack>

            <Flex
              position={{ base: 'static', md: 'absolute' }}
              left={{ md: HERO_COPY_LEFT }}
              top={{ md: HERO_BUTTON_TOP }}
              pt={{ base: 5, md: 0 }}
              align="center"
              flexWrap="wrap"
              gap={4}
            >
              {HERO_BUTTONS.map((b) => (
                <CustomButton
                  key={b.href}
                  as={NextLink}
                  href={b.href}
                  onClick={onCta(b.event)}
                  width={b.width}
                  height={HERO_BUTTON_HEIGHT}
                  fontSize={HERO_BUTTON_FONT}
                  fontWeight="600"
                  hoverBorderColor={GREEN}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  {b.label}
                </CustomButton>
              ))}
            </Flex>
          </Box>
        </Container>
      </Box>

      {/* ABOUT THE CAMPAIGN */}
      <Box py={{ base: 10, md: 8 }} px={4}>
        <Container maxW="1100px">
          {/* The prose column stays flush-left with the hero heading and buttons
              above; the video sits alongside it from md up. */}
          <Flex direction={{ base: 'column', md: 'row' }} align="stretch" gap={{ base: 10, md: 12 }}>
            {/* space-between spreads the heading and paragraphs over the full
                height of the video alongside, so both columns end level. */}
            <VStack spacing={5} align="flex-start" justify="space-between" flex={1} minW={0}>
              <Heading as="h2" size="lg" fontWeight="700">About the campaign</Heading>
              {/* COPY: content team supplies the campaign narrative as real, visible prose. */}
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'xl' }}>
                This is the permanent home for the Jalandhar Warriors campaign — the story, updates and imagery are
                curated by the ArcisAI team. The campaign is powered by ArcisAI, whose cameras keep venues, campuses
                and public spaces secure with real-time, on-camera intelligence.
              </Text>
              <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'xl' }}>
                ArcisAI cameras are STQC and BIS-ER certified and NDAA Section 889 compliant, running 20+ analytics
                directly on the camera — face recognition, ANPR, crowd counting, intrusion and fire detection and more.
                Explore <CLink as={NextLink} href="/why-choose-arcisai" sx={inlineLink}>why teams choose ArcisAI</CLink> or
                see the full <CLink as={NextLink} href="/certifications" sx={inlineLink}>certifications</CLink>.
              </Text>
            </VStack>

            {/* The video keeps its 7:6 shape but its width is also capped against
                the viewport height, so on short laptop screens the whole player
                still lands above the fold instead of being clipped. */}
            <Box
              flex={1} w="100%"
              maxW={{ base: '100%', md: 'max(320px, min(520px, calc((100vh - 560px) * 7 / 6)))' }}
              bg={PANEL} borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100"
              p={3} overflow="hidden" display="flex" alignItems="center"
            >
              <AspectRatio ratio={7 / 6} w="100%" borderRadius="lg" overflow="hidden">
                {CAMPAIGN_VIDEO.src ? (
                  <Box
                    as="iframe"
                    src={CAMPAIGN_VIDEO.src}
                    title={CAMPAIGN_VIDEO.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    border="0"
                  />
                ) : (
                  <Flex bg="#0F0F0F" align="center" justify="center">
                    <Text color="whiteAlpha.500" fontSize="sm">Campaign video coming soon</Text>
                  </Flex>
                )}
              </AspectRatio>
            </Box>
          </Flex>
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
