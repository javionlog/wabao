import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'animation', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'animation', third)
}

export const animation: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'animation'),
  value: 'animation',
  children: [
    {
      label: getQuickThirdLabel('animejs'),
      value: 'animejs',
      desc: getQuickThirdDesc('animejs'),
      url: 'https://animejs.com'
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
    }
  ]
}
