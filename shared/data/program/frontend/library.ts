import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'library', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'library', third)
}

export const library: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'library'),
  value: 'library',
  children: [
    {
      label: getQuickThirdLabel('lodash'),
      value: 'lodash',
      desc: getQuickThirdDesc('lodash'),
      url: 'https://lodash.com'
    },
    {
      label: getQuickThirdLabel('rxjs'),
      value: 'rxjs',
      desc: getQuickThirdDesc('rxjs'),
      url: 'https://rxjs.dev'
    },
    {
      label: getQuickThirdLabel('xstate'),
      value: 'xstate',
      desc: getQuickThirdDesc('xstate'),
      url: 'https://stately.ai/docs/xstate'
    }
  ]
}
