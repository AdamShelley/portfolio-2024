import { Link } from "next-view-transitions";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypeHighlight from "rehype-highlight";
import "./highlighter.css";
import { CopyToClipboard } from "./copyToClipboard";
import { GeistMono } from "geist/font/mono";
import ConfettiMaker from "@/posts/components/ConfettiMaker";
import Badges from "./badges";
import MarkdownButtons from "./markdown-buttons";
import { CarouselComponent } from "./carousel";
import ClickableImage from "@/projects/components/ClickableImage";
import { ProseExemptSearchBar } from "./prose-exempt-searchbar";

function RoundedImage(props: any, clickAble: boolean = false) {
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
  // const language = className ? className.replace("language-", "") : "";

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
  ConfettiMaker: ConfettiMaker,
  Badges: Badges,
  MarkdownButtons: MarkdownButtons,
  CarouselComponent: CarouselComponent,
  ClickableImage: ClickableImage,
  SearchBar: ProseExemptSearchBar,
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
