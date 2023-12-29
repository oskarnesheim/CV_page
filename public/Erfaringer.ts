import {
  IEducationItem,
  IProjectItem,
  IWorkExperienceItem,
  Skill,
} from "./interfaces";

const educationData: IEducationItem[] = [
  {
    degree: "Bachelor in Information Technology",
    institution: "NTNU",
    year: "2021-present(finishing in 2024)",
    grade: "3,7/5,0",
    logo: "logoer/NTNU_logo.png",
  },
  {
    degree: "General academic competence in Natural sciences",
    institution: "Asker VGS",
    year: "2017-2020",
    grade: "5.3/6.0",
    logo: "logoer/Asker_VGS_logo.png",
  },
  // Add more education items as needed
];

const workExperienceData: IWorkExperienceItem[] = [
  {
    position: "Tech Consultant",
    company: "Junior Consulting",
    duration: "September 2023 - present",
    logo: "logoer/Jcr_logo.jpg",
    comment:
      "I have just been hired at Junior Consulting as Tech Consultant. Here I hope to learn as much as possible about the consulting business, and to get some experience with real projects. ",
  },
  {
    position: "Learning assistant - TDT4100",
    company: "NTNU",
    duration: "January 2023 - June 2023",
    logo: "logoer/NTNU_logo.png",
    comment:
      "At NTNU I have been a learning assistant for the course TDT4100 Object Oriented Programming. Here I have learned to teach others, and to explain complex concepts in a simple way. I have also gained a deeper understanding of the course material, through teaching it.",
  },
  {
    position: "Learning assistant - IT1901 ",
    company: "NTNU",
    duration: "August 2023 - present",
    logo: "logoer/NTNU_logo.png",
    comment:
      "This fall I am a learning assistant for the course IT1901 Informatics Project 1. Here I will be guiding a group of students through a project, and help them with any problems they might have.",
  },
  {
    position: "Care Worker",
    company: "Gullhella Bo- og omsorgssenter",
    duration: "June 2022 - August 2023",
    logo: "logoer/Asker_kommune.png",
    comment:
      "Working as a care worker at a nursing home in Asker. Here i have learned to work in a team, and to take responsibility for others. I have also learned to work under pressure, and to be flexible",
  },
  {
    position: "Salesman",
    company: "Maxbo Asker",
    duration: "May 2018 - Juli 2020",
    logo: "logoer/Maxbo_logo.png",
    comment:
      "At Maxbo I learned to work well under pressure and talk to people of all ages.",
  },
  {
    position: "Consript",
    company: "Norwegian Army",
    duration: "August 2020 - August 2021",
    logo: "logoer/Emblem_of_the_Norwegian_Army.png",
    comment:
      "I had my conscription year in the Army. Here I learned alot about teamwork and became very independent. I also learned to work under pressure and to be flexible. ",
  },
];

const otherExperiencesData: IWorkExperienceItem[] = [
  {
    position: "Leader of the Sports Committee",
    company: "Online",
    duration: "February 2022 - February 2023",
    logo: "logoer/Online_logo.png",
    comment:
      "As the leader of the sports committee I have learned about leadership, and how to lead a group of people. I have experienced how it feels to take extra responsibily and how to communicate well with others.",
  },
  {
    position: "Member of the Bank Committee",
    company: "Online",
    duration: "February 2023 - present",
    logo: "logoer/Online_logo.png",
    comment:
      "As a member of the bank committee I have learned about how to manage a budget, and how to make good decisions for the organization. I also have some experience with the accounting program Fiken, which we use to manage the budget.",
  },
  {
    position: "Member of the Excursion Committee",
    company: "Online",
    duration: "March 2023 - present",
    logo: "logoer/Online_logo.png",
    comment:
      "At the excursion committee we have planned and booked a trip for the third year students at Informatics at NTNU. We have taken inn different opinions and weighed them against each other and the budget. I have learned about planning and how much work organizing a trip is.",
  },
];

const skillsData: Skill[] = [
  { name: "React", level: 3, Description: "Advanced" },
  { name: "TypeScript", level: 3, Description: "Advanced" },
  { name: "Python", level: 2, Description: "Intermediate" },
  { name: "Java", level: 3, Description: "Advanced" },
  { name: "HTML", level: 2, Description: "Intermediate" },
  { name: "CSS", level: 2, Description: "Intermediate" },
  { name: "MongoDB", level: 2, Description: "Intermediate" },
  { name: "SQL", level: 2, Description: "Intermediate" },
  { name: "Git", level: 3, Description: "Advanced" },
  { name: "GraphQL", level: 2, Description: "Intermediate" },
  // Add more skills as needed
];

const projectsData: IProjectItem[] = [
  {
    name: "Pokedex",
    description:
      "Pokedex is a fullstack application where the user can search for 300 different pokemons from the first and second generation of the game. The application was a group project in the course IT2810 Web Development at NTNU. ",
    link: "https://github.com/oskarnesheim/WebDev_project2",
    images: [
      {
        src: "Pokedex/Pokedex_homescreen.png",
        Description: "Screenshot of the homescreen of the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_About_Page.png",
        Description: "Screenshot of the About Page in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_charizard.png",
        Description:
          "Screenshot displaying details of Charizard in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_choosing_filters.png",
        Description:
          "Screenshot showing the filter selection screen in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_choosing_sorting.png",
        Description: "Screenshot of the sorting options in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_filter_and_sorting_active.png",
        Description:
          "Screenshot showing both filters and sorting options active in the Pokedex app.",
      },

      {
        src: "Pokedex/Pokedex_MyTeam.png",
        Description:
          "Screenshot displaying the My Team feature in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_review.png",
        Description: "Screenshot showing the review page in the Pokedex app.",
      },
      {
        src: "Pokedex/Pokedex_search.png",
        Description:
          "Screenshot of the search functionality in the Pokedex app.",
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Git",
      "GraphQL",
      "Apollo Client",
      "Mongoose",
      "MongoDB",
      "Material UI",
      "CSS",
      "Tanstack Query",
      "Recoil",
      "React Router",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "WeatherSearcher",
    description:
      "WeatherSearcher is a website where you can search for weather data for different cities. This was a project in the course IT2810 Web Development at NTNU. Here we used React with Typescript as our frontend. The main focus for the project was to learn how to use React and Typescript, and to learn how to use API's. ",
    link: "https://github.com/oskarnesheim/WebDev_project1",
    images: [
      {
        src: "WeatherSearcher/WS_homepage.png",
        Description: "Screenshot of the homepage of the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_favorites_A-Z.png",
        Description:
          "Screenshot showing the favorites sorted from A to Z in the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_search.png",
        Description:
          "Screenshot displaying the search functionality in the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_favorites_old-new.png",
        Description:
          "Screenshot showing the favorites sorted from oldest to newest in the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_Frankston_advanced_imperial.png",
        Description:
          "Screenshot of the advanced weather details for Frankston using imperial units in the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_Frankston_advanced.png",
        Description:
          "Screenshot displaying advanced weather details for Frankston in the WeatherSearcher app.",
      },
      {
        src: "WeatherSearcher/WS_Frankston_normal.png",
        Description:
          "Screenshot showing normal weather details for Frankston in the WeatherSearcher app.",
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Git",
      "API",
      "CSS",
      "Tanstack Query",
      "Recoil",
      "React Router",
    ],
  },
  {
    name: "Journey Journal",
    description:
      "Journey Journal is a social media application where users can look at backpacking journeys, like them and give hvem ratings. Users can also create their own journeys and share them with others. This was a group project in the course TDT4140 Programvareutvikling at NTNU. Here we used React with Typescript as our frontend, and Firebase as our backend. The main focus for the project was to learn how to work in a group using scrum. ",
    link: "https://github.com/oskarnesheim/journey_journal",
    images: [
      {
        src: "JourneyJournal/JJ_darkmode.png",
        Description:
          "Screenshot showing the dark mode feature of the Journey Journal app.",
      },
      {
        src: "JourneyJournal/JJ_filter.png",
        Description:
          "Screenshot displaying the filtering feature in the Journey Journal app.",
      },
      {
        src: "JourneyJournal/JJ_search.png",
        Description:
          "Screenshot of the search functionality in the Journey Journal app.",
      },
      {
        src: "JourneyJournal/JJ_sorting.png",
        Description:
          "Screenshot illustrating the sorting feature within the Journey Journal app.",
      },
      {
        src: "JourneyJournal/JJ_store_journeys.png",
        Description:
          "Screenshot showing how journeys are stored in the Journey Journal app.",
      },
    ],

    tags: ["React", "Typescript", "Firebase", "Git", "Scrum"],
  },
  {
    name: "Crypto Cojo",
    description:
      "Crypto Cojo is a website application where you can 'buy' real life cryptocoins and see how you portifolio would would do in real life. The application was a group project that three of my classmates and I worked on. The application was has a Java backend with Springboot REST API and React/Typescript frontend. This was my first project in a team where we used git to a great extend, and I learned alot. This was also my first encounter with API's, which I have found to be very much used later on.",
    link: "https://github.com/oskarnesheim/journey_journal",
    //   images: ["CryptoCojo/CryptoCojo_home.png","CryptoCojo/CryptoCojo_login.png", "CryptoCojo/CryptoCojo_settings.png"],
    images: [
      {
        src: "CryptoCojo/CryptoCojo_home.png",
        Description: "Screenshot of the home page in the CryptoCojo app.",
      },
      {
        src: "CryptoCojo/CryptoCojo_login.png",
        Description:
          "Screenshot showing the login screen of the CryptoCojo app.",
      },
      {
        src: "CryptoCojo/CryptoCojo_settings.png",
        Description: "Screenshot of the settings page in the CryptoCojo app.",
      },
    ],
    tags: ["React", "Typescript", "SpringBoot", "Maven", "Git", "Java"],
  },
  {
    name: "2048",
    description:
      "In my second semester at NTNU i made a clone of the game 2048. Here i used Java as my backend with JavaFX as my frontend. I learned alot about how to store data and retrieve them from files. This was my first project, and the design isnt the best.",
    link: "https://github.com/oskarnesheim/2048-prosjekt",
    //   images: ["2048/2048_game_over.png","2048/2048_Skrive_til_fil.png", "2048/2048_startside.png", "2048/2048_ingame.png", "2048/2048_get_game.png"],
    images: [
      {
        src: "2048/2048_game_over.png",
        Description: "Screenshot showing the game over screen in the 2048 app.",
      },
      {
        src: "2048/2048_Skrive_til_fil.png",
        Description:
          "Screenshot displaying the feature for writing to a file in the 2048 app.",
      },
      {
        src: "2048/2048_startside.png",
        Description: "Screenshot of the start page of the 2048 app.",
      },
      {
        src: "2048/2048_ingame.png",
        Description: "Screenshot capturing in-game play in the 2048 app.",
      },
      {
        src: "2048/2048_get_game.png",
        Description:
          "Screenshot showing the get game or download page in the 2048 app.",
      },
    ],
    tags: ["Java", "JavaFX", "Git", "fxml"],
  },
];

export {
  educationData,
  workExperienceData,
  otherExperiencesData,
  skillsData,
  projectsData,
};
