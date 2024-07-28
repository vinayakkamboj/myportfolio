import React, { useState, useEffect } from 'react';
import { Heading, Container, Center, Flex, Box, chakra, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
    console.log('In view:', inView);
    if (inView) {
      const interval = setInterval(() => {
        if (completedProjects < 10) {
          setCompletedProjects(prev => prev + 1);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [inView, completedProjects]);

  const projects = [
    {
      title: "Blockchain-based E-Voting System",
      description: " Created a secure, decentralized e-voting system using blockchain for transparent, immutable voting.",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/005/374/848/original/blockchain-technology-modern-icon-block-chain-symbol-or-logo-element-in-thin-line-style-vector.jpg",
      author: "Vinayak Kamboj"
    },
    {
      title: "Weather Application",
      description: " Implemented a Weather App using API keys for real-time data integration.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/7133/7133364.png",
      author: "Vinayak Kamboj"
    },
    {
      title: "To Do App",
      description: "Developed a To Do List app with React.js and Bootstrap for responsive design.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcY2CphBoqJWxeFu9f1c2iWseJEngRv4oRVA&s",
      author: "Vinayak Kamboj"
    }
  ];

  return (
    <Center minH="calc(140vh - 150px)" bg="white" mt={0}>
      <Container maxW="container.lg" py={1} textAlign="left" ref={ref}>
        <MotionHeading 
          as="h1" 
          mb={8} 
          color="black" 
          fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects.
        </MotionHeading>
        <Heading fontSize="4xl" fontWeight="bold" mt={4} mb={8}>
          Total Projects Completed: {completedProjects}
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="stretch"
          flexWrap="wrap"
          gap={8}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              w={{ base: "100%", md: "30%" }}
              mx="auto"
              mt="8"
              px={4}
              py={8}
              bg="white"
              shadow="lg"
              rounded="lg"
              _dark={{ bg: "gray.800" }}
              mb={{ base: 8, md: 0 }}
            >
              <Flex justifyContent="center" mt={-8}>
                <Image
                  w={24}
                  h={24}
                  fit="cover"
                  rounded="full"
                  borderStyle="solid"
                  borderWidth={2}
                  color="brand.500"
                  _dark={{ color: "brand.400" }}
                  alt={`Project ${index + 1} avatar`}
                  src={project.imageUrl}
                />
              </Flex>

              <chakra.h2
                color="gray.800"
                _dark={{ color: "white" }}
                fontSize="xl"
                mt={2}
                textAlign="center"
                fontWeight="bold"
              >
                {project.title}
              </chakra.h2>

              <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.200" }} textAlign="center">
                {project.description}
              </chakra.p>

              <Flex justifyContent="center" mt={4}>
                <Link
                  fontSize="lg"
                  color="brand.500"
                  _dark={{ color: "brand.300" }}
                >
                  {project.author}
                </Link>
              </Flex>
            </Box>
          ))}
        </Flex>
        <Heading fontSize="medium" fontWeight="light" mt={4} mb={8}>
          & many more
        </Heading>
      </Container>
    </Center>
  );
};

export default Projects;
