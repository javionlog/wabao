import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'java_script', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'java_script', third)
}

export const javaScript: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'java_script'),
  value: 'frontend',
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
      label: getQuickThirdLabel('mathjs'),
      value: 'mathjs',
      desc: getQuickThirdDesc('mathjs'),
      url: 'https://mathjs.org'
    },
    {
      label: getQuickThirdLabel('date_fns'),
      value: 'date_fns',
      desc: getQuickThirdDesc('date_fns'),
      url: 'https://date-fns.org'
    },
    {
      label: getQuickThirdLabel('motion'),
      value: 'motion',
      desc: getQuickThirdDesc('motion'),
      url: 'https://motion.dev'
    },
    {
      label: getQuickThirdLabel('gsap'),
      value: 'gsap',
      desc: getQuickThirdDesc('gsap'),
      url: 'https://gsap.com'
    },
    {
      label: getQuickThirdLabel('animejs'),
      value: 'animejs',
      desc: getQuickThirdDesc('animejs'),
      url: 'https://animejs.com'
    }
  ]
}
