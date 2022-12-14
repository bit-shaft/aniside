const sheet_options = {
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
}

function handleCSS(key: keyof typeof sheet_options) {
	return sheet_options[key]
}

export { handleCSS }