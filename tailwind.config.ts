import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sk-modernist': ['var(--font-sk-modernist)', 'sans-serif'],
        'fustat': ['var(--font-fustat)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      colors: {
        'primary': '#33bfb4',  // Teal/turquoise color
        'secondary': '#516468',  // Slate gray color
      },
    },
  },
  plugins: [],
}
export default config
