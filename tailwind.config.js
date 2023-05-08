/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {

        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#d17300",

          "neutral": "#3A4256",

          "base-100": "#F1F6F9",

          "info": "#52A8EF",

          "success": "#167E60",

          "warning": "#FBD150",

          "error": "#EA7B9C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
