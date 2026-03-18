import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <Flex
        maxW="90%"
        mx="auto"
        bg="white"
        borderRadius="lg"
        p="5%"
        boxShadow="md"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        position="relative"
        z="2"
      >
        <Flex
          color="purple.500"
          mb={{ base: 4, md: 0 }}
          gap={2}
          direction={"column"}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            gap={2}
            direction={{ base: "column", md: "row" }}
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "24px", sm: "28px", md: "40px" }}
            >
              Your Security
            </Text>
            <Text
              fontSize={{ base: "16px", sm: "24px", md: "32px" }}
              height="100%"
              fontWeight="400"
              color="black"
            >
              Deserves an Upgrade -
            </Text>
          </Flex>

          <Text
            fontSize={{ base: "24px", sm: "28px", md: "40px" }}
            display="block"
            color="purple.500"
            fontWeight="700"
          >
            ArcisAI, the Future of AI CCTV
          </Text>
        </Flex>
        <Link
          as={RouterLink} // Use React Router's Link for client-side routing
          to="/contact-us" // The path to your contact page
          isExternal={false} // Set to false for internal routing
          _hover={{ textDecoration: "none" }} // Prevents the default link underline on hover
          w={{ base: "full", md: "auto" }}
        >
          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 28px"}
            gap={"8px"}
            flexShrink={0}
            _hover={{
              // You can add a subtle hover effect for the button itself if you like
              bgColor: "gray.700",
            }}
            w={"full"} // Make the button take the full width of the parent Link
          >
            Buy ArcisAI Cameras Now
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default CTA;
