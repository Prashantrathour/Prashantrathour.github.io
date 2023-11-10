// import {
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Box,
//   List,
//   ListItem,
//   ListIcon,
//   Text,
//   Button,
//   Stack,
//   Flex,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { SiJavascript, SiTypescript } from "react-icons/si";
// import styled from "styled-components";
// import { FaHtml5, FaCss3, FaJs, FaReact, FaCode } from 'react-icons/fa';
// import { SiRedux, SiCypress, SiMongodb, SiExpress, SiNodedotjs, SiPostman } from 'react-icons/si';
// import {TbBrandVscode} from "react-icons/tb"
// import resume from "../Componens/Images/project/pdf/Prashant-Rathour-Resume.pdf";
// import { FiDownload } from "react-icons/fi";
// import { technicalSkills } from "./Skills";

// const SkillsTabs = () => {
//   return (
//     <DIV>
//       <Box>
//         <Tabs isLazy colorScheme="green" variant="enclosed">
//           <TabList className="tab-list">
//             <Tab className="tab">Technical Skills</Tab>
//             <Tab className="tab">Soft Skills</Tab>
//             <Tab className="tab">Education</Tab>
//             <Tab className="tab">Download Resume</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel className="tab-panel">
//               <List spacing={2} className="skills-list">


//                 {technicalSkills.map((skill,i)=>{
//                     return(
//                     <ListItem  key={i} >
//                   <ListIcon key={i} as={skill.icon} color={skill.color} />{skill.name}
//                 </ListItem>    
//                     )
//                 })}
                
                
//               </List>
              
//             </TabPanel>
//             <TabPanel className="tab-panel">
//               <ul className="skills-list">
//                 <li>Communication</li>
//                 <li>Teamwork</li>
//                 <li>Problem Solving</li>
//                 <li>Adaptability</li>
//                 <li>Time Management</li>
//                 <li>Leadership</li>
//               </ul>
//             </TabPanel>
//             <TabPanel className="tab-panel">
//               <ul className="education-list">
//                 <li>
//                   <Text as={"strong"}>Masai School, Bengaluru, India</Text>
//                   <br />
//                   Full Stack Web Development (Full Time)
//                   <br />
//                   Oct/2022 - Present
//                 </li>
//                 <li>
//                    <Text as={"strong"}>Future Institute of Engineering and Technology, Bareilly
//                   (U.P.)</Text>
//                   <br />
//                  B.Tech. (ME)
//                   <br />
//                   Aug/2016 – July/2020
//                 </li>
               
//               </ul>
//             </TabPanel>
//             <TabPanel className="tab-panel">
//               <Box>
//               <motion.button
//                 // whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 bg="gray.800"
//                 color="white"
//                 px={8}
//                 py={4}
//                 rounded="md"
//                 shadow="lg"
//                 fontSize="md"
//                 mt={4}
//                 // onClick={handleDownload}
//                 id="resume-button-2"
                
//               >
//                   <a
//                 id="resume-link-2"
//                 href={resume}
//                 download
//                 // textAlign="left"
//                 onClick={() =>
//                   window.open(
//                     "https://drive.google.com/file/d/1cUEsLyp-gXO2SihaTYf16W2CyhGviVFx/view?usp=drive_link"
//                   )
//                 }
//               >
//                 <Flex
//                   className="btn"
//                   justifyContent={"center"}
//                   alignItems={"center"}
//                   gap={"5px"}
                 
//                 >
//                   <Text>Resume </Text>
//                   <Stack>
//                     <FiDownload />
//                   </Stack>
//                 </Flex></a>
//               </motion.button>
         
//             </Box>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </DIV>
//   );
// };

// export default SkillsTabs;

// const DIV = styled.div`
// margin: 10px;
// .education-list{
//     width: 100%;
//    min-height: fit-content;
//     display: flex;
//     justify-content: space-around;
    
//  }


//   width: 100%;
//   height: 300px;
//   .tab-list {
//     display: flex;
//     justify-content: space-between;
//     padding: 0;
//   }

//   .tab {
//     font-weight: bold;
//     font-size: 14px;
//     padding: 12px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .tab:hover {
//     background-color: #f5be0b;
//   }

//   .tab[aria-selected="true"] {
//     background-color: #e2e8f0;
//   }

//   .tab-panel {
//     animation: fade 0.3s ease;
//   }

//   @keyframes fade {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }

//   .skills-list,
//   .education-list {
//     display: flex;
//     flex-wrap: wrap;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .skills-list li,
//   .education-list li {
//     flex-basis: 25%;
//     padding: 1px;
   
//   }

  
//   @media screen and (max-width: 900px) {
//     .skills-list li,
//     .education-list li {
//       flex-basis: 20%;
//     }
//   }
//   @media screen and (max-width: 768px) {
//     .skills-list li,
//     .education-list li {
//       flex-basis: 25%;
//     }
//   }
//   .btn {
//     padding: 0.6em 2em;
//     border: none;
//     outline: none;
//     color: rgb(255, 255, 255);
//     background: #111;
//     cursor: pointer;
//     position: relative;
//     z-index: 0;
//     border-radius: 10px;
//     user-select: none;
//     -webkit-user-select: none;
//     touch-action: manipulation;
//     margin-top: 10px;
//   }

//   .btn:before {
//     content: "";
//     background: linear-gradient(
//       45deg,
//       #ff0000,
//       #ff7300,
//       #fffb00,
//       #48ff00,
//       #00ffd5,
//       #002bff,
//       #7a00ff,
//       #ff00c8,
//       #ff0000
//     );
//     position: absolute;
//     top: -2px;
//     left: -2px;
//     background-size: 400%;
//     z-index: -1;
//     filter: blur(5px);
//     -webkit-filter: blur(5px);
//     width: calc(100% + 2px);
//     height: calc(100% + 2px);
//     animation: glowing-button-85 20s linear infinite;
//     transition: opacity 0.3s ease-in-out;
//     border-radius: 10px;
//   }

//   @keyframes glowing-button-85 {
//     0% {
//       background-position: 0 0;
//     }
//     50% {
//       background-position: 400% 0;
//     }
//     100% {
//       background-position: 0 0;
//     }
//   }

//   .btn:after {
//     z-index: -1;
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: #222;
//     left: 0;
//     top: 0;
//     border-radius: 10px;
//   }
 

// `;
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
  Stack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import styled from "styled-components";

import { FiDownload } from "react-icons/fi";
import resume from "../Componens/Images/project/pdf/Prashant-Rathour-Resume.pdf";
import { technicalSkills } from "./Skills";

const SkillsTabs = () => {
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
                <Box width="100%">
              <List spacing={2} className="skills-list">
                {technicalSkills.map((skill, i) => (
                  <ListItem key={i}>
                    <ListIcon key={i} as={skill.icon} color={skill.color} />{skill.name}
                  </ListItem>
                ))}
              </List></Box>
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
                  <Text as={"strong"}>
                    Future Institute of Engineering and Technology, Bareilly (U.P.)
                  </Text>
                  <br />
                  B.Tech. (ME)
                  <br />
                  Aug/2016 – July/2020
                </li>
              </ul>
            </TabPanel>
            <TabPanel className="tab-panel">
              <Box>
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
                >
                  <a
                    href={resume}
                    download
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

  width: 100%;
 
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
    background-color: #f5be0b;
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
    flex-basis: 25%;
    padding: 1px;
  }

  @media screen and (max-width: 900px) {
    .skills-list li,
    .education-list li {
      flex-basis: 33%; // Adjusted for smaller screens
    }
  }

  @media screen and (max-width: 550px) {
    .skills-list li,
    .education-list li {
      flex-basis: 50%; // Adjusted for even smaller screens
    }
  }

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
`;
