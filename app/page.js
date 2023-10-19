"use client";

import { WelcomeSection, AboutSection } from "app/sections";
import { SpeakerSection } from "./sections/speakers";

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <SpeakerSection />
      {/* <SocitiesSection /> */}
    </>
  );
}
