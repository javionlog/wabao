import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'game', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'game', third)
}

export const game: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'game'),
  value: 'game',
  children: [
    {
      label: getQuickThirdLabel('pixijs'),
      value: 'pixijs',
      desc: getQuickThirdDesc('pixijs'),
      url: 'https://pixijs.com'
    },
    {
      label: getQuickThirdLabel('phaser'),
      value: 'phaser',
      desc: getQuickThirdDesc('phaser'),
      url: 'https://phaser.io'
    },
    {
      label: getQuickThirdLabel('threejs'),
      value: 'threejs',
      desc: getQuickThirdDesc('threejs'),
      url: 'https://threejs.org'
    },
    {
      label: getQuickThirdLabel('babylonjs'),
      value: 'babylonjs',
      desc: getQuickThirdDesc('babylonjs'),
      url: 'https://www.babylonjs.com'
    },
    {
      label: getQuickThirdLabel('orillusion'),
      value: 'orillusion',
      desc: getQuickThirdDesc('orillusion'),
      url: 'https://www.orillusion.com'
    }
  ]
}
