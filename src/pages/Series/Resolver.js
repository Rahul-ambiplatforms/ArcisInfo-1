import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Series from "./Series";
import MainProduct from "./MainProduct";

const SEOLandingPage = lazy(() => import("../SEOLandingPages/SEOLandingPage"));

const SERIES_SLUGS = ["s-series", "eco-series"];
const PRODUCT_SLUGS = ["arcis-bridge-device", "cloud-vms", "arcis-nvr"];

const SlugResolver = () => {
  const { seriesId } = useParams();

  if (SERIES_SLUGS.includes(seriesId)) {
    return <Series />;
  }

  if (PRODUCT_SLUGS.includes(seriesId)) {
    return <MainProduct />;
  }

  // Fallback to SEO landing page for city/state/other SEO slugs
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SEOLandingPage />
    </Suspense>
  );
};

export default SlugResolver;
