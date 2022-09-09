import { stitches } from '@aniside/design'
import { pxToRem } from '@components/utils'

const container = stitches.css({
	borderRadius: '$round',
	overflow: 'hidden',
	border: '2px solid $text',

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

	defaultVariants: {
		size: 'md'
	}
})

const profile_img = stitches.css({
	height: '100%',
	width: '100%',
  
	objectFit: 'cover',
	objectPosition: 'center',
})

export { container, profile_img }