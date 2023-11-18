/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',

      'md': '768px',
    },
    fontFamily: {
      'worksans': ['Work Sans', 'comic sans'],
    },
    boxShadow: {
      'custom': '3px 5px 3px 0px #000077',
    },
    extend: {},
  },
  plugins: [],
}

