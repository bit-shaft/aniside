/* ----------------- Packages ----------------- */
import { stitches } from '@aniside/design'

/* ---------------- Utilitaries --------------- */
import { pxToRem } from '@components/utils'

/* -------------------------------------------- */
/* Containers (Wrappers)                        */
/* -------------------------------------------- */

const component_wrapper = stitches.css({
	/** Format and sizes */
	borderRadius: '$round',
	border: '2px solid $text',
  
	/** Behaviours */
	overflow: 'hidden',
  
	variants: {
		size: {
			md: {
				width: pxToRem(48),
				height: pxToRem(48),
			},
			lg: {
				width: pxToRem(64),
				height: pxToRem(64),
			}
		},
	},

	/** Settings */
	defaultVariants: {
		size: 'md'
	}
})

/* -------------------------------------------- */
/* Boxes (goes inside Containers)               */
/* -------------------------------------------- */

const profile_img = stitches.css({
	/** Format and sizes */
	height: '100%',
	width: '100%',
  
	/** Behaviours */
	objectFit: 'cover',
	objectPosition: 'center',
})

/* ------------------ Exports ----------------- */
export { profile_img, component_wrapper }