'use client';
import React from 'react';
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, Badge, Button, Divider, Flex, Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const WA = 'https://wa.me/919687779999?text=' + encodeURIComponent(
  "Hi ArcisAI, I'm interested in becoming a dealer/distributor in India. Please share the partner program details."
);

const Card = ({ title, children }) => (
  <Box p={6} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" h="100%">
    <Heading as="h3" fontSize="lg" mb={2} color="white">{title}</Heading>
    <Text color="whiteAlpha.800" fontSize="sm" lineHeight="1.7">{children}</Text>
  </Box>
);

const Step = ({ n, title, children }) => (
  <Flex gap={4} align="flex-start">
    <Flex minW="38px" h="38px" borderRadius="full" bg={ACCENT} color="white" fontWeight="800" align="center" justify="center">{n}</Flex>
    <Box>
      <Heading as="h3" fontSize="md" color="white" mb={1}>{title}</Heading>
      <Text color="whiteAlpha.800" fontSize="sm" lineHeight="1.7">{children}</Text>
    </Box>
  </Flex>
);

const DistributorProgram = () => (
  <Box color="white">
    {/* Hero */}
    <Box bgGradient={`linear(160deg, #1c1533, #171717)`} py={{ base: 12, md: 20 }}>
      <Container maxW="1100px">
        <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} textTransform="uppercase" letterSpacing="wider" fontSize="xs">
          Channel Partner Program · India
        </Badge>
        <Heading as="h1" fontSize={{ base: '32px', md: '52px' }} fontWeight="800" lineHeight="1.1" mb={4}>
          Become an ArcisAI Dealer or Distributor
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="760px" mb={8}>
          Sell India&apos;s certified, AI-native surveillance brand. ArcisAI is STQC &amp; BIS-ER (ER01:2024)
          certified and Made in India by Adiance Technologies &mdash; built for the certified-only market,
          GeM &amp; PSU tenders, and the shift away from non-compliant imports after April 2026.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <Button as="a" href={WA} size="lg" bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }}>
            Apply on WhatsApp
          </Button>
          <Button as="a" href="mailto:marketing@arcisai.io?subject=ArcisAI%20Distributor%20Enquiry" size="lg" variant="outline" borderColor={CARD_BORDER} color="white" _hover={{ bg: 'whiteAlpha.100' }}>
            Email the Channel Team
          </Button>
        </Stack>
      </Container>
    </Box>

    <Container maxW="1100px" py={{ base: 12, md: 16 }}>
      {/* Why partner */}
      <Heading as="h2" fontSize={{ base: '24px', md: '34px' }} fontWeight="700" mb={8}>Why partner with ArcisAI</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={16}>
        <Card title="Certified & tender-ready">STQC + BIS-ER (ER01:2024) certified, IS 13252-registered (R-72003735). Your customers can bid on GeM, PSU and government tenders that now require certified, Made-in-India CCTV.</Card>
        <Card title="AI-native, not retrofitted">On-camera edge AI (8 detections), ArcisGPT Gen-AI video search, and a Cloud VMS platform &mdash; a genuinely differentiated line, not another rebadged import.</Card>
        <Card title="Healthy channel economics">Competitive dealer pricing, a full range (Dome, Bullet, PTZ, NVR; WiFi/PoE/4G), and demand tailwinds from the certified-only mandate. Margins &amp; territory discussed on application.</Card>
        <Card title="Made in India advantage">Local manufacturing, local data residency, faster support and shorter supply chains &mdash; a strong story for security-conscious and government buyers.</Card>
        <Card title="Marketing & sales support">Datasheets, brand assets, product training, pre-sales support and demo units to help you close &mdash; you sell, we back you.</Card>
        <Card title="Backed by a manufacturer">ArcisAI is built by Adiance Technologies (Ahmedabad) with its own factory &mdash; direct supply, firmware ownership, and roadmap input.</Card>
      </SimpleGrid>

      {/* Ideal partner */}
      <Box p={{ base: 6, md: 8 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" mb={16}>
        <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="700" mb={4}>Who we&apos;re looking for</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={3} color="whiteAlpha.900" fontSize={{ base: 'sm', md: 'md' }}>
          <Text>• System integrators &amp; security solution providers</Text>
          <Text>• Regional CCTV distributors &amp; wholesalers</Text>
          <Text>• IT / networking &amp; ELV contractors</Text>
          <Text>• GeM / government-tender channel partners</Text>
          <Text>• Retail &amp; commercial security installers</Text>
          <Text>• Telecom &amp; ISP field-service partners</Text>
        </SimpleGrid>
      </Box>

      {/* How it works */}
      <Heading as="h2" fontSize={{ base: '24px', md: '34px' }} fontWeight="700" mb={8}>How it works</Heading>
      <Stack spacing={6} mb={16} maxW="820px">
        <Step n="1" title="Apply">Send your details on WhatsApp or email, or fill the enquiry form. Tell us your region, business type and CCTV experience.</Step>
        <Step n="2" title="Discovery call">We share the full program &mdash; pricing tiers, margins, territory, MOQ and support &mdash; and understand your market.</Step>
        <Step n="3" title="Onboarding">Sign up, get brand assets, datasheets, training and demo units. Your first stock order is placed.</Step>
        <Step n="4" title="Sell &amp; scale">Go to market with pre-sales, marketing and technical support behind you. Grow into more territory and SKUs.</Step>
      </Stack>

      {/* CTA */}
      <Box p={{ base: 6, md: 10 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="2xl" textAlign="center">
        <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="800" mb={3}>Ready to sell ArcisAI in your region?</Heading>
        <Text color="whiteAlpha.900" mb={6} maxW="620px" mx="auto">Join the certified, Made-in-India AI CCTV brand built for the post-2026 market. Talk to our channel team today.</Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button as="a" href={WA} size="lg" bg="white" color={ACCENT_DEEP} fontWeight="700" _hover={{ bg: 'gray.100' }}>Apply on WhatsApp</Button>
          <Button as="a" href="tel:+919687779999" size="lg" variant="outline" borderColor="whiteAlpha.500" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Call +91 96877 79999</Button>
          <Button as={NextLink} href="/global-oem-partnership" size="lg" variant="outline" borderColor="whiteAlpha.500" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Exporting / OEM? →</Button>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default DistributorProgram;
