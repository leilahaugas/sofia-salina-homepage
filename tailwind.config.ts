import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          deep:  '#1B3A9E',
          mid:   '#2D52C0',
          light: '#5B7FD4',
        },
        sky: {
          light: '#E8F4FA',
          mid:   '#C5DFF0',
        },
        sandy: '#D4B896',
        dark:  '#1A1A2E',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        body:   ['Nunito Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn:  '50px',
      },
      boxShadow: {
        card:  '0 8px 32px rgba(27,58,158,0.10)',
        hover: '0 16px 48px rgba(27,58,158,0.18)',
        book:  '0 24px 64px rgba(27,58,158,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
