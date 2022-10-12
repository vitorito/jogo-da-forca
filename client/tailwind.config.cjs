/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}", "./index.html"],
  theme: {
    fontFamily: {
      'mono': ['"Noto Sans Mono"', 'monospace'],
      'bangers': ['"Bangers"', 'cursive'],
      'poppins': ['"Poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
