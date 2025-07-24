/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Enable dark mode via media query
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'rubik': ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        cardBgColor: "#1B1C1A",//custom black
        ctaColor:"#86E75D",//green
        customYellow:"#EDCF2B",//yellow
        customRed:"#EB1E35",//red
        customDarkGray:"#B0B0B0",//gray
        customLightGray:"#ebebeb"//light gray

      }
    },
  },
  plugins: [],
} 