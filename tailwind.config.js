/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "Cyan-Ext": "hsl(179, 62%, 43%)",
        "Bright-Yellow": "hsl(71, 73%, 54%)",
        "Light-Gray": "hsl(204, 43%, 93%)",
        "Grayish-Blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
