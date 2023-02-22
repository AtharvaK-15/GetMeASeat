/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./HomePage.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
