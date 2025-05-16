/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBgColor: "#1B1C1A",//custom black
        ctaColor:"#189606",//green
        customYellow:"#D5B612",//yellow
        customRed:"#C41125",//red
        customDarkGray:"#B0B0B0",//gray
        customLightGray:"#ebebeb"//light gray

      }
    },
  },
  plugins: [],
} 