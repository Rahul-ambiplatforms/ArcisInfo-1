import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import HeroCarousel from "./Components/HeroCarousel";
import Information from "./Components/Information";
import ImageGallery from "./Components/ImageGallery";
import { IFSECData } from "./Data/Content";
import CTAButton from "../../Components/CTAButton";

const IFSEC = () => {
  const { eventId } = useParams();

  // For now, we only have IFSEC data
  // Later you can add more events like: const eventData = eventId === 'ifsec' ? IFSECData : OtherEventData;
  const eventData = IFSECData;

  return (
    <Box>
      <HeroCarousel data={eventData.heroCarousel} />
      <Information data={eventData.information} />
      <ImageGallery data={eventData.imageGallery} />
      <CTAButton {...eventData.cta} />
    </Box>
  );
};

export default IFSEC;
