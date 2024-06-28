import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg": "#282a36",
      "pink": "#fd79c5",
      "lavender": "#bd94f7",
      "mint": "#57fa7f",
      "orange": "#feb771",
      "skyblue": "#8ee9fc",
      "normal": "#ffffff"
    },
  },
  plugins: [],
};
export default config;
