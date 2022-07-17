/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 40px 15px rgba(0, 0, 0, 0.4)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      gridTemplateColumns: {
        "gird-cards": "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
