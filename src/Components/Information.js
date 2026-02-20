import React from "react";
import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";

const Information = ({ data }) => {
  if (!data) return null;

  const {
    title,
    description,
    paragraphs,
    image,
    logo,
    sectionProps,
    contentProps,
    imageProps,
  } = data;

  // Determine if we have an image or logo to show
  const hasImageSection = image || logo;

  // Use paragraphs if available, otherwise fall back to description
  const textContent = paragraphs || (description ? [description] : []);

  return (
    <Box
      w="full"
      bg={sectionProps?.desktop?.bgColor || "#000"}
      py={{
        base: sectionProps?.mobile?.paddingY || "40px",
        md: sectionProps?.desktop?.paddingY || "60px",
      }}
      px={{
        base: sectionProps?.mobile?.paddingX || "20px",
        md: sectionProps?.desktop?.paddingX || "80px",
      }}
      display={sectionProps?.desktop?.display || "block"}
    >
      <Flex
        direction={{ base: "column", md: hasImageSection ? "row" : "column" }}
        align="center"
        justify={
          sectionProps?.desktop?.justifyContent ||
          (hasImageSection ? "space-between" : "center")
        }
        maxW={sectionProps?.desktop?.maxWidth || "1400px"}
        mx="auto"
        gap={{ base: 6, md: 8 }}
      >
        {/* Content Section */}
        <Box
          flex={{
            base: "1",
            md: contentProps?.desktop?.flex || (hasImageSection ? "0.6" : "1"),
          }}
          w={{
            base: "100%",
            md:
              contentProps?.desktop?.width ||
              (hasImageSection ? "auto" : "90%"),
          }}
          maxW={{
            base: "100%",
            md: contentProps?.desktop?.contentMaxWidth || "none",
          }}
          textAlign={{
            base: contentProps?.mobile?.textAlign || "left",
            md: contentProps?.desktop?.textAlign || "left",
          }}
          mx="auto"
        >
          <Heading
            as="h2"
            fontSize={{
              base: contentProps?.mobile?.titleSize || "24px",
              md: contentProps?.desktop?.titleSize || "32px",
            }}
            fontWeight={contentProps?.desktop?.titleWeight || "600"}
            color={contentProps?.desktop?.titleColor || "#fff"}
            mb={{
              base: contentProps?.mobile?.titleMarginBottom || "12px",
              md: contentProps?.desktop?.titleMarginBottom || "16px",
            }}
            lineHeight={{
              base: contentProps?.mobile?.titleLineHeight || "32px",
              md: contentProps?.desktop?.titleLineHeight || "42px",
            }}
          >
            {title}
          </Heading>

          <VStack
            spacing={{
              base: contentProps?.mobile?.paragraphSpacing || "12px",
              md: contentProps?.desktop?.paragraphSpacing || "16px",
            }}
            align={
              contentProps?.desktop?.textAlign === "center"
                ? "center"
                : "flex-start"
            }
          >
            {textContent.map((paragraph, index) => (
              <Text
                key={index}
                fontSize={{
                  base: contentProps?.mobile?.descSize || "14px",
                  md: contentProps?.desktop?.descSize || "16px",
                }}
                fontWeight={contentProps?.desktop?.descWeight || "400"}
                color={contentProps?.desktop?.descColor || "#e0e0e0"}
                lineHeight={{
                  base: contentProps?.mobile?.descLineHeight || "22px",
                  md: contentProps?.desktop?.descLineHeight || "26px",
                }}
                maxW={{
                  base: "100%",
                  md:
                    contentProps?.desktop?.descMaxWidth ||
                    (hasImageSection ? "600px" : "900px"),
                }}
                w="100%"
                textAlign={{
                  base: contentProps?.mobile?.textAlign || "left",
                  md: contentProps?.desktop?.textAlign || "left",
                }}
              >
                {paragraph}
              </Text>
            ))}
          </VStack>
        </Box>

        {/* Right Image Section - Only render if image or logo exists */}
        {hasImageSection && (
          <Flex
            flex={{ base: "1", md: imageProps?.desktop?.flex || "0.4" }}
            w={{ base: "100%", md: "auto" }}
            justify={{
              base: imageProps?.mobile?.justify || "center",
              md: imageProps?.desktop?.justify || "flex-end",
            }}
            align="center"
            position="relative"
          >
            {/* Main Image Container */}
            <Box
              position="relative"
              w={{
                base: imageProps?.mobile?.width || "100%",
                md: imageProps?.desktop?.width || "400px",
              }}
              h={{
                base: imageProps?.mobile?.height || "auto",
                md: imageProps?.desktop?.height || "auto",
              }}
            >
              {image && (
                <Image loading="lazy"
                  src={image}
                  alt={title || "Information"}
                  w="100%"
                  h="100%"
                  objectFit={imageProps?.desktop?.objectFit || "contain"}
                  borderRadius={imageProps?.desktop?.borderRadius || "8px"}
                />
              )}

              {/* Logo Overlay */}
              {logo && (
                <Box
                  position="absolute"
                  top={imageProps?.logo?.top || "20px"}
                  right={imageProps?.logo?.right || "20px"}
                  bg={imageProps?.logo?.bgColor || "rgba(255, 255, 255, 0.95)"}
                  p={imageProps?.logo?.padding || "12px"}
                  borderRadius={imageProps?.logo?.borderRadius || "8px"}
                  boxShadow={
                    imageProps?.logo?.boxShadow || "0 2px 8px rgba(0,0,0,0.1)"
                  }
                >
                  <Image loading="lazy"
                    src={logo}
                    alt="Logo"
                    w={{
                      base: imageProps?.logo?.mobile?.width || "80px",
                      md: imageProps?.logo?.desktop?.width || "100px",
                    }}
                    h="auto"
                  />
                </Box>
              )}
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Information;
