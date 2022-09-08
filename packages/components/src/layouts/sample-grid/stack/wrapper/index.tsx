import { splitProps } from 'solid-js'
import { WrapperProps } from './types'
import * as style from './styles'
import { createElement } from '@components/utils'

function Wrapper(props: WrapperProps) {

	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] =
    splitProps(props, ['gap', 'justify', 'direction', 'align', 'container', 'wrap', 'css', 'style'])

	/* ----------------------- render ----------------------- */

	return createElement<WrapperProps>(props.as || 'button', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Wrapper }