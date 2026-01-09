import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Container,
  Text,
  Link,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const CTAButton = ({
  d_image,
  m_image,
  m_Image,
  data,
  buttonText,
  link,
  textPosition,
  textColor = "black",
  alignItems = "flex-start",
  textAlign = "left",
  buttonProps = {},
  textProps = {},
}) => {
  const mobileImage = m_image || m_Image;
  const { desktop, mobile } = textPosition || {};
  const { desktop: btnDesktop, mobile: btnMobile } = buttonProps || {};
  const { desktop: txtDesktop, mobile: txtMobile } = textProps || {};

  // Helper to determine if color is a gradient
  const isGradient = (color) =>
    color &&
    (color.includes("gradient") ||
      color.includes("linear(") ||
      color.includes("radial("));

  // Resolve responsive text styles
  const baseTextColor = txtMobile?.textColor || textColor;
  const mdTextColor = txtDesktop?.textColor || textColor;

  const responsiveBgGradient = {
    base: isGradient(baseTextColor) ? baseTextColor : "none",
    md: isGradient(mdTextColor) ? mdTextColor : "none",
  };

  const responsiveBgClip = {
    base: isGradient(baseTextColor) ? "text" : "border-box",
    md: isGradient(mdTextColor) ? "text" : "border-box",
  };

  const responsiveColor = {
    base: isGradient(baseTextColor) ? "transparent" : baseTextColor,
    md: isGradient(mdTextColor) ? "transparent" : mdTextColor,
  };

  const responsiveAlign = {
    base: txtMobile?.alignItems || alignItems,
    md: txtDesktop?.alignItems || alignItems,
  };

  const responsiveTextAlign = {
    base: txtMobile?.textAlign || textAlign,
    md: txtDesktop?.textAlign || textAlign,
  };

  const responsiveBtnBgClip = {
    base: isGradient(btnMobile?.textColor) ? "text" : "border-box",
    md: isGradient(btnDesktop?.textColor) ? "text" : "border-box",
  };

  return (
    <Box
      position="relative"
      w="100vw"
      left="50%"
      transform="translateX(-50%)"
      overflow="hidden"
    >
      {d_image && (
        <Image
          src={d_image}
          alt="Background"
          w="100%"
          h="auto"
          objectFit="cover"
          display={{ base: mobileImage ? "none" : "block", md: "block" }}
        />
      )}
      {mobileImage && (
        <Image
          src={mobileImage}
          alt="Background Mobile"
          w="100%"
          h="auto"
          objectFit="cover"
          display={{ base: "block", md: "none" }}
        />
      )}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        pointerEvents="none"
      >
        <Flex
          direction="column"
          position="absolute"
          top={{ base: mobile?.top, md: desktop?.top }}
          left={{ base: mobile?.left, md: desktop?.left }}
          right={{ base: mobile?.right, md: desktop?.right }}
          bottom={{ base: mobile?.bottom, md: desktop?.bottom }}
          transform={{
            base: mobile?.top === "50%" ? "translateY(-50%)" : "none",
            md: desktop?.top === "50%" ? "translateY(-50%)" : "none",
          }}
          w="100%"
          // align={responsiveAlign}
          align={responsiveAlign}
          textAlign={responsiveTextAlign}
          pointerEvents="auto"
          px={{ base: 4, md: 0 }}
        >
          <Heading
            as="h4"
            fontSize={{ base: "30px", md: "48px", lg: "60px" }}
            fontWeight="400"
            lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
            mb={{ base: 4, md: 6 }}
            w={{
              base: txtMobile?.width || "55%",
              md: txtDesktop?.width || "55%",
            }}
          >
            <Text
              as="span"
              textTransform="capitalize"
              bgGradient={responsiveBgGradient}
              bgClip={responsiveBgClip}
              color={responsiveColor}
            >
              {data}
            </Text>
          </Heading>

          <Link href={link} style={{ textDecoration: "none" }}>
            <CustomButton
              as="p"
              width={{
                base: btnMobile?.width || "160px",
                md: btnDesktop?.width || "220px",
              }}
              height={{
                base: btnMobile?.height || "56px",
                md: btnDesktop?.height || "56px",
              }}
              bgColor={{
                base: btnMobile?.bgColor || "rgba(23, 23, 23, 0.05)",
                md: btnDesktop?.bgColor || "rgba(23, 23, 23, 0.05)",
              }}
              hoverBgColor={{
                base: btnMobile?.bgColor || "rgba(23, 23, 23, 0.05)",
                md: btnDesktop?.bgColor || "rgba(23, 23, 23, 0.05)",
              }}
              borderColor={{
                base: btnMobile?.borderColor || "transparent",
                md: btnDesktop?.borderColor || "transparent",
              }}
              hoverBorderColor={{
                base:
                  btnMobile?.hoverBorderColor ||
                  btnMobile?.borderColor ||
                  "transparent",
                md:
                  btnDesktop?.hoverBorderColor ||
                  btnDesktop?.borderColor ||
                  "transparent",
              }}
              textColor={{
                base: btnMobile?.textColor || btnDesktop?.textColor || "white",
                md: btnDesktop?.textColor || "white",
              }}
              hoverTextColor={{
                base: isGradient(btnMobile?.textColor)
                  ? "transparent"
                  : btnMobile?.hoverTextColor ||
                    btnMobile?.textColor ||
                    "transparent",
                md: isGradient(btnDesktop?.textColor)
                  ? "transparent"
                  : btnDesktop?.hoverTextColor ||
                    btnDesktop?.textColor ||
                    "transparent",
              }}
              textGradient={{
                base: isGradient(btnMobile?.textColor)
                  ? btnMobile?.textColor
                  : "none",
                md: isGradient(btnDesktop?.textColor)
                  ? btnDesktop?.textColor
                  : "none",
              }}
              textBgClip={responsiveBtnBgClip}
              fontSize="20px"
              fontWeight="700"
              showGlow={false}
            >
              {buttonText}
            </CustomButton>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default CTAButton;
