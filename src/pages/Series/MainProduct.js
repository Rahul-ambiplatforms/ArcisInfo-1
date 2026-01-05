import React from "react";
import { Box } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import PageContentWrapper from "../../Components/PageContentWrapper";
import HeroSection from "./Components/HeroSection";
import { Series as SeriesData } from "./Data/Content";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import Information from "../../Components/Information";
import OurClient from "../HomePage/Components/OurClient";
import CameraFeature from "../Product/Components/CameraFeature";
import Innovation from "../AboutUs/Components/Innovation";
import CTAButton from "../../Components/CTAButton";
import FAQSection from "../../Components/FAQSection";
import ProductInfo from "./Components/ProductInfo";

const MainProduct = ({ seriesType = "nvrDvrSeries" }) => {
  const { seriesId } = useParams();

  // Map URL param to data key
  let selectedSeries = seriesType;
  if (seriesId === "arcis-vms") {
    selectedSeries = "cloudVMS";
  } else if (seriesId === "arcis-bridge-device") {
    selectedSeries = "arcisBridgeDevice";
  } else if (seriesId === "arcis-nvr") {
    selectedSeries = "nvr";
  }

  const data = SeriesData[selectedSeries];
  const seriesData = data || SeriesData.nvrDvrSeries;

  return (
    <>
      <HeroSectionCarousel data={seriesData.hero} />
      {selectedSeries !== "nvr" && (
        <Information data={seriesData.informationData} />
      )}

      {selectedSeries !== "nvr" && <OurClient testimonials={false} />}

      <CameraFeature data={seriesData.features} headingInBackground={true} />
      {selectedSeries === "nvr" && (
        <ProductInfo data={seriesData.productInfo} />
      )}
      <Innovation data={seriesData.Innovation} />
      <CTAButton {...seriesData.CTAButton1} />
      <FAQSection data={seriesData.FAQsData} />
    </>
  );
};

export default MainProduct;
