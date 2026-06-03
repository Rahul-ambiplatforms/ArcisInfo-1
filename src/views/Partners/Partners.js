'use client';
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  Divider,
  Button,
  Badge,
} from '@chakra-ui/react';
import PageContentWrapper from '../../Components/PageContentWrapper';

// Brand palette (matches site dark theme: body #171717, accents #9678E1 / #8266C9)
const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const benefits = [
  {
    title: 'Attractive Margins',
    desc: 'Competitive dealer pricing with structured margin tiers — earn more as you grow with us.',
  },
  {
    title: 'Compliance-Ready Products',
    desc: 'ArcisAI holds BIS-ER certification (R-72003735 ER01:2024) and STQC certification — legally compliant for government, PSU, and enterprise tenders across India.',
  },
  {
    title: 'AI-First Differentiation',
    desc: 'Sell cameras powered by ArcisGPT — conversational AI for video analytics — a genuine differentiator no traditional CCTV brand offers.',
  },
  {
    title: 'Made-in-India Trust',
    desc: 'ArcisAI is a proudly Made-in-India brand. Our hardware and software meet India\'s Essential Requirements under ER01:2024, giving customers and procurement officers confidence.',
  },
  {
    title: 'End-to-End Ecosystem',
    desc: 'Camera hardware, NVR, VMS, cloud platform, and ArcisGPT — a complete stack your customers buy from one trusted source.',
  },
  {
    title: 'Marketing & Training Support',
    desc: 'Co-branded collateral, product training, demo units, and a dedicated partner success contact to help you close deals faster.',
  },
];

const whoShouldApply = [
  'System integrators (SIs) handling security or IT infrastructure projects',
  'Electrical and security camera installers serving residential and commercial clients',
  'IT, AV, and security product resellers looking to add a premium AI-CCTV line',
  'Regional distributors wanting an exclusive or semi-exclusive territory in Gujarat or Maharashtra',
  'Facility management companies seeking a certified, reliable CCTV supply chain',
];

const whatWeOffer = [
  { title: 'Product Training', desc: 'Hands-on onboarding covering hardware installation, VMS setup, ArcisGPT configuration, and troubleshooting.' },
  { title: 'Demo Units', desc: 'Qualifying partners receive demonstration hardware to showcase to prospects at no upfront cost.' },
  { title: 'Lead Sharing', desc: 'Inbound leads from your coverage area are routed to you as your territory grows.' },
  { title: 'Co-Marketing', desc: 'ArcisAI branding assets, joint digital campaigns, and support for local trade-show presence.' },
  { title: 'Dedicated Tech Support', desc: 'Priority technical helpdesk access for partner-sold installations, including remote diagnostics.' },
];

const faqs = [
  {
    q: 'Do I need prior experience with AI cameras to become a partner?',
    a: 'No prior AI camera experience is required. ArcisAI provides complete product training covering installation, VMS configuration, and ArcisGPT features. If you already have experience with traditional CCTV or IT infrastructure, you are well positioned to succeed.',
  },
  {
    q: 'Is ArcisAI\'s product range legal for government projects and tenders?',
    a: 'Yes. ArcisAI holds BIS-ER certification under ER01:2024 (certificate R-72003735) and STQC certification for its VMS. These certifications are specifically required for many government and public-sector CCTV procurements in India, giving our partners a compliance advantage.',
  },
  {
    q: 'Which regions are you prioritizing for new dealer sign-ups?',
    a: 'We are actively recruiting dealers and system integrators across Gujarat (Ahmedabad, Surat, Vadodara, Rajkot, and surrounding districts) and Maharashtra (Mumbai, Pune, Nashik, Nagpur, and beyond). Pan-India applications are also welcome.',
  },
  {
    q: 'How do I apply and what happens next?',
    a: 'Submit an enquiry via our Contact Us page and select "Partner Programme" as the enquiry type. Our partner team will contact you within two business days for an initial call to discuss fit, territory, and next steps.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Become an ArcisAI Channel Partner | Dealer Program',
    url: 'https://arcisai.io/partners',
    description:
      "Join ArcisAI's dealer and channel partner program — India's BIS-ER & STQC-certified, Made-in-India AI CCTV brand. Priority intake for system integrators and resellers in Gujarat and Maharashtra.",
    publisher: { '@id': 'https://arcisai.io/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

const Partners = () => {
  return (
    <>
      {schema.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <PageContentWrapper>
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 10, md: 16 }} color="white">

          {/* H1 + Intro */}
          <Badge
            bg="whiteAlpha.200"
            color="white"
            px={3}
            py={1}
            borderRadius="full"
            mb={4}
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Channel Partner Program
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: '30px', md: '48px' }}
            fontWeight="700"
            lineHeight="1.15"
            mb={4}
            color="white"
          >
            Become an ArcisAI Channel Partner
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" mb={4} maxW="4xl">
            ArcisAI is India&apos;s AI-first, BIS-ER (R-72003735 ER01:2024) and STQC-certified,
            Made-in-India CCTV brand. We are building a network of trusted system integrators,
            installers, IT and security resellers, and distributors across India — with priority
            focus on Gujarat and Maharashtra.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.700" mb={12} maxW="4xl">
            If you sell security solutions or manage infrastructure projects and want a
            compliance-ready, AI-powered product line that genuinely differentiates you from
            commodity camera brands, we would like to partner with you.
          </Text>

          {/* Why Partner */}
          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={6} color="white">
            Why Partner with ArcisAI?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mb={12}>
            {benefits.map((b, i) => (
              <Box
                key={i}
                p={6}
                bg={CARD_BG}
                border="1px solid"
                borderColor={CARD_BORDER}
                borderRadius="xl"
                transition="border-color 0.2s, transform 0.2s"
                _hover={{ borderColor: ACCENT, transform: 'translateY(-3px)' }}
              >
                <Heading as="h3" fontSize="md" fontWeight="600" mb={2} color={ACCENT}>
                  {b.title}
                </Heading>
                <Text color="whiteAlpha.800" fontSize="sm">
                  {b.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Divider borderColor={CARD_BORDER} mb={12} />

          {/* Who Should Apply */}
          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={4} color="white">
            Who Should Apply?
          </Heading>
          <Text color="whiteAlpha.800" mb={6} maxW="4xl">
            We welcome enquiries from businesses across India. Gujarat and Maharashtra are our
            current priority territories, but pan-India partners are also encouraged to apply.
          </Text>
          <List spacing={3} mb={12}>
            {whoShouldApply.map((item, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start" color="whiteAlpha.900">
                <Box as="span" w="7px" h="7px" mt="9px" mr={3} borderRadius="full" bg={ACCENT} flexShrink={0} />
                {item}
              </ListItem>
            ))}
          </List>

          <Divider borderColor={CARD_BORDER} mb={12} />

          {/* What We Offer */}
          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={6} color="white">
            What We Offer Partners
          </Heading>
          <Stack spacing={4} mb={12}>
            {whatWeOffer.map((item, i) => (
              <Box
                key={i}
                p={{ base: 5, md: 6 }}
                bg={CARD_BG}
                border="1px solid"
                borderColor={CARD_BORDER}
                borderRadius="xl"
              >
                <Heading as="h3" fontSize="md" fontWeight="600" mb={1} color="white">
                  {item.title}
                </Heading>
                <Text color="whiteAlpha.800">{item.desc}</Text>
              </Box>
            ))}
          </Stack>

          <Divider borderColor={CARD_BORDER} mb={12} />

          {/* FAQ */}
          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={6} color="white">
            Frequently Asked Questions
          </Heading>
          <Stack spacing={4} mb={14}>
            {faqs.map((f, i) => (
              <Box
                key={i}
                p={{ base: 5, md: 6 }}
                bg={CARD_BG}
                border="1px solid"
                borderColor={CARD_BORDER}
                borderRadius="xl"
                transition="border-color 0.2s"
                _hover={{ borderColor: ACCENT }}
              >
                <Heading as="h3" fontSize="md" fontWeight="600" mb={2} color="white">
                  {f.q}
                </Heading>
                <Text color="whiteAlpha.800">{f.a}</Text>
              </Box>
            ))}
          </Stack>

          {/* CTA */}
          <Box
            bgGradient={`linear(135deg, ${ACCENT_DEEP}, ${ACCENT})`}
            borderRadius="2xl"
            p={{ base: 8, md: 12 }}
            textAlign="center"
          >
            <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="700" mb={3} color="white">
              Ready to Join the ArcisAI Partner Network?
            </Heading>
            <Text color="whiteAlpha.900" mb={8} maxW="2xl" mx="auto">
              Tell us about your business, the geographies you cover, and the types of projects you
              handle. Our partner team will be in touch within two business days.
            </Text>
            <Button
              as="a"
              href="/contact-us?type=partner"
              bg="white"
              color={ACCENT_DEEP}
              size="lg"
              px={8}
              fontWeight="700"
              _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Apply to Become a Partner
            </Button>
          </Box>

        </Box>
      </PageContentWrapper>
    </>
  );
};

export default Partners;
