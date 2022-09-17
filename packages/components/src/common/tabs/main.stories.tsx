/* ---------------- Utilitaries --------------- */
import { Box } from '@components/layouts/box'
import { createStory } from '@components/utils'

/* ----------------- Composers ---------------- */
import { Tabs } from '.'
import type { TabsProps } from './types'

/* -------------------------------------------- */
/* Story settings                               */
/* -------------------------------------------- */

export default createStory<TabsProps>({
	title: 'Common/Tabs',
	argTypes: {
		size: {
			name: 'Size',
			description: 'tab size variants',
			control: { type: 'select', options: ['lg', 'md', 'sm'] as TabsProps['size'][] },
			defaultValue: 'md',
		},
		options: {
			name: 'text',
			description: 'text content',
			control: { type: 'object' },
			defaultValue: [{ title: 'Tab 1', active: true }, { title: 'Tab 2' }],
		}
	},
})

/* -------------------------------------------- */
/* Stories Render                               */
/* -------------------------------------------- */

const Template = (args: TabsProps) => {
	return (
		<Box css={{ background: '$bg', padding: 20, borderRadius: '$8' }}>
			<Tabs {...args} />
		</Box>
	)
}

/* ------------------ exports ----------------- */
export { Template }
