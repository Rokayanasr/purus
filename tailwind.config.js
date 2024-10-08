/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            primary: "#301d48",
            secondary: "#e6d0e7",
            secondarybg: "#F5F2F7",
            greeny: "#94cbc4",
            yellowy: "#fffad3",
            grey1: "#D1D1DC",
            grey2: "#EFF3FF",
        },
    },
    plugins: [require("flowbite/plugin")],
};
