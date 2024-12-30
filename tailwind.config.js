/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin"; // Menggunakan import

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [preline], // Menggunakan plugin yang diimpor
};