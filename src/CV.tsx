import {
  educationData,
  workExperienceData,
  skillsData,
  otherExperiencesData,
} from "../public/Erfaringer";
import EducationItem from "./components/EducationItem";
import WorkItem from "./components/WorkItem";

export default function CV() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <h1 className="mb-10 text-4xl font-bold">CV</h1>
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
        <h2 className="mb-2 text-2xl font-bold underline">Skillzzz</h2>
        <ul className="skills-list">
          {skillsData.map((skill, index) => (
            <li key={index}>
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
