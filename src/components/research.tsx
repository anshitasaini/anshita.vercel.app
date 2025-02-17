import React from "react";
import TextDescription from "./text-description";

export default function Research() {
  return (
    <main className="flex min-h-screen flex-col relative px-8 md:px-16 lg:px-32 xl:px-64 justify-center">
      <div className="flex flex-col mb-6">
        <h1 className="text-5xl font-bold">research</h1>
      </div>
      <TextDescription
        time={"dec 2023 - jun 2024"}
        location={"UT Austin Machine Learning Lab"}
        adviser={"Professor Sujay Sanghavi"}
        title={"Turing Scholar Honors Thesis"}
        desc={"ColBERT-style multimodal dense retrieval using OpenAI's CLIP model."}
      />
      <TextDescription
        time={"jun 2020 - jun 2021"}
        location={"UW Ubiquitous Computing Lab"}
        adviser={"Professor Shwetak Patel"}
        title={"Smartphone-Based Ischemic Stroke Screening"}
        desc={
          "Diagnosed stroke risk by detecting carotid artery blockage through facial videos."
        }
      />
      <TextDescription
        time={"dec 2020 - mar 2021"}
        location={""}
        adviser={""}
        title={
          "Period Determination and Classification Analysis of 25 Pulsating Red Giants"
        }
        desc={
          "Published our analysis of Miras and variable stars in the Journal of the AAVSO."
        }
      />
      <TextDescription
        time={"jun 2020 - aug 2020"}
        location={"Summer Science Program in Astrophysics"}
        adviser={"Professor Adam Rengstorf"}
        title={"Orbital Determination of Near-Earth Asteroid 420302 (2011 XZ1)"}
        desc={
          "Calculated asteroid's six orbital elements and published data in Minor Planet Center (M.P.C.) Report."
        }
      />
      <TextDescription
        time={"jun 2019 - jun 2020"}
        location={"UW Ubiquitous Computing Lab"}
        adviser={"Professor Shwetak Patel"}
        title={"SEUSS: Sensing Exercises Using Smartphone Sonar"}
        desc={
          "Classified and counted repetitions of 14 upper-body activities using a phone's microphone."
        }
      />
    </main>
  );
}
