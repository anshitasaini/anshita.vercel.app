import WavingHand from "./hand";
import BouncingArrow from "./arrow";

export default function Header() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative p-8 md:p-16 xl:p-32">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-8xl font-bold">
          anshita saini
          <WavingHand />
        </h1>
      </div>
      <p className="text-xl">
        software engineer, retrieval researcher, interested in applied AI and
        backend development.
      </p>
      <div className="absolute bottom-0 w-full flex justify-center mb-6">
        <BouncingArrow />
      </div>
    </main>
  );
}

