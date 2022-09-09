import { createStory } from '@components/utils'
import { Profile } from '.'
import type { ProfileProps } from './types'

export default createStory<ProfileProps>({
	title: 'Common/Profile',
	argTypes: {
		size: {
			name: 'size',
			description: 'font size variants',
			control: { type: 'select', options: ['lg', 'md'] as ProfileProps['size'][] },
			defaultValue: 'lg',
		},
	}
})

const Template = (args: ProfileProps) => {
	return (
		<Profile
			{...args}
			picture="https://c.tenor.com/2pDBvfFudzwAAAAC/lu-guang-link-click.gif"
			name="Lu guang"
		/>
	)
}

export { Template }
