type Mode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<Mode>('light')

  const isDark = computed(() => mode.value === 'dark')

  return { mode, isDark }
})
