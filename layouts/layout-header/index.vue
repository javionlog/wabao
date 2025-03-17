<template>
  <div class="flex h-full items-center px-4">
    <Logo />
    <div class="ml-auto flex items-center gap-2">
      <ToggleThemeButton />
      <SelectLocaleButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo.vue'
import SelectLocaleButton from './select-locale-button.vue'
import ToggleThemeButton from './toggle-theme-button.vue'
</script>
