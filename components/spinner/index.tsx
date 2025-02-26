import { styled } from 'styled-system/jsx'
import { spinner } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

const StyledComponent = styled('div', spinner)

type StyledProps = ComponentProps<typeof StyledComponent>

type Props = StyledProps & {
  label?: string
}

export const Spinner = defineComponent(
  (_props: Props, ctx) => {
    const attrs = ctx.attrs as Props
    return () => (
      <StyledComponent borderBottomColor="transparent" borderLeftColor="transparent" {...attrs}>
        {attrs.label && <styled.span srOnly>{attrs.label}</styled.span>}
      </StyledComponent>
    )
  },
  {
    name: 'Spinner'
  }
)
