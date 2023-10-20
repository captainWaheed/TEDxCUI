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
  Link,
  Icon
} from "@chakra-ui/react";
import { FaGlobe, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SponsorDetails(props) {
  const { name, logoSrc, introduction, sponsorType, website, twitter, linkedin, instagram } = props;

  const hasSocialMedia = website || twitter || linkedin || instagram;

  return (
    <Container maxW={"3x1"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 10 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"Sponsor Logo"}
            src={logoSrc}
            fit={"contain"}
            align={"top"}
            w={"100%"}
            h={{ base: "100%", sm: "max", lg: "max" }}
          />
        </Flex>
        <Stack spacing={{ base: 1, md: 4 }}>
          <Box as={"header"}>
            <Heading fontWeight={600} fontSize={{ base: "4xl", sm: "2xl", lg: "4xl" }}>
              {name}
            </Heading>
            <Heading
              fontWeight={300}
              fontSize={{ base: "1xl", sm: "2xl", lg: "1xl" }}
              py={{ base: 1, md: 4 }}
            >
              {sponsorType}
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
            {hasSocialMedia && (
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
                  {website && (
                    <ListItem>
                      <Link href={website} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaGlobe} /> Website
                      </Link>
                    </ListItem>
                  )}
                  {twitter && (
                    <ListItem>
                      <Link href={twitter} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaTwitter} /> Twitter
                      </Link>
                    </ListItem>
                  )}
                  {linkedin && (
                    <ListItem>
                      <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaLinkedin} /> LinkedIn
                      </Link>
                    </ListItem>
                  )}
                  {instagram && (
                    <ListItem>
                      <Link href={instagram} target="_blank" rel="noopener noreferrer">
                        <Icon as={FaInstagram} /> Instagram
                      </Link>
                    </ListItem>
                  )}
                </List>
              </Box>
            )}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
