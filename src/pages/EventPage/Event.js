import React from "react";
import { Box } from "@chakra-ui/react";
import EventHeroSection from "./Components/HeroSection";
import EventCarousel from "./Components/EventCarousel";
import { EventData } from "./Data/Content";
import { EventSEO } from "./Data/SEOContent";
import { Helmet } from "react-helmet-async";
import CTAButton from "../../Components/CTAButton";

const Event = () => {
  return (
    <Box>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{EventSEO.metatitle}</title>
        <meta name="description" content={EventSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={EventSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={EventSEO.metatitle} />
        <meta property="og:description" content={EventSEO.metadescription} />
        <meta property="og:image" content={EventSEO.ogimage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={EventSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={EventSEO.metatitle} />
        <meta name="twitter:description" content={EventSEO.metadescription} />
        <meta name="twitter:image" content={EventSEO.ogimage} />
      </Helmet>
      {/* Schema Markup */}
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
