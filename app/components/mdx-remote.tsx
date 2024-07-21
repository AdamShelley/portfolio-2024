import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypeHighlight from "rehype-highlight";
import "./highlighter.css";
import { CopyToClipboard } from "./copyToClipboard";

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const CodeBlock = (props: any) => {
  const { className, children } = props;
  const language = className ? className.replace("language-", "") : "";

  return (
    <CopyToClipboard>
      <pre className="bg-transparent border-none">
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
