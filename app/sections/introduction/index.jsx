import React, { useEffect, useState, useRef, useContext } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
  Flex,
  GridItem,
  Button,
  Heading,
  Highlight,
  Grid,
  Text,
  useMediaQuery,
  useColorModeValue
} from "@chakra-ui/react";
// import { useScrollTo } from "hooks";
import { LayoutContext } from "context/layout";
import Image from "next/image";

export function WelcomeSection() {
  const ref = useRef(null);
  const { introRef, setIntroHeight } = useContext(LayoutContext);
  const isInView = useInView(ref, { once: true });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  // const { scrollToEl } = useScrollTo();
  const [isAnimationVisible] = useMediaQuery("(min-width: 768px)");
  const subTitleColor = "whiteAlpha.900";
  const highlightColor = useColorModeValue("red.500", "red.500");

  let [count, setCount] = useState(0);
  const [text] = useState([
    "aim to ignite the minds,",
    "awaken them to a new world,",
    "encourage creativity in our students."
  ]);

  // const onClick = (e) => {
  //   scrollToEl(e);
  // };

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => (count === 2 ? 0 : count + 1)); // Update count cyclically
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIntroHeight(introRef.current?.offsetHeight);
  }, [introRef, setIntroHeight]);

  return (
    <LazyMotion features={domAnimation}>
      <Grid
        as="section"
        id="home"
        className="section"
        gap={5}
        pl={"1.5vw"}
        templateAreas={[`"content"`, `"content"`, `"content animation"`]}
        gridTemplateColumns={["1fr", "1fr", "1fr 0.5fr", "1fr 0.7fr"]}
        alignItems="center"
        ref={introRef}
      >
        <GridItem
          justifySelf={isMobile ? "center" : "start"}
          placeSelf={isMobile ? "center" : "start"}
        >
          <Image
            src={"/tedex.png"}
            width={isAnimationVisible ? 500 : 450}
            height={isAnimationVisible ? 500 : 450}
            alt="Logo"
          />
        </GridItem>
        <GridItem area="content" py={[0, 0, 10]}>
          <Heading
            as="h1"
            size={["xl", "2xl", "2xl", "2xl", "2xl"]}
            lineHeight="shorter !important"
            mr={[null, null, null, "-25%"]}
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <Highlight query={["Thought", "Process"]} styles={{ color: highlightColor }}>
              Reviving the Thought Process
            </Highlight>
          </Heading>

          <Flex direction="column" overflow="hidden" pos="relative" mt={3}>
            <Text
              fontSize={["lg", "x-large"]}
              color={subTitleColor}
              tabIndex="0"
              ref={ref}
              sx={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              We
              <Text
                as="span"
                pos="absolute"
                top={count === 0 ? "0" : count === 1 ? "-100%" : "-200%"}
                left={isMobile ? 8 : 10} // Set left to 8 on mobile screens, 10 otherwise
                display="flex"
                flexDirection="column"
                transition="top .5s ease-in-out"
                tabIndex="0"
              >
                {text.map((element) => (
                  <TextElement key={element} element={element} />
                ))}
              </Text>
            </Text>
          </Flex>

          <Text
            fontSize={["md", "lg"]}
            color={subTitleColor}
            mt={3}
            mb={10}
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            Join us in our mission to inspire creativity and unlock the potential of young minds
            through our thought-provoking event
          </Text>
          <Image
            src="/registrations.png"
            width={500}
            height={500}
            alt="Ticket picture with QR code TEDxCUI"
          />
          <Button
            aria-label="Latest projects"
            p="0"
            m="3"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
          >
            <Link
              href="https://forms.gle/dffWEjJyuuZ6mjcf8"
              target="_blank"
              // onClick={onClick}
              style={{
                display: "block",
                padding: "0 16px",
                lineHeight: "40px"
              }}
            >
              Get your tickets
            </Link>
          </Button>
        </GridItem>
      </Grid>
    </LazyMotion>
  );
}

function TextElement({ element }) {
  const firstWord = <b>{element.split(" ")[0]}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Text
      as="span"
      tabIndex="0"
      ref={ref}
      sx={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {firstWord} {restWords}
    </Text>
  );
}
