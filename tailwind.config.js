/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: "#48385e",
      phover: "#6052e6",
      secondary: "#E6D0E5",
      secondarybg: "#F5F2F7",
      greeny: "#94cbc4",
      yellowy: "#fffad3",
      grey1 : "#D1D1DC",
      grey2: "#EFF3FF"
  },
  },
  plugins: [require("flowbite/plugin")],
}

