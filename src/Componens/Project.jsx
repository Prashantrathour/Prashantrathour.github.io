import React from "react";
import { Box, Image, Flex, Text, Link, Heading, useColorMode } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub, AiFillProject } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
import image from "../Componens/Images/project/Screenshot (715).png";
import image2 from "../Componens/Images/project/Screenshot (750).png";
import "../Componens/Home.module.css";
import Githubcalender from "./Githubcalender";
import theme from "./theme";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { coolclothes_images, healthcare_images, myntra_images, nykaa_images, tradehub } from "./Images/project/tradehub";

const StyledProject = styled(VerticalTimelineElement)`
  &&& {
    .vertical-timeline-element-content {
      border: none;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      font-weight: 800;
    }

    &:hover {
      .vertical-timeline-element-content {
        transform: translateY(-5px);
      }
    }
  }
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  transition: transform 0.3s ease;
  font-family: "Montserrat", sans-serif;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ViewProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
  transition: opacity 0.3s ease;
  font-family: "Montserrat", sans-serif;
  &:hover {
    opacity: 0.8;
  }
`;

const LiveDeployedLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Project = () => {
  const projects = [
    {
      title: "Tradehub",
      description: "This web application allows users to sign up, log in, create a demat account, maintain a portfolio, buy and sell stocks. The platform is built with React, Redux, JSON Server, Chakra UI, CSS, HTML, and JavaScript In backend Nodejs express mongoDb for user Authentication we used jwt,bcrypt and firebase.",
      techStack: "React, Redux, Chakra UI, CSS,Tailwin css, HTML,JavaScript,Mondodb,express,nodejs,",
      duration: "5 Days",
      images:tradehub, // Replace with the actual image URL or import the image
      viewProjectLink: "https://github.com/Prashantrathour/stoic-sack-3017",
      liveDeployedLink: "https://tradehub.netlify.app/",
      Date:"june-2023"
    },
    {
      title: "Health care Hospital",
      description: "This project is an online platform for consulting with doctors and making appointments in a healthcare hospital. The platform is built with React, Redux, JSON Server, Chakra UI, CSS, HTML, and JavaScript.",
      techStack: " React, Redux, JSON Server, Chakra UI, CSS, HTML, and JavaScript",
      duration: "5 Days",
      images: healthcare_images, // Replace with the actual image URL or import the image
      viewProjectLink: "https://github.com/Prashantrathour/ashamed-rainstorm-9299",
      liveDeployedLink: "https://helthcarehopital.vercel.app/",
      Date:"May-2023"
    },
    {
      title: "Myntra.com",
      description: "Cloning Myntra Website with my unique logo and name which is Infinity. Myntra is a Indian e-commerce which deal in fashion and clothing marketing and captured huge market.",
      techStack: "React, JavaScript, HTML, CSS, api , react-router , json-server chakra-ui",
      duration: "5 days",
      images:myntra_images,// Replace with the actual image URL or import the image
      viewProjectLink: "https://github.com/Prashantrathour/premium-grade-140",
      liveDeployedLink: "https://prashantinfinity.netlify.app",
      Date:"April-2023"
    },
    {
      title: "Koovs.com",
      description: "Online shopping for women and men made easy at Koovs. Buy clothes and footwear online from latest collection of fashion apparel, accessories & more",
      techStack: " JavaScript, HTML, CSS, api ,json-server",
      duration: "Oct 2022 - Present",
      images:coolclothes_images,
      viewProjectLink: "https://github.com/Prashantrathour/deeply-time-4287",
      liveDeployedLink: "https://storied-gumption-752ad0.netlify.app/index.html",
      Date:"March-2023"
    },
    {
      title: "Nykaa.com",
      description: "Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.",
      techStack: " JavaScript, HTML, CSS, api ,json-server",
      duration: "Oct 2022 - Present",
      images:nykaa_images, // Replace with the actual image URL or import the image
      viewProjectLink: "https://github.com/Prashantrathour/deeply-time-4287",
      liveDeployedLink: "https://shimmering-sorbet-d86e03.netlify.app/index.html",
      Date:"Fab-2023"
    },
    // Add more projects here
  ];
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };
  const AnimatedText = motion(Text);
  const { colorMode, toggleColorMode} = useColorMode();
  const color=colorMode=="light"?"black":'white'
  console.log(colorMode,"------color")
  return (
    <Box id="projects" position="relative" mt={20}>
    <Box width="100%" textAlign="center" p={5} color={colorMode === "light" ? "black" : "white"}>
      <Heading fontFamily="Proxima Nova, Arial, sans-serif" fontSize="6xl">
        My Projects
      </Heading>
    </Box>
    <Flex justifyContent="center" alignItems="center">
      <Box width="100%" color={["black", "black", "black", color]}>
        <VerticalTimeline animate={true} lineColor={colorMode === "light" ? "rgb(33, 150, 243)" : "white"}>
          {projects.map((project, index) => (
            <StyledProject key={index}
                
                className="vertical-timeline-element--work "
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AiFillProject />}
                date={project.Date}>
              <Box className="project-card">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} interval={5000} stopOnHover={false} swipeable={true}>
                    {project?.images?.map((image, imageIndex) => (
                      <div key={imageIndex}>
                    
                        <StyledImage border={"1px solid red"} src={image} alt={project.title} />
                      </div>
                    ))}
                  </Carousel>
                </motion.div>
                <Box marginTop="20px" style={{ color: "black" }} fontWeight="800">
                  <motion.h3 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Text className="project-title" fontFamily="Montserrat, sans-serif">
                      {project.title}
                    </Text>
                  </motion.h3>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Text className="project-description" fontFamily="Montserrat, Arial, sans-serif">
                      {project.description}
                    </Text>
                  </motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Text className="project-tech-stack" fontFamily="Montserrat, Arial, sans-serif">
                      Tech Stack: {project.techStack}
                    </Text>
                  </motion.p>
                  <ProjectLinks>
                    <ViewProjectLink onClick={() => openLinkInNewTab(project.viewProjectLink)} className="project-github-link">
                      <AiFillGithub style={{ marginRight: "5px" }} /> View Project
                    </ViewProjectLink>
                    <LiveDeployedLink onClick={() => openLinkInNewTab(project.liveDeployedLink)} className="project-deployed-link">
                      <RiExternalLinkLine style={{ marginRight: "5px" }} /> Live
                    </LiveDeployedLink>
                  </ProjectLinks>
                </Box>
              </Box>
            </StyledProject>
          ))}
        </VerticalTimeline>
      </Box>
    </Flex>
    <Box m="10">
        <Githubcalender/>
      </Box>
  </Box>
);

};

export default Project;
