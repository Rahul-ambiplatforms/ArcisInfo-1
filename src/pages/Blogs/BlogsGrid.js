import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  useColorModeValue,
  useToast,
  Spinner,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Select,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { getBlogs } from "./blog";

// Helper component for the "No Results" UI
const EmptyState = ({ searchTerm }) => {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      mt={8}
      bg="gray.50"
      borderRadius="md"
    >
      <Icon
        as={searchTerm ? SearchIcon : InfoIcon}
        boxSize={"50px"}
        color={"blue.500"}
      />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {searchTerm ? "No Results Found" : "No Blogs Yet"}
      </Heading>
      <Text color={"gray.500"}>
        {searchTerm
          ? `We couldn't find any blogs matching your search for "${searchTerm}". Try using different keywords.`
          : "There are currently no blog posts. Please check back later!"}
      </Text>
    </Box>
  );
};

export default function BlogsContent() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const toast = useToast();

  const IMAGE_BASE_URL =
    "https://res.cloudinary.com/dzs02ecai/image/upload/v1761637680/upload_arcis";

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  // -----------Changes------------ \\

  // Centralized function to fetch blogs from the API
  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBlogs(
        currentPage,
        blogsPerPage,
        searchTerm,
        sortOrder,
        "published"
      );

      // console.log("Fetched blogs:", response.data);
      if (response.status === "success") {
        // Safety: ensure only published blogs are shown even if API changes
        const publishedOnly = Array.isArray(response.data)
          ? response.data.filter((b) => b.status === "published")
          : [];
        // Filter out VMukti-specific blogs from ArcisAI site
        const siteFiltered = publishedOnly.filter(
          (b) => !b.content?.title?.toLowerCase().includes("vmukti")
        );
        setBlogs(siteFiltered);
        // console.log("All the blogs",blogs)
        setTotalPages(response.pagination.total);
      }
    } catch (error) {
      // toast({
      //   title: "Error fetching blogs",
      //   description: error.message || "Unknown error",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, blogsPerPage, searchTerm, sortOrder, toast]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Handler for changing search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handler for clearing search
  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  // Handler for changing sort order
  const handleSortChange = (newOrder) => {
    if (sortOrder !== newOrder) {
      setSortOrder(newOrder);
      setCurrentPage(1); // Reset to first page on sort change
    }
  };

  return (
    <Box m="1%" mt="7%" mb="14%">
      {/* Header */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mt={{ base: "5%", md: "0" }}
        mb={6}
        align={{ base: "center" }}
      >
        <Heading
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"
          color="#fff"
          mb={{ base: "4", md: "0" }}
          as="h1"
        >
          Recent blog{" "}
          <Box as="span" color="#9678E1">
            posts
          </Box>
        </Heading>

        <Flex
          gap={3}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          w={{ base: "100%", md: "auto" }}
        >
          {/* Search Functionality */}
          <Box
            flex="1"
            minW={{ md: "300px" }}
            bg="white"
            borderRadius="8px"
            justifyContent="center"
            alignItems="center"
          >
            <InputGroup>
              <Input
                placeholder="Search by title..."
                value={searchTerm}
                onChange={handleSearchChange}
                borderRadius="8px"
                _focus={{ borderColor: "#9678E1", boxShadow: "none" }}
              />
              {searchTerm && (
                <InputRightElement>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    icon={<CloseIcon boxSize={3} />}
                    onClick={clearSearch}
                    aria-label="Clear search"
                  />
                </InputRightElement>
              )}
            </InputGroup>
          </Box>

          {/* Sorting Functionality */}
          <Flex
            justifyContent="center"
            alignItems="center"
            gap="1px"
            zIndex={2}
          >
            <Tooltip label="Sort: Oldest to Newest" hasArrow>
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                // bgColor={sortOrder === "oldest" ? "#e0e0e0" : "white"}
                bg="white"
                _hover="white"
                transform="rotate(90deg)"
                onClick={() => handleSortChange("oldest")}
                isDisabled={isLoading || blogs.length === 0}
              >
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                  <path
                    d="M0.076934 7.76919L7.46155 15.1538L7.46155 0.38458L0.076934 7.76919Z"
                    fill="#9678E1"
                  />
                </svg>
              </Button>
            </Tooltip>
            <Tooltip label="Sort: Newest to Oldest" hasArrow>
              <Button
                width="31px"
                height="31px"
                minWidth="31px"
                minHeight="31px"
                padding="0"
                borderRadius="5px"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                // bgColor={sortOrder === "latest" ? "#e0e0e0" : "white"}
                bg="white"
                _hover="white"
                transform="rotate(90deg)"
                onClick={() => handleSortChange("latest")}
                isDisabled={isLoading || blogs.length === 0}
              >
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                  <path
                    d="M7.92307 7.99997L0.538452 0.615356L0.53845 15.3846L7.92307 7.99997Z"
                    fill="#9678E1"
                  />
                </svg>
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>

      {/* Loader */}
      {isLoading ? (
        <Flex justify="center" align="center" minH="200px">
          <Spinner size="xl" />
        </Flex>
      ) : blogs.length > 0 ? (
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          mb="5%"
        >
          {blogs.map((post, index) => {
            return (
              <Link
                to={`/blog/${post.metadata.urlWords}`}
                style={{ textDecoration: "none" }}
              >
                <GridItem
                  key={post._id || index}
                  bg="white"
                  borderRadius="24px"
                  overflow="hidden"
                  borderColor={borderColor}
                  borderWidth="1px"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                >
                  <Image loading="lazy"
                    src={`${IMAGE_BASE_URL}/${post.content.mainImage}`}
                    alt={post.content?.imageText || "Blog image"}
                    w="full"
                    // h="400px"
                    aspectRatio="16/9"
                    borderRadius="24px"
                    objectFit="cover"
                  />
                  <Box mx="3%" mt="5%">
                    <Heading
                      fontSize="16px"
                      fontWeight="700"
                      w="60%"
                      mb={2}
                      noOfLines={2}
                    >
                      {post.content?.title || "Untitled Blog"}
                    </Heading>
                    <Box
                      width="18px"
                      height="2px"
                      bg="#9678E1"
                      borderRadius="2px"
                      marginBottom="8px"
                    />
                    <Text
                      fontSize="14px"
                      color="#696969"
                      fontWeight="500"
                      w="80%"
                      // mb={3}
                      noOfLines={3}
                    >
                      {post.content?.brief?.[0]?.children?.[0]?.text ||
                        "No description available."}
                    </Text>
                  </Box>
                  <Box flex="1" />
                  <Flex
                    justifyContent="space-between"
                    p={{ base: "2", md: "5" }}
                  >
                    <Box
                      display="flex"
                      whiteSpace="nowrap"
                      gap="4"
                      alignItems="center"
                    >
                      <Flex gap="2%">
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
                            const created = new Date(post.createdAt);
                            const updated = new Date(post.updatedAt);

                            // Always display the updatedAt field
                            // If createdAt and updatedAt are the same, it means the blog was never updated
                            // If they are different, it means the blog was updated at some point
                            const formattedDate = updated.toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            );

                            return (
                              <>
                                <span>{formattedDate}</span>
                              </>
                            );
                          })()}
                        </Text>
                      </Flex>
                      <Flex align="center" whiteSpace="nowrap" gap="2%">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M19.1739 19.9496C19.1739 20.2281 19.0617 20.4951 18.862 20.6921C18.6622 20.889 18.3912 20.9996 18.1087 20.9996C17.8262 20.9996 17.5552 20.889 17.3554 20.6921C17.1557 20.4951 17.0435 20.2281 17.0435 19.9496V17.8496C17.0435 17.0142 16.7068 16.2129 16.1075 15.6222C15.5082 15.0315 14.6954 14.6996 13.8478 14.6996H5.32609C4.47855 14.6996 3.6657 15.0315 3.0664 15.6222C2.4671 16.2129 2.13043 17.0142 2.13043 17.8496V19.9496C2.13043 20.2281 2.01826 20.4951 1.81849 20.6921C1.61872 20.889 1.34773 20.9996 1.06522 20.9996C0.782704 20.9996 0.511712 20.889 0.311945 20.6921C0.112178 20.4951 0 20.2281 0 19.9496V17.8496C0 16.4572 0.561152 15.1219 1.55999 14.1373C2.55882 13.1527 3.91352 12.5996 5.32609 12.5996H13.8478C15.2604 12.5996 16.6151 13.1527 17.6139 14.1373C18.6128 15.1219 19.1739 16.4572 19.1739 17.8496V19.9496Z"
                            fill="#9678E1"
                          />
                          <path
                            d="M9.58585 10.5C8.53245 10.5 7.50273 10.1921 6.62686 9.61522C5.75099 9.03834 5.06832 8.21837 4.66521 7.25906C4.26209 6.29975 4.15659 5.24416 4.3621 4.22576C4.56761 3.20736 5.07489 2.27193 5.81975 1.5377C6.56462 0.803478 7.51361 0.303447 8.54677 0.100875C9.57993 -0.101697 10.6509 0.0022881 11.6241 0.399648C12.5973 0.797008 13.4291 1.46992 14.0143 2.33328C14.5996 3.19664 14.9119 4.21165 14.9119 5.25C14.9119 6.64239 14.3508 7.97773 13.352 8.9623C12.3531 9.94687 10.9984 10.5 9.58585 10.5ZM9.58585 8.4C10.2179 8.4 10.8358 8.21523 11.3613 7.86911C11.8868 7.52298 12.2963 7.03106 12.5382 6.45548C12.7801 5.87989 12.8434 5.24651 12.7201 4.63547C12.5968 4.02443 12.2925 3.46313 11.8455 3.0226C11.3986 2.58206 10.8293 2.28204 10.2094 2.1605C9.58946 2.03896 8.94684 2.10134 8.36291 2.33975C7.77898 2.57817 7.27994 2.98197 6.92879 3.49998C6.57765 4.018 6.3902 4.62699 6.3902 5.25C6.3902 6.08543 6.72687 6.88667 7.32617 7.47741C7.92547 8.06815 8.73832 8.4 9.58585 8.4Z"
                            fill="#9678E1"
                          />
                        </svg>
                        {/* Prefer new blogAuthor, fallback to legacy author */}
                        <Text fontSize="16px" fontWeight="500" color="black">
                          {post.content?.blogAuthor ||
                            post.content?.author ||
                            post.author ||
                            "Unknown Author"}
                        </Text>
                      </Flex>
                    </Box>

                    <Link to={`/blog/${post.metadata.urlWords}`}>
                      <Flex align="center" gap="2">
                        <Text fontSize="14px" fontWeight={500} color="#000000">
                          Learn More
                        </Text>
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.9612 12.9601C21.547 12.3743 21.547 11.4245 20.9612 10.8388L11.4153 1.29281C10.8295 0.707026 9.87974 0.707026 9.29395 1.29281C8.70816 1.8786 8.70816 2.82835 9.29395 3.41413L17.7792 11.8994L9.29395 20.3847C8.70816 20.9705 8.70816 21.9202 9.29395 22.506C9.87974 23.0918 10.8295 23.0918 11.4153 22.506L20.9612 12.9601ZM0.101562 13.3994L19.9006 13.3994V10.3994L0.101562 10.3994V13.3994Z"
                            fill="black"
                          />
                        </svg>
                      </Flex>
                    </Link>
                  </Flex>
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      ) : (
        <EmptyState searchTerm={searchTerm} />
      )}

      {/* Pagination Controls */}
      {!isLoading && blogs.length > 0 && (
        <Flex justify="center" align="center" mt={0} gap={2}>
          {/* Previous Arrow */}
          <Button
            size="sm"
            variant="outline"
            borderColor="#9678E1"
            bg="white"
            color="#9678E1"
            _hover={{ bg: "#ded5f5ff" }}
            isDisabled={totalPages === 1}
            onClick={() => {
              setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
            }}
            minW={8}
            px={0}
          >
            <Box as="span" fontSize="20px">
              {" "}
              {"<"}{" "}
            </Box>
          </Button>

          {/* Page Numbers with Ellipsis (Your exact code, unchanged) */}
          {(() => {
            const pages = [];
            if (totalPages <= 5) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } else {
              if (currentPage <= 3) {
                pages.push(1, 2, 3, "...", totalPages);
              } else if (currentPage >= totalPages - 2) {
                pages.push(
                  1,
                  "...",
                  totalPages - 2,
                  totalPages - 1,
                  totalPages
                );
              } else {
                pages.push(
                  1,
                  "...",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "...",
                  totalPages
                );
              }
            }
            return pages.map((page, idx) => {
              if (page === "...") {
                return (
                  <Button
                    key={`ellipsis-${idx}`}
                    size="sm"
                    variant="outline"
                    borderColor="#9678E1"
                    bg="white"
                    color="#9678E1"
                    isDisabled
                    minW={8}
                    px={0}
                  >
                    ...
                  </Button>
                );
              }
              const isActive = page === currentPage;
              return (
                <Button
                  key={page}
                  size="sm"
                  variant="outline"
                  borderColor="#9678E1"
                  bg={isActive ? "#9678E1" : "white"}
                  color={isActive ? "white" : "#9678E1"}
                  fontWeight={isActive ? "bold" : "normal"}
                  minW={8}
                  px={0}
                  _hover={isActive ? {} : { bg: "#ded5f5ff" }}
                  onClick={() => setCurrentPage(page)}
                  isDisabled={totalPages === 1}
                >
                  {page}
                </Button>
              );
            });
          })()}

          {/* Next Arrow */}
          <Button
            size="sm"
            variant="outline"
            borderColor="#9678E1"
            bg="white"
            color="#9678E1"
            _hover={{ bg: "#ded5f5ff" }}
            isDisabled={totalPages === 1}
            onClick={() => {
              setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
            }}
            minW={8}
            px={0}
          >
            <Box as="span" fontSize="20px">
              {" "}
              {">"}{" "}
            </Box>
          </Button>
        </Flex>
      )}
    </Box>
  );
}
