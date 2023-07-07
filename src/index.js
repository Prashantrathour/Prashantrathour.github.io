import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CSSReset, ChakraProvider, ColorModeScript, } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom'
import { IconContext } from "react-icons";
import theme from "./Componens/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
     <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      {" "}
   
      <App />
    </ChakraProvider>
  </BrowserRouter>
);


reportWebVitals();
