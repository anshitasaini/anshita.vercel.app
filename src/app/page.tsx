'use client';

import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Research from "@/components/research";

export default function Home() {
  return (
    <div>
      <Header />
      <Element name="workSection">
        <Experience />
      </Element>
      <Research />
    </div>
  );
}
