import React, { Suspense, lazy } from "react";
import { useParams } from "next/navigation";
import Series from "./Series";
import MainProduct from "./MainProduct";

const SEOLandingPage = lazy(() => import("../SEOLandingPages/SEOLandingPage"));

const SERIES_SLUGS = ["s-series", "eco-series"];
const PRODUCT_SLUGS = ["arcis-bridge-device", "cloud-vms", "arcis-nvr"];

const SlugResolver = ({ slug: slugProp }) => {
  const routerParams = useParams();
  const seriesId = slugProp ?? routerParams.seriesId;

  if (SERIES_SLUGS.includes(seriesId)) {
    return <Series seriesId={seriesId} />;
  }

  if (PRODUCT_SLUGS.includes(seriesId)) {
    return <MainProduct seriesId={seriesId} />;
  }

  // Fallback to SEO landing page for city/state/other SEO slugs
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SEOLandingPage paramsOverride={{ seriesId }} />
    </Suspense>
  );
};

export default SlugResolver;
