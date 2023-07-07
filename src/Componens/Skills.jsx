import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaCode } from 'react-icons/fa';
import { SiRedux, SiCypress, SiMongodb, SiExpress, SiNodedotjs, SiPostman, SiTypescript } from 'react-icons/si';
import {TbBrandVscode} from "react-icons/tb"
import React, { useState } from "react"
import styled from 'styled-components';
import Piediv from './Piediv';
const Skill = ({ name, icon ,color}) => {
  const isReactIcon = icon === FaReact;

const { colorMode, toggleColorMode} = useColorMode();
  return (
    <Box className='skills-card'>
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        p={3}
        bg={colorMode=="light"?"gray.200":'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}
        color={colorMode=="light"?"black":' rgb(233,78,27)'}
        borderRadius="md"
       id='skills'
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        transition="transform 0.3s"
        _hover={{ transform: 'translateY(-5px)' }}
        overflow="hidden"
        width="150px"
        height="150px"
        // className='card skills-card'
        
      >
       <Box      className='skills-card'>
        <Box style={{
              display: 'inline-block',
              transform: `rotate(${isReactIcon ? '360' : '0'}deg)`,
              transition: 'transform 2s linear',
              transformOrigin: 'center'
            }}
       
            >
              
          <motion.span
           className="skills-card-img"
          >
            {React.createElement(icon, { size: 32,color })}
          </motion.span>
        </Box>
        <Text className="skills-card-name" mt={2} fontWeight="bold" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" >
          {name}
        </Text>
        </Box>
      </Box>
    </motion.div>
    </Box>
  );
};

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
  { name: 'TypeScript', icon: SiTypescript,color:"#1e70ec" },
];

const Skills = () => {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <DIV> 
       <Heading  fontFamily={"Proxima Nova, Arial, sans-serif"}  color={colorMode=="light"?"black":'radial-gradient(circle, #a82e63 0%, #3975b9 100%)'} ml="20px">Technical Skills</Heading>
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      maxWidth="100%"
      gap={10}
      m={5}
    >
    
      {technicalSkills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Skill name={skill.name} icon={skill.icon} color={skill.color||"blue"} />
        </motion.div>
      ))}
     
    </Box>
    <Piediv/>
    </DIV>
  );
};

export default Skills;
const DIV=styled.div`
 .card{
  -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
 } 

 

`