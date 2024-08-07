import React from "react";
import ProgramDesc from "@/components/ProgramDesc";

export default function ProgramsAndHonors() {
  return (
    <main className="flex min-h-screen flex-col relative px-8 md:px-16 lg:px-32 xl:px-64 py-8 md:py-12 xl:py-16">
      <div className="flex flex-col mb-6">
        {/* Programs */}
        <h1 className="text-5xl font-bold mb-6">programs</h1>

        <ProgramDesc
          logo_src={"ripple_logo.png"}
          title={"RippleX Founder Fellow"}
          time={"jan 2024 - now"}
        />
        <ProgramDesc
          logo_src={"neo_logo.png"}
          title={"Neo Scholar Finalist"}
          time={"jul 2023 - nov 2023"}
        />
        <ProgramDesc
          logo_src={"desco_logo.png"}
          title={"D.E. Shaw Nexus Fellow"}
          time={"mar 2023"}
        />
        <ProgramDesc
          logo_src={"citadel_logo.png"}
          title={"Discover Citadel & Citadel Securities Invitee"}
          time={"apr 2022"}
        />
        <ProgramDesc
          logo_src={"js_logo.png"}
          title={"Jane Street First-Year Trading and Technology Program"}
          time={"mar 2022"}
        />
        <ProgramDesc
          logo_src={"g_logo.png"}
          title={"Google Computer Science Summer Institute"}
          time={"jul 2021 - aug 2021"}
        />

        {/* Honors */}
        <h1 className="text-5xl font-bold mb-6 mt-8">honors</h1>

        <ProgramDesc
          logo_src={"coke_logo.png"}
          title={"Coca-Cola Scholar"}
          time={""}
        />
        <ProgramDesc
          logo_src={"merit_logo.png"}
          title={"National Merit Scholar"}
          time={""}
        />
        <ProgramDesc
          logo_src={"inspirasian_logo.png"}
          title={"National InspirASIAN Scholar"}
          time={""}
        />
        <ProgramDesc
          logo_src={"ap_logo.png"}
          title={"National AP Scholar"}
          time={""}
        />
        <ProgramDesc
          logo_src={"ncwit_logo.png"}
          title={"NCWIT Aspirations in Computing WA Award"}
          time={""}
        />

        {/* <h1 className="text-xl font-bold">Coca-Cola Scholar</h1>
        <hr className="border-t border-black w-full my-2" />

        <h1 className="text-xl font-bold">National InspirASIAN Scholar</h1>
        <hr className="border-t border-black w-full my-2" />

        <h1 className="text-xl font-bold">National Merit Scholar</h1>
        <hr className="border-t border-black w-full my-2" />

        <h1 className="text-xl font-bold">National AP Scholar</h1>
        <hr className="border-t border-black w-full my-2" />

        <h1 className="text-xl font-bold">
          NCWIT Aspirations in Computing Washington Award
        </h1>
        <hr className="border-t border-black w-full my-2" /> */}
      </div>
    </main>
  );
}
