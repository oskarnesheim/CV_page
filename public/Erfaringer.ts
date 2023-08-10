import { EducationItem, WorkExperienceItem, Skill } from "./interfaces";

const educationData: EducationItem[] = [
    {
      degree: "Bachelor in Information Technology",
      institution: "NTNU",
      year: "2021-present",
    },
    // Add more education items as needed
  ];

  const workExperienceData: WorkExperienceItem[] = [
    {
      position: "Software Engineer",
      company: "Tech Company Inc.",
      duration: "2021 - Present",
    },
    // Add more work experience items as needed
  ];

  const skillsData: Skill[] = [
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Advance" },
    { name: "HTML", level: "Intermediate" },
    { name: "HTML", level: "Intermediate" },
    // Add more skills as needed
  ];

export { educationData, workExperienceData, skillsData };