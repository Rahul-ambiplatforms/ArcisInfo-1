'use client';
import React, { useState } from 'react';
import {
  Box, Container, Heading, Text, SimpleGrid, Stack, HStack, VStack,
  Input, Select, Button, Badge, Divider, Link, Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';

// Brand dark theme (#171717, accents #9678E1 / #8266C9)
const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const fieldStyle = {
  bg: 'rgba(255,255,255,0.06)', borderColor: CARD_BORDER, color: 'white',
  _hover: { borderColor: ACCENT }, _focus: { borderColor: ACCENT, boxShadow: `0 0 0 1px ${ACCENT}` },
  _placeholder: { color: 'whiteAlpha.500' },
};

// Official government verification portals
const PORTALS = {
  'BIS-ER': {
    name: 'BIS (Bureau of Indian Standards)',
    primary: { label: 'BIS CRS Portal — crsbis.in', url: 'https://www.crsbis.in/BIS/publicdashUC.do' },
    secondary: { label: 'BIS LIMS — lims.bis.gov.in', url: 'https://www.manakonline.in/MANAK/login' },
    help: 'Search the R-number (e.g. R-72003735) on the BIS CRS portal under "Registered Products / Manufacturers" to confirm the registration is live and the model is listed.',
    pattern: /^R-?\d{6,9}/i,
    placeholder: 'e.g. R-72003735 ER01:2024',
  },
  'STQC': {
    name: 'STQC (MeitY, Government of India)',
    primary: { label: 'STQC Portal — stqc.gov.in', url: 'https://www.stqc.gov.in/' },
    secondary: { label: 'MeitY Certified Products', url: 'https://www.stqc.gov.in/it-services' },
    help: 'STQC certifies the Video Management Software (VMS) and security aspects. Confirm the certificate and the certified product/version on the STQC portal.',
    pattern: /.{3,}/,
    placeholder: 'Enter STQC certificate / reference',
  },
};

const CertificateVerifier = () => {
  const [type, setType] = useState('BIS-ER');
  const [num, setNum] = useState('');
  const [checked, setChecked] = useState(false);

  const portal = PORTALS[type];
  const looksValid = num.trim() && portal.pattern.test(num.trim());

  return (
    <Container maxW="1000px" py={{ base: 10, md: 16 }} color="white">
      <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4}
        fontSize="xs" textTransform="uppercase" letterSpacing="wider">Free Trust Tool</Badge>
      <Heading as="h1" fontSize={{ base: '30px', md: '44px' }} fontWeight="700" mb={3}>
        BIS-ER &amp; STQC Certificate Verifier
      </Heading>
      <Text color="whiteAlpha.800" maxW="3xl" mb={2} fontSize={{ base: 'md', md: 'lg' }}>
        From 1 April 2026, only CCTV cameras with valid BIS-ER (hardware) and STQC (software)
        certification may legally be sold in India. Use this free tool to verify any certificate
        directly on the official government portals before you buy.
      </Text>
      <Text color="whiteAlpha.600" mb={10} fontSize="sm">
        Independent buyer's tool by ArcisAI — verifies against official BIS &amp; STQC sources.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {/* Verifier */}
        <Box p={{ base: 5, md: 7 }} bg={CARD_BG} border="1px solid" borderColor={CARD_BORDER} borderRadius="xl">
          <Heading as="h2" fontSize="xl" fontWeight="600" mb={6}>Verify a certificate</Heading>
          <Stack spacing={5}>
            <Box>
              <Text mb={2} fontSize="sm" color="whiteAlpha.800">Certification type</Text>
              <Select value={type} onChange={(e) => { setType(e.target.value); setChecked(false); }}
                {...fieldStyle} sx={{ option: { color: 'black' } }}>
                <option value="BIS-ER">BIS-ER (camera hardware)</option>
                <option value="STQC">STQC (VMS software)</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2} fontSize="sm" color="whiteAlpha.800">Certificate / registration number</Text>
              <Input value={num} onChange={(e) => { setNum(e.target.value); setChecked(false); }}
                placeholder={portal.placeholder} {...fieldStyle} />
            </Box>
            <Button onClick={() => setChecked(true)} isDisabled={!num.trim()}
              bgGradient={`linear(to-r, ${ACCENT_DEEP}, ${ACCENT})`} color="white" fontWeight="700"
              _hover={{ opacity: 0.9 }} _disabled={{ opacity: 0.4, cursor: 'not-allowed' }}>
              Verify on official portal
            </Button>

            {checked && (
              <Box mt={2} p={4} bg="whiteAlpha.100" borderRadius="lg" border="1px solid" borderColor={CARD_BORDER}>
                {looksValid ? (
                  <Text color="whiteAlpha.900" fontSize="sm" mb={3}>
                    <b>{num.trim()}</b> looks like a valid {type} reference format. Confirm it is
                    live and lists the exact model on the official {portal.name} portal:
                  </Text>
                ) : (
                  <Text color="#f6c177" fontSize="sm" mb={3}>
                    That doesn't match the usual {type} format — double-check the number, then verify
                    on the official {portal.name} portal:
                  </Text>
                )}
                <Stack spacing={2}>
                  <Button as={Link} href={portal.primary.url} isExternal bg="white" color={ACCENT_DEEP}
                    size="sm" fontWeight="700" _hover={{ bg: 'gray.100' }}>
                    {portal.primary.label} ↗
                  </Button>
                  <Button as={Link} href={portal.secondary.url} isExternal variant="outline" color="white"
                    borderColor="whiteAlpha.400" size="sm" _hover={{ bg: 'whiteAlpha.200' }}>
                    {portal.secondary.label} ↗
                  </Button>
                </Stack>
                <Text color="whiteAlpha.700" fontSize="xs" mt={3}>{portal.help}</Text>
              </Box>
            )}
          </Stack>
        </Box>

        {/* ArcisAI verified credentials */}
        <Box p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl"
          border="1px solid" borderColor={CARD_BORDER}>
          <Heading as="h2" fontSize="xl" fontWeight="600" mb={2}>ArcisAI — verified credentials</Heading>
          <Text color="whiteAlpha.800" fontSize="sm" mb={5}>
            ArcisAI is one of the few Indian brands certified across BOTH hardware and software — fully
            eligible for legal sale and government/GeM procurement under the 2026 mandate.
          </Text>
          <VStack align="stretch" spacing={3}>
            <Box p={4} bg="whiteAlpha.200" borderRadius="lg">
              <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">BIS-ER (hardware)</Text>
              <Text fontWeight="700" fontSize="lg">R-72003735 · ER01:2024</Text>
              <Link href="https://www.crsbis.in/BIS/publicdashUC.do" isExternal fontSize="sm" color="white" textDecoration="underline">
                Verify on crsbis.in ↗
              </Link>
            </Box>
            <Box p={4} bg="whiteAlpha.200" borderRadius="lg">
              <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase">STQC (VMS software)</Text>
              <Text fontWeight="700" fontSize="lg">STQC-certified Cloud VMS</Text>
              <Link href="https://www.stqc.gov.in/" isExternal fontSize="sm" color="white" textDecoration="underline">
                Verify on stqc.gov.in ↗
              </Link>
            </Box>
            <HStack spacing={2} pt={1} flexWrap="wrap">
              <Badge bg="whiteAlpha.300" color="white">ISO 27001:2022</Badge>
              <Badge bg="whiteAlpha.300" color="white">NDAA Compliant</Badge>
              <Badge bg="whiteAlpha.300" color="white">Made in India</Badge>
            </HStack>
            <Button as={NextLink} type={undefined} href="/certifications" bg="white" color={ACCENT_DEEP} fontWeight="700"
              _hover={{ bg: 'gray.100' }} mt={2}>See all ArcisAI certifications</Button>
          </VStack>
        </Box>
      </SimpleGrid>

      <Divider borderColor={CARD_BORDER} my={10} />
      <Heading as="h2" fontSize={{ base: '22px', md: '28px' }} fontWeight="600" mb={4}>
        How to check if a CCTV brand can legally be sold in India (2026)
      </Heading>
      <Stack spacing={3} maxW="3xl" color="whiteAlpha.800">
        <Text>1. <b>BIS-ER (hardware):</b> every camera model needs a BIS registration under ER01:2024. Search the R-number on crsbis.in and confirm the specific model is listed.</Text>
        <Text>2. <b>STQC (software):</b> the VMS / recording software needs STQC security certification. Confirm on stqc.gov.in.</Text>
        <Text>3. <b>Both are required.</b> A camera with only one of the two is not fully compliant for government / GeM / PSU procurement.</Text>
        <Text>4. <b>NDAA &amp; origin:</b> for sensitive/government sites, confirm NDAA compliance and that the supply chain avoids high-risk foreign components.</Text>
      </Stack>
    </Container>
  );
};

export default CertificateVerifier;
