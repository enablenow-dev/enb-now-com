import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // primary color #df531f
    extend: {
      colors: {
        primary: "#007BA8",
        secondary: "#2364ae",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

       "2xl": "1350px",
      // => @media (min-width: 1350px) { ... }

      "6xl": "1950px",
      // => @media (min-width: 1350px) { ... }
      

       "3xl" : "1200px",

    },
    container: {
      padding: "15px",
    },
  },
  plugins: [],
};
export default config;
