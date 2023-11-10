import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import image from "../Componens/Images/project/10798281_19362653_copy-removebg-preview.png";
import style from "./Home.module.css";
import styled from "styled-components";
import { WindupChildren } from "windups";
import { FiDownload } from "react-icons/fi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import resume from "../Componens/Images/project/pdf/Prashant-Rathour-Resume.pdf";

import { saveAs } from "file-saver";
import theme from "./theme";
import { SiHellofresh } from "react-icons/si";
const HeroPage = () => {
  const [showText, setShowText] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <DIV>
      <Box
        id="home"
        color={colorMode == "light" ? theme.colors.dark : theme.colors.bright}
        py={20}
        px={10}
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        position="relative" // Add this line
        className="home"
      >
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Portfolio
          </Heading>
          <Text
            fontSize="3xl"
            fontWeight={"800"}
            mb={6}
            color={colorMode == "light" ? "#0D74FF" : "rgb(233, 78, 27)"}
          >
            <WindupChildren>
              {"Prashant Rathour "}
              {"(Full Stack"} <em>{"Web"}</em> {"Developer!)"}
            </WindupChildren>
          </Text>
          <Text mb={4}>
            {/* I'm a&nbsp; */}
            <Typewriter
              words={[
                "Full Stack Web Developer.",
                "Passionate Coder.",
                "Tech Enthusiast.",
              ]}
              loop={true}
              cursor
              cursorStyle="__"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorBlinking={true}
            />
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Flex
            justifyContent={"space-around"}
            direction={["column-reverse", "column-reverse", "row", "row"]}
            gap={"1%"}
          >
            <Box
              bg="white"
              color="gray.800"
              py={4}
              px={6}
              rounded="md"
              shadow="md"
              display="inline-block"
              className={style.style}
              maxW={["100%", "80%", "60%", "50%"]}
              alignSelf={"center"}
            >
              <Heading as="h3" size="50px" mb={2}>
                <span>
                  {/* <SiHellofresh />{" "} */}
                  {"🖐"}
                </span>{" "}
                Hi,
              </Heading>
              {showText && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Text id="user-detail-name" mb={4}>
                    I'm Prashant Rathour&nbsp;
                    <Typewriter
                      words={[
                        "Full Stack Web Developer.",
                        "Passionate Coder.",
                        "Tech Enthusiast.",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="__"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursorBlinking={true}
                    />
                  </Text>
                  <span id="user-detail-intro">
                    Passionate{" "}
                    <span style={{ fontWeight: 600, color: "#72351C" }}>
                      Full Stack Web Developer
                    </span>{" "}
                    skilled in MERN stack, JavaScript, React, and Express.js. Swift mastery of new tech stacks, including Generative AI. Excellent problem-solving and communication aptitudes. Collaborative and adaptable team player.
                  </span>
                </motion.div>
              )}
              <motion.button
                whileTap={{ scale: 0.9 }}
                bg="gray.800"
                color="white"
                px={8}
                py={4}
                rounded="md"
                shadow="lg"
                fontSize="md"
                mt={4}
                // onClick={handleDownload}
                id="resume-button-2"
              >
                <a
                  id="resume-link-2"
                  href={resume}
                  download
                  // textAlign="left"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1cUEsLyp-gXO2SihaTYf16W2CyhGviVFx/view?usp=drive_link"
                    )
                  }
                >
                  <Flex
                    className="btn"
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"5px"}
                  >
                    <Text>Resume </Text>
                    <Stack>
                      <FiDownload />
                    </Stack>
                  </Flex>
                </a>
              </motion.button>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              className="photodiv"
              boxSizing="border-box"
            >
              <motion.div
                initial={{ opacity: 0, translateX: -100 }} // Adjust translateX value
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                // whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  objectFit={"cover"}
                  maxH={["480px", "400px", "350px", "330px"]}
                  src={image}
                  alt="Photo"
                  boxSize="490px"
                  m={2}
                />
              </motion.div>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </DIV>
  );
};

export default HeroPage;

const DIV = styled.div`


  .btn {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-top: 10px;
  }

  .btn:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .btn:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  .photodiv {
    box-shadow: #ff00c8;
  }
`;
