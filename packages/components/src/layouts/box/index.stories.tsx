import { createStory } from '@components/utils'
import { Box } from '.'
import type { BoxProps } from './types'

/* ---------------------- settings ---------------------- */

export default createStory<BoxProps>({
	title: 'Layouts/Box',
	argTypes: {
		flex: {
			name: 'Flex',
			description: 'enable flex options',
			control: { type: 'boolean' },
			defaultValue: false,
		},
		direction: {
			description: 'The direction of the flex container',
			name: 'Direction',
			control: { 
				type: 'select', 
				options: 
          ['column', 'columnReverse', 'row', 'rowReverse'] as BoxProps['direction'][],
			},
		},
		justify: {
			description: 'The justification of the flex container',
			name: 'Justify',
			control: { 
				type: 'select', 
				options: ['start', 'end', 'center', 'around', 'between'] as BoxProps['justify'][] 
			},
		},
		align: {
			description: 'The alignment of the flex container',
			name: 'Align',
			control: { 
				type: 'select', 
				options: ['start', 'end', 'center', 'baseline', 'stretch'] as BoxProps['align'][] 
			},
		},
		wrap: {
			description: 'The wrapping of the flex container',
			name: 'Wrap',
			control: { type: 'select' },
			options: ['nowrap', 'wrap', 'wrapReverse'] as BoxProps['wrap'][],
		},
		gap: {
			description: 'The gap between the flex items',
			name: 'Gap',
			control: { 
				type: 'select', 
				options: [4, 8, 16, 32 ] as BoxProps['gap'][] 
			},
		},
		children: {
			name: 'Content',
			description: 'text content',
			control: { type: 'text' },
			defaultValue: 'hello test',
		},
	}
})

/* ----------------------- render ----------------------- */

const Template = ({ ...args }: BoxProps) => {
	return <Box css={{ 
		padding: '10px', 
		width: 100, 
		height: 100, 
		border: '1px solid red' 
	}} {...args} />
}

export { Template }
