import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import PageContentWrapper from "../../Components/PageContentWrapper";
import { Series } from "../Series/Data/Content"; // Importing Series data
import NotFound from "../NotFound";

import ProductDetailHero from "./Components/ProductDetailHero"; // Import new hero component
import TechnicalSpecifications from "./Components/TechnicalSpecifications";

import { ProductDetails } from "./Data/ProductDetails";

const ProductDetail = ({ productIdOverride }) => {
  const params = useParams();
  const modelId = productIdOverride || params.modelId;

  // Find the product across the Series data
  const product = useMemo(() => {
    if (!modelId) return null;

    // 1. Optimized Lookup from ProductDetails dictionary
    if (ProductDetails[modelId]) {
      return ProductDetails[modelId];
    }
    // Also try case-insensitive or hyphen-free lookup in the dictionary if exact match fails
    const normalizedId = modelId.toLowerCase().replace(/-/g, "");
    const dictFound = Object.values(ProductDetails).find(
      (p) => p.product_name.toLowerCase().replace(/-/g, "") === normalizedId,
    );
    if (dictFound) return dictFound;

    // 2. Fallback: Helper to search in a series object (Original Logic)
    const findInSeries = (seriesKey) => {
      const seriesData = Series[seriesKey];
      if (!seriesData?.productList?.products) return null;

      for (const category of seriesData.productList.products) {
        if (!category.productarray) continue;
        const found = category.productarray.find(
          (p) =>
            p.product_name.toLowerCase() === modelId.toLowerCase() ||
            p.product_name.replace(/-/g, "").toLowerCase() ===
              modelId.replace(/-/g, "").toLowerCase(),
        );
        if (found) return found;
      }
      return null;
    };

    // Search in ecoSeries items
    const ecoFound = findInSeries("ecoSeries");
    return ecoFound;
  }, [modelId]);

  if (!product) {
    return (
      <Box h="100vh">
        <NotFound />
      </Box>
    );
  }

  return (
    <PageContentWrapper>
      <Helmet>
        <title>{`${product.product_name} - ArcisAI`}</title>
        <meta
          name="description"
          content={`Buy ${product.product_name} - ${product.subtitle}. High quality CCTV Camera.`}
        />
      </Helmet>

      {/* Hero Section */}
      <ProductDetailHero product={product} />

      {/* Technical Specifications */}
      <TechnicalSpecifications product={product} />
    </PageContentWrapper>
  );
};

export default ProductDetail;
