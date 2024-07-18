/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "rgb(12, 12, 12)",
      }
    },
  },
  plugins: [],
  darkMode: "selector",
};
