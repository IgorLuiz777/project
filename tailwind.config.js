/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // Orange
          dark: '#CC5500',
          light: '#FF8533',
        },
        secondary: {
          DEFAULT: '#D4C4B5', // Beige
          dark: '#BBA89A',
          light: '#E8DFD6',
        },
        dark: {
          DEFAULT: '#1A1A1A', // Black
          light: '#333333',
        }
      }
    },
  },
  plugins: [],
};