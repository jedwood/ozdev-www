/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'midnight': '#0f231f',
        'moss': '#5a7f4b',
        'spruce': '#113a2e',
        'yellowbrick': '#f2b71b',
        'ivory': '#F9F2e8',
        'ozemerald': '#00543b'
      }
    },
  },
  plugins: [],
}

