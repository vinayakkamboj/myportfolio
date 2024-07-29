import React from 'react';
import { Flex, chakra, Icon } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="#002222"
      p={50}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="0"
        py="0"
        bg="#002222"
      >
        

        <chakra.p
          py={{
            base: "2",
            sm: "0",
          }}
          color="white"
        >
          © 2024. All rights reserved.
        </chakra.p>
        

        <Flex mx="-2">
          <chakra.a
            href="https://www.linkedin.com/in/vinayakkamboj/"
            mx="2"
            color="white"
            _hover={{
              color: "gray.500",
            }}
            aria-label="LinkedIn"
          >
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.51c-1.14 0-2.05-.92-2.05-2.05S4.2 3.41 5.34 3.41s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zM20.45 20.45h-3.56V14.8c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 3v5.74h-3.56V9h3.42v1.56h.05c.48-.91 1.67-1.88 3.44-1.88 3.68 0 4.36 2.42 4.36 5.57v6.2h-.01z"/>
            </Icon>
          </chakra.a>

          <chakra.a
            href="https://github.com/vinayakkamboj"
            mx="2"
            color="white"
            _hover={{
              color: "gray.500",
            }}
            aria-label="GitHub"
          >
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.802 8.207 11.384.6.111.82-.261.82-.58 0-.287-.01-1.045-.015-2.052-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.082-.729.082-.729 1.203.084 1.837 1.237 1.837 1.237 1.07 1.836 2.805 1.305 3.49.997.109-.777.417-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.236-3.226-.124-.303-.536-1.527.117-3.183 0 0 1.01-.324 3.3 1.234a11.522 11.522 0 0 1 3-.405c1.016.002 2.038.137 3 .405 2.29-1.558 3.298-1.234 3.298-1.234.656 1.656.245 2.88.12 3.183.77.843 1.235 1.916 1.235 3.226 0 4.61-2.806 5.625-5.478 5.922.43.372.814 1.102.814 2.22 0 1.602-.015 2.888-.015 3.282 0 .322.216.699.826.578C20.566 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12"/>
            </Icon>
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
