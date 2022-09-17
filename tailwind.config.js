/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        avenirBook: ["AvenirBook", "sans-serif"],
        avenirRoman: ["AvenirRoman", "sans-serif"],
        gilroyLight: ["GilroyLight", "sans-serif"],
        gilroyBold: ["GilroyBold", "sans-serif"],
      },
      colors: {
        black: "#030303",
        primary: "#6E97F5",
        "primary-1300": "#91A0CED8",
        background: "#020717",
        "background-1": "#080F24",
        "background-2": "#04091C",
        "background-3": "#0D152E",
        "blue-1600": "#2733C4",
        "blue-1500": "#0165FF",
        "purple-1600": "#9F19D1",
        "hover-background": "rgba(140,164,237,0.07)",
        positive: "#1AC9A0",
        gold: "#D17300",
        "white-1100": "#FFFFFFE8",
        "white-1200": "#E4E4FA",
        "white-t-1200": "#E4E4FA91",
        divider: "#91A0CE27",
        "selected-pr-1": "#051955",
      },
      fontSize: {
        landingText: [
          "30px",
          {
            lineHeight: "43px",
          },
        ],
        subLandingText: ["16px", { lineHeight: "28px" }],
      },
    },
  },
  plugins: [],
};
