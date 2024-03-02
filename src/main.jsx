import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App";
import { GA_MEASUREMENT_ID } from "./constants";
import "./i18n";
import "./index.css";
import customTheme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize(GA_MEASUREMENT_ID);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
