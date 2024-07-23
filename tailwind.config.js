/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1117",
        secondary: "#161B22",
        light: "#8B949E",
        white: "#FFFF",
      },
    },
  },
  plugins: [],
};
