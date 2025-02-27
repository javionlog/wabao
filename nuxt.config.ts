import { createResolver } from '@nuxt/kit'
import Aura from '@primeuix/themes/aura'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    output: { dir: resolve('./dist') }
  },
  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', 'nuxt-i18n-micro', '@primevue/nuxt-module'],
  alias: {},
  css: ['@/assets/css/global.css'],
  postcss: {
    plugins: {}
  },
  typescript: {
    tsConfig: {}
  },
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', dir: 'ltr', label: '中文' },
      { code: 'en', iso: 'en-US', dir: 'ltr', label: 'English' }
    ],
    defaultLocale: 'zh',
    translationDir: 'locales',
    meta: true,
    types: true,
    strategy: 'no_prefix'
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: false
        }
      }
    }
  }
})
