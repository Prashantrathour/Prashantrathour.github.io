import React from 'react';
import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import "./footer.css"
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { ScrollLink } from 'react-scroll';
const Footer = () => {
  return (
    
    <Box boxSizing='border' mt={10} >
    <footer className="footer">
    <Box className="waves">
      <Box className="wave" id="wave1"></Box>
      <Box className="wave" id="wave2"></Box>
      <Box className="wave" id="wave3"></Box>
      <Box className="wave" id="wave4"></Box>
    </Box>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <Link
            href="https://www.linkedin.com/in/prashant-rathour-web-developer"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              colorScheme="blue"
              variant="ghost"
              mx={2}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          
          
        </a></li>
      {/* <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li> */}
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <Link href="mailto:prathour884@gmail.com" isExternal>
            <IconButton
              aria-label="Email"
              icon={<FiMail />}
              size="lg"
              colorScheme="blue"
              variant="ghost"
              mx={2}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <Link href="https://github.com/Prashantrathour" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              colorScheme="blue"
              variant="ghost"
              mx={2}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </a></li>
    </ul>
    {/* <ul className="menu">
      <NavLink to="home">Home<li className="menu__item"><a className="menu__link" href="#">Home</a></li></NavLink>
      <NavLink to="about"><li className="menu__item"><a className="menu__link" href="#">About</a></li></NavLink>
      <NavLink to="skills"><li className="menu__item"><a className="menu__link" href="#">Skill</a></li></NavLink>
      <NavLink to="projects"><li className="menu__item"><a className="menu__link" href="#">Project</a></li></NavLink>
      <NavLink to="contact"><li className="menu__item"><a className="menu__link" href="#">Contact</a></li></NavLink>

    </ul> */}
    <Flex  justify={"center"} wrap={"wrap"}>
    <p>&copy;2023 Prashant Rathour | Created By Prashant Rathour </p><Box mt={5} ml={2} ><BsHeartFill fill='red'/></Box></Flex>
  </footer>
    </Box>
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
    <Link as="span">{children}</Link>
  </ScrollLink>
);

export default Footer;


