import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
