<template>
  <Menu :model="items" class="h-full">
    <template #item="{ item, props }">
      <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom class="abc">
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <component :is="item.icon" :size="16" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </RouterLink>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <component :is="item.icon" :size="16" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup>
import { IconHouse, IconBot, IconCode } from '#components'

const { $t } = useI18n()

const items = computed(() => [
  {
    label: $t('app.category.home'),
    icon: IconHouse,
    route: '/'
  },
  {
    label: $t('app.category.ai'),
    icon: IconBot,
    route: '/ai'
  },
  {
    label: $t('app.category.program'),
    icon: IconCode,
    route: '/program'
  }
])
</script>
