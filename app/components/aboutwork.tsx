import Image from "next/image";
import Mira from "../assets/mira.webp";
import Eclipse from "../assets/eclipse.webp";
import Newell from "../assets/newell.webp";
import Nebula from "../assets/nebula.webp";
import Aurora from "../assets/aurora.webp";
import MiraScreen1 from "../assets/mirascreen2.png";
import MiraScreen3 from "../assets/mirascreen3.png";
import MiraScreen4 from "../assets/mirascreen4.png";
import NewellScreen1 from "../assets/newellscreen1.png";
import NebulaScreen1 from "../assets/nebulascreen1.webp";
import AuroraScreen1 from "../assets/aurorascreen1.webp";

export default function AboutWork() {
  return (
    <>
      {/* ----- VegaTouch Mira & Eclipse ----- */}
      <h1 className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">
        VegaTouch Mira &amp; Eclipse
      </h1>

      {/* ── Responsive grid ── */}
      <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            alt="Mira logo"
            src={Mira}
            className="rounded-lg w-72 h-auto"
          />
          <Image
            alt="Eclipse logo"
            src={Eclipse}
            className="rounded-lg w-72 h-auto"
          />
        </div>

        <Image
          alt="Home page in Mira app"
          src={MiraScreen1}
          className="rounded-lg w-72 h-auto"
        />
        <Image
          alt="Lights control page in Mira app"
          src={MiraScreen3}
          className="rounded-lg w-72 h-auto"
        />
        <Image
          alt="HVAC control page in Mira app"
          src={MiraScreen4}
          className="rounded-lg w-72 h-auto"
        />
      </section>

      {/* ----- VegaTouch Orion ----- */}
      <h1 className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">
        VegaTouch Orion
      </h1>

      {/* ── Responsive grid ── */}
      <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {/* ----- First column: two stacked logos ----- */}
        <div className="flex flex-col items-center gap-4">
          <Image
            alt="Newell logo"
            src={Newell}
            className="rounded-lg w-72 h-auto"
          />
          <Image
            alt="Aurora logo"
            src={Aurora}
            className="rounded-lg w-72 h-auto"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image
            alt="Nebula logo"
            src={Nebula}
            className="rounded-lg w-72 h-auto"
          />
        </div>

        <Image
          alt="Home page in Mira app"
          src={NewellScreen1}
          className="rounded-lg w-72 h-auto"
        />
        <Image
          alt="Lights control page in Mira app"
          src={NebulaScreen1}
          className="rounded-lg w-72 h-auto"
        />
        <Image
          alt="HVAC control page in Mira app"
          src={AuroraScreen1}
          className="rounded-lg w-72 h-auto"
        />
      </section>
    </>
  );
}
