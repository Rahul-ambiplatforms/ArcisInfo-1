'use client';
import React from "react";
import dynamic from "next/dynamic";
import { Box, Container, Flex, VStack, Text, Heading, HStack, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdPlace, MdArrowForward } from "react-icons/md";
import EventHeroSection from "./Components/HeroSection";
import CustomButton from "../../Components/CustomButton";
import { EventData } from "./Data/Content";
import { EventSEO } from "./Data/SEOContent";

const EventCarousel = dynamic(() => import("./Components/EventCarousel"));
const CTAButton     = dynamic(() => import("../../Components/CTAButton"));

// Upcoming-event banner — self-contained, doesn't touch EventCarousel (which
// is built around one shared detailsLink/description for a single event's
// past-event photo gallery, not multiple distinct upcoming/past events).
// Gives FSIE-2026 its first real internal link on the site.
const UpcomingEventBanner = () => (
  <Box bg="#0F0F0F" py={{ base: 10, md: 14 }} px={4}>
    <Container maxW="1100px">
      <Flex
        direction={{ base: 'column', md: 'row' }} align="center" justify="space-between"
        gap={6} bg="#1E1E1E" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100"
        p={{ base: 6, md: 8 }}
      >
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2} textAlign={{ base: 'center', md: 'left' }}>
          <HStack spacing={2} color="#A4FF79">
            <Icon as={MdPlace} />
            <Text fontWeight="bold" letterSpacing="wide" fontSize="sm">UPCOMING · BOOTH C13 · MUMBAI · 3–5 SEP 2026</Text>
          </HStack>
          <Heading as="h2" size="md" color="white" fontWeight="700">ArcisAI at FSIE Mumbai 2026</Heading>
          <Text color="whiteAlpha.700" fontSize="sm" maxW="520px">
            Live demos of Made-in-India, STQC &amp; BIS-ER certified AI CCTV at Fire &amp; Safety India Expo, Mumbai.
          </Text>
        </VStack>
        <CustomButton as={NextLink} href="/fsie-2026" width="200px" height="46px" fontSize="15px" fontWeight="600" hoverBorderColor="#A4FF79">
          View Event Details
        </CustomButton>
      </Flex>
    </Container>
  </Box>
);

const Event = () => {
  return (
    <Box>
      {/* Schema Markup — deliberately NOT inside <Helmet>.
          HelmetProvider is mounted in app/providers.js, a 'use client' module,
          so Helmet only injects into <head> after hydration and nothing it
          renders reaches the server HTML a crawler reads. Rendered inline the
          <script> is server-rendered normally; JSON-LD is valid anywhere in
          the document. The meta/title/canonical tags that used to sit here
          were dead for the same reason and are already emitted by the route's
          `metadata` export. */}
      {EventSEO.schema &&
        EventSEO.schema.length > 0 &&
        EventSEO.schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      <EventHeroSection data={EventData.hero} />
      <UpcomingEventBanner />
      <EventCarousel data={EventData.carousel} />
      <CTAButton {...EventData.cta} />
    </Box>
  );
};

export default Event;
