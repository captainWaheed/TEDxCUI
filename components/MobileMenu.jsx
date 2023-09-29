"use client";

import { useRef } from "react";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure
} from "@chakra-ui/react";
import { ConnectMedia, Menu } from "components";
import { BsGrid } from "react-icons/bs";

export function MobileMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Button
				ref={btnRef}
				variant="ghost"
				onClick={onOpen}
				sx={{ "&:hover": { bgColor: "black" }, position: "absolute", top: 2, right: 0 }}
				title="Menu"
				className=""
			>
				<BsGrid />
			</Button>

			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				colorScheme="red"
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton sx={{ "&:hover": { bgColor: "red" } }} />
					<DrawerHeader sx={{ bgColor: "black" }}>
						<ConnectMedia sx={{ bgColor: "black" }} />
					</DrawerHeader>

					<DrawerBody pt="40px" borderTop="1px solid red">
						<Menu onClick={onClose} sx={{ bgColor: "black" }} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
