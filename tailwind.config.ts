import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vitra: {
          black: '#0c0b09',
          dark: '#141210',
          border: '#252018',
          cream: '#f0ebe0',
          muted: '#9a8e7a',
          gold: '#c9a96e',
          'gold-light': '#e8d5a3',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
