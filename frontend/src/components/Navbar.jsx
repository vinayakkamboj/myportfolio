import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="transparent" p={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="teal"
              color="white"
              borderColor="transparent"
              _hover={{ color: 'black', bg: 'white' }}
            />
            <MenuList
              bg="white"
              color="black"
              zIndex={10} // Ensure the MenuList is above other elements
              position="relative" // Ensure correct positioning
            >
              <MenuItem as={RouterLink} to="/" _hover={{ bg: '#f0f0f0' }}>
                Home
              </MenuItem>
              <MenuItem as={RouterLink} to="/skills" _hover={{ bg: '#f0f0f0' }}>
                Skills
              </MenuItem>
              <MenuItem as={RouterLink} to="/projects" _hover={{ bg: '#f0f0f0' }}>
                Experience
              </MenuItem>
              <MenuItem as={RouterLink} to="/contact" _hover={{ bg: '#f0f0f0' }}>
                Contact Me
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Flex>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="teal"
              variant="outline"
              borderColor="transparent"
              color="white"
              _hover={{ color: 'black', bg: 'white' }}
              mr={4}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/skills"
              colorScheme="teal"
              variant="outline"
              borderColor="transparent"
              color="white"
              _hover={{ color: 'black', bg: 'white' }}
              mr={4}
            >
              Skills
            </Button>
            <Button
              as={RouterLink}
              to="/projects"
              colorScheme="teal"
              variant="outline"
              borderColor="transparent"
              color="white"
              _hover={{ color: 'black', bg: 'white' }}
              mr={4}
            >
              Experience
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="teal"
              variant="outline"
              borderColor="transparent"
              color="white"
              _hover={{ color: 'black', bg: 'white' }}
              mr={4}
            >
              Contact Me
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;