import { Box, Button, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import React from "react";

function Header() {
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
      <Flex alignItems="center">
        <Image
          src="./images/ArcisAi.png"
          alt="Company Logo"
          boxSize="40px"
          w="107px"
          h="24px"
        />
      </Flex>
      <Flex gap="4">
        <Link href="#" fontSize="sm">
          Privacy Policy
        </Link>
        <Link href="#" fontSize="sm">
          Terms of Services
        </Link>
        <Link href="#" fontSize="sm">
          Warranty Service
        </Link>
        <Link href="#" fontSize="sm">
          Warranty Policy
        </Link>
      </Flex>
      <Button
        size="sm"
        variant={"solid"}
        color={"black"}
        onClick={() => (window.location.href = "https://delta.arcisai.io/")}
      >
        Login
      </Button>
    </Flex>
  );
}

export default Header;
