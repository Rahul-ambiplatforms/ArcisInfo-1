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
  Spinner,
  Flex,
  SimpleGrid,
  Input,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs, getBlogById } from "./blog";
import { Helmet } from "react-helmet-async";
import ContactUs from "../../../pages/ContactUs/ContactUs";
import ImagePop from "../../components/Animation/Image/ImagePop";

// Helper function to render Slate content
const renderSlateContent = (content) => {
  if (!content) return null;
  return content.map((node, i) => {
    if (!node) return null;
    if (typeof node === "object" && node.text !== undefined) {
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
          let relAttrs = "noopener noreferrer";
          if (node.noFollow) {
            relAttrs += " nofollow";
          }
          return (
            <Box
              as="a"
              key={i}
              href={node.url}
              target="_blank"
              rel={relAttrs}
              color="purple.600"
              textDecoration="underline"
              _hover={{ color: "purple.700" }}
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

// Add TableOfContents component before BlogsOverviewDash
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

  // --- START: Added smooth scroll handler ---
  const handleLinkClick = (e, targetId) => {
    // 1. Prevent the default browser jump
    e.preventDefault();
    // 2. Prevent the click from toggling the accordion
    e.stopPropagation();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 3. Use the scrollIntoView API for smooth scrolling
      targetElement.scrollIntoView({
        behavior: "smooth", // This enables the smooth scrolling
        block: "start", // Aligns the top of the element to the top of the viewport
      });
    }
  };
  // --- END: Added smooth scroll handler ---

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
                        // Vertically align all items in the flex container
                        alignItems="center"
                      >
                        {/* The 'mt' property is no longer needed due to alignItems on the parent Flex */}
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
                          // --- Updated onClick handler ---
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

const BlogsOverviewDash = () => {
  const { urlWords } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add at the top of your component
  const [currentUrl, setCurrentUrl] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://vmukti.com/backend/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // In useEffect (add after your existing useEffect or combine)
  useEffect(() => {
    const url = window.location.href;
    setCurrentUrl(url);
    const match = url.match(/^(https?:\/\/[^\/]+\/)/);
    setBaseUrl(match ? match[1] : url);
  }, []);
  // const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL || 'https://vmukti.com/backend';
  const IMAGE_BASE_URL = "https://vmukti.com/backend";
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Fetch all blogs (first page, large limit for safety)
        const blogsResponse = await getBlogs(1, 6);
        if (blogsResponse.status === "success") {
          const found = blogsResponse.data.find(
            (b) => b.metadata?.urlWords === urlWords
          );
          if (found) {
            const response = await getBlogById(found._id);
            if (response.status === "success") {
              setBlog(response.data);
            } else {
              setError("Blog not found");
            }
          } else {
            setError("Blog not found");
          }
        } else {
          setError("Error fetching blogs list");
        }
      } catch (err) {
        setError("Error fetching blog");
      } finally {
        setLoading(false);
      }
    };
    // fetchBlog();

    if (urlWords) {
      // Only fetch if urlWords is present
      fetchBlog();
    } else {
      setError("No urlWords parameter found.");
      setLoading(false);
    }
  }, [urlWords]);
  const [mainImageOg, setMainImageOg] = useState("");
  useEffect(() => {
    if (blog && blog.content && IMAGE_BASE_URL) {
      const img = blog.content.mainImage;
      if (img && typeof img === "string") {
        setMainImageOg(`${IMAGE_BASE_URL}/${img}`);
      } else {
        setMainImageOg("");
      }
    }
  }, [blog, IMAGE_BASE_URL]);

  if (loading) {
    return (
      <Box p={10} alignContent="center">
        <Spinner size="xl" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box p={10} color="red.500">
        {error}
      </Box>
    );
  }
  if (!blog) {
    return null;
  }

  const content = blog.content || {};
  const components = content.headingsAndImages || [];
  const faqComponents = content.faqs?.items || [];
  const mainImageUrl =
    content.mainImage && typeof content.mainImage === "string"
      ? `${IMAGE_BASE_URL}/${content.mainImage}`
      : `${IMAGE_BASE_URL}/${content.mainImage}`;

  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default Title my name is again defaulyt title"}
        </title>
        <meta
          property="og:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default OG Title"
          }
        />
        <meta
          name="description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default Description"
          }
        />
        <meta
          property="og:description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default OG Description"
          }
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:type" content={currentUrl} /> */}
        <meta property="og:site_name" content="Vmukti Solutions" />
        <meta property="og:image" content={mainImageOg} />
        <meta property="og:locale" content="en_US" />
        <meta
          name="twitter:card"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default OG Description"
          }
        />
        <meta name="twitter:site" content={`${baseUrl}`} />
        <link rel="canonical" href={`${currentUrl}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Box px="2%">
        {/* Blog Header */}
        <Box mb={8}>
          <Heading
            as="h1"
            fontSize={{ base: "36px", md: "48px" }}
            mt="8"
            mb="8"
          >
            {content.title || "Blog Title"}
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
              <g clip-path="url(#clip0_5166_926)">
                <path
                  d="M10.502 4.11673e-07C8.42529 4.20711e-07 6.39527 0.61579 4.66857 1.7695C2.94188 2.92321 1.59607 4.56303 0.801316 6.4816C0.00656746 8.40016 -0.201425 10.5113 0.203641 12.5481C0.608706 14.5849 1.60864 16.4558 3.07699 17.9243C4.54534 19.3928 6.41617 20.3929 8.45291 20.7981C10.4896 21.2034 12.6008 20.9956 14.5195 20.201C16.4381 19.4064 18.078 18.0608 19.2319 16.3342C20.3858 14.6076 21.0018 12.5776 21.002 10.501C21.0025 9.12191 20.7312 7.75625 20.2038 6.48205C19.6763 5.20784 18.9029 4.05006 17.9278 3.07486C16.9527 2.09967 15.795 1.32617 14.5208 0.798572C13.2467 0.270974 11.881 -0.000385799 10.502 4.11673e-07ZM10.502 18.9006C8.84048 18.9006 7.21631 18.4079 5.83484 17.4848C4.45337 16.5618 3.37665 15.2498 2.74083 13.7148C2.10501 12.1798 1.93865 10.4907 2.26278 8.86113C2.58692 7.23157 3.387 5.73473 4.56184 4.55989C5.73669 3.38504 7.23353 2.58497 8.86308 2.26083C10.4926 1.93669 12.1817 2.10305 13.7167 2.73887C15.2517 3.37469 16.5637 4.45141 17.4868 5.83288C18.4099 7.21435 18.9025 8.83852 18.9025 10.5C18.8961 12.726 18.0089 14.859 16.4349 16.433C14.8609 18.007 12.7279 18.8941 10.502 18.9006Z"
                  fill="#9678E1"
                />
                <path
                  d="M11.0265 5.25098H9.44922V11.5512L14.9618 14.8585L15.7455 13.5458L11.0206 10.7635L11.0265 5.25098Z"
                  fill="#9678E1"
                />
              </g>
              <defs>
                <clipPath id="clip0_5166_926">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <Text fontSize="16px" fontWeight="500" color="black">
              {(() => {
                const created = new Date(
                  blog.createdAt?.$date || blog.createdAt
                );
                const updated = new Date(
                  blog.updatedAt?.$date || blog.updatedAt
                );

                // Compare up to minutes
                const format = (d) =>
                  `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;

                const isSame = format(created) === format(updated);

                const displayDate = isSame ? created : updated;

                const label = isSame ? "Published" : "Updated";

                return `${label} \u00A0 ${displayDate.toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}`;
              })()}
            </Text>
          </Box>

          {mainImageUrl && (
            <Box mb={6}>
              <Image loading="lazy"
                src={mainImageUrl}
                alt={content.imageText || "Blog image"}
                borderRadius="lg"
                w="100%"
                maxH="500px"
                objectFit="cover"
              />
            </Box>
          )}
          {/* {content.brief && (
          <Box mt={4} fontSize="16px">
            {renderSlateContent(content.brief)}
          </Box>
        )} */}
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
              {content.brief && (
                <Box mt={4} fontSize="16px">
                  {renderSlateContent(content.brief)}
                </Box>
              )}
              <Box
                // p="2%"
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
                          <Heading
                            as="h2"
                            id={group.heading.id}
                            fontSize="36px"
                          >
                            {renderSlateContent(group.heading.content.text)}
                          </Heading>
                        )}
                        {group.heading.type === "h3" && (
                          <Heading
                            as="h3"
                            id={group.heading.id}
                            fontSize="20px"
                          >
                            {renderSlateContent(group.heading.content.text)}
                          </Heading>
                        )}
                        {group.heading.type === "h4" && (
                          <Heading
                            as="h4"
                            id={group.heading.id}
                            fontSize="16px"
                          >
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
                              {component.content.file ||
                              component.content.url ||
                              component.content.imagePath ? (
                                <Image loading="lazy"
                                  src={
                                    component.content.file ||
                                    component.content.url ||
                                    `${IMAGE_BASE_URL}/${component.content.imagePath}`
                                  }
                                  alt={component.content.description || "Image"}
                                  borderRadius="md"
                                  maxH="250px"
                                />
                              ) : (
                                <Box
                                  bg="gray.200"
                                  borderRadius="md"
                                  height="200px"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                >
                                  <Text color="gray.500">
                                    Image Placeholder
                                  </Text>
                                </Box>
                              )}
                            </Box>
                          );
                        case "cta":
                          return (
                            <Box
                              key={component.id}
                              bg="purple.50"
                              p={6}
                              borderRadius="lg"
                              textAlign="center"
                              my={6}
                              border="1px"
                              borderColor="purple.100"
                            >
                              <Text fontSize="xl" mb={4} fontWeight="medium">
                                {component.content.ctaText ||
                                  "Call to Action Text"}
                              </Text>
                              <Button
                                as="a"
                                href={
                                  component.content.buttonLink?.startsWith(
                                    "http"
                                  )
                                    ? component.content.buttonLink
                                    : `https://${component.content.buttonLink}`
                                }
                                colorScheme="purple"
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
                                {component.content.schemaData ||
                                  "Schema Content"}
                              </Text>
                            </Box>
                          );
                        default:
                          return null;
                      }
                    })}
                  </VStack>
                ))}

              {/* FAQ Section */}
              {faqComponents.length > 0 && (
                <Box mt={8}>
                  <Heading as="h2" fontSize="36px" mb={4}>
                    <Text fontSize="16px" mt={2} color="gray.500">
                      {content.faqs?.title || "Frequently Asked Questions"}
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

          {/* Sticky Part TOC and Contact Form */}
          <Flex
            direction={{ base: "column", md: "column" }}
            width={{ base: "100%", md: "30%" }}
            position={{ base: "relative", md: "sticky" }}
            top={{ base: "20px", md: "20px" }} // Adjust the top value as needed
            // bg="red"
            // top="20px"
            borderRadius={{ base: "20px", md: "24px" }}
            boxShadow="sm"
          >
            <Box
              p="2%"
              mb="4%"
              bg="white"
              borderRadius={{ base: "20px", md: "24px" }}
              display={{ base: "none", md: "block" }}
            >
              <TableOfContents components={components} />
            </Box>
            <Box bg="white" borderRadius={{ base: "20px", md: "24px" }}>
              <Box
                as="form"
                onSubmit={handleSubmit}
                w="100%"
                maxW="800px"
                mx="auto"
                p={{ base: 4, md: 6 }}
              >
                <Heading
                  fontSize={{ base: "20px", md: "36px" }}
                  fontWeight="600"
                  mb="5%"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Send Us a{" "}
                  <Text as="span" color="#DB7B3A">
                    Message
                  </Text>
                </Heading>

                <VStack spacing={4} align="stretch">
                  {/* Name Fields */}
                  <SimpleGrid columns={1} spacing={4} width="100%">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Full name *"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      h="44px"
                      required
                    />
                  </SimpleGrid>

                  {/* Contact Fields */}
                  <SimpleGrid columns={1} spacing={4} width="100%">
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      h="44px"
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      h="44px"
                    />
                  </SimpleGrid>

                  {/* Message Field */}
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message *"
                    bg="#E7E7E7"
                    border="none"
                    resize="none"
                    borderRadius="10px"
                    h="88px"
                    required
                  />

                  {/* Submit Button */}
                  <Flex justify="center" w="100%">
                    <Button
                      type="submit"
                      bg="#9678E1"
                      color="white"
                      width="146px"
                      height="50px"
                      borderRadius="20px"
                      fontSize="16px"
                      fontWeight="700"
                      isLoading={isLoading}
                      loadingText="Sending..."
                      _hover={{ bg: "#2c5a7d" }}
                    >
                      Submit
                    </Button>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </Flex>

        {/* Metadata Preview (for reference) */}

        {/* <Box mt={12} p={4} bg="gray.50" borderRadius="md">
        <Heading as="h3" size="sm" mb={2}>
          Metadata Preview
        </Heading>
        <Text fontSize="sm">
          <strong>URL:</strong> {content.urlWords || "example-blog-post"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Title:</strong> {content.metaTitle || "Blog Post Title"}
        </Text>
        <Text fontSize="sm">
          <strong>Meta Description:</strong> {content.metaDescription || "Blog post description for SEO purposes."}
        </Text>
      </Box> */}
      </Box>
    </Box>
  );
};

export default BlogsOverviewDash;

// URL
// pagination
