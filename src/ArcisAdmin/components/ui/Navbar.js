import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Text,
  useDisclosure,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
  Divider,
} from "@chakra-ui/react";

import { useNavigate, useLocation } from "react-router-dom";
import PageContentWrapper from "./PageContentWrapper";
import ChangePassword from "../../pages/Dashboard/components/ChangePassword";

const dropdownItems = {
  Whoweare: [
    { label: "User name", path: "/user" },
    { label: "Change password", path: "/user/reset" },
    { label: "Log out", path: "/user/logout" },
  ],
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isChangePasswordOpen,
    onOpen: onChangePasswordOpen,
    onClose: onChangePasswordClose,
  } = useDisclosure();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoverTimeouts, setHoverTimeouts] = useState({});
  const [menuOpenStates, setMenuOpenStates] = useState({});
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null); // Track the currently opened accordion
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path, linkName, sliderId = null) => {
    setActiveLink(linkName);
    const state = sliderId ? { scrollTo: sliderId } : undefined;

    if (location.pathname === path) {
      // Avoid unnecessary refresh by replacing the state
      navigate(path, { state, replace: true });
    } else {
      navigate(path, { state });
    }
  };

  useEffect(() => {
    // const currentLink = pathToLinkName[location.pathname];
    // if (currentLink) {
    //     setActiveLink(currentLink);
    // }
    // }, [location]);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isPathActive(path) {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  }

  const logoHeight = useBreakpointValue({ base: "25px", md: "25px" });
  const fontSize = useBreakpointValue({ base: "16px", md: "16px" });
  const contactBtnSize = useBreakpointValue({ base: "120px", md: "146px" });
  const contactBtnHeight = useBreakpointValue({ base: "50px", md: "50px" });
  const [menuOpen, setMenuOpen] = useState(false);
  const getEmailFromStorageOrToken = () => {
    const stored = localStorage.getItem('userEmail');
    if (stored) return stored;
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) return '';
      const payload = JSON.parse(atob(token.split('.')[1] || ''));
      return payload && payload.email ? payload.email : '';
    } catch {
      return '';
    }
  };

  const roleLabel = (localStorage.getItem('userRole') || '').toUpperCase();
  const emailLabel = getEmailFromStorageOrToken();

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/admin", { replace: true });
  };
  // const handleMouseEnter = (menuName) => {
  //     clearTimeout(hoverTimeouts[menuName]);
  //     setMenuOpenStates((prev) => ({ ...prev, [menuName]: true }));
  // };

  // const handleMouseLeave = (menuName) => {
  //     const timeout = setTimeout(() => {
  //         setMenuOpenStates((prev) => ({ ...prev, [menuName]: false }));
  //     }, 300);
  //     setHoverTimeouts((prev) => ({ ...prev, [menuName]: timeout }));
  // };

  const navigationItems = [
    {
      name: "Who we are",
      path: "/whoweare",
      hasDropdown: true,
      items: dropdownItems.Whoweare,
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        top={isNavbarVisible ? "0" : "-100px"}
        left="0"
        right="0"
        zIndex={1000}
        transition="top 0.3s ease-in-out"
        width="100%"
      >
        <PageContentWrapper>
          <Flex gap={4} align="center" mt="2%">
            <Flex
              width="100%"
              bg="white"
              borderRadius="20px"
              height="50px"
              align="center"
              px={4}
              justifyContent="space-between"
            >
              <Box flex="0 0 auto">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigateTo("/", "Home")}
                >
                  <Image
                    src="../images/ArcisAi.png"
                    alt="Company Logo"
                    boxSize="40px"
                    w="107px"
                    h="24px"
                    cursor="pointer"
                  />
                </div>
              </Box>
              <Flex align="center" position="relative">
                <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
                  <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    position="relative"
                  >
                    <Flex
                      align="center"
                      gap="4px"
                      px="12px"
                      py="8px"
                      cursor="pointer"
                    >
                      <Box>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="20" fill="#E7E7E7" />
                          <path
                            d="M19.9993 19.9993C22.0252 19.9993 23.666 18.3585 23.666 16.3327C23.666 14.3068 22.0252 12.666 19.9993 12.666C17.9735 12.666 16.3327 14.3068 16.3327 16.3327C16.3327 18.3585 17.9735 19.9993 19.9993 19.9993ZM19.9993 21.8327C17.5518 21.8327 12.666 23.061 12.666 25.4993V27.3327H27.3327V25.4993C27.3327 23.061 22.4468 21.8327 19.9993 21.8327Z"
                            fill="#9678E1"
                          />
                        </svg>
                      </Box>

                      <Box as="button" border="none" background="transparent">
                        <svg
                          width="12"
                          height="6"
                          viewBox="0 0 12 6"
                          fill="none"
                          style={{
                            transform: menuOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <path d="M6 6L12 0L0 0L6 6Z" fill="#9678E1" />
                        </svg>
                      </Box>
                    </Flex>

                    {/* Dropdown Menu */}
                    <MenuList
                      px="4"
                      py="2"
                      borderRadius="20px"
                      style={{
                        position: "relative",
                        top: "60px", // 🔽 Push it further down
                        right: "60%",
                        // transform: 'translateX(-50%)',
                        zIndex: 1000,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <MenuItem
                        px={2}
                        py={1}
                        _hover={{ bg: "gray.100" }}
                        color="#696969"
                        cursor="pointer"
                        fontWeight="500"
                        fontSize="14px"
                        width="100%"
                        direction="column"
                        display="flex"
                        pl="0"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {`${roleLabel}${emailLabel ? ' - ' + emailLabel : ''}`}
                      </MenuItem>
                      <Box width="100%" height="1px" bg="#BECEDC" />
                      <MenuItem
                        px={2}
                        py={1}
                        _hover={{ bg: "gray.100" }}
                        cursor="pointer"
                        color="#696969"
                        fontWeight="500"
                        fontSize="14px"
                        onClick={onChangePasswordOpen}
                        width="100%"
                        direction="column"
                        display="flex"
                        pl="0"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Change Password
                      </MenuItem>
                      <Box width="100%" height="1px" bg="#BECEDC" />
                      <MenuItem
                        px={2}
                        py={1}
                        _hover={{ bg: "gray.100" }}
                        cursor="pointer"
                        onClick={() => logout()}
                        color="#EF4343"
                        fontWeight="500"
                        fontSize="12px"
                        width="100%"
                        direction="column"
                        display="flex"
                        pl="0"
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Box>
                </Menu>
              </Flex>
            </Flex>
          </Flex>
        </PageContentWrapper>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
          <DrawerOverlay />
          <DrawerContent bg="#E7E7E7">
            <DrawerBody padding="0">
              <Flex
                direction="column"
                height="100dvh"
                position="relative"
                overflowX="hidden"
              >
                <Box padding="5%" width="100%" zIndex={2}>
                  <Accordion allowToggle>
                    {navigationItems.map((item, index) => (
                      <AccordionItem
                        key={`nav-item-${index}`}
                        borderColor="transparent"
                      >
                        {item.hasDropdown ? (
                          <>
                            <h2>
                              <Flex
                                align="center"
                                justify="space-between"
                                py="8px"
                              >
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#9678E1"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "600"
                                      : "400",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  {item.name}
                                  <Box
                                    display={
                                      isPathActive(item.path)
                                        ? "absolute"
                                        : "none"
                                    }
                                    width="20px"
                                    height="2px"
                                    borderRadius="2px"
                                    bg="#9678E1"
                                  />
                                </div>
                                <AccordionButton
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenAccordion(
                                      openAccordion === item.name
                                        ? null
                                        : item.name
                                    ); // Toggle accordion state
                                  }}
                                  color={
                                    isPathActive(item.path)
                                      ? "#9678E1"
                                      : "black"
                                  }
                                  fontWeight={
                                    isPathActive(item.path) ? "600" : "400"
                                  }
                                  _hover={{ bg: "transparent" }}
                                  bg="transparent"
                                  pr="0"
                                  width="fit-content"
                                >
                                  <Box
                                    style={{
                                      transform:
                                        openAccordion === item.name
                                          ? "rotate(180deg)"
                                          : "rotate(0deg)", // Rotate only the active accordion's icon
                                      transition: "transform 0.3s ease", // Smooth transition
                                    }}
                                  >
                                    <svg
                                      width="12"
                                      height="6"
                                      viewBox="0 0 12 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 6L12 0L0 0L6 6Z"
                                        fill="#9678E1"
                                      />
                                    </svg>
                                  </Box>
                                </AccordionButton>
                              </Flex>
                            </h2>
                            <AccordionPanel
                              borderRadius="24px"
                              bg="white"
                              px="5%"
                              py="2%"
                            >
                              {item.items.map((dropdownItem, idx) => (
                                <React.Fragment key={`dropdown-item-${idx}`}>
                                  <Box
                                    style={{
                                      color: "black",
                                      fontSize: "12px",
                                      fontWeight: "400",
                                      textDecoration: "none",
                                      cursor: "pointer",
                                    }}
                                    py={2}
                                    onClick={() => {
                                      navigateTo(
                                        `${dropdownItem.path}${
                                          dropdownItem.sliderId
                                            ? `?slider=${dropdownItem.sliderId}`
                                            : ""
                                        }`,
                                        item.name,
                                        dropdownItem.sliderId
                                      );
                                      onClose();
                                    }}
                                  >
                                    <Box>{dropdownItem.label}</Box>
                                  </Box>
                                  {idx < item.items.length - 1 && (
                                    // <Box width="60%" height="1px" bg="#BECEDC" />
                                    <Divider
                                      width="60%"
                                      height="1px"
                                      bg="#BECEDC"
                                    />
                                  )}
                                </React.Fragment>
                              ))}
                            </AccordionPanel>
                          </>
                        ) : (
                          <>
                            {index === 0 ? (
                              <h2
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: "8px",
                                }}
                              >
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#9678E1"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "500"
                                      : "400",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  <AccordionButton
                                    color={
                                      isPathActive(item.path)
                                        ? "#9678E1"
                                        : "black"
                                    }
                                    fontWeight={
                                      isPathActive(item.path) ? "700" : "400"
                                    }
                                    _hover={{ bg: "transparent" }}
                                    bg="transparent"
                                    padding="8px 0"
                                  >
                                    <Box flex="1" textAlign="left">
                                      {item.name}
                                      <Box
                                        display={
                                          isPathActive(item.path)
                                            ? "absolute"
                                            : "none"
                                        }
                                        width="20px"
                                        height="2px"
                                        borderRadius="2px"
                                        bg="#9678E1"
                                      />
                                    </Box>
                                  </AccordionButton>
                                </div>
                                <Box
                                  pl="1%"
                                  cursor="pointer"
                                  onClick={() => onClose()}
                                >
                                  <svg
                                    width="22"
                                    height="18"
                                    viewBox="0 0 22 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.82621 6.63574H20.9742C21.4034 6.63574 21.751 6.98336 21.751 7.41255V10.5198C21.751 10.949 21.4034 11.2966 20.9742 11.2966H5.82621C5.39702 11.2966 5.0494 10.949 5.0494 10.5198V7.41255C5.0494 6.98336 5.39702 6.63574 5.82621 6.63574Z"
                                      fill="#9678E1"
                                    />
                                    <path
                                      d="M0.776817 0H20.9739C21.4031 0 21.7507 0.347614 21.7507 0.776812V3.88406C21.7507 4.31326 21.4031 4.66087 20.9739 4.66087H0.776817C0.347618 4.66087 5.72205e-06 4.31326 5.72205e-06 3.88406V0.776812C5.72205e-06 0.347614 0.347618 0 0.776817 0Z"
                                      fill="#9678E1"
                                    />
                                    <path
                                      d="M10.8754 13.2717H20.9739C21.4031 13.2717 21.7507 13.6193 21.7507 14.0485V17.1558C21.7507 17.585 21.4031 17.9326 20.9739 17.9326H10.8754C10.4462 17.9326 10.0986 17.585 10.0986 17.1558V14.0485C10.0986 13.6203 10.4462 13.2717 10.8754 13.2717Z"
                                      fill="#9678E1"
                                    />
                                  </svg>
                                </Box>
                              </h2>
                            ) : (
                              <h2>
                                <div
                                  style={{
                                    color: isPathActive(item.path)
                                      ? "#9678E1"
                                      : "black",
                                    fontSize: "16px",
                                    fontWeight: isPathActive(item.path)
                                      ? "500"
                                      : "400",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    position: "relative",
                                  }}
                                  onClick={() => {
                                    navigateTo(item.path, item.name);
                                    onClose();
                                  }}
                                >
                                  <AccordionButton
                                    color={
                                      isPathActive(item.path)
                                        ? "#9678E1"
                                        : "black"
                                    }
                                    fontWeight={
                                      isPathActive(item.path) ? "700" : "400"
                                    }
                                    _hover={{ bg: "transparent" }}
                                    bg="transparent"
                                    padding="8px 0"
                                  >
                                    <Box flex="1" textAlign="left">
                                      {item.name}
                                      <Box
                                        display={
                                          isPathActive(item.path)
                                            ? "absolute"
                                            : "none"
                                        }
                                        width="20px"
                                        height="2px"
                                        borderRadius="2px"
                                        bg="#9678E1"
                                      />
                                    </Box>
                                  </AccordionButton>
                                </div>
                              </h2>
                            )}
                          </>
                        )}
                        {index < navigationItems.length - 1 && (
                          <Box width="full" height="1px" bg="white" />
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
                <Box
                  borderRadius="408px"
                  opacity="0.12"
                  position="absolute"
                  background="#9678E1"
                  filter="blur(56.599998474121094px)"
                  width="408px"
                  top="40%"
                  left="0"
                  height="408px"
                  flexShrink="0"
                />
                <Flex
                  position="relative"
                  bottom="0dvh"
                  height="full"
                  minHeight="408px"
                  overflow="hidden"
                >
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/robot.png`}
                    alt="AI Robot"
                    width="100%"
                    height="auto"
                    maxHeight="100%"
                    ml="-20%"
                    objectFit="contain"
                    position="absolute"
                    bottom="0"
                    left="0"
                  />
                  <Flex
                    direction="column"
                    alignItems="flex-end"
                    gap={4}
                    position="absolute"
                    bottom="30%"
                    right="5%"
                    zIndex={1}
                  >
                    <Box flex="0 0 auto">
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => navigateTo("/", "Home")}
                      >
                        <svg
                          height={logoHeight}
                          viewBox="0 0 98 26"
                          fill="none"
                        >
                          <path
                            d="M2.06965 3.91725L12.479 21.9466L14.5487 25.7302L24.3879 8.68842L22.7459 5.64474L21.7486 3.91725L19.6789 0.332451H15.5395L17.6093 3.91725L20.2486 8.48946L14.5487 18.3617L6.20904 3.91725H9.75994L16.3242 15.2864L18.3938 11.7021L13.8996 3.91725L11.8297 0.332451H7.69029H4.13939H0L2.06965 3.91725Z"
                            fill="#9678E1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.8675 0.332451H22.8937L23.8807 2.04206L25.1225 4.19297L26.1095 5.90284L27.0966 4.19297L29.3255 0.332451H24.8675Z"
                            fill="#DB7B3A"
                          />
                          <path
                            d="M42.9423 7.88308L39.3612 16.1725L35.83 7.88308H32.9287L37.9355 19.4882H40.5881L45.6115 7.88308H42.9423ZM59.6509 19.4882L59.6177 7.88308H57.41L53.1354 15.0949L48.7946 7.88308H46.573V19.4882H49.093V12.6743L52.4889 18.2614H53.6992L57.1116 12.5252L57.1282 19.4882H59.6509ZM68.6228 10.5689V14.9788C68.6228 16.6201 67.7607 17.3827 66.567 17.3827C65.4231 17.3827 64.7599 16.7196 64.7599 15.2275V10.5689H62.1737V15.6088C62.1737 18.3609 63.7486 19.6209 65.9867 19.6209C67.081 19.6209 68.0757 19.2064 68.7555 18.4273V19.4882H71.2091V10.5689H68.6228ZM80.2611 19.4882H83.3945L79.3493 14.3488L83.063 10.5689H79.9793L76.1993 14.1499V7.18682H73.6131V19.4882H76.1993V17.217L77.4427 15.9901L80.2611 19.4882ZM89.6115 17.2335C89.3297 17.4491 88.9484 17.5651 88.5671 17.5651C87.8708 17.5651 87.4563 17.1506 87.4563 16.388V12.7573H89.6779V10.7678H87.4563V8.59597H84.87V10.7678H83.494V12.7573H84.87V16.4212C84.87 18.5433 86.0969 19.6209 88.2024 19.6209C88.9981 19.6209 89.7774 19.4385 90.3079 19.0572L89.6115 17.2335ZM93.06 9.32545C94.0215 9.32545 94.6681 8.69545 94.6681 7.83335C94.6681 7.03761 94.0215 6.44073 93.06 6.44073C92.0984 6.44073 91.4518 7.07073 91.4518 7.88308C91.4518 8.69544 92.0984 9.32545 93.06 9.32545ZM91.7668 19.4882H94.353V10.5689H91.7668V19.4882Z"
                            fill="#9678E1"
                          />
                          <path
                            d="M95.3696 6.87052H95.7073V5.68652H96.1742V5.41127H94.9027V5.68652H95.3696V6.87052ZM98 6.87052L97.9958 5.41127H97.7182L97.1808 6.31814L96.635 5.41127H96.3557V6.87052H96.6725V6.01379L97.0994 6.71629H97.2517L97.6807 5.99496L97.6828 6.87052H98Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </Box>
                    <Button
                      width="146px"
                      height="50px"
                      background="#9678E1"
                      color="#FFFFFF"
                      fontSize="16px"
                      fontWeight="700"
                      borderRadius="20px"
                      flexShrink={0}
                      onClick={() => {
                        navigateTo("/contactus", "Contact Us"); // Navigation and tracking
                        onClose(); // Close modal/menu
                      }}
                      _hover={{
                        background: "#1E4A6A",
                        color: "#FFFFFF",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <ChangePassword
        isOpen={isChangePasswordOpen}
        onClose={onChangePasswordClose}
      />
    </>
  );
};

export default Navbar;
