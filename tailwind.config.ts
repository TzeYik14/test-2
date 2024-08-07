import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sail: {
          "50": "#f3f8fc",
          "100": "#e6f1f8",
          "200": "#bbdbed",
          "300": "#95c9e4",
          "400": "#5dadd3",
          "500": "#3893bf",
          "600": "#2876a1",
          "700": "#215e83",
          "800": "#1f516d",
          "900": "#1f445b",
          "950": "#142c3d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
