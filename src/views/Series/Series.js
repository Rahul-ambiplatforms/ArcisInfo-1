'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import HeroSection from "./Components/HeroSection";
import { Series as SeriesData } from "./Data/Content";
import { SEOContent } from "./Data/SEOContent";
import { Box } from "@chakra-ui/react";
import NotFound from "../NotFound";
import PageContentWrapper from "../../Components/PageContentWrapper";

const ProductList = dynamic(() => import("../HomePage/Components/ProductList"));
const CTAButton   = dynamic(() => import("../../Components/CTAButton"));

const Series = ({ seriesId: seriesIdProp }) => {
  const routerParams = useParams();
  const seriesId = seriesIdProp ?? routerParams.seriesId;

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
        {/* Schema Markup — deliberately NOT inside <Helmet>.
            HelmetProvider is mounted in app/providers.js, a 'use client'
            module, so Helmet only injects into <head> after hydration and
            nothing it renders reaches the server HTML a crawler reads.
            Rendered inline the <script> is server-rendered normally; JSON-LD
            is valid anywhere in the document. The meta/title/canonical tags
            that used to sit here were dead for the same reason and are already
            emitted by the route's `metadata` export. */}
        {seoData?.schema?.length > 0 &&
          seoData.schema.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
        <HeroSection data={seriesData.hero} />
        <ProductList data={seriesData.productList} />
        {seriesData.CTAButton && <CTAButton {...seriesData.CTAButton} />}
      </PageContentWrapper>
    </>
  );
};

export default Series;
