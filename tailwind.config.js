/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all .js, .jsx, .ts, and .tsx files in the src directory
    './public/index.html', // Scans the main index.html file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
