import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import HeroCarousel from "./Components/HeroCarousel";
import Information from "./Components/Information";
import ImageGallery from "./Components/ImageGallery";
import { IFSECData } from "./Data/Content";
import { IFSECSEO } from "./Data/SEOContent";
import { Helmet } from "react-helmet-async";
import CTAButton from "../../Components/CTAButton";

const IFSEC = () => {
  const { eventId } = useParams();

  // For now, we only have IFSEC data
  // Later you can add more events like: const eventData = eventId === 'ifsec' ? IFSECData : OtherEventData;
  const eventData = eventId === "ifsec-india-2025" ? IFSECData : null;
  const seoData = eventId === "ifsec-india-2025" ? IFSECSEO : null;

  return (
    <Box>
      {seoData && (
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{seoData.metatitle}</title>
          <meta name="description" content={seoData.metadescription} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={seoData.canonical} />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content={seoData.metatitle} />
          <meta property="og:description" content={seoData.metadescription} />
          <meta property="og:image" content={seoData.ogimage} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={seoData.canonical} />
          <meta property="og:site_name" content="ArcisAI" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@arcisai" />
          <meta name="twitter:title" content={seoData.metatitle} />
          <meta name="twitter:description" content={seoData.metadescription} />
          <meta name="twitter:image" content={seoData.ogimage} />

          {/* Schema Markup */}
        </Helmet>
      )}
      {seoData.schema &&
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
