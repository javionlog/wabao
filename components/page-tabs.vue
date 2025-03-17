<template>
  <Tabs v-model:value="activeTab">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value" class="grid gap-8">
        <div v-for="cate in tab.children" :key="cate.value" class="tab-cate">
          <div class="text-lg font-bold">{{ cate.label }}</div>
          <div class="tab-cate-box">
            <a
              v-for="item in cate.children"
              :key="item.value"
              href="javascript:;"
              class="tab-cate-box-item shadow dark:shadow-slate-100/50"
              @click="handleJump(item)"
            >
              <Avatar
                :label="item.label"
                :pt="{
                  label: {
                    style: 'word-break: break-all;'
                  }
                }"
                size="xlarge"
                shape="circle"
                class="shrink-0 px-3 py-2 text-[1rem]! leading-[1.25rem]"
              />
              <TextClamp :rows="3">{{ item.desc }}</TextClamp>
            </a>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PageTabs'
})

type Tab = {
  label: string
  value: string
  desc?: string
  url?: string
  children?: Tab[]
}

type Props = {
  tabs: Tab[]
}

const { tabs } = defineProps<Props>()

const activeTab = ref(tabs[0]?.value)

const handleJump = (item: Tab) => {
  window.open(item.url)
}
</script>

<style lang="scss" scoped>
.tab-cate-box {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 1rem;

  &-item {
    display: flex;
    gap: 1rem;
    border-radius: 0.75rem;
    padding: 1.25rem;
  }
}
</style>
