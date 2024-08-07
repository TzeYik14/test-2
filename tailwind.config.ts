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
          '50': '#f3f8fc',
          '100': '#e6f1f8',
          '200': '#c6e2f1',
          '300': '#95cae4',
          '400': '#5caed4',
          '500': '#3795c0',
          '600': '#2777a2',
          '700': '#205f84',
          '800': '#1e516e',
          '900': '#1e445b',
          '950': '#142d3d',
        },
      },
    },
  },
  plugins: [],
};
export default config;
