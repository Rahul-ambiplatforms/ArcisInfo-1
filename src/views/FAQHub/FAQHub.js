'use client';
import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Tag, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { faqCategories } from '@/src/data/faqHubData';


const FAQHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(faqCategories)];

  const allFaqs = Object.entries(faqCategories).flatMap(([category, faqs]) =>
    faqs.map(faq => ({ ...faq, category }))
  );

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = activeCategory === 'All'
    ? Object.entries(faqCategories).reduce((acc, [cat, faqs]) => {
        const filtered = faqs.filter(faq =>
          searchQuery === '' ||
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) acc[cat] = filtered;
        return acc;
      }, {})
    : { [activeCategory]: filteredFaqs };

  // The FAQPage JSON-LD and the <title>/<meta>/<link rel=canonical> tags that
  // used to live here have moved to app/faq/page.js. This is a `'use client'`
  // component and HelmetProvider is mounted in the (also client) providers
  // tree, so nothing Helmet rendered here ever appeared in the server HTML —
  // Google's rich-results parser saw no FAQ markup on /faq at all.

  return (
    <Box bg="#171717" minH="100vh" pt={{ base: "100px", md: "120px" }} pb="80px">

      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Hero Section */}
        <VStack spacing={4} mb={10} textAlign="center">
          <Heading as="h1" size="2xl" color="white" fontFamily="WixMadeforDisplay">
            Frequently Asked Questions
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="700px">
            Everything you need to know about ArcisAI enterprise AI cameras, cloud VMS, compliance, pricing, and deployment.
          </Text>

          {/* Search */}
          <InputGroup maxW="600px" mt={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="white"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ borderColor: '#00d4ff', boxShadow: '0 0 0 1px #00d4ff' }}
              borderRadius="full"
              size="lg"
            />
          </InputGroup>
        </VStack>

        {/* Category Filters */}
        <Wrap spacing={3} mb={10} justify="center">
          {categories.map(cat => (
            <WrapItem key={cat}>
              <Tag
                size="lg"
                variant={activeCategory === cat ? 'solid' : 'outline'}
                bg={activeCategory === cat ? '#00d4ff' : 'transparent'}
                color={activeCategory === cat ? 'black' : 'gray.400'}
                borderColor="whiteAlpha.300"
                cursor="pointer"
                onClick={() => setActiveCategory(cat)}
                _hover={{ bg: activeCategory === cat ? '#00d4ff' : 'whiteAlpha.100' }}
                borderRadius="full"
                px={5}
                py={2}
                fontFamily="WixMadeforDisplay"
              >
                {cat}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* FAQ Content */}
        <VStack spacing={8} align="stretch">
          {Object.entries(groupedFaqs).map(([category, faqs]) => (
            <Box key={category}>
              <Heading as="h2" size="lg" color="#00d4ff" mb={4} fontFamily="WixMadeforDisplay">
                {category}
              </Heading>
              <Accordion allowMultiple>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} border="1px solid" borderColor="whiteAlpha.100" mb={2} borderRadius="lg" overflow="hidden">
                    <h3>
                      <AccordionButton py={4} px={6} _hover={{ bg: 'whiteAlpha.50' }}>
                        <Box flex="1" textAlign="left" color="white" fontWeight="600" fontSize="md" fontFamily="WixMadeforDisplay">
                          {faq.q}
                        </Box>
                        <AccordionIcon color="gray.400" />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4} px={6} color="gray.300" fontSize="md" lineHeight="1.7">
                      {faq.a || faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}
        </VStack>

        {/* Bottom CTA */}
        <Box textAlign="center" mt={16} p={10} bg="whiteAlpha.50" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100">
          <Heading as="h2" size="lg" color="white" mb={3} fontFamily="WixMadeforDisplay">
            Still Have Questions?
          </Heading>
          <Text color="gray.400" mb={6}>
            Our team is ready to help you find the right AI surveillance solution for your enterprise.
          </Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Box as="a" href="/contact-us" bg="#00d4ff" color="black" px={8} py={3} borderRadius="full" fontWeight="bold" _hover={{ bg: '#00b8d9' }} fontFamily="WixMadeforDisplay">
              Contact Sales
            </Box>
            <Box as="a" href="/contact-us?type=demo" border="1px solid" borderColor="#00d4ff" color="#00d4ff" px={8} py={3} borderRadius="full" fontWeight="bold" _hover={{ bg: 'whiteAlpha.100' }} fontFamily="WixMadeforDisplay">
              Request Demo
            </Box>
          </HStack>
        </Box>

        {/* SEO Content Block */}
        <Box mt={16} color="gray.500" fontSize="sm" lineHeight="1.8" data-speakable="true">
          <Heading as="h2" size="md" color="gray.400" mb={4}>About ArcisAI Enterprise AI CCTV Cameras</Heading>
          <Text mb={3}>
            ArcisAI by Adiance Technologies is a leading manufacturer of enterprise AI-powered CCTV cameras serving businesses across the United States, United Arab Emirates, United Kingdom, Singapore, and India. Our product lineup includes the S-Series Premium AI cameras (Bullet, PTZ, Dome with 4G SIM, WiFi, and PoE variants), ECO-Series value cameras, the Bridge Device for legacy camera integration, Cloud VMS for centralized management, and ArcisGPT for GenAI-powered video search.
          </Text>
          <Text mb={3}>
            All ArcisAI cameras feature true edge AI processing — running face recognition, ANPR, crowd analytics, fire detection, PPE compliance monitoring, and 20+ analytics types directly on the camera hardware. This delivers sub-100ms detection speeds, 80% bandwidth reduction compared to cloud-processed video, and analytics that work even during internet outages.
          </Text>
          <Text>
            ArcisAI cameras are NDAA Section 889 compliant with zero Chinese-manufactured components, STQC certified, GDPR ready, and support hybrid cloud/on-premise deployment. Whether you are replacing Hikvision due to NDAA requirements, evaluating alternatives to Verkada or Rhombus for better value, or deploying AI cameras for the first time, ArcisAI provides enterprise-grade intelligent surveillance trusted by organizations worldwide.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQHub;
