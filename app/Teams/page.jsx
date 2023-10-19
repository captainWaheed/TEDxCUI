"use client";
// import { useRef } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const teams = [
  {
    id: 1,
    name: "",
    imageSrc: "/org 2.png"
  },
  {
    id: 3,
    name: "",
    imageSrc: "/sir rashid post.png"
  },
  {
    id: 2,
    name: "",
    imageSrc: "/coorg.png"
  },
  {
    id: 4,
    name: "",
    imageSrc: "/log.png"
  },
  {
    id: 9,
    name: "",
    imageSrc: "/team (5).png"
  },
  {
    id: 5,
    name: "",
    imageSrc: "/team (1).png"
  },
  {
    id: 6,
    name: "",
    imageSrc: "/team (2).png"
  },
  {
    id: 7,
    name: "",
    imageSrc: "/team (3).png"
  },
  {
    id: 8,
    name: "",
    imageSrc: "/team (4).png"
  },
  {
    id: 10,
    name: "",
    imageSrc: "/team (6).png"
  },
  {
    id: 11,
    name: "",
    imageSrc: "/team (7).png"
  },
  {
    id: 12,
    name: "",
    imageSrc: "/team (8).png"
  },
  {
    id: 13,
    name: "",
    imageSrc: "/team (9).png"
  }
];

const TeamsSection = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="teams" className="section">
        <Flex
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          flexWrap="wrap"
          gap={20}
          pt={10}
          pl={"9vw"}
          pb={16}
          maxW="4x2"
        >
          {teams.map((team) => (
            <Flex
              key={team.id}
              fontSize="xl"
              tabIndex="0"
              sx={{
                flex: "0 0 25%",
                // transform: isInView ? "none" : "translateX(-0px)",
                // opacity: isInView ? 1 : 1,
                transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                textAlign: "center"
              }}
            >
              <Image
                src={team.imageSrc}
                alt="Team Member"
                width={500}
                height={500}
                className="tw-rounded-md"
              />
              <Text
                fontSize={["2xl"]}
                color={"white"}
                mt={3}
                tabIndex="0"
                // ref={ref}
                sx={{
                  // transform: isInView ? "none" : "translateX(-200px)",
                  // opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
              >
                {team.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </LazyMotion>
  );
};

export default TeamsSection;
