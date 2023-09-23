import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function Piediv() {
  const { colorMode, toggleColorMode} = useColorMode();
  return (
    <DIV>
    <Box  color={colorMode=="light"?"black":'red'}>
      <Flex className="box7 reveal active" justifyContent={"center"}   m={10} wrap={"wrap"} >
        <Box className="box71" justify={"center"} color={colorMode=="light"?"black":'white'} >
          <Box className="pieContainer">
            <Box className="pieBackground"></Box>
            <Box id="pieSlice99_1" className="hold">
              <Box className="danny Col1"></Box>
            </Box>
            <Box id="pieSlice99_2" className="hold">
              <Box className="danny Col1"></Box>
            </Box>
            <Box className="stat-circle-cover" color={colorMode=="light"?"black":'red'}>
              <span className="stat-number">1500+</span>
            </Box>
          </Box>
          <Box className="box712">
            <span className="bold">Hours</span> of full stack coading
          </Box>
        </Box>

        <Box className="box71">
          <Box className="pieContainer">
            <Box className="pieBackground"></Box>
            <Box id="pieSlice99_1" className="hold">
              <Box className="danny Col2"></Box>
            </Box>
            <Box id="pieSlice99_2" className="hold">
              <Box className="danny Col2"></Box>
            </Box>
            <Box className="stat-circle-cover">
              <span className="stat-number">800+</span>
            </Box>
          </Box>
          <Box className="box712">
            <span className="bold">OJ and Leecode</span> problems solved
          </Box>
        </Box>

        <Box className="box71">
          <Box className="pieContainer">
            <Box className="pieBackground"></Box>
            <Box id="pieSlice99_1" className="hold">
              <Box className="danny Col3"></Box>
            </Box>
            <Box id="pieSlice99_2" className="hold">
              <Box className="danny Col3"></Box>
            </Box>
            <Box className="stat-circle-cover">
              <span className="stat-number">400+</span>
            </Box>
          </Box>
          <Box className="box712">
            <span className="bold">Git</span> commits
          </Box>
        </Box>

        <Box className="box71">
          <Box className="pieContainer">
            <Box className="pieBackground"></Box>
            <Box id="pieSlice99_1" className="hold">
              <Box className="danny Col4"></Box>
            </Box>
            <Box id="pieSlice99_2" className="hold">
              <Box className="danny Col4"></Box>
            </Box>
            <Box className="stat-circle-cover">
              <span className="stat-number">6</span>
            </Box>
          </Box>
          <Box className="box712">
            <span className="bold">Projects</span> Done
          </Box>
        </Box>

        <Box className="box71">
          <Box className="pieContainer">
            <Box className="pieBackground"></Box>
            <Box id="pieSlice99_1" className="hold">
              <Box className="danny Col5"></Box>
            </Box>
            <Box id="pieSlice99_2" className="hold">
              <Box className="danny Col5"></Box>
            </Box>
            <Box className="stat-circle-cover">
              <span className="stat-number">100+</span>
            </Box>
          </Box>
          <Box className="box712">
            <span className="bold">Hours</span> of soft skills
          </Box>
        </Box>
      </Flex>
    </Box>
    </DIV>
  );
}

export default Piediv;
const DIV=styled.div`
  .pieContainer {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 20px;
}

.pieBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a59f9f;
  border-radius: 50%;
}

.hold {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 100px, 200px, 0);
  
}

.danny {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 100px, 200px, 0);
  border-radius: 50%;
  background-color: #200303;
}

.Col1 {
  background-color: #ff0000;
}

.Col2 {
  background-color: #00ff00;
}

.Col3 {
  background-color: #0000ff;
}

.Col4 {
  background-color: #ff00ff;
}

.Col5 {
  background-color: #ffff00;
}

.stat-circle-cover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
}

.box71 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box712 {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #9b0303;
}
.bold{
  color: #da9500;
  font-weight: bold;
}
`