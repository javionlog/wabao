<template>
  <div>
    <Button severity="secondary" @click="handleSwitchTheme">
      <IconMoon v-if="themeStore.isDark" :size="16" />
      <IconSun v-else :size="16" />
    </Button>
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()

const handleSwitchTheme = () => {
  document.documentElement.classList.toggle('app-dark')
  themeStore.mode = themeStore.isDark ? 'light' : 'dark'
}
</script>
