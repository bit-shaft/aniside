import { Stitches } from '@aniside/design'
import { symbols_list } from '@components/constants'
import { DefaultProps } from '@components/types'
import { container } from './styles'

type SymbolProps = DefaultProps & Stitches.VariantProps<typeof container> & {
  name: keyof typeof symbols_list
}

export type { SymbolProps }