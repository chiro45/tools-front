import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 Esto es obligatorio para usar `document.documentElement.classList.toggle('dark')`
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
