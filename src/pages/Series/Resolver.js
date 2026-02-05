import React from "react";
import { useParams } from "react-router-dom";
import SSeries from "./SSeries";
import EcoSeries from "./EcoSeries";
import MainProduct from "./MainProduct";
import ProductDetail from "../Product/ProductDetail";
import { ProductDetails } from "../Product/Data/ProductDetails";

const PRODUCT_SLUGS = ["arcis-bridge-device", "arcis-vms", "arcis-nvr"];

const SlugResolver = () => {
  const { seriesId } = useParams();

  if (seriesId === "s-series") {
    return <SSeries />;
  }

  if (seriesId === "eco-series") {
    return <EcoSeries />;
  }

  if (PRODUCT_SLUGS.includes(seriesId)) {
    return <MainProduct />;
  }

  // Check if it matches a product ID in ProductDetails
  // We check keys directly or try to find a match by product_name/normalized ID
  let foundProductKey = null;
  if (ProductDetails[seriesId]) {
    foundProductKey = seriesId;
  } else {
    const normalizedId = seriesId.toLowerCase().replace(/-/g, "");
    const foundEntry = Object.entries(ProductDetails).find(([key, p]) => {
      const pName = p.product_name.toLowerCase().replace(/-/g, "");
      return pName === normalizedId;
    });
    if (foundEntry) foundProductKey = foundEntry[0];
  }

  if (foundProductKey) {
    return <ProductDetail productIdOverride={foundProductKey} />;
  }

  return null; // Or some default 404 handler if not handled by Routes
};

export default SlugResolver;
