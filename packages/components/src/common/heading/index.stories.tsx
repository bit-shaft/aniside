import { createStory } from '@components/utils'
import { Heading } from '.'
import type { HeadingProps } from './types'

export default createStory<HeadingProps>({
	title: 'Common/Heading',
	argTypes: {
		size: {
			name: 'size',
			description: 'font size variants',
			control: { type: 'select', options: ['lg', 'md', 'sm'] as HeadingProps['size'][] },
			defaultValue: 'md',
		},
		italic: {
			name: 'italic',
			description: 'leave the font with italic styles',
			control: { type: 'boolean' },
			defaultValue: false,
		},
		children: {
			name: 'text',
			description: 'text content',
			control: { type: 'text' },
			defaultValue: 'hello there',
		},
	}
})

const Template = (args: HeadingProps) => {
	return <Heading {...args} />
}

export { Template }
