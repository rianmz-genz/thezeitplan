/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE5E44",
        primarylight: "#FE5E441A",
        primaryextralight: "#FE5E440D",
        darklight: "#0E144A99",
        shadowbg: "#C4C4C4",
        justgray: "#6F6F6F",
        background: "#ffffff",
        justblue: "#0E144A",
        checkbg: "#F1FEF8",
        justgreen: "#28F09D",
        yellowstar: "#FFC93F",
        graylight: "#00000033"
      },
      fontFamily: {
        source: ["Source Sans Pro"],
        patua: ["Patua One"],
        inter: ["Inter"],
        ibm: ["IBM Plex Mono"],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
