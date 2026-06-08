'use client';
import React from 'react';
import {
  Box, Heading, Text, Stack, Table, Thead, Tbody, Tr, Th, Td,
  TableContainer, List, ListItem, Divider, Badge,
} from '@chakra-ui/react';
import PageContentWrapper from '../../Components/PageContentWrapper';

// Brand palette (matches site dark theme: body #171717, accents #9678E1 / #8266C9)
const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const certs = [
  ['BIS-ER (ER01:2024)', 'CCTV camera hardware', 'R-72003735 ER01:2024', 'crsbis.in / lims.bis.gov.in'],
  ['STQC', 'Video Management Software (VMS) & mobile app', 'STQC certified', 'stqc.gov.in'],
  ['ISO/IEC 27001:2022', 'Information Security Management', 'Certified', 'Certifying body'],
  ['CE / FCC / RoHS', 'Product safety & compliance', 'Compliant', 'Manufacturer declaration'],
  ['ONVIF', 'Camera interoperability', 'Conformant', 'onvif.org'],
];

const essentials = [
  'No default passwords',
  'Encrypted video streams (TLS / HTTPS)',
  'Secure boot with signed firmware',
  'Disabled debug and test ports',
  'Supply-chain and chipset origin transparency',
  'Published vulnerability-disclosure policy',
];

const faqs = [
  { q: 'Is ArcisAI STQC certified?', a: 'ArcisAI holds STQC certification for its Video Management Software (VMS) and BIS-ER certification for camera hardware (certificate R-72003735 ER01:2024). You can verify on stqc.gov.in and crsbis.in.' },
  { q: 'Is ArcisAI legal to sell in India after April 2026?', a: "Yes. ArcisAI's certified, Made-in-India range meets India's BIS Essential Requirements for CCTV." },
  { q: 'How can I verify ArcisAI certification myself?', a: 'Search the certificate number on crsbis.in / lims.bis.gov.in (BIS) and stqc.gov.in (STQC), and confirm the specific model is listed.' },
  { q: 'Is ArcisAI NDAA compliant?', a: 'Yes. ArcisAI products are NDAA compliant and built without high-risk foreign components, suitable for government and export deployments.' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ArcisAI Certifications & Compliance',
    url: 'https://arcisai.io/certifications',
    about: ['BIS-ER certification', 'STQC certification', 'NDAA compliant CCTV'],
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

const Certifications = () => {
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
            Trust &amp; Compliance
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: '30px', md: '48px' }}
            fontWeight="700"
            lineHeight="1.15"
            mb={4}
            color="white"
          >
            ArcisAI Certifications &amp; Compliance
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" mb={10} maxW="4xl">
            ArcisAI holds BIS-ER certification for its CCTV camera hardware and STQC certification
            for its Video Management Software (VMS). Products are Made in India and NDAA compliant.
            Every claim below can be verified on the official government portals.
          </Text>

          <TableContainer
            mb={12}
            borderWidth="1px"
            borderColor={CARD_BORDER}
            borderRadius="xl"
            bg={CARD_BG}
            overflow="hidden"
          >
            <Table variant="unstyled">
              <Thead>
                <Tr bg="whiteAlpha.100">
                  <Th color={ACCENT} borderColor={CARD_BORDER} fontSize="xs">Certification</Th>
                  <Th color={ACCENT} borderColor={CARD_BORDER} fontSize="xs">Scope</Th>
                  <Th color={ACCENT} borderColor={CARD_BORDER} fontSize="xs">Reference</Th>
                  <Th color={ACCENT} borderColor={CARD_BORDER} fontSize="xs">Verify at</Th>
                </Tr>
              </Thead>
              <Tbody>
                {certs.map((c, i) => (
                  <Tr key={i} _notLast={{ borderBottom: '1px solid', borderColor: CARD_BORDER }}>
                    <Td color="white" fontWeight="600" borderColor={CARD_BORDER}>{c[0]}</Td>
                    <Td color="whiteAlpha.800" borderColor={CARD_BORDER}>{c[1]}</Td>
                    <Td color="whiteAlpha.800" borderColor={CARD_BORDER}>{c[2]}</Td>
                    <Td color="whiteAlpha.700" borderColor={CARD_BORDER}>{c[3]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={4} color="white">
            India&apos;s Essential Requirements (ER-01:2024)
          </Heading>
          <Text color="whiteAlpha.800" mb={6} maxW="4xl">
            India&apos;s CCTV security standard tests six essentials. ArcisAI is built to meet each:
          </Text>
          <List spacing={3} mb={12}>
            {essentials.map((e, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start" color="whiteAlpha.900">
                <Box as="span" w="7px" h="7px" mt="9px" mr={3} borderRadius="full" bg={ACCENT} flexShrink={0} />
                {e}
              </ListItem>
            ))}
          </List>

          <Divider borderColor={CARD_BORDER} mb={12} />

          <Heading as="h2" fontSize={{ base: '24px', md: '32px' }} fontWeight="600" mb={8} color="white">
            Frequently Asked Questions
          </Heading>
          <Stack spacing={5}>
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
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default Certifications;
