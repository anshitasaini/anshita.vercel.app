import { Link as ScrollLink } from "react-scroll";

export default function NavBar() {
  return (
    <nav className="flex space-x-4">
      <ScrollLink
        to="about-me"
        containerId="scroll-container"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        about me
      </ScrollLink>
      <ScrollLink
        to="experience"
        containerId="scroll-container"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        experience
      </ScrollLink>
      <ScrollLink
        to="research"
        containerId="scroll-container"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        research
      </ScrollLink>
      <ScrollLink
        to="honors"
        containerId="scroll-container"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        honors
      </ScrollLink>
    </nav>
  );
}
