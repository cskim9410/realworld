/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5CB85C",
        darkGreen: "#449d44",
        active: "rgba(0, 0, 0, 0.8)",
        hoverLink: "rgba(0, 0, 0, 0.6)",
        unActive: "rgba(0, 0, 0, 0.3)",
        danger: "#b85c5c",
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
          "@apply rounded border mb-4 focus:outline-none focus:border-[#66afe9] w-full disabled:bg-[#eceeef]":
            "",
        },
        ".confirm-btn": {
          "@apply rounded text-white bg-green leading-[1.25] hover:bg-darkGreen disabled:bg-darkGreen":
            "",
        },
        ".feed-nav-active": {
          "@apply text-green border-b-2 border-green": "",
        },
        ".tag-default": {
          "@apply text-[0.8rem] py-[0.1rem] mr-1 mb-1 rounded-[10rem] px-[0.6rem] inline-block border":
            "",
        },
      });
    },
  ],
};
