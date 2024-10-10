"use client";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ToggleTheme: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
      <div className="h-fit w-fit backdrop-filter backdrop-blur-sm rounded-full p-1">
        {currentTheme === "dark" ? (
          <SunIcon
            className="w-6 h-6"
            role="button"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="w-6 h-6 text-stone-800"
            role="button"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    );
  };

  return <>{renderThemeChanger()}</>;
};

export default ToggleTheme;
