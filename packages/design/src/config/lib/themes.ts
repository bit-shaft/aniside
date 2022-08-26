import { mainColors, auxColors } from '../colors'
import { sizes, fontSizes, fontWeights, radius, spaces } from '../base'

export const themes = {
	ligth: {
		bg: '#fafafa',
		text: '#212121',
		border: '#e0e0e0',
		shadow: '#e0e0e0',
	},
	dark: {
		bg: '#212121',
		text: '#fafafa',
		border: '#424242',
		shadow: '#424242',
	},

}

export function getTheme(key: keyof typeof themes) {
	return {
		colors: {
			...mainColors,
			...auxColors,
			...themes[key],
		},
		sizes,
		fontSizes,
		fontWeights,
		radius,
		spaces,
	}
}

export type Themes = typeof themes