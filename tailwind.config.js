/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      '2xl': { min: "1535px" },

      'xl': { max: "1441px" },
      'xm': { min: "1441px" },

      'lg': { max: "1025px" },
      'min': { min: "1025px" },

      'md': { max: "769px" },
      'mid': { min: "769px" },

      'sm': { max: "426px" },
      '2xm': { min: "426px" },

      '2sm': { max: "375px" },
      '3xm': { min: "375px" },
    },
  },
  plugins: [],
};
