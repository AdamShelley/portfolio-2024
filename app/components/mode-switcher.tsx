"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setIsMounted] = React.useState(false);
  const [isToggling, setIsToggling] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setTimeout(() => {
        setIsToggling(false);
      }, 300);
    }, 300);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleThemeToggle}
      className="relative z-10 bg-slate-700 text-slate-100 dark:bg-white dark:text-yellow-800 flex items-center justify-center self-center w-10 h-10 ml-8 transition-colors duration-300 ease-in-out rounded-full  bg-text hover:opacity-90 active:scale-95"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          className={`text-body transition-all duration-300 ease-in-out
            ${
              isToggling && theme === "dark"
                ? "translate-y-[-50%] translate-x-full opacity-0"
                : !isToggling && theme !== "dark"
                  ? "translate-y-0 opacity-100"
                  : ""
            }`}
        />
      ) : (
        <Moon
          size={20}
          className={`text-body transition-all duration-300 ease-in-out
            ${
              isToggling && theme !== "dark"
                ? "translate-y-[-30%] translate-x-full opacity-0"
                : !isToggling && theme === "dark"
                  ? "translate-y-0 opacity-100"
                  : ""
            }`}
        />
      )}
    </button>
  );
}
