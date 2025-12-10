import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * PageTransition
 * - nextGen visual: subtle scale + y + skew + overlay shimmer
 * - respects prefers-reduced-motion
 * - use inside AnimatePresence (if using Next/Router) or as a wrapper on pages
 *
 * Usage:
 * <PageTransition>{pageContent}</PageTransition>
 */

const MotionDiv = motion.div;
const MotionOverlay = motion.div;

const variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.992,
    skewY: "0.5deg",
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    skewY: "0deg",
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.99,
    skewY: "-0.3deg",
    filter: "blur(2px)",
  },
};

const overlayVariants = {
  initial: { opacity: 0, y: -6, scale: 1.02 },
  animate: {
    opacity: 0.18,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 6, scale: 0.98 },
};

const defaultTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
};

const reducedMotionTransition = {
  duration: 0.18,
  ease: "linear",
};

const PageTransition = ({ children, className, style }) => {
  const reduce = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      style={{
        width: "100%",
        position: "relative",
        willChange: "opacity, transform, filter",
        ...style,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={reduce ? reducedMotionTransition : defaultTransition}
    >
      {/* subtle overlay shimmer for depth (pointerEvents none so it doesn't block clicks) */}
      <MotionOverlay
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: 4,
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.02), rgba(127,86,217,0.02) 40%, rgba(0,0,0,0.02))",
          mixBlendMode: "overlay",
          zIndex: 6,
        }}
        variants={overlayVariants}
        transition={reduce ? reducedMotionTransition : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* content wrapper — ensure it's above the overlay for interactive content */}
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </MotionDiv>
  );
};

export default PageTransition;
