<template>
  <Tabs v-model:value="activeTab">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
        <div v-for="cate in tab.children" :key="cate.value" class="tab-cate">
          <div class="py-4 text-lg font-bold">{{ cate.label }}</div>
          <div class="tab-cate-box">
            <div
              v-for="item in cate.children"
              :key="item.value"
              class="tab-cate-box-item shadow dark:shadow-slate-100/50"
            >
              <Avatar
                :label="item.label"
                size="xlarge"
                shape="circle"
                :pt="{
                  root: {
                    style: 'font-size: 1rem;flex-shrink:0;padding: 0.5rem 0.75rem;'
                  },
                  label: {
                    style: 'word-break: break-all;'
                  }
                }"
              />
              <TextClamp :rows="3">{{ item.desc }}</TextClamp>
            </div>
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
</script>

<style lang="scss" scoped>
.tab-cate-box {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  &-item {
    display: flex;
    gap: 1rem;
    border-radius: 0.75rem;
    padding: 1.25rem;
  }
}
</style>
