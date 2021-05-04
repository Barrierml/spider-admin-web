const { default: createPalette } = require('@material-ui/core/styles/createPalette')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        "violet":colors.violet,
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
