import React, { useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductIndustries = ({ data }) => {
  const topSectionRef = useRef(null);
  const titleRef = useRef(null);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (isDesktop && topSectionRef.current && titleRef.current) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: topSectionRef.current,
          start: "top top",
          end: "bottom 65%",
          pin: titleRef.current,
          pinSpacing: false,
        });
      }, topSectionRef);

      return () => ctx.revert();
    }
  }, [isDesktop]);

  if (!data) return null;
  const { heading, items } = data;

  const mainItems = items.slice(0, 8);
  const bottomItems = items.slice(8);

  // Corner Styles
  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "20px",
    height: "20px",
    transition: "all 0.3s ease",
    opacity: 0,
  };

  const IndustryCard = ({ item }) => (
    <Box
      role="group"
      cursor="pointer"
      minW={{ base: "85vw", sm: "300px", md: "auto" }}
      scrollSnapAlign="center"
    >
      <Box position="relative" mb={4} p="8px" maxW="327px">
        {/* Corners */}
        <Box
          {...cornerBase}
          top="0"
          left="0"
          borderTopWidth="2px"
          borderLeftWidth="2px"
          _groupHover={{ opacity: 1 }}
        />
        <Box
          {...cornerBase}
          top="0"
          right="0"
          borderTopWidth="2px"
          borderRightWidth="2px"
          _groupHover={{ opacity: 1 }}
        />
        <Box
          {...cornerBase}
          bottom="0"
          right="0"
          borderBottomWidth="2px"
          borderRightWidth="2px"
          _groupHover={{ opacity: 1 }}
        />
        <Box
          {...cornerBase}
          bottom="0"
          left="0"
          borderBottomWidth="2px"
          borderLeftWidth="2px"
          _groupHover={{ opacity: 1 }}
        />

        <Image
          src={item.image}
          alt={item.name}
          w="100%"
          aspectRatio="1/1"
          objectFit="cover"
          transition="all 0.3s"
        />
      </Box>

      <Heading
        as="h3"
        fontSize={{ base: "16px", md: "20px", lg: "20px" }}
        mb={2}
        fontWeight="400"
        align="left"
      >
        {item.name}
      </Heading>
      <Text
        color="gray.400"
        fontSize={{ base: "14px", md: "16px", lg: "16px" }}
        lineHeight={{ base: "15px", md: "20px", lg: "20px" }}
        align="justify"
      >
        {item.description}
      </Text>
    </Box>
  );

  return (
    <Box bg="black" color="white" py={20}>
      <Box
        w="100%"
        mx="auto"
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        px={{ base: 2, md: 4, lg: 4 }}
      >
        <Box display={{ base: "block", md: "none" }}>
          <Heading
            as="h2"
            fontSize={{ base: "30px", md: "60px" }}
            fontWeight="400"
            lineHeight={{ base: "38px", md: "76px" }}
            mb={6}
          >
            {heading}
          </Heading>
          <Box
            display="flex"
            gap={6}
            overflowX="auto"
            pb={6}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {items.map((item, index) => (
              <IndustryCard key={index} item={item} />
            ))}
          </Box>
        </Box>

        {/* Desktop/Tablet View */}
        <Box display={{ base: "none", md: "block" }}>
          {/* Top Section: Grid (2 cols) -> Title + Main Items */}
          <Grid
            ref={topSectionRef}
            templateColumns="repeat(2, 1fr)"
            gap={{ md: 6, lg: 10 }}
            mb={{ md: 6, lg: 10 }}
            alignItems="start"
          >
            {/* Sticky Title */}
            <Box
              ref={titleRef}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              h="100vh"
            >
              <Heading
                as="h2"
                fontSize={{ md: "30px", lg: "60px" }}
                fontWeight="400"
                lineHeight={{ base: "38px", md: "76px" }}
              >
                {heading}
              </Heading>
            </Box>

            {/* Right Content (Main Grid - 2 cols) */}
            <Grid templateColumns="repeat(2, 1fr)" gap={{ md: 2, lg: 4 }}>
              {mainItems.map((item, index) => (
                <IndustryCard key={index} item={item} />
              ))}
            </Grid>
          </Grid>

          {/* Bottom Section: 4-Col Grid */}
          <Grid templateColumns="repeat(4, 1fr)" gap={{ md: 6, lg: 10 }}>
            {bottomItems.map((item, index) => (
              <IndustryCard key={index} item={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductIndustries;
