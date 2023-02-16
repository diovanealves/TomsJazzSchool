/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: { sans: ["Roboto", "sans-serif"] },
    extend: {
      colors: {
        highlight: "#ED4D1B",
      },
      boxShadow: {
        shadow: "4px 4px 0px #1E1E1E",
      },
    },
  },
  plugins: [],
};
