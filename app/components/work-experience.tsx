import Timeline, { TimelineItem } from "./timeline";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import Image from "next/image";
import KenzieLogo from "../assets/kenzielogo.png";
import FireflyLogo from "../assets/fireflylogo.png"

const startDate = new Date("May 5, 2021");

const now = new Date();

// subtract milliseconds to get difference
const diffMs = now.getTime() - startDate.getTime();

// convert milliseconds into years
const yearsOfExperience = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));

const experience: TimelineItem[] = [
  {
    organization: "Kenzie Academy",
    icon: (
      <Image
        alt="Kenzie Academy Logo"
        width={24}
        height={24}
        src={KenzieLogo}
        className="rounded-full"
      />
    ),
    title: "Software Engineering Student",
    dates: "October 2019 – October 2020",
    description: [
      "Completed a 12‑month intensive curriculum:",
      "3 months: Vanilla JavaScript & core web fundamentals",
      "3 months: Modern React (hooks, context, routing)",
      "3 months: Python & Django backend development",
      "3 months: Full‑stack React + Python projects",

      // flagship projects
      "Built a Pokémon‑style collection game (React front‑end, Python API back‑end)",
      "Created a Twitter‑like mock social‑media platform that consumed an external API",
      "Recieved both Front-End Web Development and Full-Stack Development certifications accredited by Butler University."
    ],
  },
  {
    organization: "Firefly Integrations",
    icon:  (
      <Image
        alt="Firefly Integrations Logo"
        width={20}
        height={20}
        src={FireflyLogo}
        className="rounded-full object-contain"
      />
    ),
    title: "Mobile Developer",
    dates: "May 2021 – Present",
    description: [
           // ----- Mobile apps (VegaTouch Mira & Eclipse) -----
      "Led development of VegaTouch Mira and VegaTouch Eclipse, AngularJS mobile applications (iOS & Android) that serve as the primary control hub for RV smart‑home systems.",
      "Implemented seamless integration with a wide range of RV subsystems utilizing CAN protocol including:",
      "HVAC climate control (temperature set‑points, fan modes, zone scheduling)",
      "Lighting groups (dimming, scene presets, custom RGB lighting modes)",
      "Electrical components – inverters, solar‑panel charge controllers, battery management systems",
      "Motorized accessories – slides, awnings, lifts such as tv lifts, and various machines",
      // ----- Embedded apps (VegaTouch Orion) -----
      "Developed VegaTouch Orion – a suite of embedded touchscreen interfaces mounted on standalone screens throughout the RV.",
      "Implemented core feature set on production units (HVAC, lighting, power‑management, motorized accessories) while adding AV controls:",
      "Media source selection (Bluetooth, HDMI, USB, streaming services)",
      "Multi‑zone audio routing and volume balancing",
      "Video input switching",
      "Optimized UI for low‑power, always‑on hardware (One-time binding, idle‑sleep timers)",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h1 className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">
        Experience
      </h1>
      <p className="mb-8 text-xl font-semibold text-center tracking-wider">
        Leveraging <span>{yearsOfExperience}</span> years of hands‑on
        experience, I craft memorable, user‑focused solutions—whether that’s a
        sleek mobile app or a responsive web application.
      </p>
      <Timeline items={experience} lineColor="bg-indigo-200" />
    </section>
  );
}
