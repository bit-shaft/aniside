import type { ItemProps, WrapperProps } from './stack'
import { JSXElement } from 'solid-js'

type SampleGridComponent = {
  (props: WrapperProps): JSXElement
  Item?: (props: ItemProps) => JSXElement
}

export type { SampleGridComponent }