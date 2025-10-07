import { SpeedInsights } from "@vercel/speed-insights/next";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import AboutWork from "./components/aboutwork";

export default function Page() {
  return (
    <>
      <SpeedInsights />
      <section className="relative py-16 mb-[35%]">
        {/* ==== Blobs ==== */}
        {/* Pink blob – left side */}
        <div id="pink-blob" className="
          absolute inset-0
          bg-pink-300/70
          rounded-full
          overflow-x-hidden
          pointer-events-none
          -z-10 
          animate-float-pink
        " />

        {/* Green blob – right side */}
        <div id="green-blob" className="
          absolute inset-0
          bg-green-600/70
          rounded-full
          overflow-x-hidden
          pointer-events-none
          -z-10
          animate-float-green
        " />

        {/* ==== Content ==== */}
        <h1 className="mb-8 text-9xl font-semibold text-center relative z-20 text-gray-900">
          Hi, I’m Paul.
        </h1>

        <h2 className="mb-8 text-6xl font-semibold text-center">
          A Software Engineer.
        </h2>

        <p className="mb-4 text-xl font-semibold text-center tracking-wider">
          I’m dedicated to building{" "}
          <span className="text-10xl font-bold animate-metallic">innovative,</span>{" "}
          intuitive, and{" "}
          <span className="font-bold metallic-gradient animate-metallic bg-clip-text text-transparent">scalable</span> solutions
          <br />
          that empower users and drive <span>impact.</span>
        </p>

        <div className="my-8" />
      </section>
      <WorkExperience />
      <AboutWork />
       <Projects />
    </>
  );
}