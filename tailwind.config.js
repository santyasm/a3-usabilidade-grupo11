/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "700px" },
    },
    extend: {
      colors: {
        primary: "#222F66",
        secondary: "#19DCFE",
        gray: { 10: "#F5F5F5", 50: "#EEEEEE", 100: "#B3B4B3", 500: "#606161" },
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
