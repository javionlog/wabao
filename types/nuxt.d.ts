import type { NuxtApp } from 'nuxt/app'

declare module 'nuxt/app' {
  interface NuxtApp {
    $getPageTitle: (key: string) => string
  }
}
