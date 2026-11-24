"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { useDelayedPopup } from "@/src/hooks/useDelayedPopup";

// T15 — Calmer IFSEC India 2026 popup. Wraps the EXISTING popup; it does not
// change the popup's design, text, form, images or WhatsApp link — it only
// controls WHEN it appears: home ("/") only, after 10 s or 50% scroll, once per
// visitor (hidden 7 days after showing), and never after 5 Dec 2026.
// Use `bare` when the existing popup already draws its own overlay/centred box
// (ArcisAI's popup is a Chakra Modal, so pass `bare`).
const IFSEC_END = "2026-12-05T23:59:59+05:30";

export default function IfsecPopupGate({ children, bare = false }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { open, close } = useDelayedPopup({
    storageKey: "arcisai_ifsec2026_popup_seen",
    delayMs: 10000,
    scrollRatio: 0.5,
    snoozeDays: 7,
    endDate: IFSEC_END,
    enabled: isHome,
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!isHome || !open) return null;

  if (bare) return <>{children(close)}</>;

  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="Meet ArcisAI at IFSEC India 2026"
      position="fixed"
      inset="0"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="blackAlpha.600"
      p={4}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <Box maxH="90vh" w="100%" maxW="4xl" overflow="auto">
        {children(close)}
      </Box>
    </Box>
  );
}
