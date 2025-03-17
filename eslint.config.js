import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: [
    'node_modules',
    '.output',
    'dist',
    '.husky',
    '.nuxt',
    '.wrangler',
    'assets',
    'public',
    'styled-system',
    'worker-configuration.d.ts',
    'server/assets/_locales'
  ],
  plugins: [
    {
      meta: {
        name: 'eslint-plugin-import'
      }
    }
  ],
  rules: {
    'no-console': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ]
  }
})
