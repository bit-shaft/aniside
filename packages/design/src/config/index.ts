/** lib exports */
import { themes, getTheme, media } from './lib'

const lib = {
	themes, 
	getTheme,
	media,
}

/** base exports */
import { sizes, fontSizes, fontWeights, radii, space } from './base'

const base = {
	sizes,
	fontSizes,
	fontWeights,
	radii,
	space,
}

/** colors exports */
import { mainColors, auxColors } from './colors'

const colors = {
	main: mainColors,
	aux: auxColors,
}

/** exports */
export { lib, base, colors }
