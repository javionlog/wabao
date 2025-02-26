import type { VNodeTypes } from 'vue'

import { Center, styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

import { Spinner } from '@/components/spinner'

const StyledComponent = styled('button', button)

type StyledProps = ComponentProps<typeof StyledComponent>

type Props = StyledProps & {
  loading?: boolean
  loadingText?: VNodeTypes
}

const ButtonSpinner = defineComponent(
  () => {
    return () => (
      <Center
        inline
        position="absolute"
        transform="translate(-50%, -50%)"
        top="50%"
        insetStart="50%"
      >
        <Spinner
          width="1.1em"
          height="1.1em"
          borderWidth="1.5px"
          borderTopColor="fg.disabled"
          borderRightColor="fg.disabled"
        />
      </Center>
    )
  },
  {
    name: 'ButtonSpinner'
  }
)

export const Button = defineComponent(
  (_props: Props, ctx) => {
    const slots = ctx.slots
    const attrs = ctx.attrs as Props
    const getSlot = () => {
      if (attrs.loading) {
        if (attrs.loadingText) {
          return attrs.loadingText
        }
        return (
          <>
            <ButtonSpinner />
            <styled.span opacity={0}>{slots.default?.()}</styled.span>
          </>
        )
      }
      return slots.default?.()
    }
    return () => (
      <StyledComponent {...attrs} disabled={attrs.loading || attrs.disabled}>
        {getSlot()}
      </StyledComponent>
    )
  },
  {
    name: 'Button'
  }
)
