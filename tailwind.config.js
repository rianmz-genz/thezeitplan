/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
​
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FE5E44",
        primarylight: "#FE5E4433",
        darkblue: "#0E144A",
        darklight: "#0E144A33",
        shadowbg: "#C4C4C4"
      },
    },
  },
  plugins: [],
}