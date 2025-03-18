import type { LocaleCode } from '@/shared/constants'

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref<LocaleCode | null>(null)

    return { locale }
  },
  { persist: true }
)
