import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        din: ["DIN", "sans-serif"],
        sans: ["DIN", "Arial", "sans-serif"],
      },
      colors: {
        "gradient-dark-blue-start": "var(--gradient-dark-blue-start)",
        "gradient-dark-blue-end": "var(--gradient-dark-blue-end)",
      },
    },
  },
  plugins: [],
};

export default config;