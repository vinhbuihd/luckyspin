import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sfpro", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fade: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },

      animation: {
        fade: "fade 30s linear infinite",
      },

      backgroundImage: {
        spinBg: "url('/public/bg.svg')",
        spinBtn: "url(/public/spin.svg)",
        clockWise: "url(/public/clockwise.svg)",
      },
      colors: {
        primary: "#FFBF51",
        red: "#CE0005",
        grey: "#D2EDF4",
        brown: "#7F4F00",
      },
    },
  },
  plugins: [],
};
