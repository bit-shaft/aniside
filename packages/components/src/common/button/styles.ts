import { stitches, config, theme } from '@aniside/design'
import { rgba } from 'polished'

const container = stitches.css({
	color: '$text',
	fontWeight: '$medium',

	transition: 'all .2s ease-in-out',

	variants: {
		size: {
			sm: {
				height: 28,
				borderRadius: '$4',
				fontSize: '$14',

				padding: '$4'
			},

			md: {
				height: 36,
				borderRadius: '$4',
				fontSize: '$16',

				padding: '$8',
			},

			lg: {
				height: 48,
				borderRadius: '$4',
				fontSize: '$16',

				padding: '$8',
			}
		},

		type: {
			primary: {
				background: '$primary',
				boxShadow: `0px 0px 0px 2px ${config.colors.main.primary}`,

				'&:hover': {
					background: 'none',
					color: '$primary',
				}
			},

			secondary: {
				background: '$secondary',
				boxShadow: `0px 0px 0px 2px ${config.colors.main.secondary}`,

				'&:hover': {
					background: 'none',
					color: '$secondary',
				}
			},

			uncollor: {
				background: '$text',
				boxShadow: `0px 0px 0px 2px ${theme.colors.text}`,
				color: '$bg',

				'&:hover': {
					background: 'none',
					color: '$text',
				}
			}
		},

		variant: {
			fill: {},
			transparent: {
				background: 'none',
				boxShadow: 'none',
			}
		},

		full: {
			true: {
				width: '$full'
			}
		},
	},

	compoundVariants: [
		{
			type: 'primary',
			variant: 'transparent',
			css: {
				color: '$primary',

				'&:hover': {
					background: rgba(theme.colors.primary, 0.1)
				}
			}
		},
		{
			type: 'secondary',
			variant: 'transparent',
			css: {
				color: '$secondary',
        
				'&:hover': {
					background: rgba(theme.colors.secondary, 0.1)
				}
			}
		},
		{
			type: 'uncollor',
			variant: 'transparent',
			css: {
				color: '$text',
        
				'&:hover': {
					background: rgba(theme.colors.text, 0.1)
				}
			}
		},
	],

	defaultVariants: {
		size: 'md',
		type: 'primary',
		variant: 'fill',
	}
})

export { container }