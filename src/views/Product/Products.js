'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { Product } from "./Data/Content";
import { getProductSEO } from "./Data/SEOContent";
import { Box } from "@chakra-ui/react";
import NotFound from "../NotFound";
import PageContentWrapper from "../../Components/PageContentWrapper";

// SEO audit fix (checklist items #48/#49): these 3 product-detail pages had
// zero cross-linking to each other — a real orphan-cluster gap found via a
// static internal-link audit. Small, stable set, so hardcoded here rather
// than pulled from Data/Content.js.
const S_SERIES_SIBLINGS = [
  { slug: "ai-bullet-cctv-camera", title: "AI Bullet CCTV Camera" },
  { slug: "ai-ptz-cctv-camera", title: "AI PTZ CCTV Camera" },
  { slug: "ai-dome-cctv-camera", title: "AI Dome CCTV Camera" },
];

const CameraFeature      = dynamic(() => import("./Components/CameraFeature"));
const CameraComparision  = dynamic(() => import("./Components/CameraComparision"));
const AISolutionIndustry = dynamic(() => import("../HomePage/Components/AISolutionIndustry"));
const SurveillanceStack  = dynamic(() => import("../../Components/SurveillanceStack"));
const ProductIndustries  = dynamic(() => import("./Components/ProductIndustries"));
const WhyChooseArcis     = dynamic(() => import("./Components/WhyChooseArcis"));
const CTAButton          = dynamic(() => import("../../Components/CTAButton"));
const FAQSection         = dynamic(() => import("../../Components/FAQSection"));

const Products = ({ productId: productIdProp }) => {
  const routerParams = useParams();
  const productId = productIdProp ?? routerParams.productId;

  // Normalize the productId from URL (e.g., "ai-bullet-cctv-camera" -> "aibulletcctvcamera")
  const normalizedId = productId
    ? productId.replace(/-/g, "").toLowerCase()
    : "";

  // Find the matching key in the Product object (e.g., "AIBulletCCTVCamera" -> "aibulletcctvcamera")
  const productKey = Object.keys(Product).find(
    (key) => key.toLowerCase() === normalizedId
  );

  const productData = Product[productKey];
  const productSEO = getProductSEO(productKey);

  if (!productData) {
    return (
      <>
        <Box h="100vh">
          <NotFound />
        </Box>
      </>
    );
  }

  return (
    <>
      {/* Schema Markup — deliberately NOT inside <Helmet>.
          HelmetProvider is mounted in app/providers.js, a 'use client' module,
          so Helmet only injects into <head> after hydration and nothing it
          renders reaches the server HTML a crawler reads. Rendered inline the
          <script> is server-rendered normally; JSON-LD is valid anywhere in
          the document. The meta/title/canonical tags that used to sit here
          were dead for the same reason and are already emitted by the route's
          `metadata` export. */}
      {productSEO.schema &&
        productSEO.schema.length > 0 &&
        productSEO.schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      <PageContentWrapper noPadding>
        <HeroSectionCarousel data={productData.hero} />
        <CameraFeature data={productData.features} />
        <CameraComparision data={productData.comparisonData} />
        <AISolutionIndustry data={productData.AISolutionIndustry} />
        <Box my={{ base: "4%", md: "-3%" }}>
          <SurveillanceStack data={productData.surveillanceStack} />
        </Box>
        <ProductIndustries data={productData.industries} />
        <WhyChooseArcis data={productData.whychoosearcis} />
        <CTAButton {...productData.CTAButton} />
        <FAQSection data={productData.FAQsData} />
        {/* Visually-hidden but crawlable cross-links to sibling S-Series
            product pages (checklist items #48/#49) — same pattern as the
            relatedLinks nav on the SEO landing pages. */}
        <Box
          as="nav"
          aria-label="Other S-Series cameras"
          position="absolute"
          w="1px"
          h="1px"
          overflow="hidden"
          clip="rect(0 0 0 0)"
          whiteSpace="nowrap"
          border="0"
        >
          {S_SERIES_SIBLINGS.filter((s) => s.slug !== productId).map((s) => (
            <NextLink key={s.slug} href={`/s-series/${s.slug}`}>{s.title}</NextLink>
          ))}
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default Products;
