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
            <Text
              id="user-detail-intro"
              fontSize="lg"
              mb={6}
              fontFamily={"Montserrat, Arial, sans-serif"}
            >
           
           <Text fontSize="lg" mb={4}>
        Hi, I'm{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          Prashant Rathour
        </Text>
        , a former mechanical engineer turned full-stack web developer. My journey began with a "Hello World" program, and after 1.5 years in the mechanical industry, I transitioned into Information Technology.
      </Text>
      <Text fontSize="lg" mb={4}>
        I completed a{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          35-week full-stack web development course
        </Text>{" "}
        at{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          Masai School
        </Text>
        , gaining hands-on experience in both backend and frontend development. I also delved into <Text as="span" fontWeight="bold" color="#72351C">
          Generative AI and Prompt Engineering
        </Text>, empowering me to swiftly adapt to new tech stacks.
      </Text>
      <Text fontSize="lg" mb={4}>
        During this journey, I successfully delivered{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          over 6+ major projects
        </Text>
        , worked on{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          more than 20 mini-projects
        </Text>
        , and handled{" "}
        <Text as="span" fontWeight="bold" color="#72351C">
          3+ full-stack projects
        </Text>
        . My tech stack includes HTML, CSS, JavaScript, React, Redux, Chakra UI, Tailwind CSS, TypeScript, Express, Node.js, MongoDB, and JWT authentication. I further expanded my skills to Python, Django, and Angular, all thanks to Generative AI and Prompt Engineering.
      </Text>
      <Text fontSize="lg" mb={4}>
        I'm passionate about continuous learning and innovation, and I'm eager to contribute my expertise to impactful IT projects.
      </Text>
      <Text fontSize="lg">
        Let's collaborate and create innovative digital solutions together!
      </Text>
      </Text>
          
          </motion.div>

          <SkillsTabs />
        </Box>
        
      </Flex>
    </Box>
  );
};

export default About;
