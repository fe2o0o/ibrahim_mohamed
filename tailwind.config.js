/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "rgb(var(--primaryColor) / <alpha-value>)",
        hover: "rgb(var(--primaryColorHover) / <alpha-value>)",
      },
      border_light: "rgb(var(--borderLightColor) / <alpha-value>)",
      customWhite:"rgb(var(--bg-custom-white) / <alpha-value>)",
      blackColor: "rgb(var(--blackColor) / <alpha-value>)",
      darkColor:"rgb(var(--darkBlack) / <alpha-value>)"
    }
  },
  plugins: [],
}

