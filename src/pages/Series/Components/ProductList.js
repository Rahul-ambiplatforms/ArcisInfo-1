import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Flex,
  Checkbox,
  Stack,
  Divider,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import LeftButtonIcon from "../../../Components/Icons/LeftButton.svg";
import RightButtonIcon from "../../../Components/Icons/RightButton.svg";

const FilterSection = ({ title, options, selected, onChange }) => (
  <Box mb={6}>
    <Text fontSize="16px" fontWeight="600" mb={2} color="white">
      {title}
    </Text>
    <Divider borderColor="white" mb={4} />
    <Stack spacing={3}>
      {options.map((option) => (
        <Checkbox
          key={option}
          isChecked={selected.includes(option)}
          onChange={() => onChange(option)}
          colorScheme="purple"
          sx={{
            borderColor: "transparent",
            _hover: {
              borderColor: "transparent",
            },
            ".chakra-checkbox__control": {
              borderColor: "white",
              borderRadius: "2px",
              bg: "white",
              _checked: {
                bg: "white",
                borderColor: "white",
                color: "black",
              },
            },
            span: {
              fontSize: "14px",
              color: "white",
              fontWeight: "400",
            },
          }}
        >
          {option}
        </Checkbox>
      ))}
    </Stack>
  </Box>
);

const ProductList = ({ data, hideTypeFilter }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Flatten all products from data, assuming data.products is the array of categories
  const allProducts = useMemo(() => {
    if (!data || !data.products) return [];
    return data.products.flatMap((cat) => cat.productarray || []);
  }, [data]);

  const [filters, setFilters] = useState({
    type: [],
    lens: [],
    connectivity: [],
  });

  // Tabs for top buttons - mapping to "type" filter
  const tabs = ["Dome", "Bullet", "PTZ", "Baby PTZ"]; // "Baby", "PTZ" hidden temporarily

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const current = prev[category];
      let updated;

      if (category === "type") {
        // Single select behavior for "type"
        updated = current.includes(value) ? [] : [value];
      } else {
        // Multi select behavior for others
        updated = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];
      }

      return { ...prev, [category]: updated };
    });
  };

  const handleClearAll = () => {
    setFilters({ type: [], lens: [], connectivity: [] });
  };

  // Toggle type from top tabs
  const handleTabClick = (tab) => {
    handleFilterChange("type", tab);
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const typeMatch =
        filters.type.length === 0 ||
        filters.type.some((t) => product.attributes?.type?.includes(t));
      const lensMatch =
        filters.lens.length === 0 ||
        filters.lens.some((l) => product.attributes?.lens?.includes(l));
      const connMatch =
        filters.connectivity.length === 0 ||
        filters.connectivity.some((c) =>
          product.attributes?.connectivity?.includes(c),
        );

      return typeMatch && lensMatch && connMatch;
    });
  }, [allProducts, filters]);

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const scrollContainerRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const currentProducts = useMemo(() => {
    if (isMobile) return filteredProducts;
    return filteredProducts.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    );
  }, [filteredProducts, currentPage, isMobile, itemsPerPage]);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const itemWidth =
        scrollContainerRef.current.querySelector("div")?.offsetWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: -(itemWidth + 16),
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const itemWidth =
        scrollContainerRef.current.querySelector("div")?.offsetWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: itemWidth + 16,
        behavior: "smooth",
      });
    }
  };

  const prevPage = () => {
    if (isMobile) {
      scrollPrev();
    } else {
      setDirection(-1);
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    }
  };

  const nextPage = () => {
    if (isMobile) {
      scrollNext();
    } else {
      setDirection(1);
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    }
  };

  const setPage = (index) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "10px",
    height: "10px",
    transition: "all 0.3s ease",
    opacity: 0,
  };

  if (!data) return null;

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      w="100%"
      bg="black"
      color="white"
      pt={{ base: "120px", md: "120px" }}
      pb={{ base: "10%", md: "5%" }}
      position="relative"
      minH={{ base: "auto", md: "730px" }}
      {...(data.bg_image && {
        backgroundImage: `url(${data.bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      })}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="black"
        opacity={0.6}
        zIndex={0}
      />

      <Box
        position="relative"
        zIndex={1}
        maxW="1800px"
        w="full"
        mx="auto"
        px={{ base: 5, lg: 8 }}
      >
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "32px", md: "60px" }}
            fontWeight="400"
          >
            {data.heading || "Explore Our Series"}
          </Heading>

          {/* Top Tabs */}
          {!hideTypeFilter && (
            <HStack spacing={4} mt={6} wrap="wrap" justify="center">
              {tabs.map((tab) => (
                <CustomButton
                  key={tab}
                  width="160px"
                  height="40px"
                  bgColor="#3D3D3D"
                  hoverBgColor="rgba(61, 61, 61, 0.8)"
                  borderColor={filters.type.includes(tab) ? "#A4FF79" : "white"}
                  textColor={filters.type.includes(tab) ? "white" : "white"}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </CustomButton>
              ))}
            </HStack>
          )}
        </VStack>

        <Box
          display={{ base: "flex", md: "grid" }}
          gridTemplateColumns={{ md: "446px 1fr" }}
          flexDirection={{ base: "column" }}
          alignItems="start"
          zIndex={1}
        >
          {/* Mobile Filter Icon */}
          <Flex
            display={{ base: "flex", md: "none" }}
            justify="flex-end"
            w="full"
            px={4}
            mb={4}
          >
            <Button
              onClick={onOpen}
              variant="unstyled"
              color="white"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ opacity: 0.8 }}
            >
              <Text fontSize="14px" fontWeight="500">
                Filter
              </Text>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Flex>

          {/* Sidebar Filters - Desktop */}
          <Box
            display={{ base: "none", md: "block" }}
            bg="rgba(255,255,255,0.2)"
            backdropFilter="blur(5px)"
            p={6}
            minH="606px"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Text fontSize="20px" fontWeight="400">
                Filter by
              </Text>
              <Button
                variant="link"
                color="gray.400"
                fontSize="14px"
                fontWeight="normal"
                onClick={handleClearAll}
                _hover={{ color: "white" }}
              >
                Clear all
              </Button>
            </Flex>

            {!hideTypeFilter && (
              <FilterSection
                title="Type of camera"
                options={["Dome", "Bullet", "PTZ", "Baby PTZ"]}
                selected={filters.type}
                onChange={(val) => handleFilterChange("type", val)}
              />
            )}

            <FilterSection
              title="Camera lens"
              options={["3 MP", "5 MP"]}
              selected={filters.lens}
              onChange={(val) => handleFilterChange("lens", val)}
            />

            <FilterSection
              title="Type of connectivity"
              options={["4G", "WIFI", "PoE"]}
              selected={filters.connectivity}
              onChange={(val) => handleFilterChange("connectivity", val)}
            />
          </Box>

          {/* Drawer for Mobile Filters */}
          <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="#171717" color="white" borderTopRadius="20px">
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
                Filter Products
              </DrawerHeader>
              <DrawerBody py={6}>
                {!hideTypeFilter && (
                  <FilterSection
                    title="Type of camera"
                    options={["Dome", "Bullet", "PTZ", "Baby PTZ"]}
                    selected={filters.type}
                    onChange={(val) => handleFilterChange("type", val)}
                  />
                )}
                <FilterSection
                  title="Camera lens"
                  options={["3 MP", "5 MP"]}
                  selected={filters.lens}
                  onChange={(val) => handleFilterChange("lens", val)}
                />
                <FilterSection
                  title="Type of connectivity"
                  options={["4G", "WIFI", "PoE"]}
                  selected={filters.connectivity}
                  onChange={(val) => handleFilterChange("connectivity", val)}
                />
              </DrawerBody>
              <DrawerFooter borderTopWidth="1px" borderColor="gray.700">
                <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  color="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  Close
                </Button>
                <Button
                  colorScheme="purple"
                  onClick={() => {
                    handleClearAll();
                    onClose();
                  }}
                >
                  Clear All
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          {/* Product Grid */}
          <Flex
            direction="column"
            overflow="hidden"
            w="full"
            pt="10px"
            mt="-10px"
            zIndex={1}
          >
            <Box minH={{ base: "320px", md: "606px" }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <Box
                    ref={scrollContainerRef}
                    display={{ base: "flex", md: "grid" }} // Flex on mobile, Grid on desktop
                    gridTemplateColumns={{ md: "repeat(3, 1fr)" }}
                    gap={{ base: 4, md: 6 }}
                    justifyItems="center"
                    overflowX={{ base: "auto", md: "visible" }}
                    px={{ base: 4, md: 0 }}
                    pb={{ base: 4, md: 0 }}
                    css={{
                      scrollSnapType: "x mandatory",
                      "&::-webkit-scrollbar": { display: "none" },
                    }}
                  >
                    {currentProducts.map((product, index) => (
                      <Box
                        key={index}
                        bg="rgba(255,255,255,0.2)"
                        backdropFilter="blur(5px)"
                        p={6}
                        position="relative"
                        role="group"
                        transition="all 0.3s"
                        cursor="pointer"
                        onClick={() => {
                          if (
                            product.product_name &&
                            product.product_name.startsWith("AD-")
                          ) {
                            navigate(`/${product.product_name}`);
                          } else {
                            navigate(product.link);
                          }
                        }}
                        _hover={{
                          bg: "whiteAlpha.300",
                          transform: "translateY(-5px)",
                        }}
                        h="290.77px"
                        w={{ base: "100%", md: "290.77px" }}
                        minW={{ base: "85vw", md: "auto" }} // Mobile snap item width
                        scrollSnapAlign="center"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        {/* Corners */}
                        <Box
                          {...cornerBase}
                          top="0"
                          left="0"
                          borderTopWidth="2px"
                          borderLeftWidth="2px"
                          _groupHover={{ opacity: 1 }}
                        />
                        <Box
                          {...cornerBase}
                          top="0"
                          right="0"
                          borderTopWidth="2px"
                          borderRightWidth="2px"
                          _groupHover={{ opacity: 1 }}
                        />
                        <Box
                          {...cornerBase}
                          bottom="0"
                          right="0"
                          borderBottomWidth="2px"
                          borderRightWidth="2px"
                          _groupHover={{ opacity: 1 }}
                        />
                        <Box
                          {...cornerBase}
                          bottom="0"
                          left="0"
                          borderBottomWidth="2px"
                          borderLeftWidth="2px"
                          _groupHover={{ opacity: 1 }}
                        />

                        {/* Image */}
                        <Box
                          flex="1"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Image
                            src={product.image}
                            alt={product.product_name}
                            maxH="180px"
                            objectFit="contain"
                          />
                        </Box>

                        {/* Details */}
                        <HStack
                          justify="space-between"
                          align="flex-end"
                          w="full"
                          mt={4}
                        >
                          <Box>
                            <Text
                              fontSize="16px"
                              fontWeight="600"
                              color="white"
                            >
                              {product.product_name}
                            </Text>
                            <Text fontSize="14px" color="white" mt={1}>
                              {product.subtitle || "CCTV Camera"}
                            </Text>
                          </Box>
                          <CustomButton
                            width="40px"
                            height="40px"
                            showTicks={false}
                            sx={{ padding: 0 }}
                          >
                            <Image
                              src={
                                require("../../../Components/Icons/RightButton.svg")
                                  .default
                              }
                              alt=""
                              w="15px"
                            />
                          </CustomButton>
                        </HStack>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
            {currentProducts.length === 0 && (
              <Text textAlign="center" color="gray.500" mt={10}>
                No products found matching filters.
              </Text>
            )}

            {/* Pagination Controls */}
            {(totalPages > 1 || (isMobile && filteredProducts.length > 1)) && (
              <Flex
                justify={{ base: "center", md: "flex-end" }}
                mt={8}
                align="center"
                gap={8}
              >
                {/* Page Indicators */}
                <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Box
                      key={i}
                      w="12px"
                      h="12px"
                      bg={i === currentPage ? "white" : "transparent"}
                      border="1px solid white"
                      cursor="pointer"
                      onClick={() => setPage(i)}
                      transition="all 0.3s"
                      _hover={{ bg: "whiteAlpha.500" }}
                    />
                  ))}
                </HStack>

                {/* Arrow Buttons */}
                <Flex gap={4}>
                  <CustomButton
                    onClick={prevPage}
                    width="40px"
                    height="40px"
                    showGlow={false}
                    showTicks={false}
                    bgColor="#454545"
                    textColor="white"
                    m="4px"
                    sx={{
                      padding: 0,
                      cursor: "pointer",
                      "& img": { transition: "filter 0.2s" },
                      _hover: {
                        "& img": {
                          filter:
                            "brightness(0) saturate(100%) invert(86%) sepia(23%) saturate(995%) hue-rotate(68deg) brightness(103%) contrast(103%)",
                        },
                      },
                    }}
                  >
                    <Image
                      src={LeftButtonIcon}
                      alt="Previous"
                      w="16px"
                      h="16px"
                      pointerEvents="none"
                    />
                  </CustomButton>
                  <CustomButton
                    onClick={nextPage}
                    width="40px"
                    height="40px"
                    showGlow={false}
                    showTicks={false}
                    bgColor="#454545"
                    textColor="white"
                    m="4px"
                    sx={{
                      padding: 0,
                      cursor: "pointer",
                      "& img": { transition: "filter 0.2s" },
                      _hover: {
                        "& img": {
                          filter:
                            "brightness(0) saturate(100%) invert(86%) sepia(23%) saturate(995%) hue-rotate(68deg) brightness(103%) contrast(103%)",
                        },
                      },
                    }}
                  >
                    <Image
                      src={RightButtonIcon}
                      alt="Next"
                      w="16px"
                      h="16px"
                      pointerEvents="none"
                    />
                  </CustomButton>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductList;
