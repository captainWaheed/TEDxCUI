import * as React from "react";
import { Container, Text, SimpleGrid, Box, Center } from "@chakra-ui/react";

const TeamHeading = () => {
  return (
    <Container maxW="7xl" p={{ base: 1, md: 3 }}>
      <Center>
        <Box textAlign="center">
          <Text fontWeight="extrabold" fontSize="3xl" mb={0}>
            <Box as="span" display="inline-block" position="relative">
              TEAM
              <Box
                as="span"
                display="block"
                position="absolute"
                bg={"red.600"}
                w={"100%"}
                h={"1px"}
              />
            </Box>
          </Text>
        </Box>
      </Center>
    </Container>
  );
};

export default TeamHeading;
