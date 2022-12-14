import { createStory } from '@components/utils'
import { Text } from '.'
import { TextProps } from './types'

export default createStory<TextProps>({
	title: 'Common/Text',
	argTypes: {
		size: {
			name: 'size',
			description: 'font size variants',
			control: { type: 'select', options: ['lg', 'md', 'sm'] as TextProps['size'][] },
			defaultValue: 'md',
		},
		bold: {
			name: 'bold',
			description: 'leave the font with negrit styles',
			control: { type: 'boolean' },
			defaultValue: false,
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

const Template = (args: TextProps) => {
	return <Text {...args} />
}

export { Template }
