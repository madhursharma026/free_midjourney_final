/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-voilet": "#6c88ef",
        "dark": "#090909",
        "dark-2": "#060522",
        "gradient-1": "linear-gradient(180deg, #6c88ef 0%, #7462ffed 100%)",
        
      },
      fontFamily: {
        'Mona_Regular': "Mona",
        'Mona_Medium': "Mona Medium",
        'Mona_Bold': "Mona Bold",
        'Mona_EB': "Mona_Extra_Bold",
      }
      
    },
  },
  plugins: [],
}