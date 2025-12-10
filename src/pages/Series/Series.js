import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import { Series as SeriesData } from "./Data/Content";
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
        <HeroSection data={seriesData.hero} />
        <ProductList data={seriesData.productList} />
        {seriesData.CTAButton && <CTAButton {...seriesData.CTAButton} />}
      </PageContentWrapper>
    </>
  );
};

export default Series;
