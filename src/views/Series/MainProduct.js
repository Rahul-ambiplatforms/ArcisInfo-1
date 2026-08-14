'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Series as SeriesData } from "./Data/Content";
import { SEOContent } from "./Data/SEOContent";
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
        {/* Schema Markup — deliberately NOT inside <Helmet>.
            HelmetProvider is mounted in app/providers.js, a 'use client'
            module, so Helmet only injects into <head> after hydration and
            nothing it renders reaches the server HTML a crawler reads.
            Rendered inline the <script> is server-rendered normally; JSON-LD
            is valid anywhere in the document. The meta/title/canonical tags
            that used to sit here were dead for the same reason and are already
            emitted by the route's `metadata` export. */}
        {seoData?.schema?.length > 0 &&
          seoData.schema.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
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
