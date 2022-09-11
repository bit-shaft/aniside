import { stitches } from '@aniside/design'

const container = stitches.css({
	display: 'flex',
	margin: '0 auto',

	variants: {
		direction: {
			row: {
				flexDirection: 'row',
			},
			column: {
				flexDirection: 'column',
			},
			rowReverse: {
				flexDirection: 'row-reverse',
			},
			columnReverse: {
				flexDirection: 'column-reverse',
			},
		},
    
		align: {
			start: {
				alignItems: 'flex-start',
			},
			center: {
				alignItems: 'center',
			},
			end: {
				alignItems: 'flex-end',
			},
			stretch: {
				alignItems: 'stretch',
			},
			baseline: {
				alignItems: 'baseline',
			},
		},

		justify: {
			start: {
				justifyContent: 'flex-start',
			},
			center: {
				justifyContent: 'center',
			},
			end: {
				justifyContent: 'flex-end',
			},
			between: {
				justifyContent: 'space-between',
			},
			around: {
				justifyContent: 'space-around',
			},
		},

		wrap: {
			noWrap: {
				flexWrap: 'nowrap',
			},
			wrap: {
				flexWrap: 'wrap',
			},
			wrapReverse: {
				flexWrap: 'wrap-reverse',
			},
		},

		gap: {
			4: {
				gap: '$4',
			},
			8: {
				gap: '$8',
			},
			16: {
				gap: '$16'
			},
			32: {
				gap: '$32',
			},
		},

		col: {
			1: {
				width: 'calc(100% / 12 * 1)',
			},
			2: {
				width: 'calc(100% / 12 * 2)',
			},
			3: {
				width: 'calc(100% / 12 * 3)',
			},
			4: {
				width: 'calc(100% / 12 * 4)',
			},
			5: {
				width: 'calc(100% / 12 * 5)',
			},
			6: {
				width: 'calc(100% / 12 * 6)',
			},
			7: {
				width: 'calc(100% / 12 * 7)',
			},
			8: {
				width: 'calc(100% / 12 * 8)',
			},
			9: {
				width: 'calc(100% / 12 * 9)',
			},
			10: {
				width: 'calc(100% / 12 * 10)',
			},
			11: {
				width: 'calc(100% / 12 * 11)',
			},
			fill: {
				width: '100%',
			},
		},

		row: {
			1: {
				height: 'calc(100% / 12 * 1)',
			},
			2: {
				height: 'calc(100% / 12 * 2)',
			},
			3: {
				height: 'calc(100% / 12 * 3)',
			},
			4: {
				height: 'calc(100% / 12 * 4)',
			},
			5: {
				height: 'calc(100% / 12 * 5)',
			},
			6: {
				height: 'calc(100% / 12 * 6)',
			},
			7: {
				height: 'calc(100% / 12 * 7)',
			},
			8: {
				height: 'calc(100% / 12 * 8)',
			},
			9: {
				height: 'calc(100% / 12 * 9)',
			},
			10: {
				height: 'calc(100% / 12 * 10)',
			},
			11: {
				height: 'calc(100% / 12 * 11)',
			},
			fill: {
				height: '100%',
			},
		},
    
		container: {
			true: {
				'@desktop': { maxWidth: 1200 },
				'@tablet': { maxWidth: '$full', padding: '$16' },
				'@mobile': { maxWidth: '$full', padding: '$4'}
			}
		}
	}
})

export { container }