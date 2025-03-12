<template>
  <div>{{ $t('app.category.home') }}</div>
</template>

<script setup lang="ts">
const { $t } = useI18n()

definePageMeta({
  title: 'app.category.home'
})
</script>
