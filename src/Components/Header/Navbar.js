import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaCamera, FaVideo, FaEye } from "react-icons/fa";
import CustomButton from "../CustomButton";
import { Link as RouterLink } from "react-router-dom";
import { dropdownData, actionLinks, loginButton } from "./navbarData";

/* --- Dropdown Component with Hover and Click Support --- */
const NavDropdown = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen(!isOpen);

  const getIcon = (iconName) => {
    const icons = {
      camera: FaCamera,
      video: FaVideo,
      eye: FaEye,
    };
    return icons[iconName] || null;
  };

  const isMegaMenu = title === "PRODUCTS";

  // Separate items into groups and standalone items for Mega Menu
  const groups = data.items?.filter((item) => item.group) || [];
  const standaloneItems = data.items?.filter((item) => !item.group) || [];

  return (
    <Menu
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      gutter={0}
      autoSelect={false}
    >
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon boxSize={3} />}
        color="white"
        _hover={{ color: "white", bg: "whiteAlpha.100" }}
        _active={{ bg: "transparent" }}
        fontWeight="400"
        fontSize="16px"
        textTransform="uppercase"
        letterSpacing="0.5px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {title}
      </MenuButton>
      <MenuList
        bg="#0a0a0a"
        borderColor="gray.800"
        boxShadow="dark-lg"
        py={4}
        px={isMegaMenu ? 6 : 2}
        minW={isMegaMenu ? "300px" : data.items?.[0]?.group ? "250px" : "200px"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isMegaMenu ? (
          <Flex justify="space-between" align="flex-start" gap={8}>
            {/* Render Groups */}
            {groups.map((item, index) => (
              <Box key={index}>
                <Box
                  mb={2}
                  color="gray.500"
                  fontSize="14px"
                  letterSpacing="1px"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {item.groupLink ? (
                    <Link
                      as={RouterLink}
                      to={item.groupLink}
                      _hover={{ color: "white", textDecoration: "none" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.group}
                    </Link>
                  ) : (
                    item.group
                  )}
                </Box>
                <Stack spacing={1}>
                  {item.items?.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      as={RouterLink}
                      to={subItem.link}
                      bg="transparent"
                      _hover={{ bg: "gray.800", color: "white" }}
                      color="gray.300"
                      fontSize="14px"
                      px={2}
                      py={1}
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </Stack>
              </Box>
            ))}

            {/* Render Standalone Items in a column */}
            {standaloneItems.length > 0 && (
              <Box>
                <Box
                  mb={2}
                  color="gray.500"
                  fontSize="12px"
                  letterSpacing="1px"
                  fontWeight="bold"
                  textTransform="uppercase"
                  opacity={0}
                >
                  Others
                </Box>
                <Stack spacing={1}>
                  {standaloneItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      as={RouterLink}
                      to={item.link}
                      bg="transparent"
                      _hover={{ bg: "gray.800", color: "white" }}
                      color="gray.300"
                      fontSize="14px"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Stack>
              </Box>
            )}
          </Flex>
        ) : (
          // Standard Vertical Menu
          data.items?.map((item, index) => {
            if (item.group) {
              return (
                <MenuGroup
                  key={index}
                  title={
                    item.groupLink ? (
                      <Link
                        as={RouterLink}
                        to={item.groupLink}
                        _hover={{ color: "white", textDecoration: "none" }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.group}
                      </Link>
                    ) : (
                      item.group
                    )
                  }
                  color="gray.500"
                  fontSize="12px"
                  letterSpacing="1px"
                  ml={3}
                >
                  {item.items?.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      as={RouterLink}
                      to={subItem.link}
                      bg="transparent"
                      _hover={{ bg: "gray.800" }}
                      color="white"
                      fontSize="14px"
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </MenuGroup>
              );
            } else {
              return (
                <MenuItem
                  key={index}
                  as={RouterLink}
                  to={item.link}
                  bg="transparent"
                  _hover={{ bg: "gray.800" }}
                  color="white"
                  fontSize="14px"
                >
                  {item.label}
                </MenuItem>
              );
            }
          })
        )}
      </MenuList>
    </Menu>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      w="100%"
      h="96px"
      bg="black"
      opacity="0.95"
      flexShrink={0}
      position="fixed"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        w="100%"
        mx="auto"
        px={{ base: 2, lg: 8 }}
      >
        <Flex gap="4" align="center" justify="center">
          {/* LOGO */}
          <RouterLink to="/">
            <Image
              src="/images/ArcisAi_logo.png"
              alt="ArcisAI Logo"
              w="150px"
              h="30px"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </RouterLink>

          {/* DESKTOP NAV - Center */}
          <HStack spacing={2} display={{ base: "none", lg: "flex" }}>
            <NavDropdown
              title={dropdownData.solutions.title}
              data={dropdownData.solutions}
            />
            <NavDropdown
              title={dropdownData.products.title}
              data={dropdownData.products}
            />
            <NavDropdown
              title={dropdownData.company.title}
              data={dropdownData.company}
            />
            <NavDropdown
              title={dropdownData.resources.title}
              data={dropdownData.resources}
            />
          </HStack>
        </Flex>

        {/* RIGHT ACTIONS */}
        <HStack
          spacing={6}
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
        >
          {/* <Link
            as={RouterLink}
            to={actionLinks[0].link}
            fontSize="16px"
            fontWeight="400"
            color="white"
            _hover={{ color: "white", textDecoration: "none", opacity: 0.8 }}
            textTransform="uppercase"
            letterSpacing="0.5px"
          >
            {actionLinks[0].label}
          </Link> */}
          <Link
            as={RouterLink}
            to={actionLinks[1].link}
            fontSize="16px"
            fontWeight="400"
            color="white"
            _hover={{ color: "white", textDecoration: "none", opacity: 0.8 }}
            textTransform="uppercase"
            letterSpacing="0.5px"
          >
            {actionLinks[1].label}
          </Link>

          {/* LOGIN BUTTON */}
          <CustomButton
            onClick={() => (window.location.href = loginButton.link)}
          >
            {loginButton.label}
          </CustomButton>
        </HStack>

        {/* MOBILE BURGER */}
        <CustomButton w="50px" h="50px" display={{ base: "flex", lg: "none" }}>
          <IconButton
            display={{ base: "flex", lg: "none" }}
            icon={<HamburgerIcon boxSize={6} />}
            variant="ghost"
            color="white"
            onClick={onOpen}
            aria-label="Open Menu"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </CustomButton>
      </Flex>

      {/* ----------------- MOBILE MENU DRAWER ----------------- */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(5px)" />
        <DrawerContent bg="black" borderLeft="1px solid" borderColor="gray.800">
          <DrawerCloseButton color="white" mt={2} />
          <DrawerHeader
            color="white"
            borderBottom="1px solid"
            borderColor="gray.800"
          >
            <RouterLink to="/" onClick={onClose}>
              <Image
                src="/images/ArcisAi_logo.png"
                alt="ArcisAI Logo"
                w="150px"
                h="30px"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              />
            </RouterLink>
          </DrawerHeader>
          <DrawerBody px={0}>
            <Stack
              spacing={0}
              divider={<Box borderColor="gray.900" borderBottomWidth="1px" />}
            >
              {/* Mobile Dropdowns from Data */}
              {Object.values(dropdownData).map((dropdown, index) => (
                <Accordion key={index} allowToggle border="none">
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton py={4} _hover={{ bg: "gray.900" }}>
                        <Box
                          flex="1"
                          textAlign="left"
                          color="white"
                          fontWeight="400"
                          fontSize="16px"
                        >
                          {dropdown.title}
                        </Box>
                        <AccordionIcon color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="gray.900">
                      {dropdown.items?.map((item, itemIndex) => {
                        if (item.group) {
                          return (
                            <Box key={itemIndex} mb={4}>
                              {item.groupLink ? (
                                <Link
                                  as={RouterLink}
                                  to={item.groupLink}
                                  color="gray.500"
                                  fontSize="16px"
                                  mb={2}
                                  textTransform="uppercase"
                                  letterSpacing="1px"
                                  display="block"
                                  _hover={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                  onClick={onClose}
                                >
                                  {item.group}
                                </Link>
                              ) : (
                                <Text
                                  color="gray.500"
                                  fontSize="xs"
                                  mb={2}
                                  textTransform="uppercase"
                                  letterSpacing="1px"
                                >
                                  {item.group}
                                </Text>
                              )}
                              <Stack spacing={3} pl={4}>
                                {item.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    as={RouterLink}
                                    to={subItem.link}
                                    color="white"
                                    fontSize="14px"
                                    onClick={onClose}
                                    _hover={{ color: "gray.300" }}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </Stack>
                            </Box>
                          );
                        } else {
                          return (
                            <Link
                              key={itemIndex}
                              as={RouterLink}
                              to={item.link}
                              color="white"
                              fontSize="14px"
                              display="block"
                              py={2}
                              onClick={onClose}
                              _hover={{ color: "gray.300" }}
                            >
                              {item.label}
                            </Link>
                          );
                        }
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}

              {/* Action Links */}
              {/* {actionLinks.map((link, index) => (
                <Button
                  key={index}
                  as={RouterLink}
                  to={link.link}
                  variant="ghost"
                  color="white"
                  w="full"
                  h="60px"
                  justifyContent="flex-start"
                  px={6}
                  borderRadius={0}
                  fontSize="16px"
                  fontWeight="400"
                  textTransform="uppercase"
                  onClick={onClose}
                  _hover={{ bg: "gray.900", color: "white" }}
                >
                  {link.label}
                </Button>
              ))} */}
              <Button
                as={RouterLink}
                to={actionLinks[1].link}
                variant="ghost"
                color="white"
                w="full"
                h="60px"
                justifyContent="flex-start"
                // px={6}
                borderRadius={0}
                fontSize="16px"
                fontWeight="400"
                textTransform="uppercase"
                _hover={{ bg: "gray.900", color: "white" }}
                onClick={onClose}
              >
                {actionLinks[1].label}
              </Button>

              {/* Login Button */}
              <Box p={6} display="flex" justifyContent="center">
                <CustomButton
                  onClick={() => (window.location.href = loginButton.link)}
                >
                  {loginButton.label}
                </CustomButton>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
