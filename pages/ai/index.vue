<template>
  <div>{{ title }}</div>
</template>

<script setup lang="ts">
const { $getPageTitle } = useNuxtApp()
const { t } = useI18n()

const title = computed(() => $getPageTitle(t('app.category.ai')))
useHead({
  title
})
</script>
