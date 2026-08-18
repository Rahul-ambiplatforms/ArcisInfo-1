'use client';
import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import HeroCarousel from "./Components/HeroCarousel";
import { IFSECData } from "./Data/Content";
import { IFSECSEO } from "./Data/SEOContent";

const Information  = dynamic(() => import("./Components/Information"));
const ImageGallery = dynamic(() => import("./Components/ImageGallery"));
const CTAButton    = dynamic(() => import("../../Components/CTAButton"));

const IFSEC = ({ eventId: eventIdProp }) => {
  const routerParams = useParams();
  const eventId = eventIdProp ?? routerParams.eventId;

  // For now, we only have IFSEC data
  // Later you can add more events like: const eventData = eventId === 'ifsec' ? IFSECData : OtherEventData;
  const eventData = eventId === "ifsec-india-2025" ? IFSECData : null;
  const seoData = eventId === "ifsec-india-2025" ? IFSECSEO : null;

  if (!eventData) return null;

  return (
    <Box>
<<<<<<< HEAD
      {seoData?.schema &&
=======
      {/* Schema Markup — deliberately NOT inside <Helmet>.
          HelmetProvider is mounted in app/providers.js, a 'use client' module,
          so Helmet only injects into <head> after hydration and nothing it
          renders reaches the server HTML a crawler reads. Rendered inline the
          <script> is server-rendered normally; JSON-LD is valid anywhere in
          the document. The meta/title/canonical tags that used to sit here
          were dead for the same reason and are already emitted by the route's
          `metadata` export. The JSON-LD itself is rendered below. */}
      {seoData.schema &&
>>>>>>> 6da4e4a5afc5bec2e6ee37de16852c19d9820abf
        seoData.schema.length > 0 &&
        seoData.schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      <HeroCarousel data={eventData.heroCarousel} />
      <Information data={eventData.information} />
      <ImageGallery data={eventData.imageGallery} />
      <CTAButton {...eventData.cta} />
    </Box>
  );
};

export default IFSEC;
