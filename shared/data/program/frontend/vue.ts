import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'vue', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'vue', third)
}

export const vue: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'vue'),
  value: 'vue',
  children: [
    {
      label: getQuickThirdLabel('vuejs'),
      value: 'vuejs',
      desc: getQuickThirdDesc('vuejs'),
      url: 'https://vuejs.org'
    },
    {
      label: getQuickThirdLabel('vue_router'),
      value: 'vue_router',
      desc: getQuickThirdDesc('vue_router'),
      url: 'https://router.vuejs.org'
    },
    {
      label: getQuickThirdLabel('pinia'),
      value: 'vue_router',
      desc: getQuickThirdDesc('pinia'),
      url: 'https://pinia.vuejs.org'
    },
    {
      label: getQuickThirdLabel('vue_i18n'),
      value: 'vue_i18n',
      desc: getQuickThirdDesc('vue_i18n'),
      url: 'https://vue-i18n.intlify.dev'
    },
    {
      label: getQuickThirdLabel('vueuse'),
      value: 'vueuse',
      desc: getQuickThirdDesc('vueuse'),
      url: 'https://vueuse.org'
    },
    {
      label: getQuickThirdLabel('vite_press'),
      value: 'vite_press',
      desc: getQuickThirdDesc('vite_press'),
      url: 'https://vitepress.dev'
    },
    {
      label: getQuickThirdLabel('nuxt'),
      value: 'nuxt',
      desc: getQuickThirdDesc('nuxt'),
      url: 'https://nuxt.com'
    }
  ]
}
