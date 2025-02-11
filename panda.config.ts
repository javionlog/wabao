import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  jsxFramework: 'vue',
  outdir: 'styled',
  include: [
    './layouts/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  exclude: [],
  presets: [],
  theme: {
    extend: {}
  }
})
