import React from "react";
import { Box, Text } from "@chakra-ui/react";

/**
 * CustomButton - A reusable sci-fi styled button component with dynamic styling
 *
 * @param {string} children - Button text/content
 * @param {string} bgColor - Background color (default: "rgba(255, 255, 255, 0.1)")
 * @param {string} hoverBgColor - Background color on hover (default: "rgba(255, 255, 255, 0.2)")
 * @param {string} borderColor - Border/corner color (default: "white")
 * @param {string} hoverBorderColor - Border color on hover (default: "#5aff70")
 * @param {string} textColor - Text color (default: "white")
 * @param {string} hoverTextColor - Text color on hover (default: "#5aff70")
 * @param {string} width - Button width (default: "140px")
 * @param {string} height - Button height (default: "44px")
 * @param {string} fontSize - Text font size (default: "lg")
 * @param {string} fontWeight - Text font weight (default: "medium")
 * @param {boolean} showGlow - Show glow effect on hover (default: true)
 * @param {string} glowColor - Glow color (defaults to hoverBorderColor)
 * @param {object} sx - Additional styles to override (merged with existing styles)
 * @param {function} onClick - Click handler
 * @param {string} as - HTML element type (default: "button")
 * @param {object} ...props - Any other props to pass to the button element
 */
const CustomButton = ({
  children,
  bgColor = "rgba(255, 255, 255, 0.1)",
  hoverBgColor = "rgba(255, 255, 255, 0.2)",
  borderColor = "white",
  hoverBorderColor = "#A4FF79",
  textColor = "white",
  hoverTextColor = "#A4FF79",
  width = "170px",
  height = "44px",
  fontSize = "16px",
  fontWeight = "medium",
  showGlow = true,
  glowColor,
  sx = {},
  onClick,
  as = "button",
  ...props
}) => {
  const finalGlowColor = glowColor || hoverBorderColor;

  // Corner Line Styles (for gradient support)
  const cornerLineBase = {
    position: "absolute",
    bg: props.borderGradient || borderColor,
    transition: "all 0.2s ease-in-out",
  };

  // Middle Tick Base Styles
  const tickBase = {
    position: "absolute",
    bg: props.borderGradient || borderColor,
    w: "2px",
    h: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    transition: "all 0.2s ease-in-out",
  };

  // Merge custom styles with default styles
  const buttonStyles = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    h: height,
    w: width,
    bg: bgColor,
    transition: "all 0.1s",
    cursor: "pointer",
    ...sx,
    _hover: {
      bg: hoverBgColor,
      "& .corner-h": {
        w: "50%",
        bg: props.borderGradient || hoverBorderColor,
      },
      "& .corner-v": {
        h: "calc(50% - 8px)",
        bg: props.borderGradient || hoverBorderColor,
      },
      "& > .tick": {
        bg: props.borderGradient || hoverBorderColor,
        ...(showGlow && {
          boxShadow: `0 0 8px ${finalGlowColor}`,
        }),
      },
      "& > .btn-text": {
        color: hoverTextColor,
      },
      ...(sx._hover || {}),
    },
    _active: {
      transform: "scale(0.95)",
      ...(sx._active || {}),
    },
    ...props,
  };

  const offset = "4px";

  return (
    <Box as={as} onClick={onClick} {...buttonStyles}>
      {/* TOP LEFT CORNER */}
      <Box
        className="corner-h"
        {...cornerLineBase}
        top={`-${offset}`}
        left={`-${offset}`}
        w="8px"
        h="2px"
      />
      <Box
        className="corner-v"
        {...cornerLineBase}
        top={`-${offset}`}
        left={`-${offset}`}
        w="2px"
        h="8px"
      />

      {/* TOP RIGHT CORNER */}
      <Box
        className="corner-h"
        {...cornerLineBase}
        top={`-${offset}`}
        right={`-${offset}`}
        w="8px"
        h="2px"
      />
      <Box
        className="corner-v"
        {...cornerLineBase}
        top={`-${offset}`}
        right={`-${offset}`}
        w="2px"
        h="8px"
      />

      {/* BOTTOM RIGHT CORNER */}
      <Box
        className="corner-h"
        {...cornerLineBase}
        bottom={`-${offset}`}
        right={`-${offset}`}
        w="8px"
        h="2px"
      />
      <Box
        className="corner-v"
        {...cornerLineBase}
        bottom={`-${offset}`}
        right={`-${offset}`}
        w="2px"
        h="8px"
      />

      {/* BOTTOM LEFT CORNER */}
      <Box
        className="corner-h"
        {...cornerLineBase}
        bottom={`-${offset}`}
        left={`-${offset}`}
        w="8px"
        h="2px"
      />
      <Box
        className="corner-v"
        {...cornerLineBase}
        bottom={`-${offset}`}
        left={`-${offset}`}
        w="2px"
        h="8px"
      />

      {/* LEFT MIDDLE TICK */}
      <Box className="tick" {...tickBase} left={`-${offset}`} />

      {/* RIGHT MIDDLE TICK */}
      <Box className="tick" {...tickBase} right={`-${offset}`} />

      {/* BUTTON TEXT */}
      <Text
        className="btn-text"
        color={textColor}
        bgGradient={props.textGradient}
        bgClip={props.textGradient ? "text" : undefined}
        fontSize={fontSize}
        fontWeight={fontWeight}
        transition="color 0.1s"
        zIndex={1}
      >
        {children}
      </Text>
    </Box>
  );
};

export default CustomButton;
