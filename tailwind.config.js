/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "tomato-red": "#ff6257",
        "dark-slate-grey": "#242742",
        "charcoal-grey": "#36384e",
        "neutral-grey": "#9294a0",
        "first-gradient-color": "#ff527b",
        "second-gradient-color": "#ff6a3a",
      },
    },
  },
  plugins: [],
};
