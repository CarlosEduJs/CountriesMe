/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'dark-blue': 'hsl(209, 23%, 22%)',
          'very-dark-blue': 'hsl(207, 26%, 17%)',
        },
        light: {
          'very-dark-blue': 'hsl(200, 15%, 8%)',
          'dark-gray': 'hsl(0, 0%, 52%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
        }
      }
    },
  },
  plugins: [],
}

