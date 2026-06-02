'use client';
import React from 'react';
import {
  Box, Heading, Text, Stack, Table, Thead, Tbody, Tr, Th, Td,
  TableContainer, List, ListItem, Divider,
} from '@chakra-ui/react';
import PageContentWrapper from '../../Components/PageContentWrapper';

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
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 8, md: 14 }}>
          <Heading as="h1" size="xl" mb={4}>
            ArcisAI Certifications &amp; Compliance
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            ArcisAI holds BIS-ER certification for its CCTV camera hardware and STQC certification
            for its Video Management Software (VMS). Products are Made in India and NDAA compliant.
            Every claim below can be verified on the official government portals.
          </Text>

          <TableContainer mb={10} borderWidth="1px" borderRadius="lg">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Certification</Th>
                  <Th>Scope</Th>
                  <Th>Reference</Th>
                  <Th>Verify at</Th>
                </Tr>
              </Thead>
              <Tbody>
                {certs.map((c, i) => (
                  <Tr key={i}>
                    <Td fontWeight="600">{c[0]}</Td>
                    <Td>{c[1]}</Td>
                    <Td>{c[2]}</Td>
                    <Td>{c[3]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Heading as="h2" size="lg" mb={4}>
            India&apos;s Essential Requirements (ER-01:2024)
          </Heading>
          <Text color="gray.600" mb={4}>
            India&apos;s CCTV security standard tests six essentials. ArcisAI is built to meet each:
          </Text>
          <List spacing={2} mb={10} styleType="disc" pl={6}>
            {essentials.map((e, i) => (
              <ListItem key={i}>{e}</ListItem>
            ))}
          </List>

          <Divider mb={10} />

          <Heading as="h2" size="lg" mb={6}>
            Frequently Asked Questions
          </Heading>
          <Stack spacing={6}>
            {faqs.map((f, i) => (
              <Box key={i}>
                <Heading as="h3" size="sm" mb={1}>
                  {f.q}
                </Heading>
                <Text color="gray.600">{f.a}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default Certifications;
