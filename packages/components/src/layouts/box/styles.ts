import { stitches } from '@aniside/design'

const container = stitches.css({
	variants: {
		flex: {
			true: {
				display: 'flex',
			}
		},
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
				gap: '$32'
			},
		},
	}
})

export { container }