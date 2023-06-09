import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Display1(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={5}
        py={5}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Clear overview for efficient tracking
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            w="full"
            h="full"
            py={10}
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          ></Box>
        </SimpleGrid>

      </Box>
    </Flex>
  );
};
