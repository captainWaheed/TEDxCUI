"use client";

import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { Logo, Menu, MobileMenu, ConnectMedia } from "components";

export function AppHeader() {
	const [isMobile] = useMediaQuery("(max-width: 767px)");

	return (
		<Flex as="header" my={[2, 5]} pos="sticky" top={0} boxShadow="sm" zIndex={10}>
			<Container
				maxW="container.xl"
				borderBottom="0.5px solid"
				borderColor="black.800"
				backgroundColor="rgba(0, 0, 0, 0.7)"
				backdropFilter="blur(7px)"
			>
				<Flex justify="space-between" align="center" flexWrap="wrap">
					<Logo />
					{isMobile ? <MobileMenu /> : <Menu />}
					<Flex align="center" gap={2}>
						{!isMobile && <ConnectMedia />}
						{/* <ColorMode /> */}
					</Flex>
				</Flex>
			</Container>
		</Flex>
	);
}
