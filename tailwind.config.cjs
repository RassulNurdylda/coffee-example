/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-brown": "#F9C06A",
        "dark-word": "#1E1E1E",
      },
      backgroundImage: {
        "coffee-first": "url('/public/coffee.jpg')",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
};
