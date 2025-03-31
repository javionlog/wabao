<template>
  <div>{{ title }}</div>
</template>

<script setup lang="ts">
const { $getPageTitle, $t } = useNuxtApp()

const title = computed(() => $getPageTitle($t('app.category.ai') as string))
useHead({
  title
})
</script>
