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
} from '@chakra-ui/react';
import PageContentWrapper from '../../Components/PageContentWrapper';

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
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 8, md: 14 }}>

          {/* H1 + Intro */}
          <Heading as="h1" size="xl" mb={4}>
            Become an ArcisAI Channel Partner
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={3}>
            ArcisAI is India&apos;s AI-first, BIS-ER (R-72003735 ER01:2024) and STQC-certified,
            Made-in-India CCTV brand. We are building a network of trusted system integrators,
            installers, IT and security resellers, and distributors across India — with priority
            focus on Gujarat and Maharashtra.
          </Text>
          <Text fontSize="lg" color="gray.600" mb={10}>
            If you sell security solutions or manage infrastructure projects and want a
            compliance-ready, AI-powered product line that genuinely differentiates you from
            commodity camera brands, we would like to partner with you.
          </Text>

          {/* Why Partner */}
          <Heading as="h2" size="lg" mb={6}>
            Why Partner with ArcisAI?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={10}>
            {benefits.map((b, i) => (
              <Box key={i} p={5} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="sm" mb={2}>
                  {b.title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {b.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Divider mb={10} />

          {/* Who Should Apply */}
          <Heading as="h2" size="lg" mb={4}>
            Who Should Apply?
          </Heading>
          <Text color="gray.600" mb={4}>
            We welcome enquiries from businesses across India. Gujarat and Maharashtra are our
            current priority territories, but pan-India partners are also encouraged to apply.
          </Text>
          <List spacing={3} mb={10} styleType="disc" pl={6}>
            {whoShouldApply.map((item, i) => (
              <ListItem key={i} color="gray.700">
                {item}
              </ListItem>
            ))}
          </List>

          <Divider mb={10} />

          {/* What We Offer */}
          <Heading as="h2" size="lg" mb={6}>
            What We Offer Partners
          </Heading>
          <Stack spacing={5} mb={10}>
            {whatWeOffer.map((item, i) => (
              <Box key={i}>
                <Heading as="h3" size="sm" mb={1}>
                  {item.title}
                </Heading>
                <Text color="gray.600">{item.desc}</Text>
              </Box>
            ))}
          </Stack>

          <Divider mb={10} />

          {/* FAQ */}
          <Heading as="h2" size="lg" mb={6}>
            Frequently Asked Questions
          </Heading>
          <Stack spacing={6} mb={12}>
            {faqs.map((f, i) => (
              <Box key={i}>
                <Heading as="h3" size="sm" mb={1}>
                  {f.q}
                </Heading>
                <Text color="gray.600">{f.a}</Text>
              </Box>
            ))}
          </Stack>

          {/* CTA */}
          <Box
            bg="blue.50"
            borderRadius="xl"
            p={{ base: 6, md: 10 }}
            textAlign="center"
          >
            <Heading as="h2" size="lg" mb={3}>
              Ready to Join the ArcisAI Partner Network?
            </Heading>
            <Text color="gray.600" mb={6} maxW="2xl" mx="auto">
              Tell us about your business, the geographies you cover, and the types of projects you
              handle. Our partner team will be in touch within two business days.
            </Text>
            <Button
              as="a"
              href="/contact-us?type=partner"
              colorScheme="blue"
              size="lg"
              px={8}
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
