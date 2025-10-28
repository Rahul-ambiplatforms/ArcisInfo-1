// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import ProductInfo from "./pages/ProductInfo";
import MiddlePart from "./pages/MiddlePart";
import GenAiInfo from "./pages/GenAiInfo";
import Thankyou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs";
import BlogsDashboard from "./pages/Blogs/BlogsDashboard";
import BlogsContent from "./pages/Blogs/BlogsContents";

import LoginDash from "./ArcisAdmin/pages/LoginDash";
import Reset from "./ArcisAdmin/pages/ForgotPassword/Reset";
import Dashboard from "./ArcisAdmin/pages/Dashboard/Dashboard";
import OtpVerification from "./ArcisAdmin/pages/OTP/OtpVerification";

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

  return (
    <>
      {!hideHeader && <Header />}
      <Box pt={hideHeader ? "0" : { base: "12", md: "2" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <ProductInfo />
                <MiddlePart />
                <GenAiInfo />
                <Footer />
              </>
            }
          />
          <Route path="/thank-you" element={<Thankyou />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogsDashboard />} />
          <Route path="/blog/:urlWords" element={<BlogsContent />} />
          {/* -----Admin Routes------ */}
          <Route path="/admin" element={<LoginDash />} />
          <Route path="/admin/reset" element={<Reset />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/verify" element={<OtpVerification />} />
        </Routes>
      </Box>
      {/* Optional: Footer outside routes if needed globally */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
