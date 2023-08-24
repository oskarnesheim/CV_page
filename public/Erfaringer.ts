/* eslint-disable @typescript-eslint/no-unused-vars */
import { IEducationItem, IWorkExperienceItem, Skill } from "./interfaces";

const educationData: IEducationItem[] = [
    {
      degree: "Bachelor in Information Technology",
      institution: "NTNU",
      year: "2021-present",
      grade: "3,7/5,0",
      logo: "NTNU_logo.png",

    },
    {
      degree: "General academic competence in Natural sciences",
      institution: "Asker VGS",
      year: "2017-2020",
      grade: "5.3/6.0",
      logo: "Asker_VGS_logo.png",

    }
    // Add more education items as needed
  ];

  const workExperienceData: IWorkExperienceItem[] = [
    {
      position: "Care Worker",
      company: "Gullhella Bo- og omsorgssenter - Asker Kommune",
      duration: "June 2022 - August 2023",
      logo: "Asker_kommune.png",
      comment: "Working as a care worker at a nursing home in Asker. Here i have learned to work in a team, and to take responsibility for others. I have also learned to work under pressure, and to be flexible"
    },
    {
      position: "Salesman",
      company: "Lovenskiold Handel AS / Maxbo Asker",
      duration: "May 2018 - Juli 2020",
      logo: "Maxbo_logo.png",
      comment: "At Maxbo I learned to work well under pressure and talk to people of all ages."
    },
    {
      position: "Learning assistant - TDT4100",
      company: "NTNU",
      duration: "January 2023 - June 2023",
      logo: "NTNU_logo.png",
      comment: "At NTNU I have been a learning assistant for the course TDT4100 Object Oriented Programming. Here I have learned to teach others, and to explain complex concepts in a simple way. I have also gained a deeper understanding of the course material, through teaching it."
    },
    {
      position: "Learning assistant - IT1901 ",
      company: "NTNU",
      duration: "August 2023 - present",
      logo: "NTNU_logo.png",
      comment: "This fall I am a learning assistant for the course IT1901 Informatics Project 1. Here I will be guiding a group of students through a project, and help them with any problems they might have."
    },
    {
      position: "Consript",
      company: "Norwegian Army",
      duration: "August 2020 - August 2021",
      logo: "Emblem_of_the_Norwegian_Army.png",
      comment: "I had my conscription year in the Army. Here I learned alot about teamwork and became very independent. I also learned to work under pressure and to be flexible. "
    },
    // {
    //   position: "Artillery Ranger",
    //   company: "Norwegian Army",
    //   duration: "August 2020 - August 2021",
    //   logo: "Emblem_of_the_Norwegian_Army.png",
    //   comment: "This fall I am a learning assistant for the course IT1901 Informatics Project 1. Here I will be guiding a group of students through a project, and help them with any problems they might have."
    // },
  ];

  const otherExperiencesData: IWorkExperienceItem[] = [
    {
      position: "Leader of the Sports Committee",
      company: "Online",
      duration: "February 2022 - February 2023",
      logo: "Online_logo.png",
      comment: "As the leader of the sports committee I have learned about leadership, and how to lead a group of people. I have experienced how it feels to take extra responsibily and how to communicate well with others."
    },
    {
      position: "Member of the Bank Committee",
      company: "Online",
      duration: "February 2023 - present",
      logo: "Online_logo.png",
      comment: "As a member of the bank committee I have learned about how to manage a budget, and how to make good decisions for the organization. I also have some experience with the accounting program Fiken, which we use to manage the budget."
    },
    {
      position: "Member of the Excursion Committee",
      company: "Online",
      duration: "March 2023 - present",
      logo: "Online_logo.png",
      comment: "At the excursion committee we have planned and booked a trip for the third year students at Informatics at NTNU. We have taken inn different opinions and weighed them against each other and the budget. I have learned about planning and how much work organizing a trip is."
    },

  ]

  const skillsData: Skill[] = [
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Advance" },
    { name: "HTML", level: "Intermediate" },
    // Add more skills as needed
  ];

export { educationData, workExperienceData, otherExperiencesData, skillsData };