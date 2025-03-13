import { SCREENS, type Screen } from '@/shared/constants'

export const useScreens = () => {
  const screenValues = Object.values(SCREENS)

  const screenKeys = Object.keys(SCREENS) as Screen[]

  const breakpoint = ref<Screen>('xs')

  const getBreakpoint = () => {
    for (let i = 0; i < screenValues.length; i++) {
      const screenValue = screenValues[i]
      if (window.innerWidth < parseInt(screenValue)) {
        return i === 0 ? 'xs' : screenKeys[i - 1]
      }
    }
    return '2xl'
  }

  const updateBreakpoint = () => {
    breakpoint.value = getBreakpoint()
  }

  onMounted(() => {
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint)
  })

  return {
    breakpoint,
    isXs: computed(() => breakpoint.value === 'xs'),
    isSm: computed(() => breakpoint.value === 'sm'),
    isMd: computed(() => breakpoint.value === 'md'),
    isLg: computed(() => breakpoint.value === 'lg'),
    isXl: computed(() => breakpoint.value === 'xl'),
    is2Xl: computed(() => breakpoint.value === '2xl')
  }
}
