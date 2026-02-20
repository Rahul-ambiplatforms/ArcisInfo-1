import React from "react";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const ImageGallery = ({ data }) => {
  const { title, images, titleProps } = data;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Box bg="#171717" py={{ base: "40px", md: "80px" }} px={{ base: 4, md: 8 }}>
      <Box maxW="1400px" mx="auto">
        {/* Title */}
        {title && (
          <Heading
            as="h2"
            fontSize={{
              base: titleProps?.mobile?.fontSize || "32px",
              md: titleProps?.desktop?.fontSize || "48px",
            }}
            fontWeight={{
              base: titleProps?.mobile?.fontWeight || "700",
              md: titleProps?.desktop?.fontWeight || "700",
            }}
            lineHeight={{
              base: titleProps?.mobile?.lineHeight || "40px",
              md: titleProps?.desktop?.lineHeight || "56px",
            }}
            color="white"
            textAlign={{
              base: titleProps?.mobile?.textAlign || "center",
              md: titleProps?.desktop?.textAlign || "center",
            }}
            mb={{ base: 8, md: 12 }}
          >
            {title}
          </Heading>
        )}

        {/* Image Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
          {images.map((image, index) => (
            <Box
              key={index}
              overflow="hidden"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image loading="lazy"
                src={image.src}
                alt={image.alt}
                w="100%"
                h={{ base: "250px", md: "300px" }}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ImageGallery;
