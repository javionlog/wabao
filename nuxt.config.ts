import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

import { LOCALES } from './shared/constants'

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {},
      dark: {}
    }
  }
})

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    output: { dir: './dist' }
  },
  modules: [
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nitro-cloudflare-dev',
    'nuxt-i18n-micro',
    'nuxt-lucide-icons',
    'pinia-plugin-persistedstate/nuxt'
  ],
  typescript: {
    // typeCheck: true
  },
  imports: {
    presets: [
      {
        from: 'clsx',
        imports: ['clsx']
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: LOCALES,
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    types: true,
    strategy: 'no_prefix'
  },
  css: ['primeicons/primeicons.css', '@/assets/css/global.css'],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: false
        }
      }
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  piniaPluginPersistedstate: {
    storage: 'localStorage',
    debug: true
  },
  lucide: {
    namePrefix: 'Icon'
  }
})
