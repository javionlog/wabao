import { createResolver } from '@nuxt/kit'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import PrimeUI from 'tailwindcss-primeui'
const { resolve } = createResolver(import.meta.url)

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
    output: { dir: resolve('./dist') }
  },
  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-i18n-micro',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'nuxt-lucide-icons'
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
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', dir: 'ltr', label: '中文' },
      { code: 'en', iso: 'en-US', dir: 'ltr', label: 'English' }
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    types: true,
    strategy: 'no_prefix'
  },
  tailwindcss: {
    editorSupport: {
      autocompleteUtil: { as: 'tailwindClasses' }
    },
    config: {
      plugins: [PrimeUI],
      darkMode: ['class', '.app-dark']
    }
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
  lucide: {
    namePrefix: 'Icon'
  }
})
