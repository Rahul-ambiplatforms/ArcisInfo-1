import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Grid,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";
import DownloadFormPopup from "../../Product/Components/DownloadFormPopup";

const UpIcon = (props) => (
  <Icon viewBox="0 0 16 8" fill="none" {...props}>
    <path
      d="M0.640185 7.07674L7.93227 0.999999L15.2244 7.07674"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Icon>
);

const NVRModelSelector = ({ data }) => {
  const [expandedModel, setExpandedModel] = useState(0); // First model expanded by default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  if (!data) return null;

  const { title, models, sectionProps, titleProps } = data;

  const toggleModel = (index) => {
    setExpandedModel(expandedModel === index ? null : index);
  };

  const handleDownloadClick = (pdfUrl) => {
    if (pdfUrl) {
      setCurrentPdfUrl(pdfUrl);
      setIsModalOpen(true);
    }
  };

  return (
    <Box
      w="full"
      bg={sectionProps?.bgColor || "#000"}
      py={{
        base: sectionProps?.mobile?.paddingY || "40px",
        md: sectionProps?.desktop?.paddingY || "60px",
      }}
      px={{
        base: sectionProps?.mobile?.paddingX || "20px",
        md: sectionProps?.desktop?.paddingX || "80px",
      }}
    >
      <Box maxW={sectionProps?.maxWidth || "1400px"} mx="auto">
        {/* Title */}
        <Heading
          as="h2"
          fontSize={{
            base: titleProps?.mobile?.fontSize || "28px",
            md: titleProps?.desktop?.fontSize || "42px",
          }}
          fontWeight={titleProps?.fontWeight || "400"}
          color={titleProps?.color || "#fff"}
          textAlign={titleProps?.textAlign || "center"}
          mb={{
            base: titleProps?.mobile?.marginBottom || "30px",
            md: titleProps?.desktop?.marginBottom || "50px",
          }}
          lineHeight={{
            base: titleProps?.mobile?.lineHeight || "36px",
            md: titleProps?.desktop?.lineHeight || "52px",
          }}
        >
          {title}
        </Heading>

        {/* Models List */}
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {models?.map((model, index) => (
            <Box
              key={index}
              borderRadius="0"
              overflow="hidden"
              transition="all 0.5s"
              w="100%"
              maxW="100%"
            >
              {/* Model Header */}
              <Flex
                align="center"
                justify="space-between"
                gap={0}
                position="relative"
                w="98%"
                maxW="100%"
              >
                {/* Title with Background */}
                <Box
                  bg={model.headerBgColor || model.contentBgColor || "#2a2a2a"}
                  p={{ base: "16px 20px", md: "20px 24px" }}
                  cursor="pointer"
                  onClick={() => toggleModel(index)}
                  _hover={{
                    bg: model.headerHoverBgColor || "#333",
                  }}
                  flexShrink={0}
                  w={{ base: "calc(100% - 60px)", md: "auto" }}
                  minW={{ base: "auto", md: "291px" }}
                >
                  <Text
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight="400"
                    color="#fff"
                    whiteSpace="nowrap"
                  >
                    {model.name}
                  </Text>
                </Box>

                {/* Separator Line - Full height spanning line - Hidden on mobile */}
                <Box
                  w="100%"
                  h="5px"
                  mx="20px"
                  bg="#333333"
                  flex="1"
                  display={{ base: "none", md: "block" }}
                />

                {/* Button */}
                <Box flexShrink={0}>
                  <CustomButton
                    width="40px"
                    height="40px"
                    bgColor="#333333"
                    hoverBgColor="rgba(255, 255, 255, 0.1)"
                    borderColor={expandedModel === index ? "#A4FF79" : "#fff"}
                    hoverBorderColor="#A4FF79"
                    textColor="white"
                    hoverTextColor="white"
                    showGlow={expandedModel === index}
                    glowColor="#A4FF79"
                    showTicks={false}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModel(index);
                    }}
                  >
                    <UpIcon
                      w={3.5}
                      h={3.5}
                      transform={
                        expandedModel === index
                          ? "rotate(0deg)"
                          : "rotate(180deg)"
                      }
                      transition="transform 0.3s"
                      color={expandedModel === index ? "#A4FF79" : "white"}
                    />
                  </CustomButton>
                </Box>
              </Flex>

              {/* Expanded Content */}
              <Collapse in={expandedModel === index} animateOpacity>
                <Box
                  p={{ base: "24px 2px", md: "40px 24px" }}
                  bg={model.contentBgColor || "#1a1a1a"}
                  borderRadius="0"
                  mt={0}
                  w="100%"
                  maxW="100%"
                  overflow="hidden"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 4, md: 8 }}
                    align="flex-start"
                  >
                    {/* Model Image */}
                    {model.image && (
                      <Box flexShrink={0} w={{ base: "100%", md: "291.91px" }}>
                        <Box
                          bg={model.imageBgColor || "#2a2a2a"}
                          border="none"
                          p={4}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w={{ base: "100%", md: "291.91px" }}
                          h={{ base: "auto", md: "292.13px" }}
                        >
                          <Image
                            src={model.image}
                            alt={model.name}
                            maxW="100%"
                            maxH="100%"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>
                    )}

                    {/* Specifications Grid */}
                    <Box
                      flex="1"
                      display="flex"
                      flexDirection="column"
                      h="100%"
                      w="100%"
                      minW="0"
                    >
                      <Grid
                        templateColumns={{
                          base: "repeat(2, 1fr)",
                          md: "repeat(2, 1fr)",
                        }}
                        gap={{ base: "80px", md: 6 }}
                        rowGap={{ base: 6, md: 8 }}
                        w="100%"
                      >
                        {model.specifications?.map((spec, specIndex) => (
                          <Box key={specIndex}>
                            <Text
                              fontSize="14px"
                              color="rgba(255,255,255,0.6)"
                              mb={2}
                              fontWeight="400"
                            >
                              {spec.label}
                            </Text>
                            <Text
                              fontSize={{ base: "14px", md: "16px" }}
                              color="#fff"
                              fontWeight="500"
                            >
                              {spec.value}
                            </Text>
                          </Box>
                        ))}
                      </Grid>

                      {/* Download Button */}
                      {model.downloadLink && (
                        <CustomButton
                          mt={8}
                          width={model.buttonWidth || "160px"}
                          height={model.buttonHeight || "40px"}
                          bgColor={model.buttonBgColor || "transparent"}
                          borderColor={model.buttonBorderColor || "#fff"}
                          textColor={model.buttonTextColor || "#fff"}
                          hoverBgColor={
                            model.buttonHoverBgColor || "rgba(255,255,255,0.1)"
                          }
                          hoverBorderColor={
                            model.buttonHoverBorderColor || "#A4FF79"
                          }
                          hoverTextColor={
                            model.buttonHoverTextColor || "#A4FF79"
                          }
                          onClick={() =>
                            handleDownloadClick(model.downloadLink)
                          }
                        >
                          {model.downloadText || "Download PDF"}
                        </CustomButton>
                      )}
                    </Box>
                  </Flex>
                </Box>
              </Collapse>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Download Form Popup */}
      <DownloadFormPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={currentPdfUrl}
      />
    </Box>
  );
};

export default NVRModelSelector;
