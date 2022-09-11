import { createStory } from '@components/utils'
import { Avatar } from '.'
import type { AvatarProps  } from './types'

export default createStory<AvatarProps  >({
	title: 'Common/Avatar',
	argTypes: {
		size: {
			name: 'size',
			description: 'font size variants',
			control: { type: 'select', options: ['lg', 'md'] as AvatarProps ['size'][] },
			defaultValue: 'lg',
		},
		picture: {
			name: 'Picture',
			description: 'Avatar picture of the user',
			control: { type: 'text' },
			// eslint-disable-next-line max-len
			defaultValue: 'https://64.media.tumblr.com/f58ec0385954c5b0fa9e9448c9d726da/0c059b62b6e06762-40/s400x600/c6b3295a594ea2c234ccd17c51c2c245018e96a8.gif'
		}
	}
})

const Template = (args: AvatarProps ) => {
	return (
		<Avatar
			{...args}
			name="Lu guang"
		/>
	)
}

export { Template }
