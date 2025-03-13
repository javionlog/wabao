<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()
const isDark = usePreferredDark()
const { t } = useI18n()
const app = useNuxtApp()
app.provide('getPageTitle', (title: string) => {
  return `${title} - ${t('app.meta.title')}`
})

onMounted(() => {
  if (theme.mode) {
    if (theme.mode === 'dark') {
      document.documentElement.classList.add('app-dark')
    } else {
      document.documentElement.classList.remove('app-dark')
    }
  } else {
    theme.mode = isDark.value ? 'dark' : 'light'
    if (isDark.value) {
      document.documentElement.classList.add('app-dark')
    } else {
      document.documentElement.classList.remove('app-dark')
    }
  }
})
</script>
