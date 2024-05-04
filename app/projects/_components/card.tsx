import Link from "next/link";
import React from "react";

type Props = {
  project: {
    name: string;
    skills: string[];
    description: string;
    imageName?: string | undefined;
  };
  customPage?: string;
};

const Card = ({ project, customPage }: Props) => {
  return (
    <div className="border-2 rounded-md">
      <Link href={`projects/${customPage}`}>{project.name}</Link>
    </div>
  );
};

export default Card;
