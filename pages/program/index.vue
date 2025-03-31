<template>
  <div>
    <PageTabs :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
import { frontend } from '@/shared/data/program/frontend'
const { $getPageTitle, $t } = useNuxtApp()

const title = computed(() => $getPageTitle($t('app.category.program') as string))
useHead({
  title
})

const tabs = computed(() => [frontend.value])
</script>
