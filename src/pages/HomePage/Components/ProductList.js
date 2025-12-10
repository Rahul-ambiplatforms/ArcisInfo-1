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

const ProductList = ({ data }) => {
  // Use provided data or fallback to homeContent
  const productList = data || homeContent.productList;

  // Filter products with valid product_type for buttons
  const validProducts =
    productList?.products?.filter(
      (category) => category.product_type && category.product_type.trim() !== ""
    ) || [];

  // Find products without product_type (these should be displayed directly)
  const productsWithoutType =
    productList?.products?.filter(
      (category) =>
        !category.product_type || category.product_type.trim() === ""
    ) || [];

  // Hooks must be called before any early returns
  // Set initial activeTab to first valid product_type, or empty if none exist
  const [activeTab, setActiveTab] = useState(
    validProducts.length > 0 ? validProducts[0]?.product_type || "" : ""
  );
  const navigate = useNavigate();

  // Return null if no data or no products
  if (
    !productList ||
    !productList.products ||
    productList.products.length === 0
  ) {
    return null;
  }

  // Find active products:
  // 1. If activeTab matches a valid product_type, use that
  // 2. If activeTab is empty or no match, use products without product_type
  // 3. Fallback to first valid product or first product without type
  let activeProducts;
  if (activeTab) {
    activeProducts = productList.products.find(
      (p) => p.product_type === activeTab
    )?.productarray;
  }

  // If no activeProducts found and there are products without type, use those
  if (!activeProducts && productsWithoutType.length > 0) {
    activeProducts = productsWithoutType[0]?.productarray;
  }

  // Final fallback to first valid product
  if (!activeProducts && validProducts.length > 0) {
    activeProducts = validProducts[0]?.productarray;
  }

  // Corner Styles (from AISolutionIndustry)
  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "10px",
    height: "10px",
    transition: "all 0.3s ease",
    opacity: 0,
  };

  return (
    <Box
      w="100%"
      bg="black"
      color="white"
      py={{ base: "5%", md: "4%" }}
      position="relative"
      {...(productList.bg_image && {
        backgroundImage: `url(${productList.bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      })}
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
        <VStack spacing={4} textAlign="center" mb={8}>
          {productList.heading && (
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "60px" }}
              lineHeight={{ base: "38px", md: "76px" }}
              fontWeight="400"
            >
              {productList.heading}
            </Heading>
          )}
          {productList.description && productList.description.trim() !== "" && (
            <Text
              as="p"
              fontSize={{ base: "16px", md: "16px" }}
              color="white"
              w="100%"
              fontWeight="400"
            >
              {productList.description}
            </Text>
          )}
        </VStack>

        {/* Tabs - Only show if there are products with valid product_type */}
        {validProducts && validProducts.length > 0 && (
          <Flex
            justify="center"
            alignItems="center"
            direction={{ base: "column", md: "row" }}
            mb={10}
            wrap="wrap"
            gap={4}
          >
            {validProducts.map((category) => (
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
        )}

        {/* Product Grid / Scrollable List */}
        {activeProducts && activeProducts.length > 0 && (
          <Box
            display={{ base: "flex", md: "grid" }}
            gridTemplateColumns={{
              md: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{base:4,md:6}}
            overflowX={{ base: "auto", md: "visible" }}
            pb={{ base: 6, md: 0 }}
            pt={{ base: 4, md: 0 }}
            px={{ base: 4, md: 0 }}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollSnapType: { base: "x mandatory", md: "none" },
            }}
            justifyContent={{ base: "flex-start", md: "center" }}
            alignItems="center"
          >
            {activeProducts.map((product, index) => (
              <Box
                key={index}
                minW={{ base: "75vw", sm: "320px", md: "auto" }}
                w={{ base: "290px", md: "290px" }}
                h={{ base: "290px", md: "290px" }}
                scrollSnapAlign="center"
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
                  spacing={2}
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
                    <Text
                      w={{base:"40%",md:"50%"}}
                      fontSize={{ base: "16px", md: "20px" }}
                      lineHeight={{ base: "20px", md: "25px" }}
                    >
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
        )}

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
