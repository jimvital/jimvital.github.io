import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

import App from "./App";

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  fonts: { heading: "Oswald", body: "Source Sans 3" },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
