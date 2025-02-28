<template>
  <div class="app">
    <header class="header">头部</header>
    <main class="main">
      <aside class="left">侧边栏</aside>
      <div class="middle">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ name: 'layout' })
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
    background: lightblue;
  }
  .middle {
    flex: 1 0 0;
    background: lightcoral;
  }
}
</style>
