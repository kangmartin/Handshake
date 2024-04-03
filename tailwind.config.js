/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
        "night",
      "light",
      {
        mytheme: {

          "primary": "#0073E6",

          "secondary": "#25304F",

          "accent": "#f89900",

          "neutral": "#101228",

          "base-100": "#16193B",

          "info": "#006bee",

          "success": "#00ff6f",

          "warning": "#ae6f00",

          "error": "#ec4760",
        },
      },
    ],
  },
}

