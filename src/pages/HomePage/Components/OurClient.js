import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { TbLocationDiscount } from "react-icons/tb";
// import { Location } from "../../../Components/Icons/Location.svg";

// Data Constants
const TESTIMONIALS_DATA = [
  {
    name: "Priya Desai",
    designation: "Retail Store Owner",
    description:
      "We used to struggle with shoplifting and after-hours blind spots. ArcisAI's motion alerts and instant playback have changed the way we secure our store.",
    location: "Ahmedabad",
  },
  {
    name: "R. Kadam",
    designation: "Factory Owner",
    description:
      "The PPE detection and area monitoring features helped us improve worker safety and meet audit requirements. It's like having a 24/7 digital supervisor.",
    location: "Pune",
  },
  {
    name: "Priya Desai",
    designation: "Logistics Manager",
    description:
      "With ArcisAI's multi-camera view and cloud storage, we no longer miss incidents. It helped us reduce losses and speed up issue resolution.",
    location: "Surat",
  },
];

const CLIENT_LOGOS_DATA = [
  { image: "/images/home_client_1.png", alt: "Adani" },
  { image: "/images/home_client_2.png", alt: "SBI – State Bank of India" },
  { image: "/images/home_client_3.png", alt: "Eicher" },
  { image: "/images/home_client_4.png", alt: "HDFC Bank" },
  { image: "/images/home_client_5.png", alt: "ICICI Bank" },
  { image: "/images/home_client_6.png", alt: "TEDx" },
  { image: "/images/home_client_7.png", alt: "Pfizer" },
  { image: "/images/home_client_8.png", alt: "L'Oréal" },
  { image: "/images/home_client_9.png", alt: "Government of Egypt Emblem" },
  { image: "/images/home_client_10.png", alt: "Jio" },
  { image: "/images/home_client_11.png", alt: "IIT Roorkee" },

  { image: "/images/home_client_12.png", alt: "Election Commission of India" },
  { image: "/images/home_client_13.png", alt: "IIT Bombay" },
  { image: "/images/home_client_14.png", alt: "IIM Ahmedabad" },
  { image: "/images/home_client_15.png", alt: "Reserve Bank of India" },
  { image: "/images/home_client_16.png", alt: "Indian Railways" },
  { image: "/images/home_client_17.png", alt: "Border Security Force (BSF)" },
  {
    image: "/images/home_client_18.png",
    alt: "CRPF – Central Reserve Police Force",
  },
  { image: "/images/home_client_19.png", alt: "Assam Police" },
  { image: "/images/home_client_20.png", alt: "Indian Navy Emblem" },
  { image: "/images/home_client_21.png", alt: "Customs Department of India" },
  { image: "/images/home_client_22.png", alt: "Indian Coast Guard" },

  { image: "/images/home_client_23.png", alt: "Government of India Emblem" },
  { image: "/images/home_client_24.png", alt: "Gujarat Tourism" },
  {
    image: "/images/home_client_25.png",
    alt: "Uttar Pradesh Government Emblem",
  },
  { image: "/images/home_client_26.png", alt: "Gujarat Government Emblem" },
  { image: "/images/home_client_27.png", alt: "NTPC" },
  {
    image: "/images/home_client_28.png",
    alt: "ISRO – Indian Space Research Organisation",
  },
  { image: "/images/home_client_29.png", alt: "GAIL – Gas Authority of India" },
  { image: "/images/home_client_30.png", alt: "NIELIT" },
  {
    image: "/images/home_client_31.png",
    alt: "REIL – Rajasthan Electronics & Instruments Ltd",
  },
  {
    image: "/images/home_client_32.png",
    alt: "NIC – National Informatics Centre",
  },
  { image: "/images/home_client_33.png", alt: "BSNL" },
];

const OurClient = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const scrollRef = useRef(null);

  return (
    <Box
      position="relative"
      bg="black"
      py={{ base: 2, md: 10 }}
      overflow="hidden"
      color="white"
    >
      {/* Background GIF Overlay */}
      <Box
        position="absolute"
        top={{ base: "7%", md: "0" }}
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        opacity="0.4"
        pointerEvents="none"
      >
        <Image
          src="/images/home_wave_gif.gif"
          alt="Background Wave"
          w={{ base: "100%", md: "100%" }}
          h={{ base: "50%", md: "100%" }}
          objectFit="cover"
        />
      </Box>

      <Box w="100%" position="relative" zIndex="1">
        <Text textAlign="center" fontSize={{ base: "14px", md: "24px" }} mb={2}>
          Our Clientele
        </Text>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "30px", md: "60px" }}
          mb={{ base: 4, md: 8 }}
        >
          What Our Customers Say About ArcisAI
        </Heading>

        {/* Testimonials Section */}
        <Box
          ref={scrollRef}
          overflowX={isMobile ? "auto" : "visible"}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
          mb={{ base: 8, md: 12 }}
        >
          <Flex
            gap={6}
            justify={isMobile ? "flex-start" : "center"}
            px={isMobile ? 4 : 0}
            w={isMobile ? "max-content" : "100%"}
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <Box
                key={index}
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(20px)"
                p={4}
                w={{ base: "236px", md: "290px" }}
                h={{ base: "236px", md: "290px" }}
                transition="transform 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  bg: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <Flex direction="column" h="100%" justify="space-between">
                  <Box>
                    <Heading fontSize="20px" fontWeight="400" mb={1}>
                      {testimonial.name}
                    </Heading>
                    <Text fontSize="16px" fontWeight="400" mb={4}>
                      {testimonial.designation}
                    </Text>
                    <Text
                      fontSize={{ base: "12px", md: "16px" }}
                      fontWeight="400"
                      mb={6}
                      lineHeight={{ base: "15px", md: "20px" }}
                    >
                      {testimonial.description}
                    </Text>
                  </Box>
                  <Flex align="flex-start" direction="column">
                    <Icon as={TbLocationDiscount} w={5} h={5} />
                    {/* <Location /> */}
                    <Text
                      fontSize={{ base: "14px", md: "16px" }}
                      fontWeight="700"
                    >
                      {testimonial.location}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Client Logos Grid */}
        <SimpleGrid
          columns={{ base: 4, md: 6, lg: 11 }}
          spacing={4}
          alignItems="center"
          justifyItems="center"
          px={{ base: "2", md: "8" }}
        >
          {CLIENT_LOGOS_DATA.map((client, index) => (
            <Box
              key={index}
              bg="red"
              // p={4}
              w="100%"
              // h="80px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                src={client.image}
                alt={client.alt}
                maxH="100%"
                maxW="100%"
                objectFit="contain"
                filter="grayscale(0%)"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OurClient;
