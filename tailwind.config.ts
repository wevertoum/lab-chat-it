import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "laborit-light-gray": "#F7F8FA",
        "laborit-dark-gray": "#141718",
        "laborit-text-gray-title": "#757474",
        "laborit-text-gray-p": "#A0A0A5",
        "laborit-text-placeholder": "#A3A3A8",
        "laborit-icon-light": "#DDDDE4",
      },
    },
  },
  plugins: [],
};
export default config;
