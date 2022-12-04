/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['"Space Grotesk"'],
      },
      colors: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        'new-gray': 'hsl(216, 8%, 16%)',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'submit-orange': 'hsl(25, 97%, 53%)',
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
