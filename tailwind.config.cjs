/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "show 2s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      black: {
        300: "#111827",
        500: "#000000",
      },
      purple: "#5D5FEF",
      gray: {
        100: "#E2E3E5",
        300: "#F3F4F6",
        500: "#C4C4C4",
        700: "#6B7280",
        900: "#4D5562",
      },
    },
  },
  plugins: [],
};
