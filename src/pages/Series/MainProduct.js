import React from "react";
import { useParams } from "react-router-dom";
import { Series as SeriesData } from "./Data/Content";
import { SEOContent } from "./Data/SEOContent";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import Information from "../../Components/Information";
import OurClient from "../HomePage/Components/OurClient";
import CameraFeature from "../Product/Components/CameraFeature";
import Innovation from "../AboutUs/Components/Innovation";
import CTAButton from "../../Components/CTAButton";
import FAQSection from "../../Components/FAQSection";
import ProductInfo from "./Components/ProductInfo";

const MainProduct = ({ seriesType = "nvrDvrSeries" }) => {
  const { seriesId } = useParams();

  // Map URL param to data key
  let selectedSeries = seriesType;
  if (seriesId === "arcis-vms") {
    selectedSeries = "cloudVMS";
  } else if (seriesId === "arcis-bridge-device") {
    selectedSeries = "arcisBridgeDevice";
  } else if (seriesId === "arcis-nvr") {
    selectedSeries = "nvr";
  }

  const data = SeriesData[selectedSeries];
  const seriesData = data || SeriesData.nvrDvrSeries;

  // Get SEO Data Key
  const getSeoKey = (param) => {
    if (param === "arcis-vms") return "cloud-vms";
    return param;
  };

  const seoData = SEOContent[getSeoKey(seriesId)];

  return (
    <>
      {seoData && (
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{seoData.metaTitle}</title>
          <meta name="description" content={seoData.metaDescription} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={seoData.canonical} />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content={seoData.metaTitle} />
          <meta property="og:description" content={seoData.metaDescription} />
          <meta property="og:image" content={seoData.ogImage} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={seoData.canonical} />
          <meta property="og:site_name" content="ArcisAI" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@arcisai" />
          <meta name="twitter:title" content={seoData.metaTitle} />
          <meta name="twitter:description" content={seoData.metaDescription} />
          <meta name="twitter:image" content={seoData.ogImage} />

          {/* Schema Markup */}
          {seoData.schema &&
            seoData.schema.length > 0 &&
            seoData.schema.map((schema, index) => (
              <script
                key={`schema-${index}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(schema),
                }}
              />
            ))}
        </Helmet>
      )}
      <HeroSectionCarousel data={seriesData.hero} />
      {selectedSeries !== "nvr" && (
        <Information data={seriesData.informationData} />
      )}

      {selectedSeries !== "nvr" && <OurClient testimonials={false} />}

      <CameraFeature data={seriesData.features} headingInBackground={true} />
      {selectedSeries === "nvr" && (
        <ProductInfo data={seriesData.productInfo} />
      )}
      <Innovation data={seriesData.Innovation} />
      <CTAButton {...seriesData.CTAButton1} />
      <FAQSection data={seriesData.FAQsData} />
    </>
  );
};

export default MainProduct;
