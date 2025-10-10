import DemoEmbed from "./DemoEmbed";
import ProjectsGrid from "./ProjectsGrid.server";


export default function Projects() {
  return (
    <>
    <ProjectsGrid />
    <h1 id="lucerna" className="mt-20 text-center font-semibold text-5xl mb-8 tracking-tighter">Lucerna React Native Bible Reader App</h1>
    <DemoEmbed />
    </>
  );
}
