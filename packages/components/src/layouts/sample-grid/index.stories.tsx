import { createStory } from '@components/utils'
import { SampleGrid } from '.'
import type { WrapperProps } from './stack'

/* ---------------------- settings ---------------------- */

export default createStory<WrapperProps>({
	title: 'Layouts/SampleGrid',
	argTypes: {
		flex: {
			name: 'full',
			description: 'enable flex options',
			control: { type: 'boolean' },
			defaultValue: false,
		},
		container: {
			name: 'full',
			description: 'limit the max width of wrapper',
			control: { type: 'boolean' },
			defaultValue: true,
		},
		direction: {
			description: 'The direction of the flex container',
			name: 'Direction',
			control: {
				type: 'select',
				options:
          ['column', 'columnReverse', 'row', 'rowReverse'] as WrapperProps['direction'][],
			},
		},
		justify: {
			description: 'The justification of the flex container',
			name: 'Justify',
			control: {
				type: 'select',
				options:
          ['start', 'end', 'center', 'around', 'between'] as WrapperProps['justify'][]
			},
		},
		align: {
			description: 'The alignment of the flex container',
			name: 'Align',
			control: {
				type: 'select',
				options:
          ['start', 'end', 'center', 'baseline', 'stretch'] as WrapperProps['align'][]
			},
		},
		wrap: {
			description: 'The wrapping of the flex container',
			name: 'Wrap',
			control: { type: 'select' },
			options: ['nowrap', 'wrap', 'wrapReverse'] as WrapperProps['wrap'][],
		},
		gap: {
			description: 'The gap between the flex items',
			name: 'Gap',
			control: {
				type: 'select',
				options: [4, 8, 16, 32] as WrapperProps['gap'][]
			},
		},
	}
})

/* ----------------------- render ----------------------- */

const Template = ({ ...args }: WrapperProps) => {
	return (
		<SampleGrid.Wrapper
			{...args}
			css={{ padding: '10px', width: '100vw', height: 400,  border: '1px solid red' }}
		>
			<SampleGrid.Item align="center">
        item 1
			</SampleGrid.Item>

			<SampleGrid.Item align="center">
        item 2
			</SampleGrid.Item>

			<SampleGrid.Item align="center">
        item 3
			</SampleGrid.Item>
		</SampleGrid.Wrapper>
	)
}

export { Template }
