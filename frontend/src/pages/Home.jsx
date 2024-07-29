import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Container, Center, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Projects from '../components/Experience';
import Skills from '../components/Skills';

const Home = () => {
  const introHeading = "Welcome to my Portfolio";
  const introText = "Hi, I'm Vinayak Kamboj, a Software Developer.";
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length < introHeading.length) {
      const timer = setTimeout(() => {
        setText(introHeading.slice(0, text.length + 1));
      }, 20); // Reduced the delay for a smoother and faster typing effect
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div>
      <Center minH="calc(100vh - 150px)" bg="transparent">
      <Container maxW="container.lg" py={8} textAlign="left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" mb={4} color="white" fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}>
            {text}
          </Heading>
          <Text fontSize={{ base: "2xl", md: "3xl", lg: "2xl" }} color="white" mb={8}>
            {introText}
          </Text>
          <Button
            as="a"
            href="https://www.linkedin.com/in/vinayakkamboj/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            variant="outline"
            borderColor="white"
            color="white"
            _hover={{ color: 'black', bg: 'white' }}
          >
            Connect on LinkedIn
          </Button>
        </motion.div>
      </Container>
    </Center>
    <Skills />
    <Projects />
    </div>
  );
};

export default Home;
