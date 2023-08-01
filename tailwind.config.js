/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#68468E",
      warning: colors.yellow,
      danger: colors.red,
      neutral: "#283A52",
      background: "#F6F6F6",
      border: "#D1D3D480",
      snow: "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {
      spacing: {
        "center-content": "37.5rem",
      },
    },
  },
};
