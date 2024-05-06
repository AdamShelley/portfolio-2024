import React from "react";
import Card from "./card";

type Props = {};

const projects = [
  {
    project: {
      name: "Breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "An interactive coding bootcamp experience delivered online.",
      imageName: "breathe-screenshot.png",
    },
    // customPage: "CodeCampDetails.html",
  },
  {
    project: {
      name: "LangAI",
      skills: ["React Native", "NodeJS", "Supabase", "ChatGPT"],
      description:
        "A platform for builders to create and share web development projects.",
      imageName: "LangAI-screenshot.png",
    },
    // customPage: "AboutUs.html",
  },
  {
    project: {
      name: "Guessagram",
      skills: ["NextJS", "Tailwind", "Typescript", "Railway"],
      description:
        "An app for tracking personal carbon footprint and eco-friendly activities.",

      imageName: "guesswords-screenshot.png",
    },
    // customPage: "EnvironmentImpact.html",
  },
  {
    project: {
      name: "React-onboarder-tool",
      skills: ["React", "NPM"],
      description:
        "A comprehensive tool for personal finance management and budget tracking.",
      imageName: "scribbler-screenshot.png",
      // imageName: "financeflow.png",
    },
    // customPage: "FinancialToolsOverview.html",
  },
];

const ProjectList = (props: Props) => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-3 mt-2 lg:mt-0 ">
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
