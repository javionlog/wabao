<template>
  <div>
    <Button
      :icon="`pi ${themeStore.isDark ? 'pi-moon' : 'pi-sun'}`"
      severity="secondary"
      @click="handleSwitchTheme"
    />
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()

const handleSwitchTheme = () => {
  document.documentElement.classList.toggle('app-dark')
  themeStore.mode = themeStore.isDark ? 'light' : 'dark'
}
</script>
