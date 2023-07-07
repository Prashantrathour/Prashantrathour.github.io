import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Link as ChakraLink,
  Collapse,
  VStack,
  Text,
  Button,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { color, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ColorModeSwitcher from "../Componens/Colormodeswicher";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";
import resume from "../Componens/pdf/Prashant_rathour_Resume.pdf";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [active, setActive] = React.useState("Home");
  const [visible, setVisible] = React.useState(true);
  const MotionBox = motion(Box);
  const handleDownload = () => {
    const fileUrl =
      "https://prashantrathour.github.io/Prashant_rathour_Resume.pdf"; // Replace with the actual URL of the
    const atag = document.createElement("a");
    atag.href = fileUrl;
    atag.setAttribute("download", "Prashant_rathour_Resume.pdf");
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <DIV>
    <Flex
     id="nav-menu"
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bgGradient="linear(to-l, rgb(16, 169, 240), rgb(233,78,27))"
      color={"#ffffff"}
      fontWeight={600}
      boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      // background= "#ffffff"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold" color={"#fff"}>
          Prashant
        </Text>
       
      </Box>
      <HStack display={{ base: "none", md: "flex" }} spacing="1rem">
        <NavLink  to="home" className="nav-link home"  >Home</NavLink>
        <NavLink  to="about" className="nav-link about">About</NavLink>
        <NavLink className="nav-link skills"  to="skills"><span>Skills</span></NavLink>
        <NavLink nav-link projects to="projects">Projects</NavLink>
        <NavLink className="nav-link contact"    to="contact" >Contact</NavLink>
        
       <Box  className="nav-link resume" >
            <Button
           id="resume-button-1"
              variant={"unstyled"}
            >
              <a
                id="resume-link-1"
                href={resume}
                download
                textAlign="left"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cUEsLyp-gXO2SihaTYf16W2CyhGviVFx/view?usp=drive_link"
                  )
                }
              >
              <Flex
                  
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"5px"} 
                >
                  <Text >Resume </Text>
                  <Stack>
                    <FiDownload  />
                  </Stack>
                </Flex>
              </a>
            </Button>
            </Box>
        <ColorModeSwitcher/>
      </HStack>
      <Box display={{ base: "block", md: "none" }} >
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant={"unstyled"}
        />
        <ColorModeSwitcher/>
      </Box>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        position="fixed"
        top="0"
        bottom="0"
        right="0"
        left="20%"
        zIndex="998"
        display={{ base: isOpen ? "block" : "none", md: "none" }}
      >
        <Flex  boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" justify="flex-end" padding="1rem"  bgGradient="linear(to-l, rgb(16, 169, 240), rgb(233,78,27))">
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            onClick={onClose}
            variant={"unstyled"}
          />
          {/* <ColorModeSwitcher/> */}
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <VStack
            direction="column"
            align="flex-start"
            padding="1rem"
            spacing="0.5rem"
            bgGradient="linear(to-l, rgb(16, 169, 240), rgb(233,78,27))"
            fontWeight={600}
            boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" 
          >
            <MobileNavLink to="home" onClose={onClose}>
              Home
            </MobileNavLink>
            <MobileNavLink to="about" onClose={onClose}>
              About
            </MobileNavLink>
            <MobileNavLink to="skills" onClose={onClose}>
              Skills
            </MobileNavLink>
            <MobileNavLink to="projects" onClose={onClose}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="contact" onClose={onClose}>
              Contact
            </MobileNavLink>
            <ChakraLink href="#resume" onClick={onClose}>
              {/* <Button id="resume-button-2" variant={"unstyled"} onClick={handleDownload}> */}
              <Box className="btn linkmob">
            <Button
           
          variant={"unstyled"}
              
            >
              <a
              
                href={resume}
                download
                textAlign="left"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cUEsLyp-gXO2SihaTYf16W2CyhGviVFx/view?usp=drive_link"
                  )
                }
              >
              <Flex
                  
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"5px"}
                >
                  <Text >Resume </Text>
                  <Stack>
                    <FiDownload  />
                  </Stack>
                </Flex>
              </a>
            </Button>
            </Box>
              
              {/* </Button> */}
            </ChakraLink>
          </VStack>
        </Collapse>
      </MotionBox>
    </Flex>
    </DIV>
  );
};

const NavLink = ({ to, children }) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-60}
    duration={500}
  >
    <ChakraLink className={`link nav-link ${to}`} as="span">{children}</ChakraLink>
  </ScrollLink>
);

const MobileNavLink = ({ to, children, onClose }) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-60}
    duration={500}
    onClick={onClose}
    boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    className="linkmob"
  >
    <ChakraLink cursor={"pointer"} fontWeight={"500"} as="span" >
      {children}
    </ChakraLink>
  </ScrollLink>
);


const DIV=styled.div`
 .navbar {
    transition: transform 0.3s ease-in-out;
    transform: translateY(-100%);
    
  }

  .navbar.visible {
    transform: translateY(0);
  }

  .active {
    color: #f70606;

    span {
      position: relative;
    }

    span::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: red;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover span::after,
    &:focus span::after {
      transform: scaleX(1);
    }
  }
.link:hover{
  color: rgb(233,78,27);
  text-decoration: none;
  fill: rgb(233,78,27) ;
}
.linkmob:hover{
  color:  rgb(16, 169, 240);
  text-decoration: none;
  fill:   rgb(233,78,27) ;
}

`
