<template>
  <Menu :model="items" class="h-full" v-bind="$attrs">
    <template #item="{ item, props }">
      <RouterLink v-if="item.route" v-slot="{ href }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click.prevent="handleTo(item)">
          <component :is="item.ico" :size="16" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </RouterLink>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <component :is="item.ico" :size="16" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { IconHouse, IconBot, IconCode } from '#components'

type Item = {
  title?: string
  ico?: Component
  url?: string
}

const { t } = useI18n()
const router = useRouter()

const items: ComputedRef<Item[]> = computed(() => [
  {
    title: t('app.category.home') as string,
    ico: IconHouse,
    url: '/'
  },
  {
    title: t('app.category.ai') as string,
    ico: IconBot,
    url: '/ai'
  },
  {
    title: t('app.category.program') as string,
    ico: IconCode,
    url: '/program'
  }
])

const emit = defineEmits<{
  'item-click': [item: Item]
}>()

const handleTo = (item: Item) => {
  if (item?.url) {
    router.push(item.url)
  }
  emit('item-click', item)
}
</script>
