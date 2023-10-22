import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/application/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "text-color": "#000",
        "active-color": "#50B5FF",
        "blue-color": "#0062FF",
        "normal-color": "#171725",
        "menu-color": "#696974",
        "menu-color-dark": "#B5B5BE",
        "logo-color": "#44444F",
        "stroke-color": "#F1F1F5",
        "grey-color": "#92929D",
        "green-color": "#3DD598",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  extend: {
    colors: {
      dark: {
        "text-color": "#fff",
      },
    },
  },
};
export default config;
