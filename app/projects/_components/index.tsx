import React from "react";
import Card from "./card";

const IS_DEV = process.env.NODE_ENV === "development";

const projects = [
  {
    separator: true,
    label: "UI Components",
    style: "default",
  },
  {
    project: {
      name: "Breadcrumbs",
      filename: "breadcrumbs",
      skills: ["ReactJS", "Motion", "Tailwind"],
      description: "A minimalist breadcrumbs component for React/Next.",
      published: true,
    },
  },
  {
    project: {
      name: "search-bar",
      filename: "search-bar",
      skills: ["ReactJS", "Motion", "Tailwind"],
      description: "A search bar component for React/Next.",
      published: true,
    },
  },
  {
    separator: true,
    label: "Projects",
    style: "default",
  },
  {
    project: {
      name: "git-pulse",
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
      name: "breathe",
      filename: "breathe",
      skills: ["ReactJS", "Typescript", "Raycast"],
      description:
        "A small extension for Raycast, to give you quick, and simple mindfulness exercises.",
      published: true,
    },
  },
  {
    separator: true,
    label: "Deprecated - But still interesting",
    style: "deprecated",
  },
  {
    project: {
      name: "d-struct",
      filename: "d-struct",
      skills: ["NextJS", "Typescript", "Cloudflare", "Drizzle"],
      description:
        "A single use self-destructing file sharing platform built with NextJS.",
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

const Separator = ({
  label,
  style = "default",
}: {
  label: string;
  style: string;
}) => {
  const baseClasses = "flex items-center mt-8 mb-2";
  const labelClasses = "px-4 text-sm font-medium";
  const lineClasses = "flex-1 h-px";

  const styleVariants: Record<string, { label: string; line: string }> = {
    default: {
      label: "text-gray-400 bg-white/10 dark:bg-gray-900/10",
      line: "bg-gray-200 dark:bg-gray-700",
    },
    wip: {
      label: "text-orange-500 bg-white/10 dark:bg-gray-900",
      line: "bg-orange-200 dark:bg-orange-800",
    },
    experimental: {
      label: "text-purple-500 bg-white/10 dark:bg-gray-900",
      line: "bg-purple-200 dark:bg-purple-800",
    },
    deprecated: {
      label: "text-gray-400 bg-white/10 dark:bg-gray-900/50",
      line: "bg-gray-300 dark:bg-gray-600",
    },
  };

  const currentStyle = styleVariants[style] || styleVariants.default;

  return (
    <div className={baseClasses}>
      <div className={`${lineClasses} ${currentStyle.line}`} />
      <span className={`${labelClasses} ${currentStyle.label}`}>{label}</span>
      <div className={`${lineClasses} ${currentStyle.line}`} />
    </div>
  );
};

const ProjectList = () => {
  return (
    <section className="grid md:grid-cols-1 items-center gap-10 lg:mt-0 orchestration">
      {projects
        .filter((item) => {
          if (item.separator) return true;
          return item.project && (IS_DEV || item.project.published);
        })
        .map((item, index) => {
          // Handle separators
          if (item.separator) {
            return (
              <Separator
                key={`separator-${index}`}
                label={item.label}
                style={item.style || "default"}
              />
            );
          }

          // Handle projects
          return (
            <Card
              project={item.project!}
              stagger={index}
              key={item.project!.name}
            />
          );
        })}
    </section>
  );
};

export default ProjectList;
