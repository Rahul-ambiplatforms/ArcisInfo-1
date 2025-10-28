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
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs, getBlogById, getBlogByUrlWords } from "./blog";
import { Helmet } from "react-helmet-async";
// import ContactUs from "../ContactUs/Contactus";
// import ImagePop from "../../components/Animation/Image/ImagePop";

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
            <Box key={i}>
              <Text textAlign={node.align || "left"}>{children}</Text>
            </Box>
          );
        case "bulleted-list":
          return (
            <UnorderedList key={i} spacing={2} my="2">
              {children}
            </UnorderedList>
          );
        case "numbered-list":
          return (
            <OrderedList key={i} spacing={2} mb="2">
              {children}
            </OrderedList>
          );
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
  const mainHeadings = components.filter((comp) => comp.type === "h2");

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = targetElement.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollTo = elementTop - windowHeight / 4 + elementHeight / 4;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const enableScroll = mainHeadings.length > 3;

  return (
    <Box mb={{ base: "4", md: "0" }}>
      <Text
        textAlign="left"
        fontSize={{ base: "24px", md: "32px" }}
        fontWeight="600"
        color="#8266C9"
        mb={4}
        pl={{ base: "0", md: "2%" }}
      >
        Table of Contents
      </Text>

      <Box
        pl={{ base: "0", md: "2%" }}
        maxHeight={enableScroll ? { base: "none", md: "130px" } : "none"}
        overflowY={enableScroll ? { base: "hidden", md: "auto" } : "hidden"}
        pr={enableScroll ? { base: "0", md: "2" } : "0"}
        sx={
          enableScroll
            ? {
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#8266C9",
                  borderRadius: "24px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#4d27abff",
                },
              }
            : {}
        }
      >
        {mainHeadings.map((heading, index) => (
          <Flex
            key={heading.id || index}
            as="a"
            href={`#${heading.id}`}
            onClick={(e) => handleLinkClick(e, heading.id)}
            gap="2"
            mb="3"
            alignItems="flex-start"
            _hover={{
              textDecoration: "none",
              color: "#8266C9",
            }}
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
              color: "initial",
            }}
          >
            <Box display="flex" pt="4px">
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path
                  d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                  fill="#8266C9"
                />
              </svg>
            </Box>

            {/* --- START: Modified Text component --- */}
            <Text
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: "2", // The number of lines to show
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {renderSlateContent(heading.content.text)}
            </Text>
            {/* --- END: Modified Text component --- */}
          </Flex>
        ))}
      </Box>
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
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const sectionRef = useRef(null); // Reference for the section containing the image
  const ellipseSize = useBreakpointValue({
    base: "200px",
    md: "300px",
    lg: "408px",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
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
        // "http://localhost:5000/api/send-email-arcis",
        "https://vmukti.com/backend/api/send-email-arcis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            formType: "Blog",
          }),
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
          name: "",
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
    // Extract base URL up to and including the first slash after the domain
    const match = url.match(/^(https?:\/\/[^\/]+\/)/);
    setBaseUrl(match ? match[1] : url);
  }, []);
  // const IMAGE_BASE_URL =
  //   process.env.REACT_APP_IMAGE_BASE_URL || "http://localhost:5000/uploads";
  const IMAGE_BASE_URL =
    "https://res.cloudinary.com/dzs02ecai/image/upload/v1761637680/upload_arcis";
  // const IMAGE_BASE_URL = "https://vmukti.com/backend/uploads";

  useEffect(() => {
    // We define an async function inside so we can use await
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getBlogByUrlWords(urlWords);

        if (response.status === "success") {
          setBlog(response.data);
        } else {
          setError(response.message || "Blog not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the blog.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Only run the fetch function if urlWords exists
    if (urlWords) {
      fetchBlog();
    } else {
      setError("No urlWords parameter found.");
      setLoading(false);
    }
  }, [urlWords]);

  const [mainImageOg, setMainImageOg] = useState("");
  useEffect(() => {
    if (blog && blog.content && IMAGE_BASE_URL) {
      // console.log("blog", blog);
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

  const colors = ["#8266C9", "#000000", "#DB7B3A"];

  const applyColorLogic = (title) => {
    const words = title.split(" ");
    const numWords = words.length;

    let colorScheme = [];

    if (numWords >= 5) {
      // First 2 words - color 1
      colorScheme.push(
        <span style={{ color: colors[0] }}>
          {words[0]} {words[1]} {}
        </span>
      );

      // Middle words - color 2
      for (let i = 2; i < numWords - 2; i++) {
        colorScheme.push(
          <span style={{ color: colors[1] }}>
            {words[i]}
            {"\n"}
          </span>
        );
      }

      // Last 2 words - color 3
      colorScheme.push(
        <span style={{ color: colors[2] }}>
          {words[numWords - 2]} {words[numWords - 1]}
        </span>
      );
    } else if (numWords === 3 || numWords === 4) {
      // First word - color 1
      colorScheme.push(<span style={{ color: colors[0] }}>{words[0]} </span>);

      // Middle words - color 2
      for (let i = 1; i < numWords - 1; i++) {
        colorScheme.push(<span style={{ color: colors[1] }}>{words[i]} </span>);
      }

      // Last word - color 3
      colorScheme.push(
        <span style={{ color: colors[2] }}>{words[numWords - 1]}</span>
      );
    } else if (numWords === 1 || numWords === 2) {
      // Single or two words - only color 2
      for (let i = 0; i < numWords; i++) {
        colorScheme.push(<span style={{ color: colors[1] }}>{words[i]} </span>);
      }
    }

    return colorScheme;
  };

  return (
    <Box mt="5%">
      {/* component.content.schemaData */}
      {blog.content.schemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: item.content.schemaData,
          }}
        />
      ))}
      <Helmet>
        <title>
          {blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default Title my name is again default title"}
        </title>
        <meta
          name="description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default Description"
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default OG Title"
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
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content="ArcisAI" />
        <meta property="og:image" content={mainImageOg} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta
          name="twitter:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default Twitter Title"
          }
        />
        <meta
          name="twitter:description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default Twiter Description"
          }
        />
        <meta name="twitter:site" content="@vmukti" />
        <meta
          name="twitter:title"
          content={
            blog.content?.metaTitle ||
            blog.metadata?.metaTitle ||
            "Default Twitter Title"
          }
        />
        <meta
          name="twitter:description"
          content={
            blog.content?.metaDescription ||
            blog.metadata?.metaDescription ||
            "Default Twiter Description"
          }
        />
        <meta name="twitter:image" content={mainImageOg} />
        <link rel="canonical" href={`${currentUrl}`} />
      </Helmet>
      <Box px="2%">
        {/* Blog Header */}
        <Box mb={8}>
          {/* <Box
            position="absolute"
            top="0"
            left="25%"
            transform="translateX(-50%)"
            width={ellipseSize}
            height={ellipseSize}
            bg="#8266C9"
            borderRadius="50%"
            zIndex={0}
            opacity={0.12}
            filter="blur(100px)"
            display={{ base: "none", md: "block" }}
            ref={sectionRef}
          /> */}
          <Heading
            as="h1"
            fontSize={{ base: "36px", md: "48px" }}
            mt="8"
            mb={{ base: 2, md: 3 }}
          >
            {content.title}
            {/* {applyColorLogic(content.title || "Blog Title")} */}
          </Heading>

          {/* Author  and Date*/}
          <Flex gap="1%">
            <Box
              display="flex"
              flexWrap="wrap"
              gap="2"
              alignItems="center"
              borderRadius={{ base: "12px", md: "15px" }}
              bg="white"
              px={{ base: "2%", md: "1%" }}
              py="1%"
              mb={{ base: "4%", md: "2%" }}
              w="fit-content"
              justifyContent="center"
              // alignItems="center"
              // w="159px"
            >
              {/* Author Information */}
              {(blog.content?.blogAuthor ||
                blog.content?.author ||
                blog.blogAuthor) && (
                <Flex alignItems="center" gap={2}>
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M20.088 19.9496C20.088 20.2281 19.9758 20.4951 19.776 20.6921C19.5763 20.889 19.3053 20.9996 19.0228 20.9996C18.7402 20.9996 18.4693 20.889 18.2695 20.6921C18.0697 20.4951 17.9575 20.2281 17.9575 19.9496V17.8496C17.9575 17.0142 17.6209 16.2129 17.0216 15.6222C16.4223 15.0315 15.6094 14.6996 14.7619 14.6996H6.24015C5.39261 14.6996 4.57976 15.0315 3.98046 15.6222C3.38116 16.2129 3.0445 17.0142 3.0445 17.8496V19.9496C3.0445 20.2281 2.93232 20.4951 2.73255 20.6921C2.53279 20.889 2.26179 20.9996 1.97928 20.9996C1.69677 20.9996 1.42577 20.889 1.22601 20.6921C1.02624 20.4951 0.914062 20.2281 0.914062 19.9496V17.8496C0.914062 16.4572 1.47521 15.1219 2.47405 14.1373C3.47288 13.1527 4.82758 12.5996 6.24015 12.5996H14.7619C16.1745 12.5996 17.5292 13.1527 18.528 14.1373C19.5268 15.1219 20.088 16.4572 20.088 17.8496V19.9496Z"
                        fill="#8266C9"
                      />
                      <path
                        d="M10.4999 10.5C9.44652 10.5 8.41679 10.1921 7.54092 9.61522C6.66505 9.03834 5.98239 8.21837 5.57927 7.25906C5.17615 6.29975 5.07066 5.24416 5.27617 4.22576C5.48167 3.20736 5.98895 2.27193 6.73382 1.5377C7.47868 0.803478 8.42768 0.303447 9.46084 0.100875C10.494 -0.101697 11.5649 0.0022881 12.5382 0.399648C13.5114 0.797008 14.3432 1.46992 14.9284 2.33328C15.5136 3.19664 15.826 4.21165 15.826 5.25C15.826 6.64239 15.2649 7.97773 14.266 8.9623C13.2672 9.94687 11.9125 10.5 10.4999 10.5ZM10.4999 8.4C11.132 8.4 11.7498 8.21523 12.2754 7.86911C12.8009 7.52298 13.2104 7.03106 13.4523 6.45548C13.6942 5.87989 13.7575 5.24651 13.6342 4.63547C13.5109 4.02443 13.2065 3.46313 12.7596 3.0226C12.3127 2.58206 11.7433 2.28204 11.1234 2.1605C10.5035 2.03896 9.8609 2.10134 9.27697 2.33975C8.69304 2.57817 8.194 2.98197 7.84286 3.49998C7.49171 4.018 7.30427 4.62699 7.30427 5.25C7.30427 6.08543 7.64093 6.88667 8.24023 7.47741C8.83953 8.06815 9.65238 8.4 10.4999 8.4Z"
                        fill="#8266C9"
                      />
                    </svg>
                  </Box>
                  <Text fontSize="16px" fontWeight="500" color="black">
                    {blog.content?.blogAuthor ||
                      blog.content?.author ||
                      blog.blogAuthor}
                  </Text>
                </Flex>
              )}
            </Box>
            <Box
              display="flex"
              gap="2"
              alignItems="center"
              borderRadius={{ base: "12px", md: "15px" }}
              bg="white"
              px={{ base: "4%", md: "1%" }}
              py="1%"
              mb={{ base: "4%", md: "2%" }}
              // minW="159px"
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
                    fill="#8266C9"
                  />
                  <path
                    d="M11.0265 5.25098H9.44922V11.5512L14.9618 14.8585L15.7455 13.5458L11.0206 10.7635L11.0265 5.25098Z"
                    fill="#8266C9"
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

                  // Check if the blog was actually updated
                  // If createdAt and updatedAt are the same (within 1 minute), it means the blog was never updated
                  // If they are different, it means the blog was updated at some point
                  const wasUpdated = Math.abs(updated.getTime() - created.getTime()) > 60000;

                  // Always display the updatedAt field, but show appropriate label
                  const label = wasUpdated ? "Updated" : "Published";

                  return (
                    <>
                      <span>{label}</span>
                      <span style={{ color: "#8266C9", padding: "0 4px" }}>
                        ●
                      </span>
                      <span>
                        {updated.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </>
                  );
                })()}
              </Text>
            </Box>
          </Flex>

          {mainImageUrl && (
            <Box mb={6}>
              <Image
                src={mainImageUrl}
                alt={content.imageText || "Blog image"}
                borderRadius="24px"
                w="100%"
                h="auto"
                // maxH="70vh"
                objectFit="contain"
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
          py={{ base: 0, md: 8 }}
          gap={4}
          // bg="red"
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
                <Box fontSize="16px">{renderSlateContent(content.brief)}</Box>
              )}
              <Box
                // p="2%"
                mb={{ base: "0", md: "4%" }}
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
                            mb={{ base: 2, md: 2 }}
                          >
                            {renderSlateContent(group.heading.content.text)}
                          </Heading>
                        )}
                        {group.heading.type === "h3" && (
                          <Heading
                            as="h3"
                            id={group.heading.id}
                            fontSize="20px"
                            mb={{ base: 2, md: 1 }}
                            mt="-2"
                          >
                            {renderSlateContent(group.heading.content.text)}
                          </Heading>
                        )}
                        {group.heading.type === "h4" && (
                          <Heading
                            as="h4"
                            id={group.heading.id}
                            fontSize="16px"
                            mb={{ base: 1, md: 0 }}
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
                            <Box
                              as="p"
                              key={component.id}
                              fontSize="16px"
                              mb="-1"
                              mt="1"
                            >
                              {renderSlateContent(component.content.text)}
                            </Box>
                          );
                        case "imageVideo":
                          return (
                            <Box key={component.id} my={4}>
                              {component.content.file ||
                              component.content.url ||
                              component.content.imagePath ? (
                                <Image
                                  src={
                                    component.content.file ||
                                    component.content.url ||
                                    `${IMAGE_BASE_URL}/${component.content.imagePath}`
                                  }
                                  alt={component.content.description || "Image"}
                                  borderRadius="24px"
                                  w="full"
                                  h="auto"
                                  // maxH="250px"
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
                              bg="blue.50"
                              p={6}
                              borderRadius="lg"
                              textAlign="center"
                              my={6}
                              border="1px"
                              borderColor="#8266C9"
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
                                colorScheme="blue"
                                bg="#8266C9"
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
                <Box>
                  <Heading as="h2" fontSize="36px" mb={4}>
                    <Text fontSize="36px" color="black">
                      {content.faqs?.title || "Frequently Asked Questions"}
                    </Text>
                  </Heading>
                  <Accordion allowMultiple defaultIndex={[0]}>
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
            top={{ base: "20px", md: "50px" }} //85px
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
            <Box
              bg="white"
              borderRadius={{ base: "20px", md: "24px" }}
              maxH="50vh"
              display="flex"
              flexDirection="column"
            >
              {/* Heading (fixed / non-scrollable) */}
              <Heading
                fontSize={{ base: "20px", md: "36px" }}
                fontWeight="600"
                px={{ base: 4, md: 6 }}
                pt={{ base: 4, md: 6 }}
                pb={{ base: 4, md: 2 }}
                // borderBottom="1px solid #E7E7E7"
                textAlign={{ base: "center", md: "left" }}
                flexShrink={0}
              >
                Send Us a{" "}
                <Text as="span" color="#8266C9">
                  Message
                </Text>
              </Heading>

              {/* Scrollable Form */}
              <Box
                as="form"
                onSubmit={handleSubmit}
                w="100%"
                maxW="800px"
                mx="auto"
                p={{ base: 4, md: 6 }}
                overflowY="auto"
                flex="1"
              >
                <VStack spacing={4} align="stretch">
                  {/* Name Fields */}
                  <SimpleGrid columns={1} spacing={4} width="100%">
                    <Input
                      name="name"
                      value={formData.name}
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
                      placeholder="Phone Number *"
                      bg="#E7E7E7"
                      border="none"
                      borderRadius="10px"
                      h="44px"
                      required
                    />
                  </SimpleGrid>

                  {/* Message Field */}
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    bg="#E7E7E7"
                    border="none"
                    resize="none"
                    borderRadius="10px"
                    h="88px"
                  />

                  {/* Submit Button */}
                  <Flex justify="center" w="100%">
                    <Button
                      type="submit"
                      bg="#8266C9"
                      color="white"
                      width="146px"
                      height="50px"
                      borderRadius="20px"
                      fontSize="16px"
                      fontWeight="700"
                      isLoading={isLoading}
                      loadingText="Sending..."
                      _hover={{ bg: "#8259e9ff" }}
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
