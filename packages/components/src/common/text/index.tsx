import { TextProps } from './types'
import * as s from './styles'
import { splitProps } from 'solid-js'

function Text(props: TextProps) {
	const [{ ...stitches }, rest] = splitProps(props, ['size', 'bold', 'italic', 'css', 'style'])

	return (
		<p class={s.container({ ...stitches })} {...rest}>
			{props.children}
		</p>
	)
}

export { Text }
