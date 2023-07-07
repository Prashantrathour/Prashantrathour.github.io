import AnimatedText from 'react-animated-text-content';
import React from 'react'
import style from "./Home.module.css"
import { Box, Heading } from '@chakra-ui/react';
export default function Text({Text,size,width}) {
  return (
    

<Box style={{fontSize:size,fontFamily:"serif",textAlign:"center",fontStyle:"oblique",color:"white"}} width={width}>
<AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '400px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="wave"
  interval={0.06}
  duration={0.8}
  tag="p"

  
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
{Text}

</AnimatedText> </Box>
 )
}