import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'arithmetic', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'arithmetic', third)
}

export const arithmetic: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'arithmetic'),
  value: 'arithmetic',
  children: [
    {
      label: getQuickThirdLabel('mathjs'),
      value: 'mathjs',
      desc: getQuickThirdDesc('mathjs'),
      url: 'https://mathjs.org'
    },
    {
      label: getQuickThirdLabel('bignumberjs'),
      value: 'bignumberjs',
      desc: getQuickThirdDesc('bignumberjs'),
      url: 'https://mikemcl.github.io/big.js'
    },
    {
      label: getQuickThirdLabel('decimaljs'),
      value: 'decimaljs',
      desc: getQuickThirdDesc('decimaljs'),
      url: 'https://mikemcl.github.io/decimal.js'
    },
    {
      label: getQuickThirdLabel('bigjs'),
      value: 'bigjs',
      desc: getQuickThirdDesc('bigjs'),
      url: 'https://mikemcl.github.io/big.js'
    }
  ]
}
