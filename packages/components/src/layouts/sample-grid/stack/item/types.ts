import { Stitches } from '@aniside/design'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type ItemProps = DefaultProps & Stitches.VariantProps<typeof container>

export type { ItemProps }