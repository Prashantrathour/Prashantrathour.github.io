import "./App.css";
import { Box, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
// import Navbar from "./Componens/Navbar";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import AllRoutes from "./Componens/All Routes/AllRoutes";
import Particles from "react-particles";
import particles from "./Componens/particles";
import { loadFull } from "tsparticles";
import Home from "./Componens/Piediv";


import About from "./Componens/About.jsx";
import Skills from "./Componens/Skills";
// import { Navbar } from "./pages/Navbar";

import { Navbar } from "./pages/Navbar";
import ContactPage from "./Componens/Contact";
import HeroPage from "./Componens/Heropage";
import Footer from "./pages/Footer";
import Example from "./Componens/slides";
import Project from "./Componens/Project";


const handleinit = async (main) => {
  await loadFull(main);
};
function App() {
  const bgColor = useColorModeValue('bright.100', 'dark.100');
  return (
    <Box className="App">
      <Navbar />

      <Box >
        {/* <AllRou`tes /> */}
        <HeroPage/>
        <About />
        <Skills />
        <Project />

        <ContactPage />
      
        <Footer/>
    
      </Box>
    
    </Box>
  );
}

export default App;
