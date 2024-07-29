const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      'primary-900': '#930010',
      'primary-800': '#BE0015',
      'neutral-dark': '#444444',
      'neutral-light': '#AAAAAA',
      'neutral-lighter': '#CCCCCC',
      'neutral-lightest': '#EEEEEE',
      'neutral-mid': '#666666',
      'off-white': '#FBFBFD',
      'text-dark' : '#1D1D1F',
      
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

