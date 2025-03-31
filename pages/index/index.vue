<template>
  <div class="slogan">{{ $t('home.common.label.slogan') }}</div>
</template>

<script setup lang="ts">
const { $getPageTitle, $t } = useNuxtApp()

const title = computed(() => $getPageTitle($t('app.category.home') as string))
useHead({
  title
})
</script>

<style lang="scss" scoped>
.slogan {
  text-align: center;
  padding: 16px 0;
  font-size: 20px;
  animation: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) fadein;
}

@keyframes fadein {
  0% {
    letter-spacing: 0.5rem;
    transform: translateZ(10rem);
    filter: blur(1rem);
    opacity: 0;
  }

  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
