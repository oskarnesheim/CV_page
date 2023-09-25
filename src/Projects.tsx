import { projectsData } from "../public/Erfaringer";
import ProjectItem from "./components/ProjectItem";

function Projects() {
  return (
    <div className="w-full md:w-1/2 m-auto  md:mt-20">
      <h1 className="mb-3 text-4xl font-bold">Projects</h1>
      {/* <div className="bg-gray-800 h-2 rounded-xl my-2"></div> */}
      <div className="">
        {projectsData.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
