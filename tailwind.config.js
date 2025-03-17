import PrimeUI from 'tailwindcss-primeui'

import { SCREENS } from './shared/constants'

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [PrimeUI],
  darkMode: ['class', '.app-dark'],
  theme: {
    screens: SCREENS
  },
  content: {
    files: [
      './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './plugins/**/*.{js,ts,mjs}',
      './composables/**/*.{js,ts,mjs}',
      './utils/**/*.{js,ts,mjs}',
      './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      './app.config.{js,ts,mjs}',
      './app/spa-loading-template.html'
    ]
  }
}
