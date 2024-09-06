import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0C0C", 
        active: "#FF8A00",
        link: "#00D1FF",  
        scroll: "#E6AB15", 
      },
      fontFamily: {
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
        textMeOne: ['var(--font-text-me-one)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;