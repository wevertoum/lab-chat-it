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
        "laborit-dark-gray": "#141718",
        "laborit-text-gray-title": "#757474",
        "laborit-gray-icon-menu": "#CBCCCD",
        "laborit-text-gray-p": "#A0A0A5",
        "laborit-text-description": "#8E9295",
        "laborit-text-title": "#23262F",
        "laborit-text-secondary": "#757171",
        "laborit-text-placeholder": "#A3A3A8",
        "laborit-icon-light": "#DDDDE4",
        "laborit-dot": "#23262F80",
        "laborit-separator": "#E6E8EC",
        "laborit-ball-green": "#0AB161",
        "laborit-separator-dark": "#E6E8EC",
        "laborit-skip-button": "#D7D7D7",
        "laborit-secondary-dark": "#232627",
        "laborit-back-button": "#D3D1D84D",
        "laborit-input-background:": "#FFFFFF",
        "laborit-input-edit-background": "#F5F5F5",
        "laborit-input-edit-background-dark": "#2B2D30",
        "laborit-input-border:": "#E1E1E1",
        "laborit-input-border-dark": "#676767",
        "laborit-button-save-dark": "#1B1E20",
        "laborit-box-example": "#F7F7F8",
        "laborit-text-profile": "#212121",
        "laborit-text-mail": "#6A6A6B",
        "laborit-ball-gray": "#D3D1D8",
        "laborit-icon-footer": "#141416",
        "laborit-secondary-label": "#A7A7AB",
        "laborit-secondary-invite": "#666666",
        "laborit-text-message-ai": "#494949",
        "laborit-text-message-user": "#2F2F2F",
        "laborit-regenerate-button-border": "#CCCCCC",
        "laborit-regenerate-button-bg": "#FAFAFA",
        "laborit-regenerate-button-bg-dark": "#232627",
        "labotit-regenerate-button-text": "#616161",
        // footer colors
        "laborit-footer-border": "#DADADA",
        "laborit-footer-bg-start": "#FCFCFD",
        "laborit-footer-bg-end": "rgba(252, 252, 253, 0.6)",
        // footer colors dark
        "laborit-footer-bg-dark-start": "#141718",
        "laborit-footer-bg-dark-end": "#141718",
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
