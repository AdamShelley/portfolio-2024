import React from "react";
import Card from "./card";

const IS_DEV = process.env.NODE_ENV === "development";

const projects = [
  {
    project: {
      name: "Search Bar",
      filename: "search-bar",
      skills: ["ReactJS", "Motion", "Tailwind"],
      description: "A search bar component for React/Next.",
      published: false,
    },
  },
  {
    project: {
      name: "Git-Pulse",
      filename: "git-pulse",
      skills: ["Tauri", "Typescript", "React", "Rust"],
      description: "A minimal GitHub desktop client",
      published: true,
    },
  },
  {
    project: {
      name: "electron-tailwind-template",
      filename: "electron-tailwind-template",
      skills: ["Electron", "Tailwind", "Shadcn", "Template"],
      description:
        "A template for creating electron apps with tailwind and shadcn.",
      published: true,
    },
  },
  {
    project: {
      name: "D-Struct",
      filename: "d-struct",
      skills: ["NextJS", "Typescript", "Cloudflare", "Drizzle"],
      description:
        "A single use self-destructing file sharing platform built with NextJS.",
      published: true,
    },
  },
  {
    project: {
      name: "breathe",
      filename: "breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "A small extension for Raycast, to give you quick, and simple mindfulness exercises.",
      published: true,
    },
  },
  {
    project: {
      name: "langAI",
      filename: "lang-ai",
      skills: ["React Native", "NodeJS", "Supabase", "ChatGPT"],
      description:
        "A language learning app that uses AI to generate stories for your level.",
      published: true,
    },
  },
];

const ProjectList = () => {
  return (
    <section className="grid md:grid-cols-1 items-center gap-10 lg:mt-0 orchestration">
      {projects
        .filter((project) => IS_DEV || project.project.published)
        .map((project, index) => (
          // <div key={project.project.name}>{project.project.name}</div>
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
