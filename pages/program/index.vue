<template>
  <div>
    <PageTabs :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
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

const tabs = computed(() => [
  {
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
          }
        ]
      }
    ]
  }
])
</script>
