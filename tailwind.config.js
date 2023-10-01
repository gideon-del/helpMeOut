/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "rgb(231, 231, 237)",
          100: "rgb(182, 179, 198)",
          200: "rgb(146, 143, 171)",
          300: "rgb(96, 92, 132)",
          400: "rgb(65, 60, 109)",
          500: "rgb(18, 11, 72)",
          600: "rgb(16, 10, 66)",
          700: "rgb(13, 8, 51)",
          800: "rgb(10, 6, 40)",
          900: "rgb(8, 5, 30)",
        },
        secondary: {
          50: "rgb(230, 243, 243)",
          100: "rgb(176, 216, 216)",
          200: "rgb(138, 198, 198)",
          300: "rgb(84, 171, 171)",
          400: "rgb(51, 155, 155)",
          500: "rgb(0, 130, 130)",
          600: "rgb(0, 118, 118)",
          700: "rgb(0, 92, 92)",
          800: "rgb(0, 72, 72)",
          900: "rgb(0, 55, 55)",
        },
        darkBlue: "rgba(18, 11, 72, 1)",
        darkGreen: "rgba(0, 130, 130, 1)",
        lightGreen: "rgba(186, 246, 235, 1)",
        grey_100: "rgba(182, 179, 198, 0.20)",
        grey_200: "#434343CC",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        saro: ["var(--font-sora)"],
        inter: ["var(--font-inter)"],
        workSans: ["var(--font-workSans)"],
        sen: ["var(--font-sen)"],
      },
      lineHeight: {
        primary: "151.3%",
      },
    },
  },
  plugins: [],
};
