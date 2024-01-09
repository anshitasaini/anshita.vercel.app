"use client";

import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Research from "@/components/research";
import ProgramsAndHonors from "@/components/ProgramsAndHonors";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
      <div className="snap-start">
        <Header />
      </div>
      <Element name="workSection" id="workSection">
        <div className="snap-start">
          <Experience />
        </div>
      </Element>
      <div className="snap-start">
        <Research />
      </div>
      <div className="snap-start">
        <ProgramsAndHonors />
      </div>
    </div>
  );
}