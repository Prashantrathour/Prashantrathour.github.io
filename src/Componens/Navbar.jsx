import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import "./Nav.module.css"

// const NavLink = ({ children, ...props }) => (
//   <Text
//     mb={{ base: 2, sm: 0 }}
//     mr={{ base: 0, sm: 6 }}
//     display="block"
//     {...props}
//   >
//     {children}
//   </Text>
// );

const MegaNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState("Home");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ base: 4, sm: 6 }}
      bg="#0a192f"
      color="white"
      boxShadow="dark-lg"
      p="6"
   className="nav"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Prashant Rathour
        </Text>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
        />
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent={"space-around"}
      >
        <Flex width={"70%"} justifyContent={"space-between"}   display={{ base: isOpen ? "none" : "block", md: "flex" }}>
          <NavLink
          to={"/"}
            onClick={() => setActive("Home")}
            color={active === "Home" ? "red" : "gray.200"}
          >
            Home
          </NavLink>
          <NavLink
          to={"/about"}
            onClick={() => setActive("About")}
            color={active === "About" ? "white" : "gray.200"}
          >
            About
          </NavLink>
          <NavLink
          to={"/skills"}
            onClick={() => setActive("Projects")}
            color={active === "Projects" ? "white" : "gray.200"}
          >
            Skills
          </NavLink>
          <NavLink
          to={"/projects"}
            onClick={() => setActive("Projects")}
            color={active === "Projects" ? "white" : "gray.200"}
          >
            Projects
          </NavLink>
          <NavLink
          to={"/contect"}
            onClick={() => setActive("Projects")}
            color={active === "Projects" ? "white" : "gray.200"}
          >
            Contect
          </NavLink>
          <NavLink
          to={"#"}
            onClick={() => setActive("Resume")}
            color={active === "Resume" ? "white" : "gray.200"}
          >
            Resume
          </NavLink>
        </Flex>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.700">
          <DrawerCloseButton />
          <VStack spacing={4} align="stretch">
            <NavLink
              onClick={() => {
                setActive("Home");
                onClose();
              }}
              color={active === "Home" ? "white" : "gray.200"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                setActive("About");
                onClose();
              }}
              color={active === "About" ? "white" : "gray.200"}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => {
                setActive("About");
                onClose();
              }}
              color={active === "About" ? "white" : "gray.200"}
            >
              Skills
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setActive("Projects");
                onClose();
              }}
              color={active === "Projects" ? "white" : "gray.200"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setActive("Projects");
                onClose();
              }}
              color={active === "Projects" ? "white" : "gray.200"}
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => {
                setActive("Resume");
                onClose();
              }}
              color={active === "Resume" ? "white" : "gray.200"}
            >
              Resume
            </NavLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default MegaNavbar;
