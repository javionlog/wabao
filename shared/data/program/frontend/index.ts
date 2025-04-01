import { type PageTabsProps, getFirstLabel } from '@/shared/data/util'

import { animation } from './animation'
import { arithmetic } from './arithmetic'
import { dataVisualization } from './data-visualization'
import { date } from './date'
import { game } from './game'
import { library } from './library'
import { vue } from './vue'

export const frontend: ComputedRef<PageTabsProps['tabs'][number]> = computed(() => ({
  label: getFirstLabel('program', 'frontend'),
  value: 'frontend',
  children: [library, date, arithmetic, animation, dataVisualization, game, vue]
}))
