const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        body: "0.9375rem",
        xl: ["1.35rem", "1.3"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
