// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";

import Header from "./Components/Header/Header";
import HomeDashboard from "./pages/HomePage/HomeDashboard";
import Products from "./pages/Product/Products";
import Solutions from "./pages/Solution/Solutions";
import Series from "./pages/Series/Series";
import AboutUs from "./pages/AboutUs/AboutUs";
import WhyArcisAI from "./pages/WhyArcisAI/WhyArcisAI";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
// import PageTransition from "./Components/PageTransition";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

// import Landing from "./pages/Landing";
// import ProductInfo from "./pages/ProductInfo";
// import MiddlePart from "./pages/MiddlePart";
// import GenAiInfo from "./pages/GenAiInfo";
import Thankyou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs/ContactUs";
import BlogsDashboard from "./pages/Blogs/BlogsDashboard";
import BlogsContent from "./pages/Blogs/BlogsContents";
// import Event from "./pages/Events/Event";

import LoginDash from "./ArcisAdmin/pages/LoginDash";
import Reset from "./ArcisAdmin/pages/ForgotPassword/Reset";
import Dashboard from "./ArcisAdmin/pages/Dashboard/Dashboard";
import OtpVerification from "./ArcisAdmin/pages/OTP/OtpVerification";
// import CTA from "./pages/CTA";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// To disable animations, comment the import above and uncomment the line below:
const PageTransition = ({ children }) => <>{children}</>;

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
  const SHOW_EVENT_BANNER = false; 

  return (
    <>
      {/* <CustomCursor /> */}
      {!hideHeader && <Header showEvent={SHOW_EVENT_BANNER} />}
      <ScrollToTop />
      <Box
        pt={
          hideHeader
            ? "0"
            : SHOW_EVENT_BANNER
            ? { base: "150px", md: "150px" }
            : { base: "100px", md: "100px" }
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomeDashboard />
                </PageTransition>
              }
            />
            <Route
              path="/:seriesId"
              element={
                <PageTransition>
                  <Series />
                </PageTransition>
              }
            />
            <Route
              path="/s-series/:productId"
              element={
                <PageTransition>
                  <Products />
                </PageTransition>
              }
            />
            <Route
              path="/eco-series/:productId"
              element={
                <PageTransition>
                  <Products />
                </PageTransition>
              }
            />
            <Route
              path="/solution/:solutionId"
              element={
                <PageTransition>
                  <Solutions />
                </PageTransition>
              }
            />
            <Route
              path="/about-us"
              element={
                <PageTransition>
                  <AboutUs />
                </PageTransition>
              }
            />
            <Route
              path="/why-choose-arcisai"
              element={
                <PageTransition>
                  <WhyArcisAI />
                </PageTransition>
              }
            />
            <Route
              path="/contact-us"
              element={
                <PageTransition>
                  <ContactUs />
                </PageTransition>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <PageTransition>
                  <TermsOfService />
                </PageTransition>
              }
            />
            <Route
              path="/thank-you"
              element={
                // <PageTransition>
                <Thankyou />
                //  </PageTransition>
              }
            />
            <Route
              path="/blog-thank-you"
              element={
                <PageTransition>
                  <Thankyou />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <BlogsDashboard />
                  <Footer />
                </PageTransition>
              }
            />
            <Route
              path="/blog/:urlWords"
              element={
                <PageTransition>
                  <BlogsContent />
                </PageTransition>
              }
            />
            {/* -----Admin Routes------ */}
            <Route
              path="/admin"
              element={
                <PageTransition>
                  <LoginDash />
                </PageTransition>
              }
            />
            <Route
              path="/admin/reset"
              element={
                <PageTransition>
                  <Reset />
                </PageTransition>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              }
            />
            <Route
              path="/admin/verify"
              element={
                <PageTransition>
                  <OtpVerification />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                // <PageTransition>
                <NotFound />
                // </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Box>
      {!hideHeader && <Footer />}
    </>
  );
}

export default App;
