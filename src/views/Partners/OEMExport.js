'use client';
import React from 'react';
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, Badge, Button, Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const WA = 'https://wa.me/919687779999?text=' + encodeURIComponent(
  "Hi ArcisAI, I'm interested in international distribution / OEM / white-label partnership. Please share export program details."
);

const Card = ({ title, children }) => (
  <Box p={6} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" h="100%">
    <Heading as="h3" fontSize="lg" mb={2} color="white">{title}</Heading>
    <Text color="whiteAlpha.800" fontSize="sm" lineHeight="1.7">{children}</Text>
  </Box>
);

const OEMExport = () => (
  <Box color="white">
    <Box bgGradient={`linear(160deg, #1c1533, #171717)`} py={{ base: 12, md: 20 }}>
      <Container maxW="1100px">
        <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} textTransform="uppercase" letterSpacing="wider" fontSize="xs">
          Global OEM / ODM / Export
        </Badge>
        <Heading as="h1" fontSize={{ base: '32px', md: '52px' }} fontWeight="800" lineHeight="1.1" mb={4}>
          International Distribution &amp; OEM Partnership
        </Heading>
        <Text fontSize={{ base: 'md', md: 'xl' }} color="whiteAlpha.900" maxW="780px" mb={8}>
          For distributors, integrators and brands in the US, UK, EU, GCC and ANZ where supply-chain
          compliance now decides who wins tenders. Partner with ArcisAI &mdash; NDAA-compliant, Made-in-India
          AI cameras you can distribute, or white-label as your own.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <Button as="a" type={undefined} href={WA} size="lg" bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }}>Start on WhatsApp</Button>
          <Button as="a" type={undefined} href="mailto:marketing@arcisai.io?subject=ArcisAI%20International%20OEM%2FExport%20Enquiry" size="lg" variant="outline" borderColor={CARD_BORDER} color="white" _hover={{ bg: 'whiteAlpha.100' }}>Email Export Team</Button>
        </Stack>
      </Container>
    </Box>

    <Container maxW="1100px" py={{ base: 12, md: 16 }}>
      <Heading as="h2" fontSize={{ base: '24px', md: '34px' }} fontWeight="700" mb={8}>Two ways to partner</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={16}>
        <Box p={7} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
          <Heading as="h3" fontSize="xl" mb={3} color="white">Distribute the ArcisAI brand</Heading>
          <Text color="whiteAlpha.800" lineHeight="1.7">Bring a certified, AI-native surveillance line to your market under the ArcisAI brand, with product training, marketing assets and technical support behind you.</Text>
        </Box>
        <Box p={7} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
          <Heading as="h3" fontSize="xl" mb={3} color="white">White-label / OEM (your brand)</Heading>
          <Text color="whiteAlpha.800" lineHeight="1.7">Your branding on the housing, firmware, packaging, mobile apps and a Cloud VMS on your own domain &mdash; NDAA-compliant hardware manufactured in India. MOQ from 100 units per SKU.</Text>
        </Box>
      </SimpleGrid>

      <Heading as="h2" fontSize={{ base: '24px', md: '34px' }} fontWeight="700" mb={8}>Why source from ArcisAI / Adiance</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={16}>
        <Card title="Compliance that wins tenders">NDAA-aligned, Made-in-India supply chain &mdash; the answer to &quot;not China&quot; sourcing requirements across US/UK/EU/GCC/ANZ public and enterprise procurement.</Card>
        <Card title="AI-native platform">Edge-AI cameras, ArcisGPT Gen-AI video search, and a Cloud VMS you can deploy on your own domain &mdash; a modern, differentiated line.</Card>
        <Card title="True manufacturer">Built by Adiance Technologies with its own factory in Ahmedabad &mdash; direct pricing, firmware ownership, and roadmap flexibility.</Card>
        <Card title="Full white-label stack">Hardware, firmware, packaging, apps and VMS all brandable &mdash; you own the customer relationship end to end.</Card>
        <Card title="Low MOQ to start">From 100 units per SKU &mdash; validate your market without heavy upfront commitment, then scale.</Card>
        <Card title="Certified quality">STQC &amp; BIS-ER (ER01:2024) certified, ISO 27001:2022, ONVIF/CE/FCC/RoHS aligned &mdash; audited quality you can stand behind.</Card>
      </SimpleGrid>

      <Box p={{ base: 6, md: 10 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="2xl" textAlign="center">
        <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="800" mb={3}>Let&apos;s build your surveillance line</Heading>
        <Text color="whiteAlpha.900" mb={6} maxW="640px" mx="auto">Tell us your market and volumes &mdash; we&apos;ll come back with a distribution or OEM proposal, pricing and samples.</Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button as="a" type={undefined} href={WA} size="lg" bg="white" color={ACCENT_DEEP} fontWeight="700" _hover={{ bg: 'gray.100' }}>Start on WhatsApp</Button>
          <Button as="a" type={undefined} href="mailto:marketing@arcisai.io?subject=ArcisAI%20International%20OEM%2FExport%20Enquiry" size="lg" variant="outline" borderColor="whiteAlpha.500" color="white" _hover={{ bg: 'whiteAlpha.200' }}>Email Export Team</Button>
          <Button as={NextLink} type={undefined} href="/become-a-distributor" size="lg" variant="outline" borderColor="whiteAlpha.500" color="white" _hover={{ bg: 'whiteAlpha.200' }}>India distributor? →</Button>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default OEMExport;
