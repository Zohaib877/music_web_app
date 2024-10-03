import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: {
        "btnGradientFrom": "#CF0056",
        "btnGradientto": "#600D62",
        "sideBarBackground": "#131418",
        "backgroundBlur": "#00000080",
        "buttonPrimary": "#CF0056",
        "buttonDisable": "#49001E",
        "fontPrimary": "#FFFFFF",
        "borderPrimary": "#888888",
        "cardDisabled": "#2B2B2B",
      },
      filter: {
        'custom-filter': 'brightness(0) saturate(100%) invert(11%) sepia(87%) saturate(7245%) hue-rotate(329deg) brightness(81%) contrast(101%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-scrollbar'),
  ],
};
export default config;
