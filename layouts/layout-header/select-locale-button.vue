<template>
  <div>
    <Select
      ref="select"
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

const { $switchLocale, $getLocale, $getLocales } = useI18n()

const activeLocale = ref($getLocale())
const localeOptions = computed(() => {
  return $getLocales()
})

const handleChange = (event: SelectChangeEvent) => {
  $switchLocale(event.value)
}
</script>
