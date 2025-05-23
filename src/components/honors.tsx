import React from "react";
import ProgramDescription from "@/components/program-description";

export default function ProgramsAndHonors() {
  return (
    <main className="flex min-h-screen flex-col relative px-8 md:px-16 lg:px-32 xl:px-64 justify-center">
      <div className="flex flex-col mb-6">
        {/* Programs */}
        <h1 className="text-5xl font-bold mb-6">programs</h1>

        <ProgramDescription
          logo_src={"ripple_logo.png"}
          title={"RippleX Founder Fellow"}
          time={"jan 2024 - jul 2024"}
        />
        <ProgramDescription
          logo_src={"neo_logo.png"}
          title={"Neo Scholar Finalist"}
          time={"jul 2023 - nov 2023"}
        />
        <ProgramDescription
          logo_src={"desco_logo.png"}
          title={"D.E. Shaw Nexus Fellow"}
          time={"mar 2023"}
        />
        <ProgramDescription
          logo_src={"citadel_logo.png"}
          title={
            <>
              <span className="sm:hidden">Discover Citadel</span>
              <span className="hidden sm:inline">
                Discover Citadel &amp; Citadel Securities
              </span>
            </>
          }
          time={"apr 2022"}
        />
        <ProgramDescription
          logo_src={"js_logo.png"}
          title={
            <>
              <span className="sm:hidden">Jane Street FTTP</span>
              <span className="hidden sm:inline">
                Jane Street First-Year Trading and Technology Program
              </span>
            </>
          }
          time={"mar 2022"}
        />
        <ProgramDescription
          logo_src={"g_logo.png"}
          title={
            <>
              <span className="sm:hidden">Google CSSI</span>
              <span className="hidden sm:inline">
                Google Computer Science Summer Institute
              </span>
            </>
          }
          time={"jul 2021 - aug 2021"}
        />

        {/* Honors */}
        <h1 className="text-5xl font-bold mb-6 mt-8">honors</h1>

        <ProgramDescription
          logo_src={"coke_logo.png"}
          title={"Coca-Cola Scholar"}
          time={""}
        />
        <ProgramDescription
          logo_src={"merit_logo.png"}
          title={"National Merit Scholar"}
          time={""}
        />
        <ProgramDescription
          logo_src={"inspirasian_logo.png"}
          title={"National InspirASIAN Scholar"}
          time={""}
        />
        <ProgramDescription
          logo_src={"ap_logo.png"}
          title={"National AP Scholar"}
          time={""}
        />
        <ProgramDescription
          logo_src={"ncwit_logo.png"}
          title={"NCWIT Aspirations in Computing WA Award"}
          time={""}
        />
      </div>
    </main>
  );
}
