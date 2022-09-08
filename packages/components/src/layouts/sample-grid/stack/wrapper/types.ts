import { Stitches } from '@aniside/design'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type WrapperProps = DefaultProps & Stitches.VariantProps<typeof container>

export type { WrapperProps }