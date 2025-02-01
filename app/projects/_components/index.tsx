import React from "react";
import Card from "./card";

const IS_DEV = process.env.NODE_ENV === "development";

const projects = [
  {
    project: {
      name: "Git-Pulse",
      skills: ["Tauri", "Typescript", "React", "Rust"],
      description: "A minimal GitHub desktop client",
      imageName: "gitpulse-screenshot.png",
      published: true,
    },
  },
  {
    project: {
      name: "D-Struct",
      skills: ["NextJS", "Typescript", "Cloudflare", "Drizzle"],
      description:
        "A single use self-destructing file sharing platform built with NextJS.",
      imageName: "dstruct-screenshot.png",
      published: true,
    },
  },
  {
    project: {
      name: "breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "A small extension for Raycast, to give you quick, and simple mindfulness exercises.",
      imageName: "breathe-screenshot.png",
      published: true,
    },
  },
  {
    project: {
      name: "langAI",
      skills: ["React Native", "NodeJS", "Supabase", "ChatGPT"],
      description:
        "A language learning app that uses AI to generate stories for your level.",
      imageName: "LangAI-screenshot.png",
      published: true,
    },
  },
  {
    project: {
      name: "electron-tailwind-template",
      skills: ["Electron", "Tailwind", "Shadcn", "Template"],
      description:
        "A template for creating electron apps with tailwind and shadcn.",
      imageName: "template-screenshot.png",
      published: true,
    },
  },
];

const ProjectList = () => {
  return (
    <section className="grid md:grid-cols-2 items-center lg:gap-5 mt-2 lg:mt-0 orchestration">
      {projects
        .filter((project) => IS_DEV || project.project.published)
        .map((project, index) => (
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
