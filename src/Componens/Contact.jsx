import React, { useState } from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  const toast = useToast();
  const [loading,setloading]=useState(false)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState("");


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true)
    emailjs.sendForm('service_q697kin', 'template_ax7w7f5', form.current, 'RKK_WWcE_e6D25L_j')
      .then((result) => {
          console.log(result.text);
          sendmessage()
          setloading(false)
      }, (error) => {
          console.log(error.text);
          setloading(false)
      });
  };







  const sendmessage = () => {
   
    if (email.length && name.length && textarea.length) {
      toast({
        title: "Message sent successfully",
        status: "success",
        description: `Thanks Mr/Ms ${name}. We will reply to you in a couple of hours.`,
      });
      setEmail("")
      setName("")
      setTextarea("")
    }else{
      toast({
        title: "Fill all details",
        status: "info"
     
      });
      setEmail("")
      setName("")
      setTextarea("")
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py={10} id="contact" >
      <Container
        maxW="container.lg"
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box
              bgGradient="linear(to-l, rgb(16, 169, 240), rgb(233,78,27))"
              color="white"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}
            >
              <Box p={4}>
                <Wrap
                  justify={"center"}
                  spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
                >
                  <WrapItem>
                    <Box>
                      <Heading>Contact</Heading>
                      <Text
                        mt={{ sm: 3, md: 3, lg: 5 }}
                        colorgradient="linear(to-l, rgb(16, 169, 240), rgb(233,78,27))"
                      >
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            textOverflow={"ellipsis"}
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                            id="contact-phone"
                          >
                            +91-6393277345
                          </Button>
                          <Link href="mailto:prathour884@gmail.com" isExternal>
                            <Button
                              size="md"
                              height="48px"
                              width="300px"
                              textOverflow={"ellipsis"}
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #1C6FEB" }}
                              leftIcon={<MdEmail color="#1970F1" size="20px" />}
                              id="contact-email"
                            >
                              prathour884@gmail.com
                            </Button>
                          </Link>
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            textOverflow={"ellipsis"}
                            variant="ghost"
                            color="#DCE2FF"
                            float={"left"}
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={
                              <MdLocationOn color="#1970F1" size="20px" />
                            }
                          >
                            Shahjahanpur, (U.P.)
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <Link
                          id="contact-linkedin"
                          href="https://www.linkedin.com/in/prashant-rathour-web-developer"
                          isExternal
                        >
                          <IconButton
                            aria-label="linkedin"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<FiLinkedin size="28px" />}
                          />
                        </Link>
                        <Link
                          id="contact-github"
                          href="https://github.com/Prashantrathour"
                          isExternal
                        >
                          <IconButton
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsGithub size="28px" />}
                          />
                        </Link>
                        <Link href="mailto:prathour884@gmail.com" isExternal>
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<MdEmail size="28px" />}
                          />
                        </Link>
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                        <form ref={form} onSubmit={sendEmail}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                              value={name}
                              name="user_name"
                                type="text"
                                size="md"
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input
                              name="user_email"
                                type="email"
                                value={email}
                                size="md"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                            name="message"
                            value={textarea}
                            required
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="Message"
                              onChange={(e) => setTextarea(e.target.value)}
                            />
                          </FormControl>
                          <FormControl id="send-button" float="right">
                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              type="submit"
                              // onClick={sendmessage}
                              _hover={{}}
                              isLoading={loading}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </form>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Container>
    </Box>
  );
};

export default ContactPage;
