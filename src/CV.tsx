import {
  educationData,
  workExperienceData,
  skillsData,
} from "../public/Erfaringer";
import EducationItem from "./components/EducationItem";

export default function CV() {
  return (
    <div className="w-1/2 m-auto mt-20">
      <h1 className="mb-10 text-4xl font-bold">CV</h1>
      <h2 className="mb-2 text-2xl font-bold">Education</h2>
      <section className="">
        {educationData.map((item, index) => (
          <EducationItem item={item} key={index} />
        ))}
      </section>
      <section>
        <h2>Work Experience</h2>
        {workExperienceData.map((item, index) => (
          <div key={index} className="work-experience-item">
            <h3>{item.position}</h3>
            <p>{item.company}</p>
            <p>{item.duration}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
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
