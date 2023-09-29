"use client";

import { WelcomeSection, AboutSection, SocitiesSection } from "app/sections";
import { SpeakerSection } from "./sections/speakers";

export default function Page() {
	return (
		<>
			<WelcomeSection />
			<AboutSection />
			<SpeakerSection />
			{/* <ProjectsSection /> */}
			<SocitiesSection />
		</>
	);
}
