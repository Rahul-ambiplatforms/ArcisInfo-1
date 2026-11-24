import { Text } from "@chakra-ui/react";
import { CERT_STATEMENT } from "@/src/data/certification";

// T16 — Shows the approved certification line as real, crawlable HTML text
// (not an image, not hidden), so Google, Bing and AI search can read it.
// Rendered inside the page's client views, which are server-rendered by Next,
// so the text is in the initial HTML. Pass Chakra style props (mt, mb, color)
// at the call site. `align` controls text alignment; `color` defaults to the
// surrounding text colour.
export default function CertStatement({ align = "center", color = "inherit", ...rest }) {
  return (
    <Text
      as="p"
      className="cert-statement"
      data-cert-statement=""
      fontWeight="600"
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.4"
      letterSpacing="wide"
      color={color}
      textAlign={align === "center" ? "center" : "left"}
      mx={align === "center" ? "auto" : undefined}
      maxW="3xl"
      {...rest}
    >
      {CERT_STATEMENT}
    </Text>
  );
}
