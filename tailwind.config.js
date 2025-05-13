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
        cardBgColor: "#1B1C1A",
        ctaColor:"#189606",
        customYellow:"#D5B612",
        customRed:"#C41125",
        customDarkGray:"#B0B0B0",
        customLightGray:"#ebebeb"

      }
    },
  },
  plugins: [],
} 