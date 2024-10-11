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
        "laborit-text-description": "#8E9295",
        "laborit-text-title": "#23262F",
        "laborti-text-secondary": "#757171",
        "laborit-text-placeholder": "#A3A3A8",
        "laborit-icon-light": "#DDDDE4",
        "laborit-dot": "#23262F80",
        "laborit-dot-active": "#141718",
        "laborit-separator": "#E6E8EC",
        "laborit-separator-dark": "#E6E8EC",
        "laborit-navigator-dark": "#232627",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        urbanist: ["var(--font-urbanist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
