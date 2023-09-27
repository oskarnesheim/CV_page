import {
  educationData,
  workExperienceData,
  skillsData,
  otherExperiencesData,
} from "../public/Erfaringer";
import EducationItem from "./components/EducationItem";
import SkillsItem from "./components/SkillsItem";
import WorkItem from "./components/WorkItem";

export default function CV() {
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-1/2 m-auto mt-5  md:mt-20">
      <div className="flex flex-row justify-between">
        <h1 className="mb-10 text-4xl font-bold">CV</h1>
        <a href="oskar/CV_Oskar_Nesheim_online.pdf" target="_blank">
          <p className="font-bold hover:underline">CV.pdf</p>
        </a>
      </div>

      <section>
        <h2 className="mb-2 text-2xl font-bold underline">Work Experience</h2>
        {workExperienceData.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-bold underline">Education</h2>
        {educationData.map((item, index) => (
          <EducationItem item={item} key={index} />
        ))}
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-bold underline">Other Experiences</h2>
        {otherExperiencesData.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-bold underline">Coding skills</h2>
        <ul className="skills-list">
          {skillsData.map((item, index) => (
            <SkillsItem item={item} key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
}
