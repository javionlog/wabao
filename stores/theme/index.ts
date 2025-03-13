type Mode = 'light' | 'dark' | null

export const useThemeStore = defineStore(
  'theme',
  () => {
    const mode = ref<Mode>(null)

    const isDark = computed(() => mode.value === 'dark')

    return { mode, isDark }
  },
  { persist: true }
)
