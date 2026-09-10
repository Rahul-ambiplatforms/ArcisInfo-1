'use client';
import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge, Divider, Link, Button, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const Stat = ({ big, label }) => (
  <Box p={5} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" textAlign="center">
    <Text fontSize={{ base: '28px', md: '36px' }} fontWeight="800" color={ACCENT}>{big}</Text>
    <Text fontSize="sm" color="whiteAlpha.800" mt={1}>{label}</Text>
  </Box>
);

const Section = ({ title, children }) => (
  <Box mb={10}>
    <Heading as="h2" fontSize={{ base: '22px', md: '30px' }} fontWeight="700" mb={4} color="white">{title}</Heading>
    <Stack spacing={3} color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">{children}</Stack>
  </Box>
);

const MarketReport2026 = () => (
  <Container maxW="920px" py={{ base: 10, md: 16 }} color="white">
    <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} fontSize="xs" textTransform="uppercase" letterSpacing="wider">Report · 2026</Badge>
    <Heading as="h1" fontSize={{ base: '30px', md: '46px' }} fontWeight="700" mb={4} lineHeight="1.15">
      India CCTV Market &amp; Certification Report 2026
    </Heading>
    <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} mb={8}>
      A reference on India's shift to certified surveillance — the BIS-ER / STQC mandate, its market impact,
      and what it means for buyers and the channel. Figures are compiled from public/industry sources and
      government portals; confirm the latest official timeline on crsbis.in and stqc.gov.in.
    </Text>

    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={10}>
      <Stat big="Apr 2026" label="BIS-ER / STQC certification mandate window" />
      <Stat big="2 layers" label="Hardware (BIS-ER) + Software (STQC) both required" />
      <Stat big="Gov/GeM" label="Certification already required for public procurement" />
      <Stat big="Made-in-India" label="Local-content preference favours domestic brands" />
    </SimpleGrid>

    <Section title="Executive summary">
      <Text>India is moving from an open CCTV market to a <b>certified-only</b> one. Under BIS Essential
        Requirements (ER01:2024) and STQC security certification, cameras and video software must be certified
        to be sold — with government, PSU and GeM procurement already enforcing it. The effect is a sharp tilt
        toward certified, Made-in-India brands and away from non-compliant imports.</Text>
    </Section>

    <Section title="The regulatory timeline (verify exact dates on official portals)">
      <List spacing={2} pl={2}>
        <ListItem>• <b>BIS Essential Requirements (ER01:2024)</b> define security + quality standards for CCTV hardware (linked to IS 13252).</ListItem>
        <ListItem>• <b>STQC certification</b> (MeitY) covers the security of the VMS / software layer.</ListItem>
        <ListItem>• <b>Government / GeM procurement</b> already requires STQC compliance for CCTV supply.</ListItem>
        <ListItem>• <b>2026 mandate window</b> extends certified-only requirements across the broader market.</ListItem>
      </List>
    </Section>

    <Section title="Market impact">
      <Text>Three shifts are underway, per public industry commentary:</Text>
      <List spacing={2} pl={2}>
        <ListItem>1. <b>Domestic brands gaining share</b> — certification requirements and restrictions on non-compliant imports are moving demand to Indian manufacturers.</ListItem>
        <ListItem>2. <b>Compliance as a purchase filter</b> — buyers increasingly screen for BIS-ER + STQC up front, especially for tenders.</ListItem>
        <ListItem>3. <b>AI + cyber-security expectations rising</b> — edge AI, encrypted streams and secure firmware are becoming baseline, not premium.</ListItem>
      </List>
      <Text fontSize="sm" color="whiteAlpha.600">Note: specific market-share figures circulating publicly vary by source and should be cited to their original publisher; this report presents the direction of travel rather than asserting precise percentages.</Text>
    </Section>

    <Section title="What the standard actually requires (ER01:2024 essentials)">
      <List spacing={2} pl={2}>
        <ListItem>• No default passwords · encrypted video (TLS/HTTPS) · secure boot with signed firmware</ListItem>
        <ListItem>• Disabled debug/test ports · supply-chain / chipset-origin transparency</ListItem>
        <ListItem>• Published vulnerability-disclosure policy</ListItem>
      </List>
    </Section>

    <Section title="What it means for buyers">
      <List spacing={2} pl={2}>
        <ListItem>• Choose brands certified on <b>both</b> hardware (BIS-ER) and software (STQC) to be future-proof and tender-ready.</ListItem>
        <ListItem>• Verify certificates yourself on crsbis.in (BIS R-number) and stqc.gov.in.</ListItem>
        <ListItem>• For sensitive/government sites, prioritise NDAA-compliant, Made-in-India supply chains.</ListItem>
      </List>
      <Box mt={3}>
        <Button as={NextLink} type={undefined} href="/tools/certificate-verifier" bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }}>Verify a certificate (free tool) →</Button>
      </Box>
    </Section>

    <Divider borderColor={CARD_BORDER} my={8} />
    <Box p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl" mb={10}>
      <Heading as="h2" fontSize={{ base: '20px', md: '26px' }} fontWeight="700" mb={3}>Where ArcisAI fits</Heading>
      <Text color="whiteAlpha.900">ArcisAI (by Adiance Technologies, Ahmedabad) is certified on both layers — BIS-ER (R-72003735, ER01:2024)
        and STQC — plus ISO 27001:2022 and NDAA compliant, Made in India, with edge AI and ArcisGPT. It is positioned
        for exactly the certified, AI-first, domestic demand this report describes.</Text>
      <Button as={NextLink} type={undefined} href="/certifications" bg="white" color={ACCENT_DEEP} fontWeight="700" _hover={{ bg: 'gray.100' }} mt={4}>See ArcisAI's certifications</Button>
    </Box>

    <Section title="Methodology &amp; sources">
      <Text fontSize="sm" color="whiteAlpha.700">Compiled from public government sources (BIS / crsbis.in, STQC / stqc.gov.in, MeitY)
        and publicly reported industry commentary. Regulatory dates and product scope should be confirmed on the official
        portals, which are the authoritative source. Citations welcome — please link to this page and attribute "ArcisAI / Adiance Technologies."</Text>
    </Section>
  </Container>
);

export default MarketReport2026;
