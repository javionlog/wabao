<template>
  <div class="app">
    <header class="header">
      <LayoutHeader />
    </header>
    <main class="main sm:gap-4">
      <aside>
        <LayoutSidebar />
      </aside>
      <div class="middle">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from './layout-header/index.vue'
import LayoutSidebar from './layout-sidebar/index.vue'
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  gap: 1rem;
  background: var(--p-content-background);
}

.header {
  z-index: 50;
  height: 4rem;
  position: sticky;
  top: 0;
  background: var(--p-content-background);
}

.main {
  display: flex;
  min-height: calc(100vh - 5rem);
  .middle {
    flex: 1 0 0;
  }
}
</style>
