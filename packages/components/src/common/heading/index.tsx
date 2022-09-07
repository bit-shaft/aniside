import { splitProps } from 'solid-js'
import { HeadingProps } from './types'
import * as style from './styles'
import { createElement } from '@components/utils'

function Heading(props: HeadingProps) {
	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] = splitProps(props, ['size', 'italic', 'css', 'style'])

	/* ----------------------- render ----------------------- */

	return createElement<HeadingProps>(props.as || 'h1', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Heading }