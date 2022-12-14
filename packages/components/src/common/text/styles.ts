import { stitches } from '@aniside/design'

const container = stitches.css({
	variants: {
		size: {
			lg: {
				fontSize: '$16'
			},
			md: {
				fontSize: '$14'
			},
			sm: {
				fontSize: '$12'
			}
		},

		italic: {
			true: {
				fontStyle: 'italic',
			}
		},

		bold: {
			true: {
				fontWeight: '$bold',
			}
		}
	},

	defaultVariants: {
		size: 'md'
	}
})

export { container }
