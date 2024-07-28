import React from 'react';
import { Box, Heading, Text, Container, Center, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import blockchain from '../icons/blockchain.png';
import web3 from '../icons/web3.png';
import react from '../icons/react.png';
import nodejs from '../icons/nodejs.png';
import expressjs from '../icons/expressjs.png';
import mongodb from '../icons/mongodb.png';
import sql from '../icons/sql.png';

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const skills = [
    {
      title: "Blockchain",
      description: "Solid understanding of blockchain technology, smart contracts, and decentralized applications (dApps).",
      iconSrc: blockchain
    },
    {
      title: "Web3",
      description: "Proficient in Web3 development, including integration with blockchain networks and decentralized finance (DeFi) applications.",
      iconSrc: web3
    },
    
    {
      title: "ReactJS",
      description: "Expertise in React.js for building interactive user interfaces (UIs) and single-page applications (SPAs). Skilled in state management with Context API and Redux, and proficient in using React Hooks for functional components.",
      iconSrc: react
    },
    {
      title: "Node.js",
      description: "Proficiency in building server-side applications with Node.js, including RESTful APIs and server-side rendering.",
      iconSrc: nodejs
    },
    {
      title: "Express.js",
      description: "Experience in developing web applications with Express.js, including middleware integration and routing.",
      iconSrc: expressjs
    },
    {
      title: "MongoDB",
      description: "Familiarity with MongoDB for database management, including schema design and query optimization.",
      iconSrc: mongodb
    },
    {
      title: "SQL",
      description: "Proficiency in SQL for relational database management, including query writing and database optimization.",
      iconSrc: sql
    }
  ];

  return (
    <Center minH="calc(140vh - 150px)" bg="white" mt={0} mb={12}>
      <Container maxW="container.lg" py={12} textAlign="left" ref={ref}>
        <MotionHeading 
          as="h1" 
          mb={6} 
          color="black" 
          fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
          initial={{ opacity: 0, y: -100}}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills.
        </MotionHeading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          justifyContent="start"
          pt={8} // Added padding top for spacing from Skills heading
        >
          {skills.map((skill, index) => (
            <StyledSkillItem
              key={index}
              title={skill.title}
              description={skill.description}
              iconSrc={skill.iconSrc}
            />
          ))}
        </Grid>
      </Container>
    </Center>
  );
};

const StyledSkillItem = ({ title, description, iconSrc }) => {
  return (
    <MotionBox
      bg="white"
      p={8}
      textAlign="left"
      boxShadow="lg"
      rounded="lg"
      mb={4} // Added margin between skill items
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={iconSrc}
        alt={title}
        style={{ width: '50px', height: '50px', marginBottom: '1rem' }}
      />
      <Text fontSize="xl" fontWeight="bold" mb={2}>{title}</Text>
      <Text fontSize="lg" mt={2}>{description}</Text> {/* Added margin from top */}
    </MotionBox>
  );
};

export default Skills;
