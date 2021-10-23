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
        "upwrit-purple": "#5267DF",
        "upwrit-red": "#F05454",
        "upwrit-blue": "#242A45",
        "upwrit-grey": "#9194A2",
        "upwrit-white": "#F7F7F7",
        "upwrit-yellow" : "#FFD500",
        "upwrit-info": "#2465FF",
        "upwrit-black": "#000000",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"], 
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// "upwrit-purple": "#5267DF",
//         "upwrit-red": "#FA5959",
//         "upwrit-blue": "#242A45",
//         "upwrit-grey": "#9194A2",
//         "upwrit-white": "#F7F7F7",