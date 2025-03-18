import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import React from "react";

function Header() {
  const handleDownlaod = () => {
    const apkUrl = "/arcisai.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "arcisAi.apk";
    link.click();
  };
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
      <Flex justifyContent={"flex-end"} gap={4}>
        <Button
          size={{ base: "xs", md: "sm" }}
          variant={"solid"}
          rightIcon={<DownloadIcon />}
          color={"black"}
          onClick={handleDownlaod}
        >
          Downlaod APK
        </Button>
        <Button
          size={{ base: "xs", md: "sm" }}
          variant={"solid"}
          color={"black"}
          onClick={() => (window.location.href = "https://view.arcisai.io/")}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
