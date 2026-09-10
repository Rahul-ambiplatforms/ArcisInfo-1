'use client';
import React from 'react';
import { Box, Container, Heading, Text, Stack, HStack, Badge, Divider, Link, Button, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const Section = ({ title, children }) => (
  <Box mb={10}>
    <Heading as="h2" fontSize={{ base: '22px', md: '30px' }} fontWeight="700" mb={4} color="white">{title}</Heading>
    <Stack spacing={3} color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">{children}</Stack>
  </Box>
);

const ComplianceGuide2026 = () => (
  <Container maxW="900px" py={{ base: 10, md: 16 }} color="white">
    <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} fontSize="xs" textTransform="uppercase" letterSpacing="wider">Buyer's Guide</Badge>
    <Heading as="h1" fontSize={{ base: '30px', md: '46px' }} fontWeight="700" mb={4} lineHeight="1.15">
      India CCTV Compliance 2026: BIS-ER &amp; STQC Explained
    </Heading>
    <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }} mb={2}>
      India is moving to certified surveillance. This guide explains the BIS-ER and STQC certification
      requirements for CCTV in plain language — what they are, who needs them, and how to verify any
      brand's certificate before you buy. Always confirm the latest official timeline on{' '}
      <Link href="https://crsbis.in/BIS/" isExternal color={ACCENT} textDecoration="underline">crsbis.in</Link> and{' '}
      <Link href="https://www.stqc.gov.in/" isExternal color={ACCENT} textDecoration="underline">stqc.gov.in</Link>.
    </Text>
    {/* SEO audit fix (checklist item #83): visible "last reviewed" date for this
        compliance-sensitive guide. Update whenever the certification timeline below
        is re-checked against the official portals. */}
    <Text fontSize="sm" color="whiteAlpha.600" mb={8}>
      Last reviewed: September 2026
    </Text>

    <Box p={5} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl" mb={10}>
      <Text fontWeight="600" color={ACCENT} mb={2}>In one line</Text>
      <Text color="whiteAlpha.900">
        To be legally sold in India, a CCTV system increasingly needs <b>BIS-ER</b> certification for the
        camera hardware <b>and</b> <b>STQC</b> certification for the video software (VMS). A product certified
        for only one layer is not fully compliant for government / GeM / PSU procurement.
      </Text>
    </Box>

    <Section title="What is changing">
      <Text>India's Bureau of Indian Standards (BIS) and STQC (under MeitY, Government of India) have introduced
        Essential Requirements (ER) and security certification for CCTV cameras and video management software.
        The intent is cyber-secure, quality-assured surveillance — and to phase out non-certified products from
        the market. Government procurement already requires STQC compliance, and the requirement is extending
        across the broader market in 2026.</Text>
      <Text>For the exact, current effective dates and product scope, always check the official{' '}
        <Link href="https://crsbis.in/BIS/" isExternal color={ACCENT} textDecoration="underline">BIS portal</Link>{' '}
        and{' '}
        <Link href="https://www.stqc.gov.in/" isExternal color={ACCENT} textDecoration="underline">STQC portal</Link>{' '}
        — timelines have shifted, so treat those as the source of truth.</Text>
    </Section>

    <Section title="What is BIS-ER (ER01:2024)?">
      <Text>BIS-ER is the Bureau of Indian Standards' registration of CCTV camera <b>hardware</b> against the
        Essential Requirements (commonly referenced with IS 13252 and ER01:2024). It tests security and quality
        essentials such as:</Text>
      <List spacing={2} pl={2}>
        <ListItem>• No default passwords</ListItem>
        <ListItem>• Encrypted video streams (TLS / HTTPS)</ListItem>
        <ListItem>• Secure boot with signed firmware</ListItem>
        <ListItem>• Disabled debug/test ports</ListItem>
        <ListItem>• Supply-chain / chipset-origin transparency</ListItem>
        <ListItem>• A published vulnerability-disclosure policy</ListItem>
      </List>
      <Text>A valid BIS-ER registration has an R-number (for example, ArcisAI's is R-72003735) that can be searched
        on the{' '}
        <Link href="https://crsbis.in/BIS/" isExternal color={ACCENT} textDecoration="underline">BIS portal</Link>.</Text>
    </Section>

    <Section title="What is STQC certification?">
      <Text>STQC (Standardisation Testing and Quality Certification), under India's Ministry of Electronics and IT,
        certifies the <b>security of the software</b> — primarily the Video Management System (VMS) and apps —
        across hardware, firmware and network layers. For end-to-end compliance, both the camera (BIS-ER) and the
        software (STQC) need certification.</Text>
    </Section>

    <Section title="Who needs certified CCTV?">
      <Text>Most directly: any vendor selling into <b>government, PSU, or GeM</b> procurement — certification is a
        prerequisite there. More broadly, the market is shifting to certified-only products, so enterprises,
        institutions, housing societies and businesses buying now should choose certified brands to stay
        future-proof and avoid replacing non-compliant hardware later.</Text>
    </Section>

    <Section title="How to verify a CCTV certificate (before you buy)">
      <List spacing={2} pl={2}>
        <ListItem>1. <b>BIS-ER:</b> search the R-number on the BIS CRS portal (<Link href="https://crsbis.in/BIS/" isExternal color={ACCENT} textDecoration="underline">crsbis.in</Link>) and confirm the specific model is listed.</ListItem>
        <ListItem>2. <b>STQC:</b> confirm the VMS/software certificate on{' '}
          <Link href="https://www.stqc.gov.in/" isExternal color={ACCENT} textDecoration="underline">stqc.gov.in</Link>.</ListItem>
        <ListItem>3. <b>Both layers:</b> a product with only one is not fully compliant.</ListItem>
        <ListItem>4. <b>NDAA / origin:</b> for sensitive sites, confirm NDAA compliance and a clean supply chain.</ListItem>
      </List>
      <Box mt={4}>
        <Button as={NextLink} type={undefined} href="/tools/certificate-verifier" bg={ACCENT} color="white" _hover={{ bg: ACCENT_DEEP }}>
          Verify a certificate with our free tool →
        </Button>
      </Box>
    </Section>

    <Section title="A note on Made-in-India & banned brands">
      <Text>Alongside certification, origin matters: products built without high-risk foreign components (NDAA
        compliant) and manufactured in India are favoured for government and sensitive deployments. Buyers
        increasingly prioritise certified, Made-in-India brands for both compliance and supply-chain security.</Text>
    </Section>

    <Divider borderColor={CARD_BORDER} my={8} />

    <Box p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl" mb={10}>
      <Heading as="h2" fontSize={{ base: '20px', md: '26px' }} fontWeight="700" mb={3}>ArcisAI is certified on both layers</Heading>
      <Text color="whiteAlpha.900" mb={4}>
        ArcisAI holds BIS-ER (R-72003735, ER01:2024) for hardware and STQC certification for its VMS — plus
        ISO 27001:2022 and NDAA compliance, Made in India. Fully eligible for legal sale and government/GeM procurement.
      </Text>
      <HStack spacing={3} flexWrap="wrap">
        <Button as={NextLink} type={undefined} href="/certifications" bg="white" color={ACCENT_DEEP} fontWeight="700" _hover={{ bg: 'gray.100' }}>See ArcisAI certifications</Button>
        <Button as={NextLink} type={undefined} href="/contact-us" variant="outline" color="white" borderColor="whiteAlpha.500" _hover={{ bg: 'whiteAlpha.200' }}>Talk to us</Button>
      </HStack>
    </Box>

    <Section title="Frequently asked questions">
      <Box><Text fontWeight="600" color="white">Is non-certified CCTV legal to sell in India?</Text>
        <Text>The market is moving to certified-only, and government/GeM procurement already requires it. Buying certified now avoids forced replacement later. Check official portals for the current effective date.</Text></Box>
      <Box><Text fontWeight="600" color="white">Does a camera need both BIS-ER and STQC?</Text>
        <Text>For full compliance — especially government/PSU/GeM — yes: BIS-ER for hardware and STQC for the software.</Text></Box>
      <Box><Text fontWeight="600" color="white">How do I check if a brand is really certified?</Text>
        <Text>Search the BIS R-number on{' '}
          <Link href="https://crsbis.in/BIS/" isExternal color={ACCENT} textDecoration="underline">crsbis.in</Link>{' '}
          and the STQC certificate on{' '}
          <Link href="https://www.stqc.gov.in/" isExternal color={ACCENT} textDecoration="underline">stqc.gov.in</Link>,
          or use our free certificate verifier.</Text></Box>
      <Box><Text fontWeight="600" color="white">Is ArcisAI certified?</Text>
        <Text>Yes — BIS-ER (R-72003735, ER01:2024) and STQC certified, plus ISO 27001:2022, NDAA compliant, Made in India.</Text></Box>
    </Section>
  </Container>
);

export default ComplianceGuide2026;
