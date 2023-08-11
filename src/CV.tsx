import { Card, CardHeader } from "@chakra-ui/react";
import {
  educationData,
  workExperienceData,
  skillsData,
} from "../public/Erfaringer";

export default function CV() {
  return (
    <div>
      <div className="">
        <header>
          <Card>
            <CardHeader>Oskar Iglebæk Nesheim</CardHeader>
          </Card>
          <h1>Oskar Iglebæk Nesheim</h1>
          <p>Email: nesheimo@gmail.com</p>
          <p>Phone: +47 90156493</p>
        </header>

        <section>
          <h2>Education</h2>
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.year}</p>
            </div>
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
    </div>
  );
}
