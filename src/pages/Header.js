import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerFooter,
  Stack,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      position={"fixed"}
      justify="space-between" // This now works on Logo vs. Main Nav Group
      align="center"
      p="4"
      w={"100%"}
      boxShadow="md"
      bg="white"
      zIndex={"999"}
    >
      {/* CHILD 1: Logo (Extreme Left) */}
      <Flex alignItems="center">
        <Link as={RouterLink} to="/">
          <Image
            src="./images/ArcisAi.png"
            alt="Company Logo"
            w="107px"
            h="24px"
            cursor="pointer"
          />
        </Link>
      </Flex>

      {/* CHILD 2: Hamburger Icon (Mobile Only) */}
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        display={{ base: "flex", md: "none" }} // Only show on mobile
        onClick={onOpen}
        variant="ghost"
      />

      <Flex
        alignItems="center" // Vertically center all nav items
        gap={4} // Space between each item
        display={{ base: "none", md: "flex" }} // Only show on desktop
        fontSize="14px"
        fontWeight="400"
      >
        {/* <Link href="#">Blogs</Link> */}
        {/* <Link href="#">ContactUs</Link> */}
        <Button
          as={RouterLink}
          to="/blog"
          bg="white"
          size="sm"
          variant={"solid"}
          color={"black"}
          fontWeight="400"
          fontSize="14px"
          _hover={{ bg: "gray.50" }}
        >
          Blogs
        </Button>
        <Button
          as={RouterLink}
          to="/contact-us"
          bg="white"
          size="sm"
          variant={"solid"}
          color={"black"}
          fontWeight="400"
          fontSize="14px"
          _hover={{ bg: "gray.50" }}
        >
          Contact Us
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            size="sm"
            rightIcon={<ChevronDownIcon />}
            bg="white"
            color="black"
            fontWeight="400"
            fontSize="14px"
            _hover={{ bg: "gray.50" }}
            _active={{ bg: "gray.100" }}
          >
            Download App
          </MenuButton>
          <MenuList zIndex={10} minW="auto" w="150px" p={0}>
            <MenuItem
              as="a"
              href="https://play.google.com/store/apps/details?id=com.arcisadiance.app"
              icon={<Icon as={FaGooglePlay} color="green.500" boxSize={4} />}
            >
              Android App
            </MenuItem>
            <MenuItem
              as="a"
              href="https://apps.apple.com/in/app/arcisai/id6743403804"
              icon={<Icon as={FaApple} color="black" boxSize={4} />}
            >
              iOS App
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          bg="white"
          size="sm"
          variant={"solid"}
          color={"black"}
          fontWeight="400"
          fontSize="14px"
          _hover={{ bg: "gray.50" }}
          onClick={() => (window.location.href = "https://agent.arcisai.io/")}
        >
          Visual Bot Demo
        </Button>
        <Button
          size="sm"
          variant={"solid"}
          color={"white"} // Changed to white for readability
          bg="#9678E1" // Correct background color
          fontSize="14px"
          // w="25%"          // Removed fixed width
          _hover={{ bg: "#8266C9" }}
          onClick={() => (window.location.href = "https://view.arcisai.io/")}
        >
          Login
        </Button>
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src="./images/ArcisAi.png"
              alt="Company Logo"
              w="107px"
              h="24px"
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              gap={6}
              mt={4}
              fontSize="14px"
              fontWeight="400"
              color="#606060"
            >
              <Link href="#">Blogs</Link>
              <Link href="#">ContactUs</Link>
              <Link href="https://view.arcisai.io/">Login</Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Stack direction="column" spacing={3} width="100%">
              <Button
                background="#9678E1"
                size="sm"
                variant="solid"
                color="white"
                _hover={{ bg: "#8266C9" }}
                onClick={() =>
                  (window.location.href = "https://agent.arcisai.io/")
                }
              >
                Visual Bot Demo
              </Button>
              <Button
                size="sm"
                variant="solid"
                color="white"
                background="#9678E1"
                _hover={{ bg: "#8266C9" }}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.arcisadiance.app"
                  )
                }
              >
                Get it on Play Store
              </Button>
              <Button
                size="sm"
                variant="solid"
                color="white"
                background="#9678E1"
                _hover={{ bg: "#8266C9" }}
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/in/app/arcisai/id6743403804"
                  )
                }
              >
                Download on App Store
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Header;
