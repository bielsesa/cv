import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg": "#ffffff",
      "bg-sidemenu": "#e8e8e8",
      "bg-all": "#d9d9d9",
      "orange": "#ff793f",
      "orange-dark": "#cd6133",
      "blue": "#34ace0",
      "blue-dark": "#227093",
      "normal": "#353535"
    },
  },
  plugins: [],
};
export default config;
