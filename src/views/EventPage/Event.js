'use client';
import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import EventHeroSection from "./Components/HeroSection";
import { EventData } from "./Data/Content";
import { EventSEO } from "./Data/SEOContent";

const EventCarousel = dynamic(() => import("./Components/EventCarousel"));
const CTAButton     = dynamic(() => import("../../Components/CTAButton"));

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
      <EventCarousel data={EventData.carousel} />
      <CTAButton {...EventData.cta} />
    </Box>
  );
};

export default Event;
