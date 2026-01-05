import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const ProductIndustries = ({ data }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  if (!data) return null;
  const { heading, items } = data;

  const mainItems = items.slice(0, 8);
  const bottomItems = items.slice(8);

  // Corner Styles
  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "15px",
    height: "15px",
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
      <Box position="relative" mb={4} p="8px">
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
        ml={{ base: "2%", md: "2%" }}
      >
        {item.name}
      </Heading>
      <Text
        color="white"
        fontSize={{ base: "14px", md: "16px", lg: "16px" }}
        lineHeight={{ base: "15px", md: "20px", lg: "20px" }}
        align="justify"
        ml={{ base: "2%", md: "2%" }}
        w="95%"
      >
        {item.description}
      </Text>
    </Box>
  );

  const IndustryCardMobile = ({ item }) => (
    <Box
      role="group"
      cursor="pointer"
      minW={{ base: "85vw", sm: "300px", md: "auto" }}
      scrollSnapAlign="center"
    >
      <Box position="relative" mb={4} p="8px">
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
        as="p"
        fontSize={{ base: "16px", md: "20px", lg: "20px" }}
        mb={2}
        fontWeight="400"
        align="left"
        ml={{ base: "2%", md: "2%" }}
      >
        {item.name}
      </Heading>
      <Text
        color="white"
        fontSize={{ base: "14px", md: "16px", lg: "16px" }}
        lineHeight={{ base: "15px", md: "20px", lg: "20px" }}
        align="justify"
        ml={{ base: "2%", md: "2%" }}
        w="95%"
      >
        {item.description}
      </Text>
    </Box>
  );

  return (
    <Box color="white" pt="%">
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
            gap={{ base: 1, md: 6 }}
            overflowX="auto"
            pb={6}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {items.map((item, index) => (
              <IndustryCardMobile key={index} item={item} />
            ))}
          </Box>
        </Box>

        {/* Desktop/Tablet View */}
        <Box display={{ base: "none", md: "block" }}>
          {/* Top Section: Grid (2 cols) -> Title + Main Items */}
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={{ md: 6, lg: 8 }}
            mb={{ md: 6, lg: 8 }}
            alignItems="start"
          >
            {/* Sticky Title */}
            <Box
              position="sticky"
              top="15%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              h="100vh"
            >
              <Heading
                as="p"
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
