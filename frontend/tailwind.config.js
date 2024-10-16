/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./index.html",                // Include root HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all React files in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
