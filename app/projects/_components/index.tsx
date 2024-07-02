import React from "react";
import Card from "./card";

type Props = {};

const projects = [
  {
    project: {
      name: "Breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "A small extension for Raycast, to give you quick, and simple mindfulness exercises.",
      imageName: "breathe-screenshot.png",
    },
    // customPage: "CodeCampDetails.html",
  },
  {
    project: {
      name: "LangAI",
      skills: ["React Native", "NodeJS", "Supabase", "ChatGPT"],
      description:
        "A language learning app that uses AI to generate stories for your level.",
      imageName: "LangAI-screenshot.png",
    },
    // customPage: "AboutUs.html",
  },
  {
    project: {
      name: "Guessagram",
      skills: ["NextJS", "Tailwind", "Typescript", "Railway"],
      description: "A word guessing game, automatically resets daily",

      imageName: "guesswords-screenshot.png",
    },
    // customPage: "EnvironmentImpact.html",
  },
  {
    project: {
      name: "React-onboarder-tool",
      skills: ["React", "NPM"],
      description:
        "A tool for react to create an onboarding experience for your users.",
      imageName: "onboarder-tool.png",
      // imageName: "financeflow.png",
    },
    // customPage: "FinancialToolsOverview.html",
  },
];

const ProjectList = (props: Props) => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-5 mt-2 lg:mt-0 ">
      {projects.map((project, index) => (
        <Card
          project={project.project}
          // customPage={project?.customPage}
          key={project.project.name}
        />
      ))}
    </section>
  );
};

export default ProjectList;
