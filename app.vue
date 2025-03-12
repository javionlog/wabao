<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { $t } = useI18n()

const title = computed(() => $t(route.meta.title as string))

useHead({
  title: `Wabao ${title.value}`
})
</script>
