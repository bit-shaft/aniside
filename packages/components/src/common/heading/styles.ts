import { stitches } from '@aniside/design'

const container = stitches.css({
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

		italic: {
			true: {
				fontStyle: 'italic',
			}
		},
	},

	defaultVariants: {
		size: 'md'
	}
})

export { container }