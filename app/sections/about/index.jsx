"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Box as="section" id="about" className="section">
				<HeadingDivider title="About Us" />
				<Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsa voluptatem velit
						ullam, perferendis laboriosam ab, omnis nemo veniam facilis doloremque necessitatibus
						nesciunt?
					</Text>
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores.
					</Text>
				</Flex>

				<TimeLine />
			</Box>
		</LazyMotion>
	);
}
