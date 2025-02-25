import { button, type ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = ButtonVariantProps

export const Button = defineComponent((props: ButtonProps, { slots }) => {
  return () => {
    return (
      <button class={button({ size: props.size ?? 'md', variant: props.variant ?? 'solid' })}>
        {slots.default?.()}
      </button>
    )
  }
})
