import React from "react";
import MegaNavbar from "./Navbar";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Box, Heading, VStack } from "@chakra-ui/react";
import particles from "./particles";
import style from "./Home.module.css";
import Map from "./Map";
import Text from "./Text";


const handleinit = async (main) => {
  await loadFull(main);
};
function Home() {
  const text1 = "Hi,";
  const text2 = "I'm";
  const text3 = "Prashant Rathour";
  console.log(style);
  return (
    <>
      <MegaNavbar />
      <Box className={style.main}>
        <Particles id="particles" options={particles} init={handleinit} />
        {/* <Box>
   <Text Text={text1}/>
   <Text Text={text2}/>
   <Text Text={text3}/>
   
   </Box> */}
        <Box  mt={10} m={10}>
          <Heading
            className={style.style}
            textAlign={"start"}
            textColor={"white"}
          >
            <Text float={"left"} Text={text1} />
            <Text float={"left"} Text={text2} />
            {/*  */}
            <Text float={"left"} Text={text3} />
          </Heading>
        </Box>
      </Box>
      <Box width={"100px"}> 
  
      </Box>
     
    </>
  );
}

export default Home;
