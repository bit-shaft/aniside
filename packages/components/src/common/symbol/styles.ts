import { stitches } from '@aniside/design'

const container = stitches.css({
	fill: '$text',

	variants: {
		size: {
			sm: {
				fontSize: '$18'
			},
			md: {
				fontSize: '$20'
			},
			lg: {
				fontSize: '$28'
			}
		},
	},

	defaultVariants: {
		size: 'md'
	}
})

export { container }