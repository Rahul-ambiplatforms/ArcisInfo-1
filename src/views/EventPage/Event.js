'use client';
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Container, Flex, VStack, Text, Heading, HStack, Icon, useDisclosure } from "@chakra-ui/react";
import { MdPlace } from "react-icons/md";
import EventHeroSection from "./Components/HeroSection";
import CustomButton from "../../Components/CustomButton";
import { EventData } from "./Data/Content";
import { EventSEO } from "./Data/SEOContent";
import { EVENT_NAME, isEventLive } from "../../data/currentEvent";

const EventCarousel = dynamic(() => import("./Components/EventCarousel"));
const CTAButton     = dynamic(() => import("../../Components/CTAButton"));
const EventPopup    = dynamic(() => import("../Events/Event"));

// Upcoming-event banner — self-contained, doesn't touch EventCarousel (which
// is built around one shared detailsLink/description for a single event's
// past-event photo gallery, not multiple distinct upcoming/past events).
// Its button opens the same booking popup as the homepage banner, and the card
// disappears once the event in src/data/currentEvent.js is over.
const UpcomingEventBanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Date check after mount, same as the homepage banner in app/ClientLayout.js:
  // this page is prerendered, so checking during render could mismatch.
  const [eventLive, setEventLive] = useState(true);
  useEffect(() => {
    setEventLive(isEventLive());
  }, []);

  if (!eventLive) return null;

  return (
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
              <Text fontWeight="bold" letterSpacing="wide" fontSize="sm">UPCOMING · BOOTH E-10 · NEW DELHI · 3–5 DEC 2026</Text>
            </HStack>
            <Heading as="h2" size="md" color="white" fontWeight="700">ArcisAI at {EVENT_NAME}</Heading>
            <Text color="whiteAlpha.700" fontSize="sm" maxW="520px">
              Live demos of our AI-powered cameras and NVRs at Bharat Mandapam, New Delhi.
            </Text>
          </VStack>
          <CustomButton onClick={onOpen} width="220px" height="46px" fontSize="15px" fontWeight="600" hoverBorderColor="#A4FF79">
            Book a Meeting Slot
          </CustomButton>
        </Flex>
      </Container>
      <EventPopup isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

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
