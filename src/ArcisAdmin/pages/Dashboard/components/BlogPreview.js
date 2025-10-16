import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  OrderedList,
  ListItem,
  Button,
  Flex,
  SimpleGrid,
  Input,
  Textarea,
  AspectRatio,
} from "@chakra-ui/react";
import { isValidSlateValue } from "./SlateEditor";
import { useEffect, useState } from "react";

// Add URL path constant
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
// const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL || "http://localhost:5000";

const API_IMAGE_URL = "https://res.cloudinary.com/dzs02ecai/image/upload/v1758361869";

// const API_URL = 'https://vmukti.com/backend/api';
// const API_IMAGE_URL = 'https://vmukti.com/backend';

// Helper function to render Slate content
const renderSlateContent = (content) => {
  if (!isValidSlateValue(content)) {
    return null;
  }

  return content.map((node, i) => {
    if (!node) return null;

    if (typeof node === "object" && node.text !== undefined) {
      // Handle leaf nodes (text)
      let textElement = node.text;

      if (node.bold) textElement = <strong key={i}>{textElement}</strong>;
      if (node.italic) textElement = <em key={i}>{textElement}</em>;
      if (node.underline) textElement = <u key={i}>{textElement}</u>;

      return (
        <span key={i} style={{ color: node.color || "inherit" }}>
          {textElement}
        </span>
      );
    } else if (node.type) {
      // Handle element nodes
      const children = node.children ? renderSlateContent(node.children) : null;

      switch (node.type) {
        case "paragraph":
          return (
            <Box key={i} mb={2}>
              <Text textAlign={node.align || "left"}>{children}</Text>
            </Box>
          );
        case "bulleted-list":
          return <UnorderedList key={i}>{children}</UnorderedList>;
        case "numbered-list":
          return <OrderedList key={i}>{children}</OrderedList>;
        case "list-item":
          return <ListItem key={i}>{children}</ListItem>;
        case "link":
          return (
            <Box
              as="a"
              key={i}
              href={node.url}
              target="_blank"
              rel="noopener noreferrer"
              color="blue.600"
              textDecoration="underline"
              _hover={{ color: "blue.700" }}
              display="inline"
            >
              {children}
            </Box>
          );
        default:
          return <div key={i}>{children}</div>;
      }
    }

    return null;
  });
};

// Add TableOfContents component
const TableOfContents = ({ components }) => {
  const headings = components.filter(
    (comp) => comp.type === "h2" || comp.type === "h3" || comp.type === "h4"
  );

  const groupedHeadings = headings.reduce((acc, heading) => {
    if (heading.type === "h2") {
      acc.push({
        main: heading,
        subHeadings: [],
      });
    } else if (heading.type === "h3" && acc.length > 0) {
      acc[acc.length - 1].subHeadings.push(heading);
    }
    return acc;
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();

    const targetElement = document.getElementById(targetId);
    const dialogContainer = document.querySelector(".chakra-modal__content"); // Get the dialog container

    if (targetElement && dialogContainer) {
      const offset = 100; // Offset for fixed headers
      const containerRect = dialogContainer.getBoundingClientRect();
      const elementRect = targetElement.getBoundingClientRect();

      // Calculate the relative position within the dialog
      const relativeTop = elementRect.top - containerRect.top;

      // Scroll the dialog container
      dialogContainer.scrollTo({
        top: dialogContainer.scrollTop + relativeTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box mb={{ base: "0", md: "1%" }}>
      <Text
        textAlign="left"
        fontSize={{ base: "24px", md: "32px" }}
        fontWeight="bold"
        color="#9678E1"
        mb={2}
        pl={{ base: "0", md: "2%" }}
      >
        Table of Contents
      </Text>
      <UnorderedList styleType="none">
        {groupedHeadings.map((group, index) => (
          <ListItem key={group.main.id || index}>
            <Accordion allowToggle>
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <>
                    <Flex align="center">
                      <Flex
                        flex="1"
                        sx={{
                          "*": {
                            textAlign: "left !important",
                          },
                        }}
                        gap="2"
                        alignItems="center"
                      >
                        <Box display="flex">
                          <svg
                            width="8"
                            height="16"
                            viewBox="0 0 8 16"
                            fill="none"
                          >
                            <path
                              d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                              fill="#9678E1"
                            />
                          </svg>
                        </Box>
                        <a
                          href={`#${group.main.id}`}
                          style={{
                            fontWeight: 600,
                            fontSize: "16px",
                            textDecoration: "none",
                          }}
                          onClick={(e) => handleLinkClick(e, group.main.id)}
                        >
                          {renderSlateContent(group.main.content.text)}
                        </a>
                      </Flex>
                    </Flex>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const BlogPreview = ({ formData, components, faqTitle }) => {
  // Group FAQ components together
  const faqComponents = components.filter(
    (component) => component.type === "faq"
  );
  const [mainImageUrl, setMainImageUrl] = useState(null);

  // Helper function to get image source
  const getImageSource = (file) => {
    if (!file) return null;
    if (typeof file === "string") {
      // If it's just a filename, prepend the base URL
      return `${file}`;
    }
    if (file instanceof File) return URL.createObjectURL(file);
    if (file.path) {
      // If it's a path from the database, prepend the base URL
      return `${file.path}`;
    }
    return null;
  };

  useEffect(() => {
    // Generate the image URL on the client side
    if (formData.mainImage) {
      if (formData.mainImage instanceof File) {
        setMainImageUrl(URL.createObjectURL(formData.mainImage));
      } else if (typeof formData.mainImage === "string") {
        // If it's a filename from the database, prepend the base URL
        setMainImageUrl(`${formData.mainImage}`);
      } else if (formData.mainImage.path) {
        setMainImageUrl(`${formData.mainImage.path}`);
      }
    }
  }, [formData.mainImage]);

  // Helper function to get image URL
  const getImageUrl = (image) => {
    if (!image) return null;
    if (typeof image === "string") return `${image}`;
    if (image instanceof File) return URL.createObjectURL(image);
    if (image.path) return `${image.path}`;
    return null;
  };

  return (
    <Box px="2%">
      {/* Blog Header */}
      <Box mb={8}>
        <Heading as="h1" fontSize={{ base: "36px", md: "48px" }} mt="8" mb="8">
          {formData.blogTitle || "Blog Title"}
        </Heading>

        {/* Date */}
        <Box
          display="flex"
          gap="2"
          alignItems="center"
          borderRadius="15px"
          bg="white"
          px="2%"
          py="1%"
          mb="2%"
          w="fit-content"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 2.625H16.625V1.75C16.625 1.33438 16.2906 1 15.875 1C15.4594 1 15.125 1.33438 15.125 1.75V2.625H5.875V1.75C5.875 1.33438 5.54062 1 5.125 1C4.70938 1 4.375 1.33438 4.375 1.75V2.625H3.5C1.56875 2.625 0 4.19375 0 6.125V17.5C0 19.4312 1.56875 21 3.5 21H17.5C19.4312 21 21 19.4312 21 17.5V6.125C21 4.19375 19.4312 2.625 17.5 2.625ZM17.5 19.25H3.5C2.60312 19.25 1.75 18.3969 1.75 17.5V8.75H19.25V17.5C19.25 18.3969 18.3969 19.25 17.5 19.25Z"
              fill="#9678E1"
            />
          </svg>
          <Text fontSize="16px" fontWeight="500" color="black">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </Box>

        {/* Main Image */}
        {mainImageUrl && (
          <Box mb={6}>
            <AspectRatio ratio={16 / 9} w="100%">
              <Image
                src={`${mainImageUrl}`}
                alt={formData.imageText || "Blog image"}
                borderRadius="24px"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>
        )}

        {/* Brief */}
        {formData.brief && (
          <Box mt={4} fontSize="16px">
            {renderSlateContent(formData.brief)}
          </Box>
        )}
      </Box>

      {/* Blog Content */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="start"
        py={{ base: 4, md: 8 }}
        gap={4}
      >
        {/* Content Section */}
        <Box width={{ base: "100%", md: "70%" }}>
          <VStack
            spacing={8}
            bg="white"
            borderRadius="24px"
            px="5%"
            py="4%"
            align="stretch"
          >
            <Box
              mb="4%"
              bg="white"
              borderRadius={{ base: "20px", md: "24px" }}
              display={{ base: "block", md: "none" }}
            >
              <TableOfContents components={components} />
            </Box>
            {components
              .reduce((groups, component, index) => {
                if (component.type === "faq") return groups;
                if (
                  component.type === "h2" ||
                  component.type === "h3" ||
                  component.type === "h4"
                ) {
                  groups.push({
                    id: component.id,
                    heading: component,
                    content: [],
                  });
                } else if (component.type === "p" && groups.length > 0) {
                  groups[groups.length - 1].content.push(component);
                } else {
                  groups.push({
                    id: component.id,
                    content: [component],
                  });
                }
                return groups;
              }, [])
              .map((group) => (
                <VStack key={group.id} spacing={0} align="stretch">
                  {group.heading && (
                    <Box>
                      {group.heading.type === "h2" && (
                        <Heading as="h2" fontSize="36px" id={group.heading.id}>
                          {renderSlateContent(group.heading.content.text)}
                        </Heading>
                      )}
                      {group.heading.type === "h3" && (
                        <Heading as="h3" fontSize="20px" id={group.heading.id}>
                          {renderSlateContent(group.heading.content.text)}
                        </Heading>
                      )}
                      {group.heading.type === "h4" && (
                        <Heading as="h4" fontSize="16px" id={group.heading.id}>
                          {renderSlateContent(group.heading.content.text)}
                        </Heading>
                      )}
                    </Box>
                  )}
                  {group.content.map((component) => {
                    switch (component.type) {
                      case "p":
                        return (
                          <Box as="p" key={component.id} fontSize="16px">
                            {renderSlateContent(component.content.text)}
                          </Box>
                        );
                      case "imageVideo":
                        return (
                          <Box key={component.id} my={4}>
                            <AspectRatio ratio={16 / 9} w="100%" maxH="500px">
                              {component.content.file ||
                              component.content.url ||
                              component.content.imagePath ? (
                                <Image
                                  src={
                                    component.content.file ||
                                    component.content.url ||
                                    `${API_IMAGE_URL}/uploads/${component.content.imagePath}`
                                  }
                                  alt={component.content.description || "Image"}
                                  borderRadius="md"
                                  objectFit="cover"
                                />
                              ) : (
                                <Box
                                  bg="gray.200"
                                  borderRadius="md"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  w="100%"
                                  h="100%"
                                >
                                  <Text color="gray.500">
                                    Image Placeholder
                                  </Text>
                                </Box>
                              )}
                            </AspectRatio>
                          </Box>
                        );
                      case "cta":
                        return (
                          <Box
                            key={component.id}
                            bg="blue.50"
                            p={6}
                            borderRadius="lg"
                            textAlign="center"
                            my={6}
                            border="1px"
                            borderColor="blue.100"
                          >
                            <Text fontSize="xl" mb={4} fontWeight="medium">
                              {component.content.ctaText ||
                                "Call to Action Text"}
                            </Text>
                            <Button
                              as="a"
                              href={
                                component.content.buttonLink?.startsWith("http")
                                  ? component.content.buttonLink
                                  : `https://${component.content.buttonLink}`
                              }
                              colorScheme="blue"
                              size="lg"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {component.content.buttonText || "Click Here"}
                            </Button>
                          </Box>
                        );
                      case "schema":
                        return (
                          <Box
                            key={component.id}
                            p={4}
                            bg="gray.50"
                            borderRadius="md"
                          >
                            <Text fontFamily="monospace" fontSize="sm">
                              {component.content.schemaData || "Schema Content"}
                            </Text>
                          </Box>
                        );
                      default:
                        return null;
                    }
                  })}
                </VStack>
              ))}
            {/* FAQ Section with title */}
            {faqComponents.length > 0 && (
              <Box mt={8}>
                <Heading as="h2" fontSize="36px" mb={4}>
                  <Text fontSize="16px" mt={2} color="gray.500">
                    {faqTitle || "Frequently Asked Questions"}
                  </Text>
                </Heading>
                <Accordion allowMultiple>
                  {faqComponents.map((faq, idx) => (
                    <AccordionItem key={faq.id || idx}>
                      <h3>
                        <AccordionButton py={3}>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontWeight="600"
                            fontSize="16px"
                          >
                            {faq.question || "Question"}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4} fontSize="14px" fontWeight="400">
                        {renderSlateContent(faq.answer)}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            )}
          </VStack>
        </Box>

        {/* Sticky Part TOC */}
        <Box
          width={{ base: "100%", md: "30%" }}
          position={{ base: "relative", md: "sticky" }}
          top={{ base: "20px", md: "20px" }}
          borderRadius={{ base: "20px", md: "24px" }}
          boxShadow="sm"
          display={{ base: "none", md: "block" }}
        >
          <Box p="2%" bg="white" borderRadius={{ base: "20px", md: "24px" }}>
            <TableOfContents components={components} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogPreview;
