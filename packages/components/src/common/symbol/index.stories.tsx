import { createStory } from '@components/utils'
import { Symbol } from '.'
import type { SymbolProps } from './types'

export default createStory<SymbolProps>({
	title: 'Common/Symbol',
	argTypes: {
		size: {
			name: 'size',
			description: 'svg size variants',
			control: { type: 'select', options: ['lg', 'md', 'sm'] as SymbolProps['size'][] },
			defaultValue: 'md',
		},
		name: {
			name: 'name',
			description: 'icon name',
			control: { 
				type: 'select', 
				options: ['comment', 'donate', 'like'] as SymbolProps['name'][] 
			},
			defaultValue: 'like',
		}
	}
})

const Template = (args: SymbolProps) => {
	return <Symbol {...args} />
}

export { Template }
