import { Button } from '@/components/button'

export default defineComponent(() => {
  const loading = ref(false)

  const handleClick = () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }

  return () => (
    <div>
      <Button loading={loading.value}>你好啊</Button>
      <Button variant={'outline'} onClick={handleClick}>
        点击
      </Button>
    </div>
  )
})
