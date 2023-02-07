/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB85C",
        active: "rgba(0, 0, 0, 0.8)",
        hoverLink: "rgba(0, 0, 0, 0.6)",
        unActive: "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        logo: "Titillium Web",
      },
      boxShadow: {
        banner:
          "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
      },
      dropShadow: {
        banner: "0px 1px 3px rgb(0 0 0 / 30%)",
      },
    },
  },
  plugins: [],
};
