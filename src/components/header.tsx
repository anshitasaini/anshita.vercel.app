import WavingHand from "./waving-hand";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { PiXLogoBold as XLogoIcon } from "react-icons/pi";
import Skyline from "./skyline";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <div className="absolute top-0 right-0 m-4 mr-8 z-50 pointer-events-auto">
        <NavBar />
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center mb-2">
          <h1 className="text-4xl sm:text-8xl font-bold mr-4">anshita saini</h1>
          <WavingHand />
        </div>
        <p className="text-lg sm:text-xl mb-4">
          member of technical staff @ OpenAI 🚀
        </p>
        <div className="flex items-center mt-4">
          <a
            href="https://github.com/anshitasaini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="w-6 h-6 mr-4 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/anshita-saini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon className="w-6 h-6 mr-4 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/anshitasaini_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogoIcon className="w-6 h-6 mr-4 cursor-pointer" />
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-0 w-full flex justify-center items-end border-b-2 border-black"
        style={{ zIndex: -1 }}
      >
        <Skyline />
      </div>
    </main>
  );
}
