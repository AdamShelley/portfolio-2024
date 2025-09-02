import { Link } from "next-view-transitions";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypeHighlight from "rehype-highlight";
import "./highlighter.css";
import { CopyToClipboard } from "./copyToClipboard";
import { GeistMono } from "geist/font/mono";
import dynamic from "next/dynamic";
import Badges from "./badges";
import MarkdownButtons from "./markdown-buttons";
import { ProseExemptSearchBar } from "./prose-exempt-searchbar";
import { ProseExemptBreadcrumbs } from "./prose-exempt-breadcrumbs";

const ConfettiMaker = dynamic(
  () => import("@/posts/components/ConfettiMaker"),
  { ssr: false }
);
const CarouselComponent = dynamic(
  () => import("./carousel").then((mod) => mod.CarouselComponent),
  { ssr: false }
);
const ClickableImage = dynamic(
  () => import("@/projects/components/ClickableImage"),
  { ssr: false }
);

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className="no-underline">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} className="no-underline" />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="no-underline transition hover:text-zinc-300"
    />
  );
}

const CodeBlock = (props: any) => {
  const { className, children } = props;

  return (
    <CopyToClipboard>
      <pre
        className={`bg-transparent border-none ${GeistMono.className} max-h-[20vh] overflow-auto `}
      >
        <code>{children}</code>
      </pre>
    </CopyToClipboard>
  );
};

let components = {
  p: (props: any) => <p className="text-md leading-relaxed" {...props} />,
  Image: RoundedImage,
  a: CustomLink,
  code: CodeBlock,
  ConfettiMaker,
  Badges,
  MarkdownButtons,
  CarouselComponent,
  ClickableImage,
  SearchBar: ProseExemptSearchBar,
  Breadcrumbs: ProseExemptBreadcrumbs,
};

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  );
}
