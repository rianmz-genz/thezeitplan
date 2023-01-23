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
        primarylight: "#FE5E4433",
        primaryextralight: "#FE5E440D",
        darklight: "#0E144A33",
        shadowbg: "#C4C4C4",
        justgray: "#6F6F6F",
        background: "#ffffff",
        justblue: "#0E144A",
      },
      fontFamily:{
        "source": ['Source Sans Pro'],
        "patua": ['Patua One'],
        "inter": ['Inter'],
      }
    },
  },
  plugins: [],
};
