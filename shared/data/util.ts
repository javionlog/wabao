import type { ComponentProps } from 'vue-component-type-helpers'

import type PageTabs from '@/components/page-tabs.vue'

export type PageTabsProps = ComponentProps<typeof PageTabs>

export const getFirstLabel = (category: string, first: string) => {
  return `${category}.tabs.${first}.label`
}

export const getSecondLabel = (category: string, first: string, second: string) => {
  return `${category}.tabs.${first}.children.${second}.label`
}

export const getThirdLabel = (category: string, first: string, second: string, third: string) => {
  return `${category}.tabs.${first}.children.${second}.children.${third}.label`
}

export const getThirdDesc = (category: string, first: string, second: string, third: string) => {
  return `${category}.tabs.${first}.children.${second}.children.${third}.desc`
}
