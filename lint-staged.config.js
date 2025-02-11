export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', () => 'tsc --noEmit --skipLibCheck', 'prettier --write'],
  '*.{css,md}': ['prettier --write']
}
