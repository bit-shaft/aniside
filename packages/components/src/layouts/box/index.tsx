import { splitProps } from 'solid-js'
import { BoxProps } from './types'
import * as style from './styles'
import { createElement } from '@components/utils'

function Box(props: BoxProps) {

	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] =
    splitProps(props, ['gap', 'flex', 'justify', 'align', 'wrap', 'css', 'style'])

	/* ----------------------- render ----------------------- */
	
	return createElement<BoxProps>(props.as || 'button', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Box }