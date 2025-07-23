import { createThemes } from "@shadcn/ui/themes"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        rosePink: '#ff3f81',
      },
      fontFamily: {
        LacquerRegular: ["Lacquer-Regular", 'sans-serif'],
      },
    },
  },
  plugins: [
    createThemes({
      baseColor: "slate", // ← change to your preferred color
      cssVariables: true,
    }),
  ],
}
