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
    title: "Embedded Engineer",
    dates: "May 2025 – Present",
    description: [
      "Built EasyGUI-based touchscreen UIs in embedded C, integrating device-side control logic for lights, floorplans, HVAC, motorized systems, and power management across multiple RV product lines.",
      "Authored and maintained firmware for CLC logic cards, ensuring subsystem reliability and consistent behavior across production hardware deployments.",
      "Designed always-on low-power UI patterns for embedded touchscreens, optimizing device-side responsiveness and reducing unnecessary wake cycles in live RV environments.",
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
      "Architected and maintained VegaTouch Mira and VegaTouch Eclipse — cross-platform mobile apps (AngularJS, iOS & Android) serving as the primary control interface for RV smart-home systems across a national customer base.",
      "Unified CAN-bus-connected subsystems — HVAC, lighting, battery monitoring, inverters, solar, and motorized accessories — into a single cohesive mobile control experience, eliminating the need for multiple discrete control panels.",
      "Engineered VegaTouch Orion, an embedded touchscreen interface deployed in RV cabins, delivering full-stack control of HVAC, lighting, power, AV, and accessories on resource-constrained hardware.",
      "Diagnosed and resolved a critical reboot failure affecting Newell Motorhomes production units, restoring stable overnight operation and preventing escalation to a customer-facing recall.",
      "Shipped full control suite on production hardware — HVAC, lighting, power management, motorized accessories — and extended the platform with AV integration: multi-source TV control supporting Roku, Sony, and Apple TV devices across Bluetooth, HDMI, and streaming services (Netflix, Disney+, Hulu).",
    ],
  },
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
    dates: "October 2019 – October 2020",
    description: [
      "Completed a 12-month intensive full-stack curriculum covering JavaScript, React, Redux, Python, and Django — culminating in two Butler University-accredited certifications: Front-End Web Development and Full-Stack Development.",
      "Shipped a Pokémon-style collection game with a React front-end and Python/Django REST API back-end.",
      "Built a Twitter-like social platform integrating a third-party API for live data consumption.",
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
