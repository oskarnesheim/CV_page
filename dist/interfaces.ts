export interface IEducationItem {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
  logo?: string;
}

export interface IWorkExperienceItem {
  position: string;
  company: string;
  duration: string;
  logo?: string;
  comment?: string;
}

export interface Skill {
  name: string;
  level: number;
  Description: string;
}

export interface IProjectItem {
  name: string;
  description: string;
  link: string;
  images: IImage[];
  tags: string[];
}
interface IImage {
  src: string;
  Description: string;
}

export const SkillDict = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
  4: "Expert",
};
