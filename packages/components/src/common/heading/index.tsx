import { splitProps } from 'solid-js'
import { HeadingProps } from './types'
import * as style from './styles'

function Heading(props: HeadingProps) {
	const [{ ...stitches }, rest] = splitProps(props, ['size', 'italic', 'css', 'style'])

	return (
		<h1 class={style.container({ ...stitches })} {...rest}>
			{props.children}
		</h1>
	)

}

export { Heading }