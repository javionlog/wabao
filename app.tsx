import { NuxtLayout, NuxtPage } from '#components'

export default defineComponent({
  render() {
    return (
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    )
  }
})
