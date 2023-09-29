"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import Image from "next/image";

export function SpeakerSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isMobile] = useMediaQuery("(max-width: 767px)");

	return (
		<LazyMotion features={domAnimation}>
			<Box as="section" id="speaker" className="section">
				<HeadingDivider title="Speakers" />
				<Flex
					direction={isMobile ? "column" : "row"}
					alignItems={isMobile ? "center" : "flex-start"}
					gap={20}
					pt={10}
					pb={16}
					maxW="4xl"
				>
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							textAlign: "center"
						}}
					>
						<Image src={"/2.png"} alt="image" width="300" height="300" />
						<Text
							fontSize={["xl"]}
							color={"white"}
							mt={3}
							tabIndex="0"
							ref={ref}
							sx={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Masood Lohar
						</Text>
						<Text
							fontSize={["sm"]}
							color={"grey"}
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
							CEO Clifton Forest
						</Text>
					</Text>
				</Flex>
			</Box>
		</LazyMotion>
	);
}
