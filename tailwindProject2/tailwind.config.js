/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-card": "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
