export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', () => 'tsc --noEmit --skipLibCheck', 'prettier --write'],
  '*.{css,json,md}': ['prettier --write']
}
