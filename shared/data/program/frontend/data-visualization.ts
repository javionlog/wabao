import { type PageTabsProps, getSecondLabel, getThirdLabel, getThirdDesc } from '@/shared/data/util'

const getQuickThirdLabel = (third: string) => {
  return getThirdLabel('program', 'frontend', 'data_visualization', third)
}
const getQuickThirdDesc = (third: string) => {
  return getThirdDesc('program', 'frontend', 'data_visualization', third)
}

export const dataVisualization: PageTabsProps['tabs'][number] = {
  label: getSecondLabel('program', 'frontend', 'data_visualization'),
  value: 'data_visualization',
  children: [
    {
      label: getQuickThirdLabel('d3'),
      value: 'd3',
      desc: getQuickThirdDesc('d3'),
      url: 'https://d3js.org'
    },
    {
      label: getQuickThirdLabel('chartjs'),
      value: 'chartjs',
      desc: getQuickThirdDesc('chartjs'),
      url: 'https://www.chartjs.org'
    },
    {
      label: getQuickThirdLabel('echarts'),
      value: 'echarts',
      desc: getQuickThirdDesc('echarts'),
      url: 'https://echarts.apache.org'
    }
  ]
}
