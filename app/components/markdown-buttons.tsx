import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  github: string;
  demo?: string;
  npm?: string;
  download?: string;
};

const MarkdownButtons = ({ github, demo, npm, download }: Props) => {
  return (
    <div className="my-10 flex w-full">
      <Button asChild className="mr-2">
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="no-underline"
        >
          <span className="pointer-events-none">Github</span>
        </Link>
      </Button>

      {npm ? (
        <Button asChild className="mr-2">
          <Link
            href={npm}
            rel="noopener noreferrer"
            target="_blank"
            className="no-underline"
          >
            <span className="pointer-events-none">NPM</span>
          </Link>
        </Button>
      ) : null}
      {demo ? (
        <Button asChild className="mr-2">
          <Link
            href={demo}
            rel="noopener noreferrer"
            target="_blank"
            className="no-underline"
          >
            <span className="pointer-events-none">Live Demo</span>
          </Link>
        </Button>
      ) : null}
      {download ? (
        <Button asChild className="mr-2">
          <Link
            href={download}
            rel="noopener noreferrer"
            target="_blank"
            className="no-underline"
          >
            <span className="pointer-events-none">Download</span>
          </Link>
        </Button>
      ) : null}
    </div>
  );
};

export default MarkdownButtons;
