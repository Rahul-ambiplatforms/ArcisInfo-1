import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { Product } from "./Data/Content";
import { getProductSEO } from "./Data/SEOContent";
import CameraFeature from "./Components/CameraFeature";
import CameraComparision from "./Components/CameraComparision";
import ProductIndustries from "./Components/ProductIndustries";
import WhyChooseArcis from "./Components/WhyChooseArcis";
import SurveillanceStack from "../../Components/SurveillanceStack";
import CTAButton from "../../Components/CTAButton";
import FAQSection from "../../Components/FAQSection";
import { Box } from "@chakra-ui/react";
import CCTVFeatures from "../WhyArcisAI/Components/CCTVFeaatures";
import AISolutionIndustry from "../HomePage/Components/AISolutionIndustry";
import NotFound from "../NotFound";
import PageContentWrapper from "../../Components/PageContentWrapper";

const Products = () => {
  const { productId } = useParams();

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
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{productSEO.metatitle}</title>
        <meta name="description" content={productSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={productSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={productSEO.metatitle} />
        <meta property="og:description" content={productSEO.metadescription} />
        <meta property="og:image" content={productSEO.ogimage} />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={productSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={productSEO.metatitle} />
        <meta name="twitter:description" content={productSEO.metadescription} />
        <meta name="twitter:image" content={productSEO.ogimage} />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="AI CCTV Camera, Security Camera, EdgeAI, Surveillance Camera, ArcisAI, Smart CCTV, AI Camera"
        />
        <meta name="author" content="ArcisAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Schema Markup */}
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
      </Helmet>
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
      </PageContentWrapper>
    </>
  );
};

export default Products;
