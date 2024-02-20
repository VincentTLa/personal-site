import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#363062',
        secondary: '#435585',
        accent: '#00adb5',
        dark: '#434957',
        'off-white': '#b8b6bd',
        background: '#211d3d',
      },
    },
  },
  plugins: [],
} satisfies Config
