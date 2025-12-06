import React from "react";
import { useParams } from "react-router-dom";
import HeroSection from "../../Components/HeroSection";
import { Product } from "./Data/Content";
import CameraFeature from "./Components/CameraFeature";
import CameraComparision from "./Components/CameraComparision";
import ProductIndustries from "./Components/ProductIndustries";
import WhyChooseArcis from "./Components/WhyChooseArcis";
import SurveillanceStack from "../../Components/SurveillanceStack";
import CTAButton from "../../Components/CTAButton";
import FAQSection from "../../Components/FAQSection";

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

  if (!productData) {
    return <div>Product Page not found</div>;
  }

  return (
    <>
      <HeroSection data={productData.hero} />
      <CameraFeature data={productData.features} />
      <CameraComparision data={productData.comparisonData} />
      <SurveillanceStack data={productData.surveillanceStack} />
      <ProductIndustries data={productData.industries} />
      <WhyChooseArcis data={productData.whychoosearcis} />
      <CTAButton {...productData.CTAButton} />
      <FAQSection data={productData.FAQsData} />
    </>
  );
};

export default Products;
