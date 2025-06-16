/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fustat': ['var(--font-fustat)', 'system-ui', 'sans-serif'],
        'sk-modernist': ['var(--font-sk-modernist)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#33bfb4', // Default teal
          50: '#e6f9f7',
          100: '#c8f0ec',
          200: '#a9e7e0',
          300: '#7cd9cf',
          400: '#4ecbbb',
          500: '#33bfb4',
          600: '#2ba59c',
          700: '#248c84',
          800: '#1d726c',
          900: '#155954',
        },
        secondary: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ac',
          300: '#f6bb77',
          400: '#f19540',
          500: '#ed7a1a',
          600: '#de6710',
          700: '#b8520f',
          800: '#924214',
          900: '#763714',
        },
      },
    },
  },
  plugins: [],
}
