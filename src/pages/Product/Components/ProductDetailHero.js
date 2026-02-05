import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  HStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../../../Components/CustomButton";
import DownloadFormPopup from "./DownloadFormPopup";

// Icons can be passed or imported. Using placeholders/generic for now if not provided.
// For the certification logos, we'll expect them in the data or use a diverse list.

const ProductDetailHero = ({ product }) => {
  // Ensure we have at least 4 images for the UI
  const [allImages] = useState(() => {
    const imgs = product.gallery || [product.image];
    // Pad with the main image if we don't have enough
    while (imgs.length < 4) {
      imgs.push(product.image);
    }
    return imgs.slice(0, 4); // Limit to 4
  });

  const [activeIndex, setActiveIndex] = useState(3);

  // Get current main image
  const mainImage = allImages[activeIndex];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  const handleDownloadClick = (pdfUrl) => {
    if (pdfUrl) {
      setCurrentPdfUrl(pdfUrl);
      setIsModalOpen(true);
    }
  };

  const specs = product.specs || [
    { label: "Product Name", value: product.product_name },
    { label: "Manufacturer", value: "ADIANCE" },
    { label: "Make", value: "ARCIS AI" },
    { label: "Model", value: product.subtitle },
    {
      label: "Product Name",
      value: product.attributes?.type?.[0]
        ? `${product.attributes.type[0]} (Series)`
        : "Camera (Series)",
    },
    { label: "Total Pixels", value: product.attributes?.lens?.[0] || "5MP" },
    { label: "ONVIF", value: "Support" },
    { label: "SD Card", value: "Support" },
  ];

  const certLogos = product.certifications || [
    "/images/productlist_logo1.png",
    "/images/productlist_logo2.png",
    "/images/productlist_logo3.png",
    "/images/productlist_logo4.png",
    "/images/productlist_logo5.png",
    "/images/productlist_logo6.png",
    "/images/productlist_logo7.png",
  ];

  return (
    <Box color="white" pt={0}>
      <Heading
        fontSize={{ base: "24px", md: "36px", lg: "48px" }}
        fontWeight="400"
        textAlign="center"
        mb={16}
        lineHeight="1.2"
      >
        Eco Series - A Reliable CCTV Cameras Built for Everyday Surveillance
      </Heading>

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={10}
        align={{ base: "center", lg: "start" }}
      >
        {/* LEFT COLUMN - IMAGE GALLERY */}
        <Box flex="1" maxW={{ lg: "55%" }}>
          <Flex gap={4} direction={{ base: "column", lg: "row" }}>
            {/* Main Image Area with Swap Logic */}
            <Box
              w={{ base: "full", lg: "539px" }}
              h={{ base: "400px", lg: "539px" }}
              bg="#454545"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <AnimatePresence mode="wait">
                {mainImage ? (
                  <motion.img
                    key={activeIndex}
                    src={mainImage}
                    alt={product.product_name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      maxHeight: "80%",
                      maxWidth: "80%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Text color="#fff" fontSize="lg">
                    No image found
                  </Text>
                )}
              </AnimatePresence>

              {/* Overlay Text */}
              <Box
                position="absolute"
                bottom="8"
                width="100%"
                textAlign="center"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {product.product_name}
                </Text>
                <Text fontSize="lg" color="gray.300">
                  {product.subtitle}
                </Text>
              </Box>
            </Box>

            {/* Thumbnail Column - Swappable */}
            <Flex
              direction={{ base: "row", lg: "column" }}
              justify="space-between"
              gap={3}
              w={{ base: "full", lg: "172px" }}
              h={{ base: "auto", lg: "539px" }}
            >
              {allImages.map((img, idx) => (
                <Box
                  key={idx}
                  bg="#454545"
                  w={{ base: "auto", lg: "172px" }}
                  h={{ base: "80px", lg: "172px" }}
                  flex="1" // Ensure equal width allocation
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  transition="all 0.2s"
                  position="relative"
                  role="group"
                  onClick={() => setActiveIndex(idx)}
                  _hover={{ opacity: 0.9 }}
                >
                  {img ? (
                    <Image
                      src={img}
                      maxH="70%"
                      maxW="70%"
                      objectFit="contain"
                    />
                  ) : (
                    <Text color="gray.500" fontSize="xs" textAlign="center">
                      No image found
                    </Text>
                  )}

                  {/* Corner Borders - Visible on Active or Hover */}
                  <Box
                    position="absolute"
                    inset="0"
                    pointerEvents="none"
                    opacity={activeIndex === idx ? 1 : 0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.2s"
                  >
                    {/* Top Left */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="16px"
                      h="16px"
                      borderTop="2px solid #A4FF79"
                      borderLeft="2px solid #A4FF79"
                    />
                    {/* Top Right */}
                    <Box
                      position="absolute"
                      top="0"
                      right="0"
                      w="16px"
                      h="16px"
                      borderTop="2px solid #A4FF79"
                      borderRight="2px solid #A4FF79"
                    />
                    {/* Bottom Left */}
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      w="16px"
                      h="16px"
                      borderBottom="2px solid #A4FF79"
                      borderLeft="2px solid #A4FF79"
                    />
                    {/* Bottom Right */}
                    <Box
                      position="absolute"
                      bottom="0"
                      right="0"
                      w="16px"
                      h="16px"
                      borderBottom="2px solid #A4FF79"
                      borderRight="2px solid #A4FF79"
                    />
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>

        {/* RIGHT COLUMN - SPECS */}
        <Box flex="1" maxW={{ lg: "40%" }}>
          <SimpleGrid columns={2} spacingY={8} spacingX={4}>
            {specs.map((item, index) => (
              <Box key={index} textAlign={{ base: "center", lg: "left" }}>
                <Text color="white" fontWeight="bold" mb={1}>
                  {item.label}
                </Text>
                <Text color="gray.400" fontSize="sm">
                  {item.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Certifications Row */}
          <HStack
            mt={24}
            spacing={4}
            wrap="wrap"
            justify={{ base: "center", lg: "start" }}
          >
            {certLogos.map((logo, idx) => (
              <Box
                key={idx}
                bg="black"
                p={1}
                borderRadius="sm"
                border="1px solid #333"
              >
                <Image
                  src={logo}
                  h="40px"
                  objectFit="contain"
                  alt="Certification Logo"
                />
              </Box>
            ))}
          </HStack>

          {/* Download Button */}
          <Box
            my={{ base: 14, lg: 12 }}
            display="flex"
            justifyContent={{ base: "center", lg: "start" }}
          >
            <CustomButton
              width="145.35px"
              height="34px"
              fontSize="16px"
              onClick={() =>
                handleDownloadClick(
                  product.pdflink || product.downloadLink || "",
                )
              }
            >
              Download PDF
            </CustomButton>
          </Box>
        </Box>
      </Flex>

      {/* Download Form Popup */}
      <DownloadFormPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={currentPdfUrl}
      />
    </Box>
  );
};

export default ProductDetailHero;
