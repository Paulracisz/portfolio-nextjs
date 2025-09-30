import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Page() {
  return (
    <>
      <SpeedInsights />
      <section className="relative py-16">
        {/* ==== Blobs ==== */}
        {/* Pink blob – left side */}
        <div id="pink-blob" className="
          absolute inset-0
          w-[100%] h-[80%]
          bg-pink-300/70
          rounded-full
          overflow-x-hidden
          pointer-events-none
          -z-10
        " />

        {/* Green blob – right side */}
        <div id="green-blob" className="
          absolute inset-0
          w-[100%] h-[60%]
          bg-green-600/70
          rounded-full
          overflow-x-hidden
          pointer-events-none
          -z-10
        " />

        {/* ==== Content ==== */}
        <h1 className="mb-8 text-9xl font-semibold text-center relative z-20 text-gray-900">
          Hi, I’m Paul.
        </h1>

        <h2 className="mb-8 text-6xl font-semibold text-center">
          A Software Engineer.
        </h2>

        <p className="mb-4 font-semibold text-center tracking-wider">
          I’m dedicated to building{" "}
          <span className="text-10xl font-bold">innovative,</span>{" "}
          intuitive, and{" "}
          <span className="font-bold">scalable</span> solutions
          <br />
          that empower users and drive impact.
        </p>

        <div className="my-8" />
      </section>
    </>
  );
}