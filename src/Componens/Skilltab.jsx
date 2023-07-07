import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
  Button,
} from "@chakra-ui/react";
import { SiJavascript, SiTypescript } from "react-icons/si";
import styled from "styled-components";
import { FaHtml5, FaCss3, FaJs, FaReact, FaCode } from 'react-icons/fa';
import { SiRedux, SiCypress, SiMongodb, SiExpress, SiNodedotjs, SiPostman } from 'react-icons/si';
import {TbBrandVscode} from "react-icons/tb"
import resume from "../Componens/pdf/Prashant_rathour_Resume.pdf";

const SkillsTabs = () => {


    const technicalSkills = [
        { name: 'HTML', icon: FaHtml5,color:"#E34F26" },
        { name: 'CSS', icon: FaCss3,color:"#1572B6" },
        { name: 'JavaScript', icon: FaJs,color:"#e0c632" },
        { name: 'React', icon: FaReact,color:"#61DAFB" },
        { name: 'Redux', icon: SiRedux,color:"#764ABC" },
        { name: 'React Testing', icon: FaCode },
        { name: 'Cypress Testing', icon: SiCypress,color:"#000000" },
        { name: 'Mongo Database', icon: SiMongodb,color:"#82C341" },
        { name: 'Express', icon: SiExpress,color:"#000000" },
        { name: 'Node.js', icon: SiNodedotjs,color:"#339933" },
        { name: 'Postman', icon: SiPostman,color:"#FF6C37" },
        { name: 'VsCode', icon: TbBrandVscode,color:"#1eb2ec" },
        { name: 'Type Script', icon: SiTypescript,color:"#1eb2ec" },
      ];
  return (
    <DIV>
      <Box>
        <Tabs isLazy colorScheme="green" variant="enclosed">
          <TabList className="tab-list">
            <Tab className="tab">Technical Skills</Tab>
            <Tab className="tab">Soft Skills</Tab>
            <Tab className="tab">Education</Tab>
            <Tab className="tab">Download Resume</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="tab-panel">
              <List spacing={3} className="skills-list">


                {technicalSkills.map((skill)=>{
                    return(
                    <ListItem  >
                  <ListIcon as={skill.icon} color={skill.color} />{skill.name}
                </ListItem>    
                    )
                })}
                
                
              </List>
              
            </TabPanel>
            <TabPanel className="tab-panel">
              <ul className="skills-list">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Time Management</li>
                <li>Leadership</li>
              </ul>
            </TabPanel>
            <TabPanel className="tab-panel">
              <ul className="education-list">
                <li>
                  <Text as={"strong"}>Masai School, Bengaluru, India</Text>
                  <br />
                  Full Stack Web Development (Full Time)
                  <br />
                  Oct/2022 - Present
                </li>
                <li>
                   <Text as={"strong"}>Future Institute of Engineering and Technology, Bareilly
                  (U.P.)</Text>
                  <br />
                 B.Tech. (ME)
                  <br />
                  Aug/2016 – July/2020
                </li>
               
              </ul>
            </TabPanel>
            <TabPanel className="tab-panel">
              <Box>
            <Button
              id="resume-button-2"
              bgColor="#4375ff"
              color="#3e2723"
              fontSize="1.5em"
            >
              <a
                id="resume-link-2"
                href={resume}
                download
                textAlign="left"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cUEsLyp-gXO2SihaTYf16W2CyhGviVFx/view?usp=drive_link"
                  )
                }
              >
                Resume
              </a>
            </Button>
            </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </DIV>
  );
};

export default SkillsTabs;

const DIV = styled.div`
margin: 10px;
.education-list{
    width: 100%;
   min-height: fit-content;
    display: flex;
    justify-content: space-around;
    
 }


  width: 100%;
  height: 300px;
  .tab-list {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  .tab {
    font-weight: bold;
    font-size: 14px;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .tab:hover {
    background-color: #f5f5f5;
  }

  .tab[aria-selected="true"] {
    background-color: #e2e8f0;
  }

  .tab-panel {
    animation: fade 0.3s ease;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .skills-list,
  .education-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-list li,
  .education-list li {
    flex-basis: 30%;
    padding: 1px;
   
  }

  @media screen and (max-width: 768px) {
    .skills-list li,
    .education-list li {
      flex-basis: 40%;
    }
  }
`;
