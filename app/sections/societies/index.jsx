import { Fragment, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Heading, SimpleGrid, Flex, Text, Tooltip } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import Image from "next/image";
import Link from "next/link";

const Technologies = [
  {
    category: "Societies",
    items: [
      { name: "IEEE CS CUI", icon: <Image src="/ieeecscui.png" width="100" height="100" alt="" /> }
    ]
  },
  {
    category: "Sponsors",
    items: [
      {
        name: "DevHawks",
        icon: <Image src="/DevHawks.png" width="100" height="100" alt="" className="object-cover" />
      },
      { name: "cheezious", icon: <Image src="/cheezious.png" width="100" height="100" alt="" /> },
      { name: "Stella", icon: <Image src="/Stella.png" width="100" height="100" alt="" /> },
      { name: "Educators", icon: <Image src="/Educators.jpg" width="100" height="100" alt="" /> },
      { name: "Alif", icon: <Image src="/alif.png" width="100" height="100" alt="" /> }
    ]
  }
];

export function SocitiesSection() {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="tech" className="section">
        <HeadingDivider title="Outreach partners" />
        <Text
          fontSize="xl"
          pt={5}
          pb={10}
          tabIndex="0"
          ref={textRef}
          style={{
            transform: isTextInView ? "none" : "translateX(-200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          Our outreach partners are:
        </Text>

        {!!Technologies.length && (
          <SimpleGrid columns={[1, null, 2]} spacing={[5, 10]}>
            {Technologies.map((tech, index) => {
              return (
                <Box
                  key={tech.category}
                  ref={stackRef}
                  sx={{
                    transform: isStackInView
                      ? "none"
                      : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                    opacity: isStackInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index === 0 ? 0 : 0.5 * index
                    }s`
                  }}
                >
                  <Heading as="h3" fontSize="2xl" tabIndex="0">
                    {tech.category}
                  </Heading>
                  <Flex py={5} gap={4} flexWrap="wrap">
                    {tech.items.map((item) => (
                      <Link href={`/sponsors/${item.name}`} key={item.name}>
                        <Fragment key={item.name}>
                          <Tooltip label={item.name} hasArrow arrowSize={8}>
                            <span aria-label={item.name} tabIndex="0" role="img">
                              {item.icon}
                            </span>
                          </Tooltip>
                        </Fragment>
                      </Link>
                    ))}
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </LazyMotion>
  );
}
