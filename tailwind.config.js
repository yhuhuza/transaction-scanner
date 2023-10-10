/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      content: {
        'arrowList': 'url("/assets/logo/arrow-list.svg")',
      },
      colors: {
        marine: '#03B7E2',
      }
    },
  },
  plugins: [],
}

