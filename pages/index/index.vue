<template>
  <div>
    <span>{{ $t('app.meta.title') }}</span>
    <Select
      v-model="activeLocale"
      :options="localeOptions"
      option-label="label"
      option-value="code"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { SelectChangeEvent } from 'primevue'

const { $t, $switchLocale, $getLocale, $getLocales } = useI18n()
const activeLocale = ref($getLocale())
const localeOptions = computed(() => {
  return $getLocales()
})

useHead({
  title: $t('app.meta.title') ?? ''
})

const handleChange = (event: SelectChangeEvent) => {
  $switchLocale(event.value)
}
</script>
