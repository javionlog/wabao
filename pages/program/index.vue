<template>
  <div>
    <PageTabs :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'

import PageTabs from '@/components/page-tabs.vue'

type PageTabsProps = ComponentProps<typeof PageTabs>

const { $getPageTitle } = useNuxtApp()
const { t } = useI18n()

const ts = (key: string) => {
  return t(key) as string
}

const title = computed(() => $getPageTitle(ts('app.category.program')))
useHead({
  title
})

const getFirstLabel = (first: string) => {
  return ts(`program.tabs.${first}.label`)
}

const getSecondLabel = (first: string, second: string) => {
  return ts(`program.tabs.${first}.children.${second}.label`)
}

const getThirdLabel = (first: string, second: string, third: string) => {
  return ts(`program.tabs.${first}.children.${second}.children.${third}.label`)
}

const getThirdDesc = (first: string, second: string, third: string) => {
  return ts(`program.tabs.${first}.children.${second}.children.${third}.desc`)
}

// frontend
const frontend: ComputedRef<PageTabsProps['tabs'][number]> = computed(() => ({
  label: getFirstLabel('frontend'),
  value: 'frontend',
  children: [
    {
      label: getSecondLabel('frontend', 'java_script'),
      value: 'java_script',
      children: [
        {
          label: getThirdLabel('frontend', 'java_script', 'lodash'),
          value: 'lodash',
          desc: getThirdDesc('frontend', 'java_script', 'lodash'),
          url: 'https://lodash.com'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'rxjs'),
          value: 'rxjs',
          desc: getThirdDesc('frontend', 'java_script', 'rxjs'),
          url: 'https://rxjs.dev'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'mathjs'),
          value: 'mathjs',
          desc: getThirdDesc('frontend', 'java_script', 'mathjs'),
          url: 'https://mathjs.org'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'date_fns'),
          value: 'date_fns',
          desc: getThirdDesc('frontend', 'java_script', 'date_fns'),
          url: 'https://date-fns.org'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'motion'),
          value: 'motion',
          desc: getThirdDesc('frontend', 'java_script', 'motion'),
          url: 'https://motion.dev'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'gsap'),
          value: 'gsap',
          desc: getThirdDesc('frontend', 'java_script', 'gsap'),
          url: 'https://gsap.com'
        },
        {
          label: getThirdLabel('frontend', 'java_script', 'animejs'),
          value: 'animejs',
          desc: getThirdDesc('frontend', 'java_script', 'animejs'),
          url: 'https://animejs.com'
        }
      ]
    },
    {
      label: getSecondLabel('frontend', 'vue'),
      value: 'vue',
      children: [
        {
          label: getThirdLabel('frontend', 'vue', 'vuejs'),
          value: 'vuejs',
          desc: getThirdDesc('frontend', 'vue', 'vuejs'),
          url: 'https://vuejs.org'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'vue_router'),
          value: 'vue_router',
          desc: getThirdDesc('frontend', 'vue', 'vue_router'),
          url: 'https://router.vuejs.org'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'pinia'),
          value: 'vue_router',
          desc: getThirdDesc('frontend', 'vue', 'pinia'),
          url: 'https://pinia.vuejs.org'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'vue_i18n'),
          value: 'vue_i18n',
          desc: getThirdDesc('frontend', 'vue', 'vue_i18n'),
          url: 'https://vue-i18n.intlify.dev'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'vueuse'),
          value: 'vueuse',
          desc: getThirdDesc('frontend', 'vue', 'vueuse'),
          url: 'https://vueuse.org'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'vite_press'),
          value: 'vite_press',
          desc: getThirdDesc('frontend', 'vue', 'vite_press'),
          url: 'https://vitepress.dev'
        },
        {
          label: getThirdLabel('frontend', 'vue', 'nuxt'),
          value: 'nuxt',
          desc: getThirdDesc('frontend', 'vue', 'nuxt'),
          url: 'https://nuxt.com'
        }
      ]
    }
  ]
}))

const tabs = computed(() => [frontend.value])
</script>
