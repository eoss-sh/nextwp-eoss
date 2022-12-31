/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Aboreto", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#9DFF20",
        secondary: "#345C00",
        tertiary: "#F6F6F6",
        base: "#ffffff",
        contrast: "#000000",
      },
    },
  },
  plugins: [],
};
