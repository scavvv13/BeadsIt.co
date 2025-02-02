/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#432942",
        secondary1: "#FB376B",
        accent: "#F498B5",
        neutral: "#FFF8F8",
        whiteText: "#FFFFFF",
        secondary: "#000000",
      },
    },
    screens: {
      sm: "170px", // Small screens
      md: "768px", // Medium screens
      lg: "900px", // Large screens
    },
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      "league-spartan": ["League Spartan", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      "playfair-display": ["Playfair Display", "serif"],
      lora: ["Lora", "serif"],
      futura: ["Futura", "sans-serif"],
    },
  },
  plugins: [],
};
