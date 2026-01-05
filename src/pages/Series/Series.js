import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import { Series as SeriesData } from "./Data/Content";
import { SEOContent } from "./Data/SEOContent";
import { Helmet } from "react-helmet-async";
import ProductList from "../HomePage/Components/ProductList";
import CTAButton from "../../Components/CTAButton";
import { Box } from "@chakra-ui/react";
import NotFound from "../NotFound";
import PageContentWrapper from "../../Components/PageContentWrapper";

const Series = () => {
  const { seriesId } = useParams();

  const getDataKey = (param) => {
    switch (param) {
      case "s-series":
        return "sSeries";
      case "eco-series":
        return "ecoSeries";
    }
  };

  const dataKey = getDataKey(seriesId);
  const seriesData = SeriesData[dataKey];
  const seoData = SEOContent[seriesId];

  if (!seriesData)
    return (
      <>
        <Box h="100vh">
          <NotFound />
        </Box>
      </>
    );

  return (
    <>
      <PageContentWrapper noPadding>
        {seoData && (
          <Helmet>
            {/* Primary Meta Tags */}
            <title>{seoData.metaTitle}</title>
            <meta name="description" content={seoData.metaDescription} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={seoData.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={seoData.metaTitle} />
            <meta property="og:description" content={seoData.metaDescription} />
            <meta property="og:image" content={seoData.ogImage} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={seoData.canonical} />
            <meta property="og:site_name" content="ArcisAI" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@arcisai" />
            <meta name="twitter:title" content={seoData.metaTitle} />
            <meta
              name="twitter:description"
              content={seoData.metaDescription}
            />
            <meta name="twitter:image" content={seoData.ogImage} />

            {/* Additional Meta Tags */}
            {/* <meta
              name="keywords"
              content="AI CCTV Camera, Security Camera, EdgeAI, Surveillance Camera, ArcisAI, Smart CCTV, AI Camera"
            />
            <meta name="author" content="ArcisAI" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" /> */}

            {/* Schema Markup */}
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
          </Helmet>
        )}
        <HeroSection data={seriesData.hero} />
        <ProductList data={seriesData.productList} />
        {seriesData.CTAButton && <CTAButton {...seriesData.CTAButton} />}
      </PageContentWrapper>
    </>
  );
};

export default Series;
