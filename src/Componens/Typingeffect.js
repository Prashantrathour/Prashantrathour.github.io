import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const ReactTypingEffectDemo = ({size}) => {
  return (
    <Box style={{textAlign:"center"}} display={"inline"} width={"200px"}>
      {/* <ReactTypingEffect
        text={["Hello.", "World!"]}
      /> */}

      <br />

      <ReactTypingEffect
        text={["Full Stack Web Developer.", "Programmer!"]}
        cursorRenderer={cursor => <Heading>{cursor}</Heading>}
        displayTextRenderer={(text, i) => {
          return (
            <Heading  width={"full"} >
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <Heading
                  as={"span"}
                  fontSize={size}
                  fontFamily={"serif"}
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {color:"white"}}
                  >{""}{char}</Heading>
                );
              })}
            </Heading>
          );
        }}        
      />
    </Box>
  );
};