import React from "react";
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

/**
 * PageTransition - "Digital Shutter / Cyber Scan"
 *
 * Exits by closing two dark "shutters" (top and bottom).
 * Enters by opening them to reveal the new page.
 */

const shutterVariants = {
  initial: {
    scaleY: 1, // Closed
  },
  animate: {
    scaleY: 0, // Open
    transition: {
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1], // Custom dramatic ease
      delay: 0.1, // Small delay to let page render
    },
  },
  exit: {
    scaleY: 1, // Close
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: { duration: 0.3, delay: 0 },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const PageTransition = ({ children }) => {
  return (
    <Box position="relative" w="100%">
      {/* Top Shutter */}
      <motion.div
        variants={shutterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "#0A0A0A", // Very dark shutter
          zIndex: 9998,
          transformOrigin: "top", // Shrinks upwards
          borderBottom: "2px solid #7F56D9", // Brand line
          boxShadow: "0 0 20px rgba(127, 86, 217, 0.3)",
        }}
      />

      {/* Bottom Shutter */}
      <motion.div
        variants={shutterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "#0A0A0A",
          zIndex: 9998,
          transformOrigin: "bottom", // Shrinks downwards
          borderTop: "2px solid #7F56D9",
          boxShadow: "0 0 20px rgba(127, 86, 217, 0.3)",
        }}
      />

      {/* Loading Text / Scanner AI */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          color="#7F56D9"
          fontFamily="'Orbitron', sans-serif" // Tech font fallback
          fontSize="lg"
          letterSpacing="widest"
          textTransform="uppercase"
          fontWeight="bold"
          sx={{ textShadow: "0 0 10px #7F56D9" }}
        >
          System Scanning...
        </Text>
        {/* Loading Bar */}
        <Box w="150px" h="2px" bg="rgba(127, 86, 217, 0.3)" mt={2} overflow="hidden">
            <motion.div
                style={{ width: "100%", height: "100%", background: "#7F56D9" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
        </Box>
      </motion.div>

      {/* Actual Page Content */}
      <Box w="100%">{children}</Box>
    </Box>
  );
};

export default PageTransition;
