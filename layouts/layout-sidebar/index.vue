<template>
  <div v-if="isMobile">
    <Drawer
      v-model:visible="drawerVisible"
      :show-close-icon="false"
      :pt="{
        header: { style: 'display:none;' },
        content: { style: 'padding:0;' }
      }"
    >
      <AppMenu @item-click="handleItemClick" />
    </Drawer>
    <Button class="fixed! bottom-4 left-4" @click="handleToggle"><IconMenu :size="16" /></Button>
  </div>
  <div v-else class="h-[calc(100vh - 5rem)] sticky top-[5rem] w-full">
    <AppMenu />
  </div>
</template>

<script setup lang="ts">
import AppMenu from './app-menu.vue'

const { isMobile } = useScreens()

const drawerVisible = ref(false)

const handleToggle = () => {
  drawerVisible.value = !drawerVisible.value
}

const handleItemClick = () => {
  drawerVisible.value = false
}
</script>
