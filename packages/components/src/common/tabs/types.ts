/* ----------------- Packages ----------------- */
import { Stitches } from '@aniside/design'

/* ----------------- Composers ---------------- */
import { DefaultProps } from '@components/types'
import { component_wrapper, tab } from './styles'

/* -------------------------------------------- */
/* Composed types                               */
/* -------------------------------------------- */

type Tab = {
  title: string,
  active?: boolean
}

type ComponentWrapper = Stitches.VariantProps<typeof component_wrapper & typeof tab>

/* -------------------------------------------- */
/* Final component props                        */
/* -------------------------------------------- */

type TabsProps = DefaultProps & ComponentWrapper & {
  options: Array<Tab>
}

/* ------------------ exports ----------------- */
export type { Tab, TabsProps, ComponentWrapper }