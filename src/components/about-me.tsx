import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col relative px-8 md:px-16 lg:px-32 xl:px-64 justify-center">
      <div className="flex flex-col mb-16">
        <h1 className="text-5xl font-bold">about me</h1>
      </div>
      <div className="flex flex-row items-center justify-left space-x-4 md:space-x-16">
        <div className="flex-shrink-0 w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden rounded-full">
          <img
            src="/headshot.png"
            alt="headshot"
            className="object-cover w-full h-full transform scale-125"
          />
        </div>
        <div className="flex flex-col space-y-4 text-sm md:text-base lg:text-lg xl:text-xl">
          <p className="text-3xl font-bold mb-3">hi, i'm anshita!</p>
          <p>
            i&apos;m an{" "}
            <b>applied AI engineer, inclusive AI advocate, and speaker.</b>
          </p>
          <p>
            currently, i'm a member of technical staff at OpenAI on ChatGPT
            Growth. i'm also the founder of Wiser AI, an initiative to empower
            marginalized genders in computer science in shaping ethical and
            responsible AI.
          </p>
          <p>
            i've previously founded and led various initiatives for inclusive
            tech, including Code4Care and She Codes Art, impacting over 2,000
            students around the world through 100+ computer science workshops
            and conferences.
          </p>
          <p>
            in the past year, i've spoken at summits, podcasts, and tech events
            reaching over 20,000 people, including being featured on the{" "}
            <a
              href="https://blogs.nvidia.com/blog/technovation-inclusive-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              NVIDIA AI Podcast
            </a>{" "}
            and being a keynote speaker at the{" "}
            <a
              href="https://www.linkedin.com/posts/opennlplabs_exciting-news-were-thrilled-to-announce-activity-7239366671373623296-j-n3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC_CDiYB4PefUqAqSfdHyF2EZHRy45OmlUQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              OpenNLP Global Symposium
            </a>{" "}
            on Inclusive NLP.
          </p>
          <p>
            want to chat about speaking opportunities or collaborating on
            inclusive AI initiatives? reach out at{" "}
            <i>anshitasaini [at] gmail [dot] com </i>{":)"}
          </p>
        </div>
      </div>
    </main>
  );
}
