import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import image from "../Componens/Images/project/profile.jpg";
import SkillsTabs from "./Skilltab";
import theme from "./theme";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box id="about" py={10} w="100%" className="about section">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w="100%"
        mx="auto"
        px={{ base: 4, md: 8 }}
        color={colorMode == "light" ? theme.colors.dark : theme.colors.bright}
      >
        <Box
          flex="1"
          pr={{ base: 0, md: 10 }}
          width={"-moz-fit-content"}
          fontFamily={"Montserrat, Arial, sans-serif"}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="xl" mb={6}>
              About Me
            </Heading>
            <Text
              id="user-detail-intro"
              fontSize="lg"
              mb={6}
              fontFamily={"Montserrat, Arial, sans-serif"}
            >
           
I'm Prashant Rathour, a passionate Full Stack Web Developer with expertise in front-end technologies like React, Redux, and Chakra UI, as well as back-end tools such as Node.js, Express.js, and MongoDB. I thrive on exploring different tech stacks and environments, constantly staying updated with the latest trends. My dedication to writing clean code and creating user-friendly web applications drives me. With a Bachelor's degree in Mechanical Engineering, I bring problem-solving skills and adaptability to my work. I'm now seeking opportunities to contribute my skills, knowledge, and passion to an organization that fosters growth and learning.
            </Text>
            {/* <Text fontSize="lg" fontFamily={"Montserrat, Arial, sans-serif"}>
            My coding journey began a few years ago when I printed my first "Hello world" message. Since then, I've been hooked on creating attractive and functional websites. I completed my Bachelor's degree in Mechanical Engineering from Future Institute of Engineering and Technology, Bareilly in 2020.
            </Text> */}
          
          </motion.div>

          <SkillsTabs />
        </Box>
        <Box
          display={"flex"}
          p={5}
          width={"-moz-fit-content"}
          justifyContent={"center"}
          top={-10}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="home-img"
              src={image}
              alt="Profile Image"
              borderRadius="full"
              boxSize="300px"
            />
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
