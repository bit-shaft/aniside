/* ----------------- Packages ----------------- */
import { stitches, theme } from '@aniside/design'

/* ---------------- Utilitaries --------------- */
import { pxToRem } from '@components/utils'
import { rgba } from 'polished'

/* -------------------------------------------- */
/* Containers (Wrappers)                        */
/* -------------------------------------------- */

const component_wrapper = stitches.css({
	display: 'flex',
	alignItems: 'center'
})

/* -------------------------------------------- */
/* Boxes (goes inside Containers)               */
/* -------------------------------------------- */

/* -------------------------------------------- */
/* Custom (specif element styles)               */
/* -------------------------------------------- */

const tab = stitches.css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	padding: '0 $16',
	borderRadius: '$8',

	fontWeight: '$medium',

	cursor: 'pointer',
	transition: 'all .2s ease-in-out',

	'&:hover': {
		color: rgba(theme.colors.text, .5)
	},

	variants: {
		size: {
			lg: {
				width: pxToRem(120),
				height: 48,
				fontSize: '$16',
			},
			md: {
				width: pxToRem(90),
				height: 36,
				fontSize: '$14',
			},
			sm: {
				width: pxToRem(66),
				height: 24,
				fontSize: '$12',
			}
		},

		active: {
			true: {
				background: '$bg_contrast',
				color: '$text',

				'&:hover': { color: '$text' }
			}
		}
	},

	defaultVariants: {
		size: 'lg',
	}
})

/* ------------------ Exports ----------------- */
export { component_wrapper, tab }