/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ Enables dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

