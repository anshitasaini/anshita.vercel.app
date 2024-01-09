import React, { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { Link as ScrollLink } from "react-scroll";

export default function BouncingArrow() {
  return (
    <div className="animate-bounce hover:opacity-80 cursor-pointer">
      <ScrollLink
          to="workSection"
          spy={true}
          smooth={true}
          duration={700}
        >
      <ArrowDownIcon width="40" height="40" />
      </ScrollLink>
    </div>
  );
}