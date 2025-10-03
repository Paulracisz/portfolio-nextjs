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
      "Built reusable UI components with React & Tailwind.",
      "Implemented CI/CD pipelines for rapid releases.",
      "Mentored junior developers on accessibility best practices.",
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
      "Designed REST APIs with Express & PostgreSQL.",
      "Integrated AWS Lambda functions for serverless workloads.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section>
      <h1 className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">
        Work Experience
      </h1>
      <p className="mb-8 text-xl font-semibold text-center tracking-wider">
        Leveraging <span>{yearsOfExperience}</span> years of hands‑on
        experience, I craft memorable, user‑focused solutions—whether that’s a
        sleek mobile app or a responsive web application.
      </p>
      <Timeline items={experience} lineColor="bg-indigo-200" />
    </section>
  );
}
