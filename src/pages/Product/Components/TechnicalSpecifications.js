import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const TechnicalSpecifications = ({ product }) => {
  // Default specs based on the provided image
  const defaultSpecs = [
    { label: "Product Name", value: "POE Bullet Plastic (Series)" },
    { label: "Manufacturer", value: "ADIANCE" },
    { label: "Make", value: "ARCIS AI" },
    { label: "Model", value: "POE BULLET CAMERA (PLASTIC)" },
    {
      label: "Image Sensor",
      value:
        '5.0M 1/2.7" Black light illumination CMOS sensor, color 0.0001Lux@F1.2, black/white 0.0001Lux@F1.2',
    },
    { label: "Total Pixels", value: "5MP" },
    { label: "Day/Night", value: "Auto IR-CUT" },
    { label: "Lens", value: "2.8mm" },
    { label: "Shutter", value: "POE Bullet Plastic (Series)" },
    { label: "IR Distance", value: "20m - 30m" },
    { label: "Dynamic Range", value: "Digital WDR" },
    { label: "Video Compression", value: "H.265/H.264" },
    {
      label: "Image Output",
      value:
        '5.0M 1/2.7" Black light illumination CMOS sensor, color 0.0001Lux@F1.2, black/white 0.0001Lux@F1.2',
    },
    { label: "Min Resolution", value: "5MP" },
    { label: "Frame Rate", value: "25fps" },
    { label: "Audio Compression", value: "G.711U" },
  ];

  const specs = product.technicalSpecs || defaultSpecs;

  return (
    <Box
      w="100vw"
      ml="calc(50% - 50vw)"
      bg="black"
      color="white"
      py={16}
      px={{ base: 0, lg: 20 }}
    >
      <VStack spacing={0} w="full" align="stretch">
        <Text fontSize="4xl" fontWeight="normal" textAlign="center" mb={12}>
          Technical specifications
        </Text>

        {/* Header Row */}
        <Flex w="full" gap={4} mb={4} px={{ base: 4, lg: 0 }}>
          <Box flex="1" p={4} bg="#34353A">
            <Text fontWeight="bold">Model No:</Text>
          </Box>
          <Box flex="2" p={4} bg="#34353A">
            <Text fontWeight="bold">{product.product_name}</Text>
          </Box>
        </Flex>

        {/* Spec Rows */}
        {specs.map((spec, index) => (
          <Flex
            key={index}
            w="full"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 1, lg: 4 }}
            borderBottom={{ base: "1px solid #333", lg: "none" }}
            py={{ base: 4, lg: 0 }}
          >
            <Box
              flex="1"
              px={{ base: 4, lg: 4 }}
              py={{ base: 0, lg: 4 }}
              bg="black"
              textAlign="left"
              borderBottom={{ base: "none", lg: "1px solid #333" }}
            >
              <Text fontWeight="bold" fontSize="sm" color="white">
                {spec.label}
              </Text>
            </Box>
            <Box
              flex="2"
              px={{ base: 4, lg: 4 }}
              py={{ base: 0, lg: 4 }}
              bg="black"
              textAlign="left"
              borderBottom={{ base: "none", lg: "1px solid #333" }}
            >
              <Text fontSize="sm" color="gray.400">
                {spec.value}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default TechnicalSpecifications;
