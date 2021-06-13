const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // Build your palette here
        transparent: "transparent",
        current: "currentColor",
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        abmer: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        indigo: colors.indigo,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      width: {
        "1/24": "4.16666%",
        "23/24": "95.83333%",
      },
      height: {
        "1/10": "10vh",
        "2/10": "20vh",
        "3/10": "30vh",
        "4/10": "40vh",
        "5/10": "50vh",
        "6/10": "60vh",
        "6.5/10": "65vh",
        "7/10": "70vh",
        "7.5/10": "75vh",
        "8/10": "80vh",
        "8.5/10": "85vh",
        "9/10": "90vh",
        "9.5/10": "95vh",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
