"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <LazyMotion features={domAnimation}>
        <Box as="section" id="about" className="section">
          <HeadingDivider title="About Us" />
          <Flex
            direction={isMobile ? "column" : "row"}
            gap={6}
            pt={10}
            // pb={16}
            maxW={isMobile ? "4xl" : "6x1"}
            ref={ref}
          >
            <Text
              fontSize={isMobile ? "sm" : "xl"}
              px={5}
              weight="extra-bold"
              tabIndex="0"
              color={"gray.200"}
              sx={{
                textAlign: "justify",
                transform: isInView ? "none" : "translateX(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
            >
              At TEDxCUI we strive towards reviving the thought process of the community by bringing
              them innovative ideas, not only as an inspiration for them to create, but to energize
              and motivate them to go further where their thoughts take them to break the barriers
              of conventional thinking and explore and revolutionize the world with their ideas
              belonging to any discipline, ranging from technology to social sciences to art and
              entertainment. With this, we aim to revitalize young minds and ignite their passion
              for creativity.
            </Text>
            <Image src="/About.jpeg" width="300" height="300" alt="Image of TEDxCUI Tag" />
          </Flex>
          <Image
            src="/timeline.png"
            width={900}
            height={100}
            alt="event timeline"
            className="tw-rounded-md"
          />
        </Box>
      </LazyMotion>
    </>
  );
}
