import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import sand from '@park-ui/panda-preset/colors/sand'

export default defineConfig({
  preflight: true,
  jsxFramework: 'vue',
  outdir: 'styled-system',
  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],
  include: [
    './layouts/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    'app.tsx'
  ],
  exclude: [],
  theme: {
    extend: {}
  }
})
