import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'date', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'date', third)
}

export const date: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'date'),
  value: 'date',
  children: [
    {
      label: getQuickThirdLabel('momentjs'),
      value: 'momentjs',
      desc: getQuickThirdDesc('momentjs'),
      url: 'https://momentjs.com'
    },
    {
      label: getQuickThirdLabel('dayjs'),
      value: 'dayjs',
      desc: getQuickThirdDesc('dayjs'),
      url: 'https://day.js.org'
    },
    {
      label: getQuickThirdLabel('date-fns'),
      value: 'date-fns',
      desc: getQuickThirdDesc('date-fns'),
      url: 'https://date-fns.org'
    },
    {
      label: getQuickThirdLabel('luxon'),
      value: 'luxon',
      desc: getQuickThirdDesc('luxon'),
      url: 'https://moment.github.io/luxon'
    }
  ]
}
