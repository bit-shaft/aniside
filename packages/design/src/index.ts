/** packages */
import { createStitches } from '@stitches/core'

/** compose */
import { lib } from './config'
import { getTheme } from './config/lib'

/** main */
const theme = getTheme('dark')

const stitches = createStitches({
	theme: lib.getTheme('dark'),
	utils: lib.utils,
	media: lib.media,
})

/** exports */
export { stitches, theme }
export * as config from './config'
export * as Stitches from './types'