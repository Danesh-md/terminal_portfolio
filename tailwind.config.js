/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fascinate: ["Fascinate Inline", "cursive"],

        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        Poppins: ["Poppins"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      padding: {
        1: "2px",
      },
      height: {
        39: "423px",
        50: "470px",
        screenHeight: "420px",
      },
      width: {
        50: "900px",
        screenWidth: "895px",
        "9/10": "90%",
        "17/20": "85%",
      },
      colors: {
        color1: "#1E293B",
        color2: "#24e36c  ",
        color3: "#FEF07A",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
