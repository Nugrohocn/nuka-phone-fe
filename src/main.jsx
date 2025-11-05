import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
