/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        sand: '#e8e2d9',
        stone: {
          50: '#f7f6f4',
          100: '#ebe8e3',
          200: '#d6d0c6',
          300: '#b8afa2',
          400: '#9a8f7f',
          500: '#7d7264',
          600: '#635a4e',
          700: '#4f483f',
          800: '#3d3832',
          900: '#2c2925',
        },
        sage: {
          500: '#6b7f6b',
          600: '#556855',
          700: '#445244',
        },
        terracotta: {
          500: '#c4724e',
          600: '#a85f3f',
          700: '#8b4e34',
        },
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(44, 41, 37, 0.12)',
        card: '0 8px 32px -8px rgba(44, 41, 37, 0.18)',
      },
    },
  },
  plugins: [],
}
