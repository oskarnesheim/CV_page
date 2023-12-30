import { projectsData } from "../public/Erfaringer";
import Go_to_top_button from "./components/Go_to_top_button";
import ProjectItem from "./components/ProjectItem";

function Projects() {
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 m-auto mt-5  md:mt-20">
      <h1 className="mb-3 text-4xl font-bold">Projects</h1>
      {/* <div className="bg-gray-800 h-2 rounded-xl my-2"></div> */}
      <div className="">
        {projectsData.map((item, index) => (
          <ProjectItem item={item} key={index} />
        ))}
      </div>
      <Go_to_top_button />
    </div>
  );
}

export default Projects;
