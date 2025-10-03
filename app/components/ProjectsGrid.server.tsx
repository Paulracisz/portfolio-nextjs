// app/components/ProjectsGrid.server.tsx
import type { StaticImageData } from "next/image";
import ProjectCard from "./ProjectsCard.client";
import Cogs from '../assets/cogs-solid.svg';

/* -----------------------------------------------------------------
   Project type – exported so the client component can import it
   ----------------------------------------------------------------- */
export type Project = {
  id: string;
  title: string;
  tagline: string;
  thumbnail: StaticImageData
  alt: string;
  href?: string;
};

/* -----------------------------------------------------------------
   Sample data – you could replace this with a fetch from a CMS
   ----------------------------------------------------------------- */
import lucernaImg from "../assets/lucerna.png";

export const projects: Project[] = [
  {
    id: "lucerna",
    title: "React Native Bible Reader App",
    tagline: "I created an open source Bible reader app using free domain translations to combine my love for faith and technology!",
    thumbnail: lucernaImg,
    alt: "Screenshot of Lucerna Bible App",
    href: "https://github.com/Paulracisz/lucerna-bible-app",
  },  
  {
    id: "soon",
    title: "More Coming Soon!",
    tagline: "",
    thumbnail: Cogs,
    alt: "Cog Icon",
    href: "",
  },
];

/* -----------------------------------------------------------------
   Server‑side grid wrapper
   ----------------------------------------------------------------- */
export default function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">
        Projects
      </h1>

      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((proj) => (
          <li key={proj.id}>
            {/* The child is a client component, so it can safely use Image/Link */}
            <ProjectCard project={proj} />
          </li>
        ))}
      </ul>
    </section>
  );
}