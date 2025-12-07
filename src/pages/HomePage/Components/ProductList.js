import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { homeContent } from "../Data/Content";
import CustomButton from "../../../Components/CustomButton";

const ProductList = () => {
  const { productList } = homeContent;
  const [activeTab, setActiveTab] = useState(
    productList.products[0].product_type
  );
  const navigate = useNavigate();

  const activeProducts = productList.products.find(
    (p) => p.product_type === activeTab
  )?.productarray;

  // Corner Styles (from AISolutionIndustry)
  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "15px",
    height: "15px",
    transition: "all 0.3s ease",
    opacity: 0,
  };

  return (
    <Box
      w="100%"
      bg="black"
      color="white"
      py={{ base: "5%", md: "2%" }}
      position="relative"
      backgroundImage={`url(${productList.bg_image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {/* Overlay to make GIF appear at 40% opacity */}
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        w="full" 
        h="full" 
        bg="black" 
        opacity={0.6}
        zIndex={0}
      />

      <Box
        w="100%"
        mx="auto"
        px={{ base: 5, lg: 8 }}
        position="relative"
        zIndex={1}
      >
        {/* Heading & Description */}
        <VStack spacing={4} textAlign="center" mb={10}>
          <Heading
            as="h2"
            fontSize={{ base: "30px", md: "60px" }}
            lineHeight={{ base: "38px", md: "76px" }}
            fontWeight="400"
          >
            {productList.heading}
          </Heading>
          <Text
            as="p"
            fontSize={{ base: "16px", md: "16px" }}
            color="white"
            w="100%"
            fontWeight="400"
          >
            {productList.description}
          </Text>
        </VStack>

        {/* Tabs */}
        <Flex
          justify="center"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          mb={10}
          wrap="wrap"
          gap={4}
        >
          {productList.products.map((category) => (
            <CustomButton
              key={category.product_type}
              onClick={() => setActiveTab(category.product_type)}
              // bgColor={activeTab === category.product_type ? "rgba(127, 86, 217, 0.5)" : "rgba(255, 255, 255, 0.1)"}
              bgColor="rgba(255, 255, 255, 0.2)"
              borderColor={
                activeTab === category.product_type ? "#A4FF79" : "white"
              }
              textColor={
                activeTab === category.product_type ? "white" : "white"
              }
              hoverBorderColor="#A4FF79"
              width="160px"
              height="40px"
              fontSize="16px"
              backdropFilter="blur(`10px)"
            >
              {category.product_type}
            </CustomButton>
          ))}
        </Flex>

        {/* Product Grid / Scrollable List */}
        <Box
          display={{ base: "flex", md: "grid" }}
          gridTemplateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          overflowX={{ base: "auto", md: "visible" }}
          pb={{ base: 6, md: 0 }}
          px={{ base: 0, md: 0 }}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            scrollSnapType: { base: "x mandatory", md: "none" },
          }}
        >
          {activeProducts?.map((product, index) => (
            <Box
              key={index}
              minW={{ base: "85vw", sm: "320px", md: "auto" }}
              w={{ base: "290px", md: "290px" }}
              h={{ base: "290px", md: "290px" }}
              // scrollSnapAlign="center"
              bg="rgba(255,255,255,0.2)"
              backdropFilter="blur(5px)"
              p={6}
              position="relative"
              role="group"
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => navigate(product.link)}
              _hover={{
                bg: "whiteAlpha.300", //blackAlpha.300
                transform: "translateY(-2px)",
              }}
            >
              {/* Top Left Corner */}
              <Box
                {...cornerBase}
                top="-5px"
                left="-5px"
                borderTopWidth="2px"
                borderLeftWidth="2px"
                _groupHover={{ opacity: 1 }}
              />
              {/* Top Right Corner */}
              <Box
                {...cornerBase}
                top="-5px"
                right="-5px"
                borderTopWidth="2px"
                borderRightWidth="2px"
                _groupHover={{ opacity: 1 }}
              />
              {/* Bottom Right Corner */}
              <Box
                {...cornerBase}
                bottom="-5px"
                right="-5px"
                borderBottomWidth="2px"
                borderRightWidth="2px"
                _groupHover={{ opacity: 1 }}
              />
              {/* Bottom Left Corner */}
              <Box
                {...cornerBase}
                bottom="-5px"
                left="-5px"
                borderBottomWidth="2px"
                borderLeftWidth="2px"
                _groupHover={{ opacity: 1 }}
              />

              <VStack
                spacing={4}
                align="start"
                h="full"
                justify="space-between"
              >
                <Box w="full" display="flex" justifyContent="center" mt="-7%">
                  <Image
                    src={product.image}
                    alt={product.product_name}
                    // w="214px"
                    h="214px"
                    // maxH="150px"
                    objectFit="contain"
                  />
                </Box>

                <HStack w="full" justify="space-between" align="center">
                  <Text w="50%" fontSize="20px" lineHeight="25px">
                    {product.product_name}
                  </Text>

                  <CustomButton
                    width="40px"
                    height="40px"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(product.link);
                    }}
                    sx={{ padding: 0 }}
                    showTicks={false}
                  >
                    <Image
                      src={
                        require("../../../Components/Icons/RightButton.svg")
                          .default
                      }
                      alt=""
                      w="15px"
                    />
                  </CustomButton>
                </HStack>
              </VStack>
            </Box>
          ))}
        </Box>

        {/* More Products Button */}
        {/* <Flex justify="center" mt={10}>
          <CustomButton
            width="180px"
            onClick={() => navigate("/products")} // Assuming a products page exists
          >
            More Products
          </CustomButton>
        </Flex> */}
      </Box>
    </Box>
  );
};

export default ProductList;
