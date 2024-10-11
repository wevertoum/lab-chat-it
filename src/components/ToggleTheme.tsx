"use client";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import AppThemeProvider from "@/contexts/AppThemeProvider";

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = async (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="h-fit w-fit backdrop-filter backdrop-blur-sm rounded-full p-1">
      {theme === "dark" ? (
        <SunIcon
          className="w-6 h-6"
          role="button"
          onClick={() => handleToggleTheme("light")}
        />
      ) : (
        <MoonIcon
          className="w-6 h-6 text-stone-800"
          role="button"
          onClick={() => handleToggleTheme("dark")}
        />
      )}
    </div>
  );
};

function ToggleTheme() {
  return (
    <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toggle />
    </AppThemeProvider>
  );
}

export default ToggleTheme;
