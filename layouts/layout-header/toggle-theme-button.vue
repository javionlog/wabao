<template>
  <div>
    <Button severity="secondary" @click="handleSwitchTheme">
      <IconMoon v-if="isDark" :size="16" />
      <IconSun v-else :size="16" />
    </Button>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false)

const theme = useThemeStore()

onMounted(() => {
  isDark.value = theme.isDark
})

const handleSwitchTheme = () => {
  document.documentElement.classList.toggle('app-dark')
  isDark.value = !isDark.value
  theme.mode = isDark.value ? 'dark' : 'light'
}
</script>
