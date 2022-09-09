import { Stitches } from '@aniside/design'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type ProfileProps = DefaultProps & Stitches.VariantProps<typeof container> & {
  picture: string
  name: string
}

export type { ProfileProps }