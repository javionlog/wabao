export default {
  '*.{js,ts,vue}': ['eslint --fix', () => 'vue-tsc --noEmit --skipLibCheck', 'prettier --write'],
  '*.{vue,css,json,md}': ['prettier --write']
}
