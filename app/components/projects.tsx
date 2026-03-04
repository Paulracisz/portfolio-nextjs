import DemoEmbed from "./DemoEmbed";
import ProjectsGrid from "./ProjectsGrid.server";


export default function Projects() {
  return (
    <>
    <ProjectsGrid />
    <h1 id="lucerna" className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">Lucerna Bible Reader App</h1>
    <DemoEmbed />
    <h2 className="mt-10 text-left font-semibold text-3xl mb-4 tracking-tighter">Project Overview</h2>
    <p className="text-left mx-auto">Lucerna is a React Native Bible Reader App that allows users to read and study the Bible on their mobile devices. It features a clean and intuitive interface, offline reading capabilities, search functionality, bookmarks, and customizable reading settings.</p>
    <h2 className="mt-10 text-left font-semibold text-3xl mb-4 tracking-tighter">Technologies Used</h2>
    <div className="flex flex-wrap gap-3 items-center text-left">
      <span className="tags inline-block px-5 py-3 rounded text-sm font-small">React Native</span>
      <span className="tags inline-block px-5 py-3 rounded text-sm font-small">TypeScript</span>
      <span className="tags inline-block px-5 py-3 rounded text-sm font-small">Expo Go</span>
      <span className="tags inline-block px-5 py-3 rounded text-sm font-small">Vercel</span>
      <span className="tags inline-block px-5 py-3 rounded text-sm font-small">Free Use Bible API</span>
    </div>
    </>
  );
}
