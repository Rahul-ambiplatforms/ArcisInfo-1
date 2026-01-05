import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Box } from "@chakra-ui/react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring config for the follower
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Variants for the reticle brackets
  const bracketVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      opacity: 0.8,
      borderColor: "#6B46C1", // Darker Purple
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 0.8,
      rotate: 45,
      opacity: 1,
      borderColor: "#9F7AEA", // Lighter purple on hover for "active" state
      boxShadow: "0 0 15px #9F7AEA", // Glow
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      zIndex={9999}
      pointerEvents="none"
      // Removed mix-blend-mode to ensure consistent "Dark" look
    >
      {/* Primary Pointer: Crosshair */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          position: "fixed",
          left: 0,
          top: 0,
          x: -10, 
          y: -10,
        }}
      >
        <Box position="relative" w="20px" h="20px">
            {/* Horizontal Line */}
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="14px"
                h="2px"
                bg="#805AD5" // Rich Purple
                boxShadow="0 0 8px #805AD5" // Glow
            />
             {/* Vertical Line */}
             <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="2px"
                h="14px"
                bg="#805AD5"
                boxShadow="0 0 8px #805AD5"
            />
        </Box>
      </motion.div>

      {/* Follower: Focus Brackets / Viewfinder */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          left: 0,
          top: 0,
          x: -25,
          y: -25,
        }}
        variants={bracketVariants}
        animate={isHovered ? "hover" : "idle"}
      >
        <Box
          w="50px"
          h="50px"
          position="relative"
        >
          {/* Top Left Bracket */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="10px"
            h="10px"
            borderTop="2px solid #6B46C1"
            borderLeft="2px solid #6B46C1"
            boxShadow="-1px -1px 12px rgba(107, 70, 193, 0.8)" // Dark Purple Glow
          />
          {/* Top Right Bracket */}
          <Box
            position="absolute"
            top="0"
            right="0"
            w="10px"
            h="10px"
            borderTop="2px solid #6B46C1"
            borderRight="2px solid #6B46C1"
            boxShadow="1px -1px 12px rgba(107, 70, 193, 0.8)"
          />
          {/* Bottom Left Bracket */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="10px"
            h="10px"
            borderBottom="2px solid #6B46C1"
            borderLeft="2px solid #6B46C1"
            boxShadow="-1px 1px 12px rgba(107, 70, 193, 0.8)"
          />
          {/* Bottom Right Bracket */}
          <Box
            position="absolute"
            bottom="0"
            right="0"
            w="10px"
            h="10px"
            borderBottom="2px solid #6B46C1"
            borderRight="2px solid #6B46C1"
            boxShadow="1px 1px 12px rgba(107, 70, 193, 0.8)"
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default CustomCursor;
