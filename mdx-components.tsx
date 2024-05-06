import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p style={{ fontSize: "14px" }}>{children}</p>,
    ...components,
  };
}
