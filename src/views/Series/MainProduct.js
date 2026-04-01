'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Series as SeriesData } from "./Data/Content";
import { SEOContent } from "./Data/SEOContent";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";

const Information    = dynamic(() => import("../../Components/Information"));
const OurClient      = dynamic(() => import("../HomePage/Components/OurClient"));
const CameraFeature  = dynamic(() => import("../Product/Components/CameraFeature"));
const Innovation     = dynamic(() => import("../AboutUs/Components/Innovation"));
const ProductInfo    = dynamic(() => import("./Components/ProductInfo"));
const CTAButton      = dynamic(() => import("../../Components/CTAButton"));
const FAQSection     = dynamic(() => import("../../Components/FAQSection"));

const MainProduct = ({ seriesType = "nvrDvrSeries", seriesId: seriesIdProp }) => {
  const routerParams = useParams();
  const seriesId = seriesIdProp ?? routerParams.seriesId;

  // Map URL param to data key
  let selectedSeries = seriesType;
  if (seriesId === "cloud-vms") {
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
    if (param === "cloud-vms") return "cloud-vms";
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
