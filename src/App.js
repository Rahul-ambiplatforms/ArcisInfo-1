// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";

import Header from "./Components/Header/Header";
import HomeDashboard from "./pages/HomePage/HomeDashboard";
import Products from "./pages/Product/Products"; // Import Products page
import AboutUs from "./pages/AboutUs/AboutUs";
import WhyArcisAI from "./pages/WhyArcisAI/WhyArcisAI";
import Footer from "./Components/Footer/Footer";

import Landing from "./pages/Landing";
import ProductInfo from "./pages/ProductInfo";
import MiddlePart from "./pages/MiddlePart";
import GenAiInfo from "./pages/GenAiInfo";
import Thankyou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs";
import BlogsDashboard from "./pages/Blogs/BlogsDashboard";
import BlogsContent from "./pages/Blogs/BlogsContents";
import Event from "./pages/Events/Event";

import LoginDash from "./ArcisAdmin/pages/LoginDash";
import Reset from "./ArcisAdmin/pages/ForgotPassword/Reset";
import Dashboard from "./ArcisAdmin/pages/Dashboard/Dashboard";
import OtpVerification from "./ArcisAdmin/pages/OTP/OtpVerification";
import CTA from "./pages/CTA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Solutions from "./pages/Solution/Solutions";

function App() {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
}

function InnerApp() {
  const location = useLocation();
  const hideHeader = location.pathname.startsWith("/admin");
  const SHOW_EVENT_BANNER = true; // Toggle this to show/hide the event banner

  return (
    <>
      {!hideHeader && <Header showEvent={SHOW_EVENT_BANNER} />}
      <Box
        pt={
          hideHeader
            ? "0"
            : SHOW_EVENT_BANNER
            ? { base: "150px", md: "150px" }
            : { base: "100px", md: "100px" }
        }
      >
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/s-series/:productId" element={<Products />} />
          <Route path="/solution/:solutionId" element={<Solutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-choose-arcisai" element={<WhyArcisAI />} />
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/blog-thank-you" element={<Thankyou />} />
          <Route
            path="/blog"
            element={
              <>
                <BlogsDashboard />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:urlWords"
            element={
              <>
                <BlogsContent />
              </>
            }
          />
          {/* <Route
            path="/"
            element={
              <>
                <Event />
                <Landing />
                <ProductInfo />
                <MiddlePart />
                <GenAiInfo />
                <CTA />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <BlogsDashboard />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:urlWords"
            element={
              <>
                <BlogsContent />
              </>
            }
          /> */}
          {/* -----Admin Routes------ */}
          <Route path="/admin" element={<LoginDash />} />
          <Route path="/admin/reset" element={<Reset />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/verify" element={<OtpVerification />} />
        </Routes>
      </Box>
      {!hideHeader && <Footer />}
    </>
  );
}

export default App;
