import { ChevronDownIcon, DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <Flex
      position={"fixed"}
      justify="space-between"
      align="center"
      p="4"
      w={"100%"}
      boxShadow="md"
      bg="linear-gradient(to right, white 68%, #9678E1 32%)"
      zIndex={"999"}
    >
      {/* logo*/}
      <Flex alignItems="center">
        <Link as={RouterLink} to="/">
          <Image
            src="./images/ArcisAi.png"
            alt="Company Logo"
            boxSize="40px"
            w="107px"
            h="24px"
            cursor="pointer" 
          />
        </Link>
      </Flex>
      {/* Hamburger Icon for mobile */}
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        background="#FFFFFF"
      />
      {/* Links (hidden on mobile) */}
      <Flex
        flexGrow={1}
        justifyContent={"right"}
        pr="2%"
        display={{ base: "none", md: "flex" }}
      >
        <Box>
          <Flex
            direction="row"
            gap={6}
            alignItems="center"
            fontSize="14px"
            fontWeight="400"
            color="#606060"
          >
            {/* <Link href="#">PRIVACY POLICY</Link>
            <Link href="#">TERMS OF SERVICES</Link>
            <Link href="#">WARRANTY SERVICES</Link>
            <Link href="#">WARRANTY POLICY</Link> */}
          </Flex>
        </Box>
      </Flex>
      {/* Buttons (hidden on mobile) */}
      <Flex
        justifyContent={"flex-end"}
        w="32%"
        gap={4}
        display={{ base: "none", md: "flex" }}
      >
        <Menu>
          <MenuButton
            as={Button}
            size={{ base: "xs", md: "sm" }}
            rightIcon={<ChevronDownIcon />}
            bg="white"
            color="black"
            // _hover={{ bg: "gray.400" }}
            // _active={{ bg: "gray.900" }}
            px={6}
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
          background="#FFFFFF"
          size={{ base: "xs", md: "sm" }}
          variant={"solid"}
          color={"black"}
          onClick={() => (window.location.href = "https://agent.arcisai.io/")}
        >
          Visual Bot Demo
        </Button>
        <Button
          size={{ base: "xs", md: "sm" }}
          variant={"solid"}
          color={"black"}
          background="#FFFFFF"
          fontSize="14px"
          w="25%"
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
              boxSize="40px"
              w="107px"
              h="24px"
            />
            <Button
              size="sm"
              variant={"solid"}
              color={"white"}
              w="25%"
              background="#9678E1"
              fontSize="14px"
              onClick={() =>
                (window.location.href = "https://view.arcisai.io/")
              }
            >
              Login
            </Button>
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
              {/* <Link href="#">PRIVACY POLICY</Link>
              <Link href="#">TERMS OF SERVICES</Link>
              <Link href="#">WARRANTY SERVICES</Link>
              <Link href="#">WARRANTY POLICY</Link> */}
            </Flex>
            <Flex direction="column" gap={4} mt={8}></Flex>
          </DrawerBody>
          <DrawerFooter>
            <Stack direction="column" spacing={3} width="100%">
              <Button
                background="#9678E1"
                size="sm"
                variant="solid"
                color="white"
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
