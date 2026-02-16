import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon, Flex, Badge, Divider } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import seoPageData from "../../data/seoPageData";

const SEOLandingPage = () => {
  const params = useParams();
  const { category, pageSlug, city } = params;

  // Multi-strategy key lookup
  const lookupKey = (city && seoPageData[`cctv-cameras-${city}`]) ? `cctv-cameras-${city}`
    : (category && pageSlug && seoPageData[`${category}-${pageSlug}`]) ? `${category}-${pageSlug}`
    : (pageSlug && seoPageData[pageSlug]) ? pageSlug
    : (category && seoPageData[category]) ? category
    : null;

  const pageData = lookupKey ? seoPageData[lookupKey] : null;

  if (!pageData) {
    return (
      <Box minH="60vh" display="flex" alignItems="center" justifyContent="center" bg="#0a0a0a">
        <VStack spacing={4}>
          <Heading color="white" size="xl">Page Not Found</Heading>
          <Text color="gray.400">The page you're looking for doesn't exist.</Text>
          <Button as={Link} to="/" bg="white" color="black" _hover={{bg: "gray.200"}}>Go Home</Button>
        </VStack>
      </Box>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageData.title,
    description: pageData.metaDescription,
    url: `https://arcisai.io/${pageData.slug}`,
    publisher: { "@type": "Organization", name: "ArcisAI", url: "https://arcisai.io" }
  };

  const faqJsonLd = pageData.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map(faq => ({
      "@type": "Question", name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content={pageData.keywords?.join(", ")} />
        <link rel="canonical" href={`https://arcisai.io/${pageData.slug}`} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:url" content={`https://arcisai.io/${pageData.slug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>

      {/* Hero Section */}
      <Box bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)" color="white" py={{base: 16, md: 24}} position="relative" overflow="hidden">
        <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)" />
        <Container maxW="1200px" position="relative" zIndex={1}>
          <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} fontSize="xs" textTransform="uppercase" letterSpacing="wider">
            {pageData.category === "city" ? "City Coverage" : pageData.category === "compare" ? "Comparison" : pageData.category === "resources" ? "Resource Guide" : pageData.category === "state" ? "State Coverage" : "Industry Solution"}
          </Badge>
          <Heading as="h1" size={{base: "xl", md: "2xl"}} mb={4} fontWeight="700" lineHeight="1.2">
            {pageData.heroTitle}
          </Heading>
          <Text fontSize={{base: "md", md: "lg"}} color="whiteAlpha.800" mb={3} fontWeight="500">
            {pageData.heroSubtitle}
          </Text>
          <Text fontSize={{base: "sm", md: "md"}} color="whiteAlpha.600" maxW="700px" mb={8}>
            {pageData.heroDescription}
          </Text>
          <HStack spacing={4}>
            <Button as={Link} to={pageData.cta?.buttonLink || "/contact-us"} bg="white" color="black" size="lg" _hover={{bg: "gray.200", transform: "translateY(-2px)"}} transition="all 0.2s" fontWeight="600">
              {pageData.cta?.buttonText || "Get Free Quote"}
            </Button>
            <Button as={Link} to="/products" variant="outline" color="white" borderColor="whiteAlpha.400" size="lg" _hover={{bg: "whiteAlpha.100"}}>
              View Products
            </Button>
          </HStack>
        </Container>
      </Box>

      {/* Stats & Features Sections */}
      {pageData.sections?.map((section, idx) => (
        <Box key={idx} py={{base: 12, md: 16}} bg={idx % 2 === 0 ? "#f8f9fa" : "white"}>
          <Container maxW="1200px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={8} color="#0a0a0a" fontWeight="700">
              {section.title}
            </Heading>
            {section.stats && (
              <SimpleGrid columns={{base: 2, md: 4}} spacing={6} mb={8}>
                {section.stats.map((stat, i) => (
                  <Box key={i} bg="white" p={6} borderRadius="xl" boxShadow="sm" border="1px solid" borderColor="gray.100" textAlign="center">
                    <Text fontSize={{base: "2xl", md: "3xl"}} fontWeight="800" color="#0a0a0a">{stat.value}</Text>
                    <Text fontSize="sm" color="gray.500" mt={1}>{stat.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            )}
            {section.features && (
              <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                {section.features.map((feature, i) => (
                  <HStack key={i} align="start" spacing={3} p={4} bg="white" borderRadius="lg" border="1px solid" borderColor="gray.100">
                    <Box w="6px" h="6px" borderRadius="full" bg="#0a0a0a" mt={2} flexShrink={0} />
                    <Text color="gray.700" fontSize="md">{feature}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            )}
          </Container>
        </Box>
      ))}

      {/* FAQ Section */}
      {pageData.faqs?.length > 0 && (
        <Box py={{base: 12, md: 16}} bg="#f8f9fa">
          <Container maxW="800px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={8} textAlign="center" color="#0a0a0a">
              Frequently Asked Questions
            </Heading>
            <Accordion allowMultiple>
              {pageData.faqs.map((faq, i) => (
                <AccordionItem key={i} border="1px solid" borderColor="gray.200" borderRadius="lg" mb={3} overflow="hidden">
                  <AccordionButton py={4} px={6} _hover={{bg: "gray.50"}}>
                    <Box flex="1" textAlign="left" fontWeight="600" color="#0a0a0a">{faq.q}</Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel py={4} px={6} color="gray.600">{faq.a}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      )}

      {/* CTA Section */}
      {pageData.cta && (
        <Box py={{base: 16, md: 20}} bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)" color="white" textAlign="center">
          <Container maxW="700px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={4}>{pageData.cta.title}</Heading>
            <Text color="whiteAlpha.700" mb={8} fontSize="lg">{pageData.cta.description}</Text>
            <Button as={Link} to={pageData.cta.buttonLink} bg="white" color="black" size="lg" px={10} _hover={{bg: "gray.200", transform: "translateY(-2px)"}} transition="all 0.2s" fontWeight="600">
              {pageData.cta.buttonText}
            </Button>
          </Container>
        </Box>
      )}
    </>
  );
};

export default SEOLandingPage;
