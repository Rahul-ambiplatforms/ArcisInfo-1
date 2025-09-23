// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import ProductInfo from "./pages/ProductInfo";
import MiddlePart from "./pages/MiddlePart";
import GenAiInfo from "./pages/GenAiInfo";
import Thankyou from "./pages/Thankyou";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box pt={{ base: "12", md: "2" }}>
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
        </Routes>
      </Box>
      {/* Optional: Footer outside routes if needed globally */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
