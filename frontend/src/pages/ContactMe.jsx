import React, { useState } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useToast,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import VantaBackground from '../components/VantaBackground';

const ContactMe = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitDisabled, setSubmitDisabled] = useState(false); // State to disable submit button during delay
  const [loading, setLoading] = useState(false); // State to manage spinner visibility
  const [showSpinner, setShowSpinner] = useState(false); // State to manage spinner display condition

  const showAlert = (title, description, status) => {
    setLoading(false); // Hide spinner
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitDisabled) {
      setShowSpinner(false); // Hide spinner when user tries to send again
      setTimeout(() => {
        showAlert(
          'Error',
          'You have already tried sending a message. Please try again later.',
          'error'
        );
      }, 2000);
      return;
    }

    if (formData.name && formData.email && formData.message) {
      try {
        setSubmitDisabled(true); // Disable submit button
        setLoading(true); // Show spinner
        setShowSpinner(true); // Show spinner only for the initial success message

        await axios.post(`${API_URL}/contact`, formData);

        setTimeout(() => {
          showAlert(
            'Message Sent!',
            'Your message has been successfully sent.',
            'success'
          );
          setFormData({
            name: '',
            email: '',
            message: '',
          });

          // Set a timeout for 10 minutes (10 * 60 * 1000 milliseconds)
          setTimeout(() => {
            setSubmitDisabled(false); // Enable submit button after delay
          }, 10 * 60 * 1000);
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          showAlert(
            'Error',
            'There was an error sending your message. Please try again later.',
            'error'
          );
          setSubmitDisabled(false); // Enable submit button on error
          setShowSpinner(false); // Hide spinner on error
        }, 2000);
      }
    } else {
      setShowSpinner(false); // Hide spinner when there is a form validation error
      setLoading(true); // Show spinner
      setTimeout(() => {
        showAlert('Error', 'Please fill all mandatory fields.', 'error');
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box position="relative">
      {loading && showSpinner && (
        <Center
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          zIndex="9999"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
            }}
          >
            <Spinner size="xl" color="white" thickness="4px" speed="1s" />
          </motion.div>
        </Center>
      )}
      <Container
        as={SimpleGrid}
        maxW="7xl"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        mb={-1}
        minH="calc(100vh - 150px)"
        mt={0}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <motion.div
            initial={{ x: -200, opacity: 0, letterSpacing: '-0.3rem' }}
            animate={{ x: 0, opacity: 1, letterSpacing: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Heading
              lineHeight={1.1}
              pl="7"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '8xl' }}
              fontWeight="bold"
              color="white"
              textAlign="left"
            >
              Contact
            </Heading>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0, letterSpacing: '-0.3rem' }}
            animate={{ x: 0, opacity: 1, letterSpacing: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Heading
              lineHeight={0}
              pl="7"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '8xl' }}
              fontWeight="bold"
              color="white"
              textAlign="left"
            >
              Me
            </Heading>
          </motion.div>
        </Stack>
        <Stack
          bg="gray.50"
          rounded="xl"
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Box>
            <Stack spacing={4}>
              <Heading
                color="gray.800"
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                Get in touch
                <Text
                  as="span"
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                  color="white"
                >
                  {' '}
                  !
                </Text>
              </Heading>
              <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
                Let's work together
              </Text>
            </Stack>
          </Box>
          <Box as="form" mt={10} onSubmit={handleSubmit}>
            <Stack spacing={6}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                required
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                required
              />
              <Input
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                required
              />
              <Button
                type="submit"
                fontFamily="heading"
                bg="#002222"
                color="white"
                _hover={{
                  bg: '#384029',
                  boxShadow: 'xl',
                }}
                disabled={submitDisabled} // Disable button based on submitDisabled state
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactMe;
