import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App";
import SuspenseBoundary from "./components/ui/SuspenseBoundary";
import { GA_MEASUREMENT_ID } from "./constants";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import customTheme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize(GA_MEASUREMENT_ID);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <SuspenseBoundary>
        <App />
      </SuspenseBoundary>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
