import { CreateStoreProps } from './types'

function createStory<T>(props: CreateStoreProps<T>) {
	return { ...props }
}

export { createStory }