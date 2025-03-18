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

import type { LocaleCode } from '@/shared/constants'

const { $switchLocale, $getLocale, $getLocales } = useI18n()
const locale = useLocaleStore()

const activeLocale = ref($getLocale() as LocaleCode)
const localeOptions = computed(() => {
  return $getLocales()
})

onMounted(() => {
  if (locale.locale) {
    activeLocale.value = locale.locale
    $switchLocale(locale.locale)
  } else {
    locale.locale = activeLocale.value
  }
})

const handleChange = (event: SelectChangeEvent) => {
  $switchLocale(event.value)
  locale.locale = event.value
}
</script>
