import { SCREENS } from '@/shared/constants'

export const useScreens = () => {
  const { width } = useWindowSize()
  const breakpointValues = Object.values(SCREENS)

  const breakpointKeys = Object.keys(SCREENS) as (keyof typeof SCREENS)[]

  const currentBreakpoint = computed(() => {
    for (let i = 0; i < breakpointValues.length; i++) {
      const breakpoint = breakpointValues[i]
      if (width.value < parseInt(breakpoint)) {
        return i === 0 ? 'xs' : breakpointKeys[i - 1]
      }
    }
    return '2xl'
  })

  return {
    currentBreakpoint,
    isXs: computed(() => currentBreakpoint.value === 'xs'),
    isSm: computed(() => currentBreakpoint.value === 'sm'),
    isMd: computed(() => currentBreakpoint.value === 'md'),
    isLg: computed(() => currentBreakpoint.value === 'lg'),
    isXl: computed(() => currentBreakpoint.value === 'xl'),
    is2Xl: computed(() => currentBreakpoint.value === '2xl')
  }
}
