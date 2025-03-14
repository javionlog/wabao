<template>
  <div
    ref="text"
    :style="
      rows > 1
        ? {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            'word-break': 'break-all',
            '-webkit-line-clamp': rows
          }
        : {
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap'
          }
    "
    @click="handleToggle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
  <Popover
    ref="pop"
    :pt="{
      root: {
        style: 'max-width: 80%;'
      }
    }"
    ><slot
  /></Popover>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TextClamp'
})

type Props = {
  rows?: number
}

const { rows = 1 } = defineProps<Props>()

const { isMobile } = useScreens()
const textRef = useTemplateRef('text')
const popRef = useTemplateRef('pop')
const { $getLocale } = useI18n()

const isOverflow = ref(false)

const updateIsOverflow = (el: HTMLElement | null) => {
  const scrollWidth = el?.scrollWidth ?? 0
  const clientWidth = el?.clientWidth ?? 0
  const scrollHeight = el?.scrollHeight ?? 0
  const clientHeight = el?.clientHeight ?? 0
  if (rows > 1) {
    isOverflow.value = scrollHeight > clientHeight ? true : false
  } else {
    isOverflow.value = scrollWidth > clientWidth ? true : false
  }
}

watch(
  () => $getLocale(),
  () => {
    nextTick(() => {
      updateIsOverflow(textRef.value)
    })
  }
)

useResizeObserver(textRef, () => {
  updateIsOverflow(textRef.value)
})

const handleToggle = (event: Event) => {
  if (isOverflow.value && isMobile.value) {
    popRef.value?.toggle(event)
  }
}

const handleMouseEnter = (event: Event) => {
  if (isOverflow.value && !isMobile.value) {
    popRef.value?.show(event)
  }
}

const handleMouseLeave = () => {
  if (isOverflow.value && !isMobile.value) {
    popRef.value?.hide()
  }
}
</script>
