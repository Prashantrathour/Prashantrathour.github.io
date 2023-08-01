import React from 'react';
import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import "./footer.css"
import { BsHeartFill } from 'react-icons/bs';
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
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/prashant-rathour-web-developer">
      <span><Link
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
              // whileHover={{ scale: 1.1 }}
            />
          </Link></span>
          
          
        </a></li>

      <li className="social-icon__item"><a className="social-icon__link" href="#">
     <span> <Link href="mailto:prathour884@gmail.com" isExternal>
            <IconButton
              aria-label="Email"
              icon={<FiMail />}
              size="lg"
              colorScheme="blue"
              variant="ghost"
              mx={2}
              // whileHover={{ scale: 1.1 }}
            />
          </Link></span>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
      <span><Link href="https://github.com/Prashantrathour" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              colorScheme="blue"
              variant="ghost"
              mx={2}
              // whileHover={{ scale: 1.1 }}
            />
          </Link></span>
        </a></li>
    </ul>

    <Flex  justify={"center"} wrap={"wrap"}>
    <Text>&copy;2023 Prashant Rathour | Created By Prashant Rathour </Text><Box mt={5} ml={2} ><BsHeartFill fill='red'/></Box></Flex>
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


