'use client';
import React from 'react';
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, HStack, VStack,
  Badge, Divider, Link, Button, List, ListItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const Fact = ({ k, v }) => (
  <Box p={4} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="lg">
    <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase" letterSpacing="wider">{k}</Text>
    <Text fontWeight="600" color="white" mt={1}>{v}</Text>
  </Box>
);

const MediaKit = () => (
  <Container maxW="1100px" py={{ base: 10, md: 16 }} color="white">
    <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4}
      fontSize="xs" textTransform="uppercase" letterSpacing="wider">Press &amp; Media Kit</Badge>
    <Heading as="h1" fontSize={{ base: '30px', md: '46px' }} fontWeight="700" mb={3}>
      ArcisAI Press &amp; Media Kit
    </Heading>
    <Text color="whiteAlpha.800" maxW="3xl" mb={10} fontSize={{ base: 'md', md: 'lg' }}>
      Everything journalists, bloggers and partners need to write about ArcisAI — facts, certifications,
      products and contacts, all verifiable. For high-res logos, product images or certificate copies,
      email <Link href="mailto:marketing@arcisai.io" color={ACCENT} textDecoration="underline">marketing@arcisai.io</Link>.
    </Text>

    {/* Boilerplate */}
    <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="600" mb={4}>About ArcisAI (boilerplate — copy &amp; use)</Heading>
    <Box p={{ base: 5, md: 6 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" mb={10}>
      <Text color="whiteAlpha.900" lineHeight="1.8">
        ArcisAI is India's AI-first surveillance brand by Adiance Technologies Pvt. Ltd. (Ahmedabad, Gujarat) —
        BIS-ER (Certificate R-72003735, ER01:2024) and STQC-certified, Made-in-India CCTV with on-camera edge AI
        and ArcisGPT, the first conversational-AI layer for video. The complete stack — cameras, NVRs, Cloud VMS,
        AI analytics and GenAI — is developed in-house. ArcisAI products are NDAA compliant and ISO 27001:2022
        certified, eligible for legal sale and government/GeM procurement under India's April 2026 surveillance
        certification mandate.
      </Text>
    </Box>

    {/* Key facts */}
    <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="600" mb={4}>Key facts</Heading>
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={10}>
      <Fact k="Brand" v="ArcisAI" />
      <Fact k="Company" v="Adiance Technologies Pvt. Ltd." />
      <Fact k="HQ" v="Ahmedabad, Gujarat, India" />
      <Fact k="Heritage" v="20+ yrs OEM/ODM (Adiance)" />
      <Fact k="BIS-ER" v="R-72003735 (ER01:2024)" />
      <Fact k="STQC" v="Certified VMS + app" />
      <Fact k="Also" v="ISO 27001:2022 · NDAA · Made in India" />
      <Fact k="Category" v="AI CCTV / Video Surveillance" />
    </SimpleGrid>

    {/* Certifications with verify */}
    <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="600" mb={4}>Certifications (independently verifiable)</Heading>
    <Stack spacing={3} mb={10}>
      <HStack justify="space-between" p={4} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="lg" flexWrap="wrap">
        <Text color="white"><b>BIS-ER</b> — R-72003735, ER01:2024 (hardware)</Text>
        <Link href="https://www.crsbis.in/BIS/publicdashUC.do" isExternal color={ACCENT} textDecoration="underline">Verify on crsbis.in ↗</Link>
      </HStack>
      <HStack justify="space-between" p={4} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="lg" flexWrap="wrap">
        <Text color="white"><b>STQC</b> — Cloud VMS + mobile app (software)</Text>
        <Link href="https://www.stqc.gov.in/" isExternal color={ACCENT} textDecoration="underline">Verify on stqc.gov.in ↗</Link>
      </HStack>
    </Stack>

    {/* Products + differentiators */}
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
      <Box p={{ base: 5, md: 6 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
        <Heading as="h3" fontSize="lg" fontWeight="600" mb={3} color={ACCENT}>Product range</Heading>
        <List spacing={2} color="whiteAlpha.900">
          <ListItem>S-Series — premium edge-AI cameras (Bullet / Dome / PTZ)</ListItem>
          <ListItem>Eco Series — value AI cameras (30+ models)</ListItem>
          <ListItem>Arcis Bridge Device — AI-upgrade for existing cameras</ListItem>
          <ListItem>Cloud VMS — STQC-certified video management</ListItem>
          <ListItem>NVR — 4/8/16/32 channel</ListItem>
          <ListItem>ArcisGPT — conversational AI for surveillance</ListItem>
        </List>
      </Box>
      <Box p={{ base: 5, md: 6 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
        <Heading as="h3" fontSize="lg" fontWeight="600" mb={3} color={ACCENT}>What makes it newsworthy</Heading>
        <List spacing={2} color="whiteAlpha.900">
          <ListItem>One of few Indian brands certified on BOTH hardware &amp; software</ListItem>
          <ListItem>India's first conversational-AI CCTV (ArcisGPT)</ListItem>
          <ListItem>8 AI detections on the camera itself (edge AI)</ListItem>
          <ListItem>Bridge Device — no rip-and-replace upgrade</ListItem>
          <ListItem>Made in India; NDAA compliant; GeM/PSU ready</ListItem>
        </List>
      </Box>
    </SimpleGrid>

    {/* Quote */}
    <Box p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl" mb={10}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontStyle="italic" color="white" lineHeight="1.7">
        "As India moves to certified surveillance in 2026, ArcisAI proves you don't have to choose between
        compliance and intelligence — it's certified to sell, Made in India, and the first CCTV you can simply talk to."
      </Text>
      <Text mt={3} color="whiteAlpha.800">— ArcisAI spokesperson, Adiance Technologies</Text>
    </Box>

    {/* Tools + contact */}
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={4}>
      <Box p={{ base: 5, md: 6 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
        <Heading as="h3" fontSize="lg" fontWeight="600" mb={3}>Free tools to reference</Heading>
        <Stack spacing={2}>
          <Link as={NextLink} href="/tools/certificate-verifier" color={ACCENT} textDecoration="underline">BIS-ER / STQC Certificate Verifier</Link>
          <Link as={NextLink} href="/tools/cctv-storage-calculator" color={ACCENT} textDecoration="underline">CCTV Storage Calculator</Link>
          <Link as={NextLink} href="/certifications" color={ACCENT} textDecoration="underline">Certifications page</Link>
        </Stack>
      </Box>
      <Box p={{ base: 5, md: 6 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
        <Heading as="h3" fontSize="lg" fontWeight="600" mb={3}>Press contact</Heading>
        <Text color="whiteAlpha.900">marketing@arcisai.io</Text>
        <Text color="whiteAlpha.900">+91 96877 79999</Text>
        <Text color="whiteAlpha.700" mt={2} fontSize="sm">High-res logos, product images &amp; certificate copies on request.</Text>
        <Button as={NextLink} type={undefined} href="/contact-us" mt={4} bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }} size="sm">Contact us</Button>
      </Box>
    </SimpleGrid>
  </Container>
);

export default MediaKit;
