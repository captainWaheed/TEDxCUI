"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import Image from "next/image";

const speakers = [
  {
    id: 1,
    name: "Raja Zia Ul Haq",
    title: "",
    imageSrc: "/1.png"
  },
  {
    id: 2,
    name: "Umair Najmi",
    title: "",
    imageSrc: "/2.png"
  },
  {
    id: 3,
    name: "Rabia Agha Armghan",
    title: "",
    imageSrc: "/3.png"
  },
  {
    id: 4,
    name: "Osama Hamid",
    title: "",
    imageSrc: "/4.png"
  },
  {
    id: 5,
    name: "Dr. Erum Rehman",
    title: "",
    imageSrc: "/5.png"
  },
  {
    id: 6,
    name: "Junaid Zaidi",
    title: "",
    imageSrc: "/6.png"
  },
  {
    id: 7,
    name: "Lal Chand Khatri",
    title: "",
    imageSrc: "/7.png"
  },
  {
    id: 8,
    name: "Tanveer Nandla",
    title: "",
    imageSrc: "/8.png"
  },
  {
    id: 9,
    name: "Aun Raza",
    title: "",
    imageSrc: "/9.png"
  }
];

export function SpeakerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="speakers" className="section">
        <HeadingDivider title="Speakers" ref={ref} />
        <Flex
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "flex-start"}
          flexWrap="wrap"
          gap={20}
          ref={ref}
          pl={"7vw"}
          pt={10}
          pb={16}
          maxW="4x2"
        >
          {speakers.map((speaker) => (
            <Text
              key={speaker.id}
              fontSize="xl"
              tabIndex="0"
              sx={{
                flex: "0 0 25%",
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                textAlign: "center"
              }}
            >
              <Image src={speaker.imageSrc} alt="image" width={600} height={600} />
              <Text
                fontSize={["2xl"]}
                fontWeight={"bold"}
                color={"white"}
                mt={3}
                tabIndex="0"
                sx={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
              >
                {speaker.name}
              </Text>
              <Text
                fontSize={["sm"]}
                color={"grey"}
                mt={1}
                mb={10}
                tabIndex="0"
                ref={ref}
                sx={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
              >
                {speaker.title}
              </Text>
            </Text>
          ))}
        </Flex>
      </Box>
    </LazyMotion>
  );
}
