<template>
  <div class="h-full w-full">
    <Menu :model="items" class="h-full">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup>
const { $t } = useI18n()
const items = computed(() => [
  {
    label: $t('app.category.home'),
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: $t('app.category.ai'),
    icon: 'pi pi-palette',
    route: '/ai'
  },
  {
    label: $t('app.category.program'),
    icon: 'pi pi-link',
    route: '/program'
  }
])
</script>
