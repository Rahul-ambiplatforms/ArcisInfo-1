import React from "react";
import { Box } from "@chakra-ui/react";
import EventHeroSection from "./Components/HeroSection";
import EventCarousel from "./Components/EventCarousel";
import { EventData } from "./Data/Content";
import CTAButton from "../../Components/CTAButton";

const Event = () => {
  return (
    <Box>
      <EventHeroSection data={EventData.hero} />
      <EventCarousel data={EventData.carousel} />
      <CTAButton {...EventData.cta} />
    </Box>
  );
};

export default Event;
