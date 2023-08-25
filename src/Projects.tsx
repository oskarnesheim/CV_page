import { projectsData } from "../public/Erfaringer";
import ProjectItem from "./components/ProjectItem";

function Projects() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <h1 className="mb-10 text-4xl font-bold">Projects</h1>
      <div className="">
        {projectsData.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
