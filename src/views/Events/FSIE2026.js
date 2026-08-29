'use client';
import React, { useState, useCallback } from 'react';
import {
  Box, Container, Heading, Text, Flex, VStack, HStack, SimpleGrid, Icon, Link as CLink, Image,
  List, ListItem, ListIcon, FormControl, FormLabel, Input, Select, Textarea, useToast,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdCheckCircle, MdLocationOn, MdEvent, MdPlace, MdArrowForward } from 'react-icons/md';
import CustomButton from '../../Components/CustomButton';

// FSIE Mumbai 2026 — ArcisAI campaign landing page.
// Site design system: dark #171717, purple #7F56D9 + green #A4FF79, shared
// CustomButton; global Header/Footer from ClientLayout.
//
// SEO/GEO: single <h1>; question-style H2s; answer-first intro; contextual
// in-prose internal links; visible FAQ + matching FAQPage schema (schema mirrors
// visible content, so it is Search-compliant); server-rendered JSON-LD.
// Dates confirmed by the team (3–5 Sep 2026): Event schema now included.
// No street address is invented — only city/country, which is all that has
// been confirmed; add a full postalAddress once the venue is finalised.

const PURPLE = '#7F56D9';
const GREEN = '#A4FF79';
const DARK = '#171717';
const PANEL = '#1E1E1E';

function pushDL(payload) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  // Direct-to-GA4 path (see app/fsie-2026/page.js) — fires the same event
  // straight to GA4 (G-FGCHHSNZ7D) since GTM-T5CXTDPH isn't configured to
  // relay dataLayer pushes. Safe no-op if gtag hasn't loaded yet.
  if (typeof window.gtag === 'function') {
    const { event, ...params } = payload;
    window.gtag('event', event, params);
  }
}

const BACKEND_URL = 'https://vmukti.com/backend/api/send-email-arcis';
const BUSINESS_TYPES = [
  'System Integrator', 'Distributor / Reseller', 'End Customer / Enterprise',
  'Government / PSU', 'Consultant / Architect', 'Other',
];

// Visible FAQ — every answer is a verifiable ArcisAI fact, so it is safe to
// mirror into FAQPage schema. Edit copy freely; keep schema in sync (both read
// from this one array).
const FAQS = [
  {
    q: 'When and where can I meet ArcisAI at FSIE Mumbai 2026?',
    a: 'ArcisAI is exhibiting at Booth C13 at FSIE (Fire & Safety India Expo), Mumbai, from 3 to 5 September 2026. You can book a dedicated meeting slot using the form on this page and our team will confirm a time at the booth.',
  },
  {
    q: 'Are ArcisAI cameras certified to sell in India?',
    a: 'Yes. ArcisAI is STQC certified (Video Management Software) and BIS-ER certified (hardware, R-72003735 under ER01:2024), which are required for CCTV sold and installed in India from April 2026, including government, PSU and GeM procurement.',
  },
  {
    q: 'Are ArcisAI cameras NDAA compliant?',
    a: 'Yes. ArcisAI cameras are NDAA Section 889 compliant with a non-Chinese supply chain, making them a Made-in-India alternative to Hikvision and Dahua.',
  },
  {
    q: 'What will be demonstrated at the booth?',
    a: 'Live edge-AI analytics running on-camera (intrusion, ANPR, line-crossing, fire and smoke, PPE detection), the Cloud VMS for multi-site monitoring, and ArcisGPT for natural-language search across recorded footage.',
  },
  {
    q: 'Do ArcisAI cameras charge a per-camera AI licence fee?',
    a: 'No. Edge-AI analytics run on the camera itself, so there are no per-camera annual AI-analytics licence fees. Cameras ship in PoE, Wi-Fi and 4G-SIM variants across the S-Series and ECO-Series lines.',
  },
];

const FSIE2026 = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', businessType: '', requirement: '', meetingTime: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onBookMeeting = useCallback(() => {
    pushDL({ event: 'cta_click', cta_name: 'book_my_fsie_meeting', page: 'fsie-2026' });
    if (typeof document !== 'undefined') {
      document.getElementById('fsie-lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch(BACKEND_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: 'FSIE-2026' }),
      }).catch(() => {});
      pushDL({ event: 'generate_lead', form_name: 'fsie_2026_meeting', business_type: form.businessType || undefined, page: 'fsie-2026' });
      toast({ title: 'Request received', description: 'Our team will confirm your FSIE 2026 meeting slot shortly.', status: 'success', duration: 6000, isClosable: true });
      setForm({ name: '', company: '', email: '', phone: '', businessType: '', requirement: '', meetingTime: '' });
    } catch (err) {
      toast({ title: 'Something went wrong', description: 'Please try again or email sales@arcisai.io.', status: 'error', duration: 6000, isClosable: true });
    } finally { setSubmitting(false); }
  };

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arcisai.io/' },
      { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://arcisai.io/event' },
      { '@type': 'ListItem', position: 3, name: 'FSIE Mumbai 2026', item: 'https://arcisai.io/fsie-2026' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const eventSchema = {
    '@context': 'https://schema.org', '@type': 'Event',
    name: 'ArcisAI at FSIE Mumbai 2026 — Booth C13',
    description: 'ArcisAI exhibits Made-in-India, STQC & BIS-ER certified AI CCTV, Cloud VMS and ArcisGPT at Booth C13, FSIE (Fire & Safety India Expo), Mumbai.',
    startDate: '2026-09-03',
    endDate: '2026-09-05',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'FSIE (Fire & Safety India Expo)',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    },
    organizer: { '@type': 'Organization', name: 'ArcisAI', url: 'https://arcisai.io' },
    url: 'https://arcisai.io/fsie-2026',
  };

  const highlights = [
    { title: 'Live edge-AI CCTV demos', desc: 'On-camera analytics — intrusion, ANPR, line-crossing, fire/smoke and PPE detection — running in real time, with no server round-trip.' },
    { title: 'ArcisGPT video search', desc: 'Ask questions of recorded footage in natural language ("show vehicles after 10 PM") and get instant, timestamped answers.' },
    { title: 'STQC & BIS-ER compliance clinic', desc: 'See exactly what is required to sell and deploy CCTV in India from April 2026 — and how ArcisAI qualifies on both hardware and software.' },
    { title: 'Cloud VMS & partner desk', desc: 'Walk through multi-site Cloud VMS at any scale, and meet the channel team for reseller and OEM opportunities.' },
  ];

  const audience = [
    { who: 'System integrators', href: '/partners', label: 'Partner program' },
    { who: 'Distributors & resellers', href: '/become-a-distributor', label: 'Distributor program' },
    { who: 'Government & PSU buyers', href: '/certifications', label: 'Certifications' },
    { who: 'Enterprise security teams', href: '/solution/edge-ai', label: 'Edge-AI solutions' },
  ];

  const field = {
    bg: '#0F0F0F', color: 'white', borderColor: 'whiteAlpha.300',
    _hover: { borderColor: 'whiteAlpha.500' },
    _focus: { borderColor: GREEN, boxShadow: `0 0 0 1px ${GREEN}` },
    _placeholder: { color: 'whiteAlpha.500' },
  };
  const inlineLink = { color: GREEN, textDecoration: 'underline', _hover: { color: '#C7FFB0' } };

  return (
    <Box bg={DARK} color="white" minH="100vh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      {/* HERO */}
      <Box bgGradient={`linear(135deg, ${DARK} 0%, #241B3A 100%)`} py={{ base: 16, md: 24 }} px={4} position="relative" overflow="hidden">
        <Box position="absolute" top="-20%" right="-10%" w="480px" h="480px" bg={PURPLE} opacity={0.18} filter="blur(120px)" borderRadius="full" />
        <Container maxW="1200px" position="relative">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={12}>
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={6} flex={1} textAlign={{ base: 'center', md: 'left' }}>
              <HStack spacing={2} color={GREEN}><Icon as={MdPlace} /><Text fontWeight="bold" letterSpacing="wide">BOOTH C13 · MUMBAI · 3–5 SEP 2026</Text></HStack>
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} lineHeight={1.15} fontWeight="700">ArcisAI at FSIE Mumbai 2026</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" maxW="580px">
                Meet the ArcisAI team at Booth C13 from <Text as="span" color="white" fontWeight="600">3–5 September 2026</Text> for
                live demos of Made-in-India, STQC &amp; BIS-ER certified AI CCTV — edge-AI cameras, Cloud VMS and
                ArcisGPT. Book a meeting slot below and we&rsquo;ll confirm a time.
              </Text>
              <CustomButton onClick={onBookMeeting} as="button" width="220px" height="50px" fontSize="16px" fontWeight="600" hoverBorderColor={GREEN}>
                Book My FSIE Meeting
              </CustomButton>
            </VStack>
            <Box flex={1} w="100%" maxW="440px">
              <Image
                loading="lazy"
                src="/images/STQC_hero_main.webp"
                alt="ArcisAI STQC and BIS-ER certified AI CCTV camera"
                w="100%"
                h={{ base: '220px', md: '260px' }}
                objectFit="cover"
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                mb={4}
              />
              <Box bg="whiteAlpha.100" borderRadius="2xl" p={7} border="1px solid" borderColor="whiteAlpha.200">
                <VStack spacing={4} align="stretch">
                  <HStack><Icon as={MdLocationOn} boxSize={6} color={PURPLE} /><Text fontWeight="600">Fire &amp; Safety India Expo — Mumbai</Text></HStack>
                  <HStack><Icon as={MdEvent} boxSize={6} color={PURPLE} /><Text><Text as="span" color="whiteAlpha.700">Dates:</Text> 3–5 September 2026</Text></HStack>
                  <HStack><Icon as={MdPlace} boxSize={6} color={PURPLE} /><Text><Text as="span" color="whiteAlpha.700">Booth:</Text> C13</Text></HStack>
                  <Text color="whiteAlpha.700" fontSize="sm">Bring your site requirements — our engineers will map the right camera, VMS and analytics on the spot.</Text>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* WHY MEET US (answer-first + in-prose internal links) */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Container maxW="900px">
          <VStack spacing={5} align="flex-start">
            <Heading as="h2" size="lg" fontWeight="700">Why meet ArcisAI at FSIE Mumbai 2026?</Heading>
            <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
              FSIE Mumbai 2026 is where India&rsquo;s fire, safety and security buyers evaluate what they can
              legally specify and deploy this year. ArcisAI is a Made-in-India brand of AI CCTV built by{' '}
              <CLink as={NextLink} href="/about-us" sx={inlineLink}>Adiance Technologies</CLink>, and one of the few
              Indian brands certified across both hardware and software — so at Booth C13 you can see compliant,
              enterprise-grade AI surveillance running live rather than on a slide.
            </Text>
            <Text color="whiteAlpha.800" fontSize={{ base: 'md', md: 'lg' }}>
              Our engineers will demo edge-AI cameras from the{' '}
              <CLink as={NextLink} href="/s-series" sx={inlineLink}>S-Series</CLink> and value{' '}
              <CLink as={NextLink} href="/eco-series" sx={inlineLink}>ECO-Series</CLink> lines, the{' '}
              <CLink as={NextLink} href="/cloud-vms" sx={inlineLink}>Cloud VMS</CLink> that scales to 10,000+ cameras,
              and <CLink as={NextLink} href="/arcisgpt" sx={inlineLink}>ArcisGPT</CLink> for natural-language video
              search. Every camera carries 20+ on-camera analytics and ships in PoE, Wi-Fi and 4G-SIM variants,
              with no per-camera AI-analytics licence fees. Review our{' '}
              <CLink as={NextLink} href="/certifications" sx={inlineLink}>certifications</CLink> to confirm eligibility
              for your procurement.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* WHAT'S ON */}
      <Box py={{ base: 10, md: 14 }} px={4} bg="#0F0F0F">
        <Container maxW="1200px">
          <VStack spacing={10}>
            <Heading as="h2" size="xl" textAlign="center" fontWeight="700">What you will see at Booth C13</Heading>
            <Image
              loading="lazy"
              src="/images/combo.webp"
              alt="ArcisAI camera lineup on display"
              w="100%"
              maxW="700px"
              h={{ base: '200px', md: '280px' }}
              objectFit="cover"
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
            />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
              {highlights.map((h, i) => (
                <Box key={i} bg={PANEL} p={7} borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100" borderLeft="3px solid" borderLeftColor={GREEN} transition="all .2s" _hover={{ borderColor: 'whiteAlpha.300', transform: 'translateY(-2px)' }}>
                  <Heading as="h3" size="md" mb={2} color="white">{h.title}</Heading>
                  <Text color="whiteAlpha.700">{h.desc}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* WHO SHOULD VISIT */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Container maxW="1000px">
          <VStack spacing={6} align="flex-start">
            <Heading as="h2" size="lg" fontWeight="700">Who should visit our booth</Heading>
            <Text color="whiteAlpha.800">Book a slot that matches how you buy or deploy surveillance:</Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
              {audience.map((a) => (
                <HStack key={a.who} as={NextLink} href={a.href} bg={PANEL} p={4} borderRadius="lg" justify="space-between" border="1px solid" borderColor="whiteAlpha.100" _hover={{ borderColor: PURPLE }}>
                  <Text fontWeight="600">{a.who}</Text>
                  <HStack color={GREEN} spacing={1}><Text fontSize="sm">{a.label}</Text><Icon as={MdArrowForward} /></HStack>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* LEAD FORM */}
      <Box py={{ base: 12, md: 16 }} px={4} id="fsie-lead-form" bg="#0F0F0F">
        <Container maxW="1000px">
          <Flex direction={{ base: 'column', md: 'row' }} gap={12}>
            <VStack align="flex-start" spacing={5} flex={1}>
              <Heading as="h2" size="lg" fontWeight="700">Book your FSIE 2026 meeting</Heading>
              <Text color="whiteAlpha.700">Tell us what you are looking for and your preferred time. We will confirm a slot at Booth C13.</Text>
              <List spacing={3} pt={2}>
                <ListItem><ListIcon as={MdCheckCircle} color={GREEN} />One-on-one with AI surveillance engineers</ListItem>
                <ListItem><ListIcon as={MdCheckCircle} color={GREEN} />Compliance guidance for Indian procurement</ListItem>
                <ListItem><ListIcon as={MdCheckCircle} color={GREEN} />Live analytics matched to your use-case</ListItem>
              </List>
            </VStack>
            <Box flex={1} w="100%">
              <Box as="form" onSubmit={handleSubmit} bg={PANEL} p={{ base: 5, md: 7 }} borderRadius="2xl" border="1px solid" borderColor="whiteAlpha.200">
                <VStack spacing={4}>
                  <FormControl isRequired><FormLabel fontSize="sm">Name</FormLabel><Input name="name" value={form.name} onChange={onChange} {...field} /></FormControl>
                  <FormControl isRequired><FormLabel fontSize="sm">Company</FormLabel><Input name="company" value={form.company} onChange={onChange} {...field} /></FormControl>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                    <FormControl isRequired><FormLabel fontSize="sm">Email</FormLabel><Input type="email" name="email" value={form.email} onChange={onChange} {...field} /></FormControl>
                    <FormControl isRequired><FormLabel fontSize="sm">Phone</FormLabel><Input type="tel" name="phone" value={form.phone} onChange={onChange} {...field} /></FormControl>
                  </SimpleGrid>
                  <FormControl isRequired><FormLabel fontSize="sm">Business Type</FormLabel>
                    <Select name="businessType" value={form.businessType} onChange={onChange} placeholder="Select…" {...field}>
                      {BUSINESS_TYPES.map((b) => <option key={b} value={b} style={{ background: '#0F0F0F' }}>{b}</option>)}
                    </Select>
                  </FormControl>
                  <FormControl isRequired><FormLabel fontSize="sm">Requirement</FormLabel><Textarea name="requirement" value={form.requirement} onChange={onChange} rows={3} {...field} /></FormControl>
                  <FormControl><FormLabel fontSize="sm">Preferred Meeting Time</FormLabel><Input name="meetingTime" value={form.meetingTime} onChange={onChange} placeholder="e.g. Day 1, afternoon" {...field} /></FormControl>
                  <Box w="100%" pt={1}>
                    <CustomButton as="button" type="submit" width="100%" height="50px" fontSize="16px" fontWeight="600" showGlow={false} hoverBorderColor={GREEN} sx={{ opacity: submitting ? 0.6 : 1, pointerEvents: submitting ? 'none' : 'auto' }}>
                      {submitting ? 'Sending…' : 'Book My FSIE Meeting'}
                    </CustomButton>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* FAQ (visible) — mirrored into FAQPage schema above */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Container maxW="900px">
          <Heading as="h2" size="lg" fontWeight="700" mb={6}>Frequently asked questions</Heading>
          <Accordion allowToggle>
            {FAQS.map((f, i) => (
              <AccordionItem key={i} border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg" mb={3} bg={PANEL}>
                <AccordionButton _hover={{ bg: 'whiteAlpha.100' }} py={4}>
                  <Box as="h3" flex="1" textAlign="left" fontWeight="600">{f.q}</Box>
                  <AccordionIcon color={GREEN} />
                </AccordionButton>
                <AccordionPanel pb={4} color="whiteAlpha.800">{f.a}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CLOSING CTA + entity links */}
      <Box bgGradient={`linear(135deg, #241B3A 0%, ${DARK} 100%)`} py={16} px={4} textAlign="center">
        <Container maxW="900px">
          <Heading as="h2" size="lg" mb={4} fontWeight="700">Explore ArcisAI before the show</Heading>
          <Text mb={8} color="whiteAlpha.800">See the products we will demo at Booth C13, or <CLink as={NextLink} href="/contact-us" sx={inlineLink}>contact our team</CLink> ahead of FSIE.</Text>
          <HStack justify="center" spacing={4} flexWrap="wrap">
            <CustomButton as={NextLink} href="/s-series" width="170px" height="46px" fontSize="15px">S-Series Cameras</CustomButton>
            <CustomButton as={NextLink} href="/cloud-vms" width="150px" height="46px" fontSize="15px">Cloud VMS</CustomButton>
            <CustomButton as={NextLink} href="/arcisgpt" width="150px" height="46px" fontSize="15px">ArcisGPT</CustomButton>
            <CustomButton as={NextLink} href="/contact-us" width="150px" height="46px" fontSize="15px" hoverBorderColor={GREEN}>Contact Us</CustomButton>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default FSIE2026;
