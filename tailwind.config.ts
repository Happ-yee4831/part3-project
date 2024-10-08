import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          50: "#ffffff",
          100: "#F7F7FA",
          200: "#E4E5F0",
          300: "#C6CADA",
          400: "#8F95B2",
          500: "#474D66",
          600: "#3B415B",
        },
        green: {
          100: "#EEF9F6",
          200: "#4CBFA4",
          300: "#32A68A",
        },
        red: {
          100: "#FBEDED",
          200: "#D14343",
        },
        purple: "#8E66FF",
        yellow: "#FDD181",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
