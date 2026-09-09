'use client';
import React from "react";
import NextLink from "next/link";
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon, Flex, Badge, Divider } from "@chakra-ui/react";
import Breadcrumbs from "@/src/Components/Breadcrumbs";

// Brand palette — matches site dark theme (body #171717, accents #9678E1 / #8266C9)
const ACCENT = "#9678E1";
const ACCENT_DEEP = "#8266C9";
const CARD_BG = "rgba(255,255,255,0.04)";
const CARD_BORDER = "rgba(255,255,255,0.12)";

// pageData is resolved on the SERVER (see src/data/resolveSeoPageData.js) and
// passed in as a prop, so the full ~125-page SEO dataset is NOT bundled to the
// browser. slugKey is the resolved lookup key, used as a canonical-URL fallback.
const SEOLandingPage = ({ pageData, slugKey, relatedLinks = [] }) => {
  if (!pageData) {
    return (
      <Box minH="60vh" display="flex" alignItems="center" justifyContent="center" bg="#171717">
        <VStack spacing={4}>
          <Heading color="white" size="xl">Page Not Found</Heading>
          <Text color="whiteAlpha.700">The page you're looking for doesn't exist.</Text>
          <Button as={NextLink} href="/" bg={ACCENT} color="white" _hover={{bg: ACCENT_DEEP}}>Go Home</Button>
        </VStack>
      </Box>
    );
  }

  // NOTE: this component no longer emits <title>, <meta>, <link rel=canonical>
  // or JSON-LD.
  //
  // It is a `'use client'` component and HelmetProvider is mounted inside
  // app/providers.js, which is also `'use client'` — so everything Helmet
  // rendered here was injected by the browser AFTER hydration and never
  // appeared in the server-rendered HTML that crawlers read. On top of that,
  // the tags fought Next.js's own metadata output, and the Product/
  // LocalBusiness blocks carried a hard-coded 4.8★/150-review aggregateRating
  // that no page on the site backs up.
  //
  // Title/description/canonical now come from each route's generateMetadata(),
  // and the JSON-LD from src/data/buildSeoPageSchemas.js rendered server-side
  // by <SeoPageSchemaScripts>. Use that pair as the template for any remaining
  // Helmet-based page.

  // Still needed for the visible on-page FAQ accordion below.
  const faqItems = pageData.faqs || pageData.faq || [];

  // Visible breadcrumb trail (SEO audit fix, checklist item #59) — matches
  // the 2-level "Home > current page" BreadcrumbList JSON-LD emitted by
  // src/data/buildSeoPageSchemas.js (same crumbName precedence:
  // pageData.heroTitle falling back to pageData.title). There are no
  // /compare, /industry, /resources or /state hub pages to link to as a
  // middle crumb — see the comment in buildSeoPageSchemas.js — so, like the
  // schema, this stays a 2-level trail rather than linking to a 404.
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: pageData.heroTitle || pageData.title || 'This page' },
  ];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      {/* Hero Section */}
      <Box bg={`linear-gradient(135deg, #171717 0%, #241d3a 50%, #171717 100%)`} color="white" py={{base: 16, md: 24}} position="relative" overflow="hidden">
        <Box position="absolute" top="0" left="0" right="0" bottom="0" bg={`radial-gradient(circle at 30% 50%, rgba(150,120,225,0.18) 0%, transparent 60%)`} />
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
            <Button as={NextLink} href={pageData.cta?.buttonLink || "/contact-us"} bg={ACCENT} color="white" size="lg" _hover={{bg: ACCENT_DEEP, transform: "translateY(-2px)"}} transition="all 0.2s" fontWeight="600">
              {pageData.cta?.buttonText || "Get Free Quote"}
            </Button>
            <Button as={NextLink} href="/products" variant="outline" color="white" borderColor="whiteAlpha.400" size="lg" _hover={{bg: "whiteAlpha.100"}}>
              View Products
            </Button>
          </HStack>
        </Container>
      </Box>

      {/* Stats & Features Sections — dark theme to match site */}
      {pageData.sections?.map((section, idx) => (
        <Box key={idx} py={{base: 12, md: 16}} bg={idx % 2 === 0 ? "#171717" : "#1c1c1c"}>
          <Container maxW="1200px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={8} color="white" fontWeight="700">
              {section.title}
            </Heading>
            {section.stats && (
              <SimpleGrid columns={{base: 2, md: 4}} spacing={6} mb={8}>
                {section.stats.map((stat, i) => (
                  <Box key={i} bg={CARD_BG} p={6} borderRadius="xl" border="1px solid" borderColor={CARD_BORDER} textAlign="center" transition="border-color 0.2s" _hover={{borderColor: ACCENT}}>
                    <Text fontSize={{base: "2xl", md: "3xl"}} fontWeight="800" color={ACCENT}>{stat.value}</Text>
                    <Text fontSize="sm" color="whiteAlpha.700" mt={1}>{stat.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            )}
            {section.features && (
              <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                {section.features.map((feature, i) => (
                  <HStack key={i} align="start" spacing={3} p={4} bg={CARD_BG} borderRadius="lg" border="1px solid" borderColor={CARD_BORDER}>
                    <Box w="6px" h="6px" borderRadius="full" bg={ACCENT} mt={2} flexShrink={0} />
                    <Text color="whiteAlpha.900" fontSize="md">{feature}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            )}
          </Container>
        </Box>
      ))}

      {/* FAQ Section — supports both 'faqs' and 'faq' keys, both {q,a} and {question,answer} formats */}
      {faqItems.length > 0 && (
        <Box py={{base: 12, md: 16}} bg="#1c1c1c">
          <Container maxW="800px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={8} textAlign="center" color="white">
              Frequently Asked Questions
            </Heading>
            <Accordion allowMultiple>
              {faqItems.map((faq, i) => (
                <AccordionItem key={i} border="1px solid" borderColor={CARD_BORDER} borderRadius="lg" mb={3} overflow="hidden" bg={CARD_BG}>
                  <AccordionButton py={4} px={6} _hover={{bg: "whiteAlpha.100"}}>
                    <Box flex="1" textAlign="left" fontWeight="600" color="white">{faq.q || faq.question}</Box>
                    <AccordionIcon color={ACCENT} />
                  </AccordionButton>
                  <AccordionPanel py={4} px={6} color="whiteAlpha.800">{faq.a || faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      )}

      {/* CTA Section */}
      {pageData.cta && (
        <Box py={{base: 16, md: 20}} bg={`linear-gradient(135deg, ${ACCENT_DEEP} 0%, ${ACCENT} 100%)`} color="white" textAlign="center">
          <Container maxW="700px">
            <Heading as="h2" size={{base: "lg", md: "xl"}} mb={4}>{pageData.cta.title}</Heading>
            <Text color="whiteAlpha.900" mb={8} fontSize="lg">{pageData.cta.description || pageData.cta.subtitle || ""}</Text>
            <Button as={NextLink} href={pageData.cta.buttonLink || "/contact-us"} bg="white" color={ACCENT_DEEP} size="lg" px={10} _hover={{bg: "gray.100", transform: "translateY(-2px)"}} transition="all 0.2s" fontWeight="700">
              {pageData.cta.buttonText || "Get Free Quote"}
            </Button>
          </Container>
        </Box>
      )}

      {/* Crawlable index of related CCTV location / industry pages. Visually
          hidden (no design change) but present in the server-rendered HTML so
          search engines can discover sibling pages that are otherwise only in
          the sitemap. Fed as a prop from the server route (app/[slug]/page.js);
          other routes render nothing (default []). */}
      {relatedLinks.length > 0 && (
        <Box
          as="nav"
          aria-label="CCTV locations and industries"
          position="absolute"
          w="1px"
          h="1px"
          overflow="hidden"
          clip="rect(0 0 0 0)"
          whiteSpace="nowrap"
          border="0"
        >
          {relatedLinks.map((l) =>
            l?.slug ? (
              <NextLink
                key={`rel-${l.slug}`}
                href={`/${String(l.slug).replace(/^\/+/, '')}`}
              >
                {l.title || l.slug}
              </NextLink>
            ) : null,
          )}
        </Box>
      )}
    </>
  );
};

export default SEOLandingPage;
