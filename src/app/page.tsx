"use client";

import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Research from "@/components/research";
import ProgramsAndHonors from "@/components/honors";

export default function Home() {
  return (
    <div
      id="scroll-container"
      className="snap-y snap-mandatory scroll-smooth h-screen w-screen overflow-auto"
    >
      <Element name="header" id="header" className="snap-start">
        <Header />
      </Element>
      <Element name="experience" id="experience">
        <div className="snap-start">
          <Experience />
        </div>
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
