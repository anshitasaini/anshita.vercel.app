import React from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function DownArrow() {
  const handleArrowClick = () => {
    const workSection = document.getElementById("workSection");
    if (workSection) {
      workSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hover:opacity-80 cursor-pointer" onClick={handleArrowClick}>
      <ArrowDownIcon width="40" height="40" />
    </div>
  );
}
