/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB85C",
        darkGreen: "#449d44",
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
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".screen-width": {
          "@apply mx-auto lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[576px]":
            "",
        },
        ".input": {
          "@apply px-6 py-4 rounded text-lg border mb-4 focus:outline-1 focus:outline-blue-400 w-full disabled:bg-[#eceeef]":
            "",
        },
        ".confirm-btn": {
          "@apply px-6 py-4 rounded text-lg text-white bg-green leading-[1.25] hover:bg-darkGreen disabled:bg-darkGreen":
            "",
        },
        ".feed-nav-active": {
          "@apply text-green border-b-2 border-green": "",
        },
      });
    },
  ],
};
