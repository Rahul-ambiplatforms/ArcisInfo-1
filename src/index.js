import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#171717",
      },
      html: {
        bg: "#171717",
      },
    },
  },
  fonts: {
    heading: "'WixMadeforDisplay', sans-serif",
    body: "'WixMadeforDisplay', sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
