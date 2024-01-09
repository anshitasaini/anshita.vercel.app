import WavingHand from "./WavingHand";
import DownArrow from "./DownArrow";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative p-8 md:p-16 xl:p-32">
      <div className="absolute top-0 right-0 m-4 mr-8 cursor-pointer">
        <a className="text-decoration-line: underline" href="resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center mb-2">
          <h1 className="text-8xl font-bold mr-4">
            anshita saini
          </h1>
          <WavingHand />
        </div>
        <p className="text-xl mb-4">
          software engineer & retrieval researcher, 
          interested in applied AI and backend development.
        </p>
        <div className="flex items-center mt-4">
          <GitHubLogoIcon className="w-6 h-6 mr-4 cursor-pointer" onClick={() => window.open("https://github.com/anshitasaini")} />
          <LinkedInLogoIcon className="w-6 h-6 mr-4 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/anshita-saini/")} />
          <TwitterLogoIcon className="w-6 h-6 mr-4 cursor-pointer" onClick={() => window.open("https://twitter.com/_anshita_saini")} />
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center mb-12">
        <DownArrow />
      </div>
    </main>
  );
}

