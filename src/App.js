import "./App.css";
import { Box,useColorModeValue } from "@chakra-ui/react";

import { loadFull } from "tsparticles";



import About from "./Componens/About.jsx";
import Skills from "./Componens/Skills";


import { Navbar } from "./pages/Navbar";
import ContactPage from "./Componens/Contact";
import HeroPage from "./Componens/Heropage";
import Footer from "./pages/Footer";

import Project from "./Componens/Project";



function App() {
  
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
