import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    output: { dir: resolve('./dist') }
  },
  modules: ['nitro-cloudflare-dev', '@nuxt/eslint'],
  alias: {
    'styled-system': resolve('./styled-system')
  },
  css: ['@/assets/css/global.css'],
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {}
    }
  },
  typescript: {
    tsConfig: {
      include: [resolve('./styled-system')]
    }
  }
})
