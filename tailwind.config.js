/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0151b8",
          bright: "#006fff",
          dark: "#000336",
          navy: "#0a0c3b",
          deep: "#010322",
          plum: "#020860",
          panel: "#0a1628",
          tint: "#e2eeff",
          soft: "#f3f4fd",
        },
      },
      fontFamily: {
        heading: ["Geist", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
