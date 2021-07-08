const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./resources/**/*.php",
    "./resources/js/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
