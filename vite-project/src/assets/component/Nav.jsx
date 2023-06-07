import React from "react";

//import Register from "../component/Register";
import ToggleColorMode from "./ToggleColorMode";


import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
  } from "@chakra-ui/react";
  import { AiOutlineMenu } from "react-icons/ai";

  
  export default function Nav(){
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
               
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
               Welcome to our Website 
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
              
                <Button colorScheme="brand" size="sm"> <a herf="{Register}"> Cars </a> </Button>
                <Button colorScheme="brand" size="sm">Car Features</Button>
                <Button  colorScheme="brand" size="sm">Info</Button>
                <Button colorScheme="brand" size="l"> <ToggleColorMode /> </Button>
                
               

              </HStack>
            
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  zIndex={10}
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <ToggleColorMode />
                <Button colorScheme="brand" size="sm" w="full" > <a herf="{Register}" > Cars </a> </Button>
                <Button colorScheme="brand" size="sm" w="full" >Car Features</Button>
                <Button  colorScheme="brand" size="sm" w="full" >Info</Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  