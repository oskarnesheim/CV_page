/* eslint-disable @typescript-eslint/no-unused-vars */
export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  logo?: string;
}

export interface WorkExperienceItem {
  position: string;
  company: string;
  duration: string;
  logo?: string;
  comment?: string;

}

export interface Skill {
  name: string;
  level: string;
}

