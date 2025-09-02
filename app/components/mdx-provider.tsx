import { Link } from "next-view-transitions";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CopyToClipboard } from "./copyToClipboard";
import { GeistMono } from "geist/font/mono";
import Badges from "./badges";
import MarkdownButtons from "./markdown-buttons";
import { ProseExemptSearchBar } from "./prose-exempt-searchbar";
import { ProseExemptBreadcrumbs } from "./prose-exempt-breadcrumbs";
import ClickableImage from "@/projects/components/ClickableImage";

// Dynamic imports for heavy components
const ConfettiMaker = dynamic(
  () => import("@/posts/components/ConfettiMaker"),
  { ssr: false }
);
const CarouselComponent = dynamic(
  () =>
    import("./carousel").then((mod) => ({ default: mod.CarouselComponent })),
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

// Export as default for MDX components
const mdxComponents = {
  p: (props: any) => <p className="text-md leading-relaxed" {...props} />,
  Image: RoundedImage,
  img: RoundedImage,
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

export { mdxComponents };
export default mdxComponents;
