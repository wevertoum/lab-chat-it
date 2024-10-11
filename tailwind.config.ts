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
      boxShadow: {
        "back-button": "5.92105px 11.8421px 23.6842px rgba(211, 209, 216, 0.3)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "laborit-light-gray": "#F7F8FA",
        "laborit-dark-gray": "#141718",
        "laborit-text-gray-title": "#757474",
        "laborit-gray-icon-menu": "#CBCCCD",
        "laborit-text-gray-p": "#A0A0A5",
        "laborit-text-description": "#8E9295",
        "laborit-text-title": "#23262F",
        "laborti-text-secondary": "#757171",
        "laborit-text-placeholder": "#A3A3A8",
        "laborit-icon-light": "#DDDDE4",
        "laborit-dot": "#23262F80",
        "laborit-separator": "#E6E8EC",
        "laborit-separator-dark": "#E6E8EC",
        "laborit-skip-button": "#D7D7D7",
        "laborit-navigator-dark": "#232627",
        "laborit-back-button": "#D3D1D84D",
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
