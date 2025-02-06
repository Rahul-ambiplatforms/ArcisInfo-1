import logo from "./logo.svg";
import "./App.css";

import Landing from "./pages/Landing";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import GenAiInfo from "./pages/GenAiInfo";
import MiddlePart from "./pages/MiddlePart";
import ProductInfo from "./pages/ProductInfo";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Box pt={{ base: "12", md: "2" }}>
        <Landing />
        <ProductInfo />
        <MiddlePart />
        <GenAiInfo />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
