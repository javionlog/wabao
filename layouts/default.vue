<template>
  <div class="app">
    <header class="header">
      <LayoutHeader />
    </header>
    <main class="main">
      <aside class="left">
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
.header {
  height: 4rem;
  position: sticky;
}

.main {
  display: flex;
  min-height: calc(100vh - 4rem);
  .left {
    width: 20rem;
  }
  .middle {
    flex: 1 0 0;
  }
}
</style>
