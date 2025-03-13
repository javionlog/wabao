<template>
  <div v-if="isXs">
    <Drawer
      v-model:visible="drawerVisible"
      :show-close-icon="false"
      :pt="{
        header: { style: 'display:none;' },
        content: { style: 'padding:0;' }
      }"
    >
      <AppMenu />
    </Drawer>
    <Button class="!fixed bottom-4 left-4" @click="handleToggle"><IconMenu :size="16" /></Button>
  </div>
  <div v-else class="h-full w-full">
    <AppMenu />
  </div>
</template>

<script setup lang="ts">
import AppMenu from './app-menu.vue'

const { isXs } = useScreens()

const drawerVisible = ref(false)

const handleToggle = () => {
  drawerVisible.value = !drawerVisible.value
}
</script>
