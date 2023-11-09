/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./content.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      content: {
        'arrowList': 'url("/assets/logo/arrow-list.svg")',
      },
      colors: {
        'marine': '#03B7E2',
        'dark-coal': '#0D0D0D',
        'gray': '#333333',
        'pink': '#E203B7',
        'redish': '#E32B16',
      },
      spacing: {
        'oof': '105%',
        'sev': '7px',
        'fth': '15px',
        'ef': '85px',
        'teh': '28%',
        'xmax': '352px',
        'mtw': '-10px',
        'gap': '120px',
        'table-gap': '25px',
        'max-gap': '400px',
      },
    },
  },
  plugins: [],
}

