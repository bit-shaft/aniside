import { createStory } from '@components/utils'
import { Button } from '.'
import type { ButtonProps } from './types'

/* ---------------------- settings ---------------------- */

export default createStory<ButtonProps>({
	title: 'Common/Button',
	argTypes: {
		size: {
			name: 'size',
			description: 'font size variants',
			control: { type: 'select', options: ['lg', 'md', 'sm'] as ButtonProps['size'][] },
			defaultValue: 'md',
		},
		type: {
			name: 'type',
			description: 'button styles types',
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'uncollor'] as ButtonProps['type'][]
			},
			defaultValue: 'primary',
		},
		variant: {
			name: 'type',
			description: 'button styles types',
			control: {
				type: 'select',
				options: ['fill', 'transparent'] as ButtonProps['variant'][]
			},
			defaultValue: 'fill',
		},
		full: {
			name: 'full',
			description: 'covers the entire box width',
			control: { type: 'boolean' },
			defaultValue: false,
		},
		children: {
			name: 'text',
			description: 'text content',
			control: { type: 'text' },
			defaultValue: 'hello test',
		},
	}
})

/* ----------------------- render ----------------------- */

const Template = ({ ...args }: ButtonProps) => {
	return (
		<div style={{ width: '200px', height: '200px', border: '1px solid red' }}>
			<Button {...args} />
		</div>
	)
}

export { Template }
