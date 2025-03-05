<template>
  <div>
    <Button severity="secondary" @click="handleToggle">
      <IconLanguages width="1rem" height="1rem" />
    </Button>
    <Popover
      ref="pop"
      :pt="{
        content: {
          style: 'padding: 0;'
        }
      }"
    >
      <div class="p-select-list-container">
        <ul class="p-select-list">
          <li
            v-for="item in localeOptions"
            :key="item.code"
            :class="[
              'p-select-option',
              item.code === $getLocale() ? 'p-select-option-selected' : ''
            ]"
            @click="handleSelect(item)"
          >
            <span class="p-select-option-label">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </Popover>
    <Select style="display: none" />
  </div>
</template>

<script setup lang="ts">
const { $switchLocale, $getLocale, $getLocales } = useI18n()

const popRef = useTemplateRef('pop')
const localeOptions = computed(() => {
  return $getLocales()
})

const handleSelect = (item: (typeof localeOptions.value)[number]) => {
  $switchLocale(item.code)
  popRef.value?.hide()
}
const handleToggle = (event: Event) => {
  popRef.value?.toggle(event)
}
</script>
