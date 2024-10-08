import React from "react";
import Card from "./card";

const projects = [
  {
    project: {
      name: "Dstruct",
      skills: ["NextJS", "Typescript", "Cloudflare", "Drizzle"],
      description:
        "A single use self-destructing file sharing platform built with NextJS.",
      imageName: "dstruct-screenshot.png",
    },
  },
  {
    project: {
      name: "Breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "A small extension for Raycast, to give you quick, and simple mindfulness exercises.",
      imageName: "breathe-screenshot.png",
    },
  },
  {
    project: {
      name: "LangAI",
      skills: ["React Native", "NodeJS", "Supabase", "ChatGPT"],
      description:
        "A language learning app that uses AI to generate stories for your level.",
      imageName: "LangAI-screenshot.png",
    },
  },
  {
    project: {
      name: "Electron-tailwind-template",
      skills: ["Electron", "Tailwind", "Shadcn", "Template"],
      description:
        "A template for creating electron apps with tailwind and shadcn.",
      imageName: "template-screenshot.png",
    },
  },
];

const ProjectList = () => {
  return (
    <section className="grid md:grid-cols-2 items-center lg:gap-5 mt-2 lg:mt-0 orchestration">
      {projects.map((project, index) => (
        <Card
          project={project.project}
          stagger={index}
          key={project.project.name}
        />
      ))}
    </section>
  );
};

export default ProjectList;
