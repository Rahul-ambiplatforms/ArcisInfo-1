import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { Product } from "./Data/Content";
import { getProductSEO } from "./Data/SEOContent";
import CameraFeature from "./Components/CameraFeature";
import ProductList from "../Series/Components/ProductList";
import Innovation from "../AboutUs/Components/Innovation";
import CTAButton from "../../Components/CTAButton";
import FAQSection from "../../Components/FAQSection";
import { Box } from "@chakra-ui/react";
import NotFound from "../NotFound";
import PageContentWrapper from "../../Components/PageContentWrapper";

const EcoSeriesProducts = () => {
  const { productId } = useParams();

  // Normalize the productId from URL (e.g., "bullet-cctv-camera" -> "bulletcctvcamera")
  const normalizedId = productId
    ? productId.replace(/-/g, "").toLowerCase()
    : "";

  // Find the matching key in the Product object
  const productKey = Object.keys(Product).find(
    (key) => key.toLowerCase() === normalizedId,
  );

  const productData = Product[productKey];
  const productSEO = getProductSEO(productKey) || {};

  if (!productData) {
    return (
      <Box h="100vh">
        <NotFound />
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{productSEO.metatitle || "ArcisAI Eco Series"}</title>
        <meta name="description" content={productSEO.metadescription || ""} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={productSEO.canonical || ""} />

        {/* Open Graph */}
        <meta property="og:title" content={productSEO.metatitle || ""} />
        <meta
          property="og:description"
          content={productSEO.metadescription || ""}
        />
        <meta property="og:image" content={productSEO.ogimage || ""} />
        <meta property="og:type" content="product" />

        {/* Twitter */}
        <meta name="twitter:title" content={productSEO.metatitle || ""} />
        <meta
          name="twitter:description"
          content={productSEO.metadescription || ""}
        />
        <meta name="twitter:image" content={productSEO.ogimage || ""} />
      </Helmet>

      <PageContentWrapper noPadding>
        {/* 1. HeroSection Carousel */}
        <HeroSectionCarousel data={productData.hero} />

        {/* 2. CameraFeature */}
        <CameraFeature data={productData.features} />

        {/* 3. Product List */}
        {productData.productList && (
          <ProductList data={productData.productList} hideTypeFilter={true} />
        )}

        {/* 4. Innovation */}
        {productData.innovation && <Innovation data={productData.innovation} />}

        {/* 5. CTA */}
        <CTAButton {...productData.CTAButton} />

        {/* 6. FAQ */}
        <FAQSection data={productData.FAQsData} />
      </PageContentWrapper>
    </>
  );
};

export default EcoSeriesProducts;
