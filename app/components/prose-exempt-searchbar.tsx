"use client";

import { useTheme } from "next-themes";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const ProseExemptSearchBar = (props: any) => {
  const { theme } = useTheme();
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    label: string;
  } | null>(null);

  const fruitsWithEmojis = [
    { id: 1, label: "🍏 Apple" },
    { id: 2, label: "🍌 Banana" },
    { id: 3, label: "🍒 Cherry" },
    { id: 4, label: "🍇 Grape" },
    { id: 5, label: "🍋 Lemon" },
    { id: 6, label: "🍊 Orange" },
    { id: 7, label: "🍍 Pineapple" },
    { id: 8, label: "🍓 Strawberry" },
    { id: 9, label: "🍉 Watermelon" },
  ];

  return (
    <div className="z-[999] not-prose !p-0 !m-0 !my-8">
      <div
        className={`[&_*]:!leading-normal [&_a]:!no-underline [&_p]:!m-0 [&_span]:!m-0 ${theme === "dark" ? "[&_*]:!border-zinc-700" : ""}`}
      >
        <SearchBar
          dropdownOptions={fruitsWithEmojis}
          {...props}
          darkMode={theme === "dark"}
          onSelect={(e) => setSelectedItem(e)}
        />
        {selectedItem && (
          <p className="text-center text-sm dark:text-gray-300 text-gray-500 mt-2 pt-2">
            You have selected: <strong>{selectedItem.label}</strong>
          </p>
        )}
      </div>
    </div>
  );
};
