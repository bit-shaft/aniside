import { Stitches } from '@aniside/design'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type BoxProps = DefaultProps & Stitches.VariantProps<typeof container>

export type { BoxProps }