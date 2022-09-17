/* ----------------- Packages ----------------- */
import { Stitches } from '@aniside/design'

/* ----------------- Composers ---------------- */
import { DefaultProps } from '@components/types'
import { component_wrapper } from './styles'

/* -------------------------------------------- */
/* Composed types                               */
/* -------------------------------------------- */

type ComponentWrapper = Stitches.VariantProps<typeof component_wrapper>

/* -------------------------------------------- */
/* Final component props                        */
/* -------------------------------------------- */

type AvatarProps = DefaultProps & ComponentWrapper & {
  picture: string
  name: string
}

/* ------------------ exports ----------------- */
export type { AvatarProps, ComponentWrapper }