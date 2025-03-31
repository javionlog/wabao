import { type PageTabsProps, getFirstLabel } from '@/shared/data/util'

import { javaScript } from './java-script'
import { vue } from './vue'

export const frontend: ComputedRef<PageTabsProps['tabs'][number]> = computed(() => ({
  label: getFirstLabel('program', 'frontend'),
  value: 'frontend',
  children: [javaScript, vue]
}))
