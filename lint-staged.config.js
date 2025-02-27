export default {
  '*.{js,ts,vue}': ['eslint --fix', () => 'tsc --noEmit --skipLibCheck', 'prettier --write'],
  '*.{vue,css,json,md}': ['prettier --write']
}
