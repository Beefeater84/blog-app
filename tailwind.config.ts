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
        "background-color": "#fff",
        "active-color": "#50B5FF",
        "normal-color": "#171725",
        "menu-color": "#696974",
        "logo-color": "#44444F",
        "stroke-color": "#F1F1F5",
      },
    },
  },
  plugins: [],
};
export default config;
