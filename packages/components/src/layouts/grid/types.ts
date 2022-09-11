import { Item, ItemProps, Wrapper, WrapperProps } from './stack'

type GridComponent = {
  (props: WrapperProps): ReturnType<typeof Wrapper>
  Item: (props: ItemProps) => ReturnType<typeof Item>
}

export type { GridComponent }