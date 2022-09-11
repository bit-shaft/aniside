import { Stitches } from '@aniside/design'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type AvatarProps = DefaultProps & Stitches.VariantProps<typeof container> & {
  picture: string
  name: string
}

export type { AvatarProps }