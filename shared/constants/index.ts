export const SCREENS = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

export type Screen = keyof typeof SCREENS

export const LOCALES = [
  { code: 'zh', iso: 'zh-CN', dir: 'ltr', label: '中文' },
  { code: 'en', iso: 'en-US', dir: 'ltr', label: 'English' }
] as const

export const LOCALE_CODES = LOCALES.map(o => o.code)

export type LocaleCode = (typeof LOCALE_CODES)[number]
