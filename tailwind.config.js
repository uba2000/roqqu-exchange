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
        gilroyLight: ["GilroyLight", "sans-serif"],
        gilroyBold: ["GilroyBold", "sans-serif"],
      },
      colors: {
        black: "#030303",
        primary: "",
        background: "#020717",
        "background-1": "#080F24",
        "background-2": "#04091C",
        "blue-1600": "#2733C4",
        "purple-1600": "#9F19D1",
        "hover-background": "rgba(140,164,237,0.07)",
        positive: "#1AC9A0",
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
