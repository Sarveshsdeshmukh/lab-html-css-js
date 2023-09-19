/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../Assets/bg.png')",
      }
    },
  },
  plugins: [],
}

