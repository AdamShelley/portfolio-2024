"use client";

import { useTheme } from "next-themes";
import { SearchBar } from "./SearchBar";

export const ProseExemptSearchBar = (props: any) => {
  const { theme } = useTheme();

  return (
    <div className="not-prose search-bar !p-0 !m-0 !my-8 ">
      <div className="[&_*]:!leading-normal [&_a]:!no-underline [&_p]:!m-0 [&_span]:!m-0">
        <SearchBar {...props} darkMode={theme === "dark"} />
      </div>
    </div>
  );
};
