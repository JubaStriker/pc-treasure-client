/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#04acdb",
          "secondary": "#31779e",
          "accent": "#71b71b",
          "neutral": "#231826",
          "base-100": "#FFFFFF",
          "info": "#ABC9E7",
          "success": "#52EB96",
          "warning": "#9F5704",
          "error": "#E73C3F",
        },
      },
      {
        dark: {

          "primary": "#16aa8d",
          "secondary": "#20ea24",
          "accent": "#2ac1ad",
          "neutral": "#1E1726",
          "base-100": "#171212",
          "info": "#5B81EC",
          "success": "#54D999",
          "warning": "#C57111",
          "error": "#E66C65"
        }
      }],
  },
}
