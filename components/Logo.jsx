"use client";

import Link from "next/link";
import { Heading, theme } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "util/motions";
import Image from "next/image";
import { ColorMode } from "./ColorMode";

let logo;
console.log(ColorMode.toString);

switch (theme) {
	case "dark":
		logo = <Image src="/logo-white.png" alt="Light Logo" width={200} height={40} />;
		break;
	case "light":
		logo = <Image src="/logo-black.png" alt="Dark Logo" width={200} height={40} />;
		break;
	default:
		logo = <Image src="/logo-white.png" alt="Dark Logo" width={200} height={40} />;
		break;
}

export function Logo() {
	const pathname = usePathname();

	return (
		<LazyMotion features={domAnimation}>
			<Heading
				as={m.h3}
				size="md"
				fontSize={["15px", "25px"]}
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				{pathname === "/projects" ? (
					<Link href="/" aria-label="Go to main page" role="link">
						<Image src="/logo-white.png" alt="Logo" width={40} height={40} />
					</Link>
				) : (
					<>{logo}</>
				)}
			</Heading>
		</LazyMotion>
	);
}
