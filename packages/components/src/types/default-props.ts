import { Stitches } from '@aniside/design'

type DefaultProps = {
  className?: string
  as?: keyof HTMLElementTagNameMap
  class?: string
  children?: any
  style?: CSSStyleDeclaration
  css?: Stitches.CSS
  onClick?: (event: Event) => void
  onChange?: (event: Event) => void
}

export type { DefaultProps }
