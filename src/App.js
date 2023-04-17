import logo from "./logo.svg";
import "./App.css";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Navbar from "./Componens/Navbar";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import AllRoutes from "./Componens/All Routes/AllRoutes";
import Particles from "react-particles";
import particles from "./Componens/particles";
import { loadFull } from "tsparticles";
const handleinit=async(main)=>{
  await loadFull(main)
  }
function App() {
  return (
    <Box className="App">
     
      <AllRoutes />
    </Box>
  );
}

export default App;
