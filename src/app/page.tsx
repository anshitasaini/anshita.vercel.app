"use client";

import React from "react";
import { Element } from "react-scroll";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Research from "@/components/research";
import ProgramsAndHonors from "@/components/honors";
import AboutMe from "@/components/about-me";

export default function Home() {
  return (
    <div
      id="scroll-container"
      className="snap-y snap-mandatory scroll-smooth h-screen w-screen overflow-auto"
    >
      <Element name="header" id="header" className="snap-start">
        <Header />
      </Element>
      <Element name="about-me" id="about-me" className="snap-start">
          <AboutMe />
      </Element>
      <Element name="experience" id="experience" className="snap-start">
        <Experience />
      </Element>
      <Element name="research" id="research" className="snap-start">
        <Research />
      </Element>
      <Element name="honors" id="honors" className="snap-start">
        <ProgramsAndHonors />
      </Element>
    </div>
  );
}
