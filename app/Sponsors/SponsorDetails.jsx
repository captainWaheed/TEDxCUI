"use client";
import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Link
} from "@chakra-ui/react";

export default function SponsorDetails(props) {
  const { name, logoSrc, introduction, sponsorType, website, twitter, linkedin, instagram } = props;

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"Sponsor Logo"}
            src={logoSrc}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              // lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "2xl", lg: "4xl" }}
              // py={{ base: 10, md: 12 }}
            >
              {name}
            </Heading>
            <Heading
              // lineHeight={}
              fontWeight={300}
              fontSize={{ base: "1xl", sm: "2xl", lg: "1xl" }}
              py={{ base: 4, md: 6 }}
            >
              {sponsorType} Sponsor
            </Heading>

            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"sm"}
            >
              {introduction}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("red.800", "red.500")}
                fontWeight={"700"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Social Links
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Link href={website} target="_blank" rel="noopener noreferrer">
                    Website
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={twitter} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
