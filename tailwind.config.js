/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "screen": "#151622", 
      "grayPrimary": "#ced4da", 
      "graySecundary": "#adb5bd",
      "pinkPrimary": "#ED6A5E",
      "pinkSecundary": "#FF8E72",
      "whitePrimary": "#F4F1DE",
      "whiteSecundary": "#E8E5D3"

    },
    extend: {},
  },
  plugins: [],
}
