/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': {
          50: '#FAF6F3',
          100: '#F0E6E0',
          200: '#E1CCBF',
          300: '#D2B29E',
          400: '#C3987D',
          500: '#B47E5C',
          600: '#8B4513',
          700: '#703A10',
          800: '#552E0C',
          900: '#3A1F08',
        },
        'brand-yellow': {
          400: '#FFD700',
          500: '#FFC107',
          600: '#FFB300',
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};