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
      {seoData?.schema &&
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
